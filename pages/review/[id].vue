<script setup>
	import { ref } from 'vue';

	const route = useRoute()
  	const { data: movie, pending, error } = await useFetch(() => 'http://www.omdbapi.com/?i=' + route.params.id + '&apikey=713602fe')


	const formData = ref({
		comment: '',
	});

	const rate = (event) => {
		event.preventDefault();
		// Handle form submission here, e.g., send data to the server.

		// Pass comment to MediaPipe and get the sentiment
		// Store comment and sentiment in localstorage
		// Display all ratings from localstorage
		console.log(formData.value);
	};
</script>

<template>
  <div>
    <p v-if="pending">Fetching...</p>
    <p v-else-if="error">An error has occurred {{ error }}...</p>
    <div v-else class="p-9 gap-14">
		<div class="bg-white justify-center shadow-lg border-gray-100 max-h-100 border sm:rounded-3xl p-8 flex space-x-10">
			<div class="h-auto w-1/3 overflow-visible">
				<nuxt-link to="/" class="bg-yellow-400 text-xs font-bold inline-block rounded-xl mb-4 py-1 px-2">&lt; Back</nuxt-link>
				<img class="rounded-3xl shadow-lg hover:scale-105 transition-all" :src="'https://img.omdbapi.com/?apikey=713602fe&i=' + route.params.id + '&h=1000'" :alt="movie.Title">
			</div>
			<div class="flex flex-col w-1/3 space-y-4">
				<div class="flex justify-between items-start">
					<h2 class="text-3xl font-bold">{{movie.Title}}</h2>
					<div class="bg-yellow-400 font-bold rounded-xl p-2">{{ movie.imdbRating }}</div>
				</div>
				<div>
					<div class="text-sm text-gray-400">{{ movie.Type }}</div>
					<div class="text-lg text-gray-800">{{ movie.Year }}</div>
				</div>
				<p class=" text-gray-400 max-h-40 overflow-y-hidden">
					{{ movie.Plot }}
				</p>
				<p class=" text-gray-400 max-h-40 overflow-y-hidden">
					<span class="text-gray-600">Starring:</span> {{ movie.Actors }}
				</p>
				<p class=" text-gray-400 max-h-40 overflow-y-hidden">
					<span class="text-gray-600">Language:</span> {{ movie.Language }}, <span class="text-gray-600">Genre:</span> {{ movie.Genre }}
				</p>
				<form @submit="rate">
					<div class="mb-2">
						<textarea class="mt-1 px-3 py-2
										bg-white border shadow-sm
										border-slate-300 placeholder-slate-400
										focus:outline-none focus:border-sky-500
										focus:ring-sky-500 block w-full
										rounded-md sm:text-sm focus:ring-1"
									name=""
									id=""
									v-model="formData.comment"
									cols="20"
									rows="7"></textarea>
					</div>
					<button class="bg-yellow-400 font-bold rounded-xl py-2 px-4" type="submit">Rate it!</button>
				</form>
			</div>
			<hr>
			<!-- Comment Section -->
			<div class="mt-4">
				<h3 class="text-lg font-semibold mb-2">Ratings</h3>
				<div class="bg-white p-4 shadow rounded-lg">
					<!-- Single Comment -->
					<div class="mb-4">
						<h4 class="text-gray-700 font-semibold">John Doe</h4>
						<p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dolor ac eros blandit ultrices.</p>
					</div>
				</div>
			</div>
		</div>
    </div>
  </div>
</template>

<style scoped>

</style>