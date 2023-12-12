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
        <div class="post-box">
          <div class="post-header">
             A post
            <div class="post-date">{{parseDate}}</div>
          </div>
          <input class="post-text" v-model="this.post.body">
          <div>
            <button class="button" v-on:click="this.updatePost()">Update</button>
            <button class="button" v-on:click="this.deletePost()">Delete</button>
          </div>
        </div>
      </div>
    <div class="right-sidebar"></div>
  </div>
  <FooterComponent/>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  name: 'SelectedPostView',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data: function() {
    return {
      id: "",
      post: {
        post_id: "",
        user_id: "",
        create_time: "2023-12-01",
        body: ""
      }
    };
  },
  computed: {
        parseDate(){
          const date = new Date(this.post.create_time);
          return new Intl.DateTimeFormat("en-US", { year: "numeric",
            month: "short",
            day: "numeric"}).format(date);
        }
  },
  methods: {
    fetchPost(id) {
      // fetch one post with the specied id (id)
      fetch(`http://localhost:3000/posts/${id}`)
          .then((response) => response.json())
          .then((data) => (this.post = data))
          .catch((err) => console.log(err.message));
    },

    deletePost(){
      // using Fetch - delete method - delets a specific post based on the passed id
      fetch(`http://localhost:3000/posts/${this.post.post_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },})
          .then(response => {this.$router.push("/")})
          .catch((e) => {console.log(e);}
          );
    },

    updatePost(id){
      console.log(this.post.body)
      console.log(this.post.post_id)
      fetch(`http://localhost:3000/posts/${this.post.post_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
          .then((response) => {
            console.log(response.data);
            //this.$router.push("/apost/" + this.post.id);
            // We are using the router instance of this element to navigate to a different URL location
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
          });
    }
    // Method to reset likes
    // triggers action, which performs asynchronous operation
    //resetLikes: function() {
    //  this.$store.dispatch("resetLikesAct")
    //}
  },

  mounted() {
    // call fetchPosts() when this element (AllPosts) mounts
    this.fetchPost(this.$route.params.id);
    console.log("mounted");
  },
}
</script>

<style>
@import '@/assets/index.css';
</style>