<template>
  <div>
    <HeaderUser />
    <HeroUser />
    <UserEvents />
    <!-- <VisitorPost /> -->
    <Footer />
  </div>
</template>

<script>
import HeaderUser from "@/components/HeaderUser.vue";
import HeroUser from "../components/HeroUser.vue";
import Footer from "@/components/Footer.vue";
import authHeader from '@/services/auth-header';
import UserEvents from "@/pages/UserEvents.vue";
// import VisitorPost from "@/pages/VisitorPost.vue";

export default {
  name: "UserAllEvents-vue",

  components: {
    HeaderUser,
    HeroUser,
    Footer,
    UserEvents,
    // VisitorPost
},

  created() {
    return authHeader()
  },

  setup() {
    return {};
  },
};
</script>

<style scoped></style>
