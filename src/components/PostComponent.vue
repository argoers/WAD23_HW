<template>
  <div class="post-box">
    <div class="post-header">
      <div class="post-date">{{blogPost.createTime}}</div>
      <img :src="defaultImagePath+blogPost.id+'.png'" @error="profileImageLoadError" >
    </div>
    <img v-if="blogPost.contentImagePath !== null" class="post-image" :src="defaultImagePath+blogPost.contentImagePath">
    <p class="post-text">{{blogPost.body}}</p>
    <div><button class="likeButton" v-on:click="addLike(blogPost.id) "><img class="likeIcon" :src="defaultImagePath.concat('like.png')"></button>
      <div class="likeNumber">{{blogPost.likes}} likes</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  props: {
    //Object of the post that is passed from View
    blogPost: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      defaultImagePath: "./images/"
    }},
  methods:{
    //Method to catch that image file does not exist
    profileImageLoadError(e){
      e.target.src ='/images/img.png'
    },
    // Method to add like
    // triggers action, which performs asynchronous operation
    addLike(id){
      this.$store.dispatch("addLikeAct", id)
    }
  }
}
</script>

<style scoped>
   @import '@/assets/index.css';
</style>