

<template>
  <div class="flex-container">
    <div class="post-box">
      <div class="post-body">
        <form action="index.html">
          <h2>Welcome To PostIt</h2><br>
          <a href="#" class="interactive-text">Create an account</a><br>
          <p>or</p>
          <p>Please sign up</p>

          <input type="email" id="email" name="email" required placeholder="Email"><br><br>
          <input type="password" id="password" name="password" required placeholder="Password"><br><br>

          <input type="submit" value="Login"><br><br>
          <a href="#" class="interactive-text">Forgot Password</a><br><br>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'SignUpView',
  components: {},
  methods: {}
}
</script>

<style scoped>
  @import '@/assets/login.css';
</style>