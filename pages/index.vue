<script setup>
  const { data: product, pending, error } = await useFetch(() => 'https://www.omdbapi.com/?s=fast&apikey=713602fe&plot=short')
</script>

<template>
  <div>
    <!--<NuxtWelcome />-->
    <p v-if="pending">Fetching...</p>
    <p v-else-if="error">An error has occured {{ error }}...</p>
    <div v-else class="p-9 grid grid-cols-2 gap-14">
      <div v-for="(movie, index) in product.Search" :key="index" class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-4">
        <div class="h-auto w-1/2 rounded-3xl shadow-lg overflow-hidden">
          <nuxt-link :to="'/review/' + movie.imdbID">
            <img class="rounded-3xl shadow-lg hover:scale-105 transition-all" :src="movie.Poster" :alt="movie.Title">
          </nuxt-link>
        </div>
        <div class="flex flex-col w-1/2 space-y-4">
          <div class="flex justify-between items-start">
            <nuxt-link :to="'/review/' + movie.imdbID">
              <h2 class="text-3xl font-bold">{{movie.Title}}</h2>
            </nuxt-link>
            <div class="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
          </div>
          <div>
            <div class="text-sm text-gray-400">{{ movie.Type }}</div>
            <div class="text-lg text-gray-800">{{ movie.Year }}</div>
          </div>
          <p class=" text-gray-400 max-h-40 overflow-y-hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div class="flex text-xl font-bold text-a">
            <nuxt-link class="bg-yellow-400 font-bold rounded-xl py-2 px-4" :to="'/review/' + movie.imdbID">Rate it!</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>