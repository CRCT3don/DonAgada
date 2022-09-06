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
    Footer,
},

computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },

  created(){
    if(this.loggedIn){
      this.$router.replace('/userpost')
    }
  },

  setup() {
    return {};
  },
};
</script>

<style scoped>

</style>
