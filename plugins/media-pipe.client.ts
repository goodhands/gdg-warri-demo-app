import { TextClassifier, FilesetResolver } from '@mediapipe/tasks-text'

console.log("plugin loaded??????????")

async function createClassifier() {
	const textFiles = await FilesetResolver.forTextTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-text@latest/wasm');

	const textClassifier = await TextClassifier.createFromOptions(
		textFiles,
		{
			baseOptions: {
				modelAssetPath: `../assets/bert_classifier.tflite`
			},
			maxResults: 500
		}
	);

	console.log("Should return textClassifier: ", textClassifier)

	return textClassifier
}

export default defineNuxtPlugin(nuxtApp => {
	return {
		provide: {
			textClassifier: createClassifier()
		}
	}
})
