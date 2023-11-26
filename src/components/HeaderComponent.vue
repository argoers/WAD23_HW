<template>
  <div class="wide-box">
    <nav>
      <router-link to="/">Home</router-link>
      <div>|</div>
      <router-link to="/signup">Sign up</router-link>
    </nav>
    <div class="logo-image">
      <img id="user-logo" alt="User Logo" src="images/img.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>
@import '@/assets/styles.css';
</style>