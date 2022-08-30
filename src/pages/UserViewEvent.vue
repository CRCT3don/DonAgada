<template>

<!-- DEPRECATED -->
  <HeaderUser />
  <div class="bg-dark">
    <div class="container pt-5">
    <div class="card mt-5">
    <div class="row g-0">
popo
    </div>
    </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import userService from '@/services/user.service';
import HeaderUser from "../components/HeaderUser.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "UserViewEvent-vue",

  components: {
    HeaderUser,
    Footer,
  },

  data(){
    return {
      service: userService.getMyEvents(),
      singleEvent: []
  }
  },

  // computed:{
  //   myEvents(){
  //     return this.service.filter(event => event.data.filter(event => event.id === this.$router.params.id)) ;
  //   },
  // },

  created(){
    this.service.then((response) => {
      // console.log(response.data.data.events)
      this.singleEvent = response.data.data.events

      // this.singleEvent.find(this.$router.params.id)

      // for(const event in this.singleEvent){
      //   if(event.id === this.$router.params.id){
      //     console.log(event.id)
      // }
      // }
    })
  },

  mounted(){
    // console.log(this.$router.params.id)
    this.singleEvent.find(this.$router.params.id)
  }
  
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
