const tf = require('@tensorflow/tfjs');
const mobilenetModule = require('@tensorflow-models/mobilenet');
const knnClassifier = require('@tensorflow-models/knn-classifier');

export default async function classification(
  fileURLs,
  types,
  setClassifieds,
  setUndecidedImgsURLs,
  setDecidedImgsURLs
) {
  let imgs = generateImgs(fileURLs);

  const classifier = knnClassifier.create();
  const mobilenet = await mobilenetModule.load();

  let undecidedImgs = [];
  let undecidedImgsURLs = [];
  let decidedImgsURLs = [];

  for (const i = 0; i < imgs.length; i++) {
    if (types[i] === 'undecided') {
      undecidedImgs.push(imgs[i]);
      undecidedImgsURLs.push(fileURLs[i]);
    } else {
      decidedImgsURLs.push(fileURLs[i]);
      const logits = mobilenet.infer(imgs[i], true);
      classifier.addExample(logits, types[i]);
    }
  }

  let classifiedResult = [];

  for (const i = 0; i < undecidedImgs.length; i++) {
    const x = tf.browser.fromPixels(undecidedImgs[i]);
    const xlogits = mobilenet.infer(x, true);
    classifier.predictClass(xlogits).then((result) => {
      classifiedResult.push({ ...result });
    });
  }

  for (let i = 0; i < classifiedResult.length; i++) {
    classifiedResult[i]['url'] = undecidedImgsURLs[i];
  }

  console.log(classifiedResult);
  setClassifieds(classifiedResult);
  setDecidedImgsURLs(decidedImgsURLs);
  setUndecidedImgsURLs(undecidedImgsURLs);
}

const generateImgs = function (fileURLs) {
  let imgs = [];
  for (const fileURL of fileURLs) {
    const img = document.createElement('img');
    img.setAttribute('src', fileURL);
    imgs.push(img);
  }
  return imgs;
};
