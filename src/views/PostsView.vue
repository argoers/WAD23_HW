<template>
  <div class="flex-container">
    <div class="left-sidebar"></div>
    <div id="posts-area">
      <post-component></post-component>
      <button v-on:click="resetLikes "> Reset likes </button>
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
