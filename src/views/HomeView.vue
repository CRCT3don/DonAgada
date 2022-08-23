<template>
  <div>
  <Header />
    <HeroLanding />
    <VisitorPost />
    <Footer />
  </div>
</template>

<script>
  import HeroLanding from '../components/HeroLanding.vue'
  import VisitorPost from '../pages/VisitorPost.vue'
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "HomeView",

  components: {
    HeroLanding,
    VisitorPost,
    Header,
    Footer
},

  setup() {
    return {};
  },
};
</script>

<style scoped>

</style>
