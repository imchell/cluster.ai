import MLClassifier, { PRETRAINED_MODELS } from 'ml-classifier';

const mlClassifier = new MLClassifier({
  pretrainedModel: PRETRAINED_MODELS.MOBILENET,
});
