<template>
  <div>
    <table id="books">
      <tr>
        <th>Book</th>
        <th>Author</th>
      </tr>
       <tr ooks " v-bind:key="book._id">
         <td>{{ book.content }}</td>
         <td>{{ book.author }}</td>
         <td><button v-on:click="deleteBook(book._id)" class="btn mx-2">Delete</button></td>
       </tr>
    </table>
  </div>
</template>
<script>

import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
const app = Vue.createApp()
app.use(VueAxios, axios)
export default{
  data(){
    return{books:null}
  },
  methods:{
    getBooks(){
      axios.get("http://localhost:3000/books").then((result)=>{
        console.warn(result)
        this.books = result.data
      })
    },
    deleteBook(id){
      axios.delete("http://localhost:3000/books/delete/"+id).then((result)=>{
        console.warn(result)
        this.getBooks()
      })

    }
  },
  mounted(){
    this.getBooks()
  },
}
</script>
<style>
#books {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#books td, #books th {
  border: 1px solid #ddd;
  padding: 8px;
}

#books tr:nth-child(even){background-color: #f2f2f2;}

#books tr:hover {background-color: #ddd;}

#books th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #9C27B0;
  color: white;
}
</style>
