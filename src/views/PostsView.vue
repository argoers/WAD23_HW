<template>
  <div class="flex-container">
    <div class="left-sidebar"></div>
    <div id="posts-area">
      <post-component></post-component>
      <div class="button">
        <button v-on:click="resetLikes " id="button"> Reset likes </button>
      </div>
    </div>
    <div class="right-sidebar"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostComponent from "@/components/PostComponent.vue";
export default {
  name: 'PostsView',
  components: {
    PostComponent,
  },
  methods: {
    resetLikes: function() {
      this.$store.dispatch("resetLikesAct")
    }
  }
}
</script>

<style>
  @import '@/assets/posts.css';
</style>