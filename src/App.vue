<script setup>
import PostComponent from './components/PostComponent.vue'
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/signup">Sign up</router-link>
  </nav>
  <router-view></router-view>
</template>

<style>

</style>