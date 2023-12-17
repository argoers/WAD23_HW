<template>
  <div class="post-box">
    <div class="post-header">
      <div class="post-date">{{parseDate(blogPost.create_time)}}</div>
    </div>
    <p class="post-text">{{blogPost.body}}</p>
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
    parseDate(timeString){
      console.log(timeString)
      const date = new Date(timeString)
      return new Intl.DateTimeFormat("en-US", { year: "numeric",
        month: "short",
        day: "numeric"}).format(date);
    }
  }
}
</script>

<style scoped>
   @import '@/assets/index.css';
</style>