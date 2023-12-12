<template>
  <div class="wide-box">
    <nav>
      <router-link to="/">Home</router-link>
      <div>|</div>
      <router-link to="/signup">Sign up</router-link>
    </nav>
    <div class="logo-image">
      <a v-if="isAuthenticated" @click="logout()">Logout</a>
    </div>
  </div>
</template>

<script>
import auth from "@/auth";
export default {
  name: "HeaderComponent",
  computed: {
    isAuthenticated() {
      return auth.user.authenticated;
    }
  },
  methods:{
    logout() {
      fetch("http://localhost:3000/logout", {
        credentials: 'include', //  Don't forget to specify this if you need cookies
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            console.log('jwt removed');
            this.$router.push("/login");
            //location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error logout");
          });
    },
  }
}
</script>

<style scoped>
@import '@/assets/styles.css';
</style>