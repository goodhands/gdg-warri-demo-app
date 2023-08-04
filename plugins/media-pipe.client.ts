import { TextClassifier, FilesetResolver } from '@mediapipe/tasks-text'

async function createClassifier() {
	const textFiles = await FilesetResolver.forTextTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-text@latest/wasm');

	const textClassifier = await TextClassifier.createFromOptions(
		textFiles,
		{
			baseOptions: {
				modelAssetPath: `/bert_classifier.tflite`
			},
			maxResults: 500
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
