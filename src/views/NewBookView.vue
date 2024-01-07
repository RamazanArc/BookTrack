<template>
  <section>
    <form>
      <div>
        <label for="content">Book Name:</label>
        <input type="text" name="content" class="input-style" v-model="content">
      </div>
      <div>
        <label for="author">Author Name:</label>
        <input type="text" name="author" class="input-style" v-model="author">
      </div>
      <button class="btn mx-2" v-on:click="setPost()">Add a Book</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {content: '', author: ''}
  },
  methods: {
    async setPost() {
        let result = await axios.post("http://localhost:3000/books/new",{
          content: this.content,
          author:this.author,
        })
      console.log(result)
    }
  }
}
</script>

<style>
html,body{margin: 0;padding: 0}
section{height: 100vh;display: grid;justify-items: center;padding-top: 40px}
div{margin: 24px auto}
label{font-weight: bolder;display: block;margin-bottom: 4px}
.input-style {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #555;
  outline: none;
}

.input-style:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}


</style>