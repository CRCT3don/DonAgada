<template>
  <div>
    <HeaderUser />
    <HeroUser />
    <UserPost />
    <Footer />
  </div>
</template>

<script>
import HeaderUser from "@/components/HeaderUser.vue";
import HeroUser from "../components/HeroUser.vue";
import Footer from "@/components/Footer.vue";
import UserPost from "../pages/UserPost.vue";

export default {
  name: "UserIndex-vue",

  components: {
    HeaderUser,
    HeroUser,
    Footer,
    UserPost,
  },

  setup() {
    return {};
  },
};
</script>

<style scoped></style>
