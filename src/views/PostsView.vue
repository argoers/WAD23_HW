<template>
  <!-- View for Posts page,
   uses HeaderComponent for header,
   posts are created based on postComponent
   Footer-component for footer
   -->
  <div class="page">
    <HeaderComponent/>
    <div class="flex-container">
      <div class="left-sidebar"></div>
      <div id="posts-area">
        <!-- For each post in store-->
          <post-component v-for = "blogPost in PostList" :key="blogPost.id" :blogPost="blogPost"/>
        <div class="button">
          <button v-on:click="resetLikes " id="button"> Reset likes </button>
        </div>
      </div>
      <div class="right-sidebar"></div>
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import PostComponent from "@/components/PostComponent.vue";
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  name: 'PostsView',
  components: {
    PostComponent,
    HeaderComponent,
    FooterComponent,
  },
  computed: {
    //Retrieve posts from the store
    PostList(){
      return this.$store.state.postList
    }
  },
  methods: {
    // Method to reset likes
    // triggers action, which performs asynchronous operation
    resetLikes: function() {
      this.$store.dispatch("resetLikesAct")
    }
  }
}
</script>

<style>
  @import '@/assets/posts.css';
</style>