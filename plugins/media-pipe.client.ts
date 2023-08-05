import { TextClassifier, FilesetResolver } from '@mediapipe/tasks-text'
async function createClassifier() {
	const wasmPath = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-text@latest/wasm'

	const textFiles = await FilesetResolver.forTextTasks(wasmPath);

	const textClassifier = await TextClassifier.createFromOptions(
		textFiles,
		{
			baseOptions: {
				modelAssetPath: `/bert_classifier.tflite`
			},
			maxResults: 5,
			scoreThreshold: 0.4
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
