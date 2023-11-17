

<template>

      <div class="post-box" v-for = "blogPost in PostList" :key="blogPost.id">
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
    },
    addLike(id){
      this.$store.dispatch("addLikeAct", id)
    }
  }
}
</script>

<style scoped>
   @import '@/assets/index.css';
</style>