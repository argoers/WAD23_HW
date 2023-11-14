<template>
  <div class="flex-container">
    <div class="left-sidebar"></div>
    <post-component></post-component>

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
  }
}
</script>
