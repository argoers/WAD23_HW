<template>
  <div class="wide-box">
    <nav>
      <router-link to="/">Home</router-link>
      <div>|</div>
      <router-link to="/contacts">Contacts</router-link>
    </nav>
  </div>
</template>

<script>
import auth from "@/auth";
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>
@import '@/assets/styles.css';
</style>