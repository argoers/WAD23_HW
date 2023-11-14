

<template>
    <div id="posts-area">
      <div class="post-box" v-for = "blogPost in PostList" :key="blogPost.id">
        <div class="post-header">
          <div class="post-date">{{blogPost.createTime}}</div>
        </div>
        <div class="post-text">{{blogPost.body}}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "PostComponent",
  data: function() {
    return {

    }},
  computed: {
    PostList(){
      return this.$store.state.postList
    }
  }
}
</script>

<style scoped>
  @import '../assets/index.css';
</style>