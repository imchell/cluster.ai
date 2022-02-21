const tf = require('@tensorflow/tfjs');
const mobilenetModule = require('@tensorflow-models/mobilenet');
const knnClassifier = require('@tensorflow-models/knn-classifier');

export default async function classification(
  fileURLs,
  types,
  setClassifieds,
  setUndecidedImgsURLs,
  setDecidedImgsURLs,
  setPending,
  setTaskFinished,
  setDecidedImgsTypes,
  setError
) {
  setPending(true);
  let imgs = generateImgs(fileURLs);

  const classifier = knnClassifier.create();
  const mobilenet = await mobilenetModule.load();

  let undecidedImgs = [];
  let undecidedImgsURLs = [];
  let decidedImgsURLs = [];
  let decidedTypes = [];

  for (const i = 0; i < imgs.length; i++) {
    if (types[i] === 'undecided') {
      undecidedImgs.push(imgs[i]);
      undecidedImgsURLs.push(fileURLs[i]);
    } else {
      decidedImgsURLs.push(fileURLs[i]);
      decidedTypes.push(types[i]);
      const logits = mobilenet.infer(imgs[i], true);
      classifier.addExample(logits, types[i]);
    }
  }

  let classifiedResult = [];
  let classifierPromise = [];

  for (const i = 0; i < undecidedImgs.length; i++) {
    const x = tf.browser.fromPixels(undecidedImgs[i]);
    const xlogits = mobilenet.infer(x, true);
    classifierPromise.push(classifier.predictClass(xlogits));
  }

  Promise.all(classifierPromise)
    .then((results) => {
      for (const result of results) {
        classifiedResult.push({ ...result });
      }
      console.log(classifiedResult);
      setClassifieds(classifiedResult);
      setDecidedImgsURLs(decidedImgsURLs);
      setDecidedImgsTypes(decidedTypes);
      setUndecidedImgsURLs(undecidedImgsURLs);
      console.log('success');
      setPending(false);
      setTaskFinished(true);
    })
    .catch((e) => {
      console.log(e);
      setError(true);
    });
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
