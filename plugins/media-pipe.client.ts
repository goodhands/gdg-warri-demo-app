import { TextClassifier, FilesetResolver } from '@mediapipe/tasks-text'
async function createClassifier() {
	const wasmPath = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-text@latest/wasm'

	const textFiles = await FilesetResolver.forTextTasks(wasmPath);

	const textClassifier = await TextClassifier.createFromOptions(
		textFiles,
		{
			baseOptions: {
				modelAssetPath: `https://storage.googleapis.com/mediapipe-models/text_classifier/bert_classifier/float32/latest/bert_classifier.tflite`
			},
			maxResults: 5
		}
	);

	return textClassifier
}

export default defineNuxtPlugin(nuxtApp => {
	return {
		provide: {
			textClassifier: createClassifier()
		}
	}
})
