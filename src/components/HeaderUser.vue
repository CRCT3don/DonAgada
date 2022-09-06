<template>
  <header>
  <nav class="navbar navbar-expand-md glass bg-opacity-50 fixed-top navbar-light bg-light">
      <div class="container-fluid">
      <router-link class="navbar-brand" to="/"> <img src="../assets/img/logoIcon/eventXLogo.png" alt="" class="img-fluid logo-scope"> </router-link>
      <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav ms-auto mt-2 bg-dark bg-opacity-25 px-4 mx-3 mt-lg-0">
          <li class="nav-item active">
            <router-link class="nav-link gray-4" to="/">Home <span class="visually-hidden">(current)</span></router-link>
          </li>
          <li class="nav-item dropdown visually hidden">
            <a class="nav-link dropdown-toggle gray-4" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Explore Events</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <router-link to="/userpost" class="dropdown-item gray-4" >My Events</router-link>
              <router-link to="/userview" class="dropdown-item gray-4">All Events</router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/printinvoice" class="nav-link gray-4">Print Invoice</router-link>
          </li>
        </ul>
        <div class="d-flex justify-content-between align-items-center my-2 my-lg-0">
    
        <button class="button-theme-2 mx-1" type="button" data-bs-toggle="modal" data-bs-target="#createEvent"> <i class="fa-solid fa-calendar-days ms-w1 mx-1"></i>  CREATE EVENT </button>
          <div class="nav-item dropdown ">
            <router-link class="nav-link dropdown-toggle gray-4" to="/" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img src="../assets/img/logoIcon/avatar.png" alt="" class="img-fluid avatar"></router-link>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <button class="dropdown-item gray-4" @click="handleSignOut">SignOut</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <CreateEventModal />
  </header>
</template>

<script>
import CreateEventModal from "@/components/CreateEventModal.vue";

export default {
  name: "HeaderUser-vue",

  components: {
    CreateEventModal,
  },

  methods: {
     handleSignOut(){
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
      }
      }
    }
  

 
</script>

<style scoped>
  .logo-scope{
    width: 80px;
}

  .avatar{
    width: 40px;
}
</style>
