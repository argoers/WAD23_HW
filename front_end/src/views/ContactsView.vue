<template>
  <div class="page-container">
    <Header/>
    <div class="post-box">
      <h3>Contacts</h3>
      <div>E-mail: info@endlesswork.com</div>
      <div>Address: 23 Neverending Str, Tartu, 50512</div>

      <h3>Personal</h3>
      <div>Lead Graphical Designer: Argo Ers</div>
      <div>Lead Data Engineer: Kaur Veere</div>
      <div>Lead Software Engineer: Heigo Ers</div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/HeaderComponent.vue';
import Footer from '@/components/FooterComponent.vue';
export default {
  name: 'ContactsView',
  data: function () {
    return {
    }
  },
  components: {
    Header,
    Footer,
  },
  methods: {

  }
}
</script>

<style>
@import '@/assets/index.css';
</style>