<template>
  <div class="home">
    <div class="mx-auto max-w-screen-lg">
      <div class="flex items-center flex-col justify-center">
        <div class="btn" @click="$store.commit('GetRandomBook')">Get Random Book</div>
        <p
            class="mb-6 my-10 text-2xl text-center text-gray-500"
            v-if="typeof $store.state.book._id != 'undefined'">
          <span>"{{ $store.state.book.content }}"</span><br>
          <span class="text-gray-400">- {{ $store.state.book.author }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>


export default {

}
</script>
