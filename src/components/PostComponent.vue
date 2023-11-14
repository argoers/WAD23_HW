

<template>
    <div id="posts-area">
      <div class="post-box" v-for = "blogPost in PostList" :key="blogPost.id">
        <div class="post-header">
          <div class="post-date">{{blogPost.createTime}}</div>
          <img :src="defaultImagePath+blogPost.id+'.png'" @error="profileImageLoadError" >
        </div>
        <img v-if="blogPost.contentImagePath !== null" class="post-image" :src="defaultImagePath+blogPost.contentImagePath">
        <p class="post-text">{{blogPost.body}}</p>
        <button class="likeButton"><img class="likeIcon" :src="defaultImagePath.concat('like.png')"></button>
      </div>
    </div>
</template>

<script>
export default {
  name: "PostComponent",
  data: function() {
    return {
      defaultImagePath: "./images/"

    }},
  computed: {
    PostList(){
      return this.$store.state.postList
    }
  },
  methods:{
    profileImageLoadError(e){
      e.target.src ='/images/img.png'
    }
  }
}
</script>

<style scoped>
   @import '@/assets/index.css';
</style>