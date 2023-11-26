<template>
  <Header/>
  <div class="post-box">
      <form class="signup-body">
        <div class="signup-column">
          <label>Email</label>
          <label id="password-label">Password</label>
        </div>
        <div class="signup-column">
          <input id="email" placeholder="Email">
          <input id="password" v-model="password" v-on:change="checkPassword" type="password" placeholder="Password">
        </div>
        <div class="button">
          <button @click="checkPassword" id="signup-button">Sign up</button>
        </div>
        <div v-if="showAlert" class="alert"><p>
          <b>Password is not valid, please check the following conditions:</b><br>
          • The password should be of a specific length (at least 8 chars and less than 15 chars).<br>
            • Includes at least one uppercase alphabet character.<br>
            • Includes at least two lowercase alphabet characters.<br>
            • Includes at least one numeric value.<br>
            • It should start with an uppercase alphabet.<br>
            • It should include the character “_”</p>
        </div>
      </form>
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/HeaderComponent.vue';
import Footer from '@/components/FooterComponent.vue';
export default {
  name: 'SignUpView',
  data: function () {
    return {
      password: '',
      showAlert: false
    }
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    checkPassword: function () {
      //Check if password has length from 8 to 15 chars
      if (this.password.length < 8 || this.password.length > 15) {
        this.showAlert = true;
        return
      }

      let hasUpperCaseLetter = false;
      let lowerCaseLetterCount = 0;
      let hasNumericValue = false;
      let hasUnderscoreChar = false;

      for (let i = 0; i < this.password.length; i++) {
        //Check if password contains uppercase letter
        if (this.password.charAt(i) === this.password.charAt(i).toUpperCase() && this.password.charAt(i) !== this.password.charAt(i).toLowerCase())
          hasUpperCaseLetter = true;
        if (i===0){
          //Check it starts with uppercase letter
          if(hasUpperCaseLetter ===false){
            this.showAlert = true;
            return;
          }
          else
            continue;
        }
        //Check that it has at least to lowercase letters
        if (this.password.charAt(i) !== this.password.charAt(i).toUpperCase() && this.password.charAt(i) === this.password.charAt(i).toLowerCase()){
          lowerCaseLetterCount +=1;
          continue;
        }
        //Check that it has numeric value
        if (!isNaN(parseInt(this.password.charAt(i)))){
          hasNumericValue = true;
          continue;
        }
        //Check that it has underscore
        if (this.password.charAt(i) === '_')
          hasUnderscoreChar =true;
      }

      if (!hasUpperCaseLetter || lowerCaseLetterCount <2 || !hasNumericValue || !hasUnderscoreChar) {
        this.showAlert = true;
        return;
      }
      this.showAlert=false;
    }
  }
}
</script>

<style scoped>
  @import '@/assets/login.css';
</style>