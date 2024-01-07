import { createStore } from 'vuex'

export default createStore({
  state: {
    book:{},
    books: []
  },
  mutations: {
    GetRandomBook (state){
      fetch("http://localhost:3000/books/random")
          .then(res=>res.json())
          .then(data=>{
            if (state.book._id !== data._id){
              state.book = data;
            }else {
                this.commit('GetRandomBook');
            }
          })
    },
    GetAllBooks (state) {
        fetch("http://localhost:3000/books")
            .then(res=>res.json())
            .then(data=>{
                state.books = data;
            });
    },

  },
    getters: {
      GetSpecificBook: state => id =>{
          return state.books.filter(b => b._id === id)[0];
      }
    }
})
