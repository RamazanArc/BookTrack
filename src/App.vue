<template>
  <div class="p-3">
    <div class="mx-auto max-w-screen-lg flex items-center justify-center">
      <router-link to="/" class="mx-2 btn">Home</router-link>
      <router-link to="/new" class="mx-2 btn">New Book</router-link>
      <router-link to="/library" class="mx-2 btn">Library</router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
import {useStore} from "vuex";
import {onMounted} from "vue";

export default {
  setup() {
    const store = useStore();

    onMounted(()=> {
      store.commit('GetAllBooks');
    })

  }
}
</script>