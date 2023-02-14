const app = Vue.createApp({
  data() {
    return { 
      userscopia:[],
      users: [],
      userInput: '',
      passwordInput: ''
    }
  },
  methods: {
    async getUsers() {
      const rest = await fetch('https://randomuser.me/api/?results=5');
      const data = await rest.json();
      console.log(data);
      this.users = data.results
      this.users = data.results
      console.log(this.users);
    },
    signIn(e) {

      console.log(this.users);
      this.users.forEach(element => {
          console.log(element);
          if (element.login.username == this.userInput && element.login.password == this.passwordInput) {
            location.href = '../tabla.html'
          }
      });      
      
    },
    eliminar(){
     this.userscopia 
    }
  },
  async mounted() {

  },
  created() {
    this.getUsers()
  },
});
app.mount('#myApp');