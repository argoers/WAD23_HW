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
            <input id="email" v-model="email" placeholder="Email" >
            <input id="password" v-model="password" type="password"  placeholder="Password">
          </div>
          <div class="button">
            <button @click="SignUp" id="signup-button">Sign up</button>
          </div>
          <div v-if="showAlert" class="alert"><p>
            <b>User already exists</b></p>
          </div>
        </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/HeaderComponent.vue';
import Footer from '@/components/FooterComponent.vue';
export default {
  name: 'SignUpView',
  data: function () {
    return {
      password: '',
      email: '',
      showAlert: false
    }
  },
  components: {
    Header,
    Footer,
  },
  methods: {


    SignUp: function(){

        var data = {
          email: this.email,
          password: this.password
        };
        // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
        fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
        })
            .then((response) => {
              if (response.status !== 201) {
                this.showAlert = true;
              }
              else{
                this.showAlert = false;
              }
              return response.json()}
            )
            .then((data) => {
              console.log(data);
              if(!this.showAlert){
                this.$router.push("/");
              }
            })
            .catch((e) => {
              console.log(e);
              console.log("error");
            });
      }
    }

}
</script>

<style scoped>
  @import '@/assets/login.css';
</style>