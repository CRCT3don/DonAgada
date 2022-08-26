<template>

<!-- DEPRECATED -->
  <HeaderUser />
  <div class= "bg-dark mt-5">
    <div class="container mt-5">
    <div class="card">
    <div class="row g-0">
      <img src="../assets/img/card/burna.png" alt="">

    </div>
    </div>
    </div>
  </div>
  <!-- <Footer /> -->
</template>

<script>
import userService from '@/services/user.service';
// import axios from 'axios';
// import axiosInstance from '@/services/axiosInstance';
import HeaderUser from "../components/HeaderUser.vue";
// import Footer from "@/components/Footer.vue";

export default {
  name: "MySingleEvent-vue",

  components: {
    HeaderUser,
    // Footer,
  },

  data() {
    return {};
  },

  computed:{
    myEvents(){
      return userService.getMyEvents().find((event) => event.uid === this.$route.params.uid)
    }
  },

  created(){
    console.log(this.myEvents)
  },
};
</script>

<style scoped>
.overlay {
  background-image: url("../assets/img/bg/LoginBg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: soft-light;
}

.logo-scoped {
  width: 150px;
}
</style>
