<template>
  <div class="page-container">
    <Header/>
    <div class="post-box">
      <form class="signup-body">
        <div id="header">Add Post</div>
        <div class="signup-column">
          <label>Body</label>
        </div>
        <div class="signup-column">
          <input id="body" v-model="body" placeholder="body" >
        </div>
        <div class="button">
          <button @click="AddPost">Add Post</button>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/HeaderComponent.vue';
import Footer from '@/components/FooterComponent.vue';
export default {
  name: 'SignUpView',
  data: function () {
    return {
      body: ""
    }
  },
  components: {
    Header,
    Footer,
  },
  methods: {

    AddPost: function(){

        // Get timestamp
        var currentDate = new Date();
        var currentDay = currentDate.getDate();
        var currentMonth = currentDate.getMonth() + 1;
        var currentYear = currentDate.getFullYear();
        var data = {
          user_id: null,
          create_time: currentDay+"-"+currentMonth+"-"+currentYear,
          body: this.body
        };
        // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
        fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              this.$router.push("/");
            })
            .catch((e) => {
              console.log(e);
              console.log("error");
            });
      }
    }
}
</script>

<style scoped>
@import '@/assets/login.css';
</style>