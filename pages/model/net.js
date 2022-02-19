const tf = require('@tensorflow/tfjs');
const mobilenetModule = require('@tensorflow-models/mobilenet');
const knnClassifier = require('@tensorflow-models/knn-classifier');

export const classification = async function (fileURLs, types) {
  let imgs = generateImgs(fileURLs);

  const classifier = knnClassifier.create();
  const mobilenet = await mobilenetModule.load();

  console.log('start');
  console.log(imgs);

  let undecidedImgs = [];

  for (const i = 0; i < imgs.length; i++) {
    if (types[i] === 'undecided') {
      undecidedImgs.push(imgs[i]);
    } else {
      const logits = mobilenet.infer(imgs[i], true);
      classifier.addExample(logits, types[i]);
    }
  }

  console.log('success');
  console.log('predict');

  for (const i = 0; i < undecidedImgs.length; i++) {
    const x = tf.browser.fromPixels(undecidedImgs[i]);
    const xlogits = mobilenet.infer(x, true);
    console.log('Predictions:');
    console.log(classifier.predictClass(xlogits));
  }
};

const generateImgs = function (fileURLs) {
  let imgs = [];
  for (const fileURL of fileURLs) {
    const img = document.createElement('img');
    img.setAttribute('src', fileURL);
    imgs.push(img);
  }
  return imgs;
};
