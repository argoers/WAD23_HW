<template>
  <div class="page-container">
    <Header/>
    <div class="post-box">
      <form class="signup-body">
        <div class="signup-column">
          <label>Email</label>
          <label id="password-label">Password</label>
        </div>
        <div class="signup-column">
          <input id="email" v-model="email" placeholder="Email">
          <input id="password" v-model="password" placeholder="Password">
        </div>
        <div class="button">
          <button @click="LogIn" id="login-button">Login</button> or <button @click="router().push('/signup')" id="signup-button">Sign up</button>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/HeaderComponent.vue';
import Footer from '@/components/FooterComponent.vue';
import router from "@/router";
export default {
  name: 'LoginView',
  data: function () {
    return {
      password: '',
      email: "",
      userId: ""
    }
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    router() {
      return router
    },
    LogIn() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include', //  Don't forget to specify this if you need cookies
        body: JSON.stringify(data),
      })
          .then(async (response) => {
            // If response is not good
            console.log(response.status)
            if (response.status !== 201){
              const consoleTxt = await response.json();
              throw new Error(consoleTxt.error);
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            this.userId = data.user_id
            this.router().push("/");
          })
          .catch(e => {
            console.log(e);
          });
    },
  },
}
</script>

<style scoped>
@import '@/assets/login.css';
</style>