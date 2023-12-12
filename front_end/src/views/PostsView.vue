<template>
  <!-- View for Posts page,
   uses HeaderComponent for header,
   posts are created based on postComponent
   Footer-component for footer
   -->
    <HeaderComponent/>
    <div class="flex-container">
      <div class="left-sidebar"></div>
      <div id="posts-area">
        <!-- For each post in store-->
          <post-component v-for = "blogPost in posts" :blogPost="blogPost" @click="goToPostPath(blogPost.post_id)"/>
      </div>
      <div class="button">
        <button @click="goToAddPost()"> Add Post </button>
      </div>
      <div class="button">
        <button @click="deleteAllPosts()"> Delete All Posts </button>
      </div>
      <div class="right-sidebar"></div>
    </div>
    <FooterComponent/>
</template>

<script>
// @ is an alias to /src
import PostComponent from "@/components/PostComponent.vue";
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import router from "@/router";
export default {
  name: 'PostsView',
  components: {
    PostComponent,
    HeaderComponent,
    FooterComponent,
  },
  data: function() {
    return {
      posts: [],
    };
  },
  computed: {
    //Retrieve posts from the store
    PostList(){
      return this.$store.state.postList
    }
  },
  methods: {
    router() {
      return router
    },
    goToPostPath(postId){
      this.router().push('/posts/'+postId)
    },
    goToAddPost(){
      this.router().push("/addpost");
    },
    deleteAllPosts() {
      // using Fetch - delete method - delets a specific post based on the passed id
      fetch(`http://localhost:3000/posts`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },})
          .then(response => {this.fetchPosts()})
          .catch((e) => {console.log(e);}
          );
    },
    fetchPosts() {
      fetch(`http://localhost:3000/posts/`)
          .then((response) => response.json())
          .then((data) => (this.posts = data))
          .catch((err) => console.log(err.message));

    },
//    fetchPostIDs() {
//      fetch(`http://localhost:3000/api/post_ids/`)
//          .then((response) => response.json())
//          .then((data) => (this.posts = data))
//          .catch((err) => console.log(err.message));
//    },

    // Method to reset likes
    // triggers action, which performs asynchronous operation
    resetLikes: function() {
      this.$store.dispatch("resetLikesAct")
    }
  },

  mounted() {
    // call fetchPosts() when this element (AllPosts) mounts
    this.fetchPosts();
    console.log("mounted");
  },
}
</script>

<style>
  @import '@/assets/index.css';
</style>