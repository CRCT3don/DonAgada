<template>

<!-- DEPRECATED -->
  <HeaderUser />
  <div class="bg-dark py-5">
    <div class="container py-5">
      <router-link to="/" class="text-decoration-none p-4 text-white">
        &lt; Back
      </router-link>
      <div class="text-white d-none col-md-6 pt-4 m-auto">
        <p> {{myEvents.id}} </p>
        <p> {{myEvents.event_name}} </p>
      </div>
    <div class="card mt-5">
    <div class="row g-0" >


<div class="card">
<div class="">
  <div class="">
    <div
      class="card-header bg-dark bg-opacity-50 glass d-flex justify-content-center py-3"
    >
      <h5
        class="card-title text-black fw-bolder text-center"
        id="staticBackdropLiveLabel"
      >
        UPDATE EVENT
      </h5>
    </div>
    <div class="card-body bg-white py-3">
      <p class="fw-bolder theme">
        <i class="fa-solid fa-circle-info"></i>
        <span class="text-black"> Event Details</span>
      </p>
      <form class="col-md-12 px-3 scrollspy" action="">
        <div class="form-group">
          <div class="alert alert-danger" v-if="message" role="alert">
            {{ message }}
          </div>
        </div>
        <!-- <div class="row px-3"> -->
        <div class="col-md-12 mb-3 m-auto">
          <label for="event_name" class="gray-3 fs-6"
            >Event Title<span class="text-danger">*</span>
          </label>
          <input
            type="text"
            class="input-theme"
            name="event_name"
            v-model="event_name"
          />
        </div>
        <div class="col-md-12 mb-3 m-auto">
          <label for="type" class="gray-3 fs-6"
            >Event Type<span class="text-danger">*</span>
          </label>
          <select
            class="input-theme"
            v-model="type"
            placeholder="Select Option..."
          >
            <option>free</option>
            <option>paid</option>
          </select>
        </div>
        <!-- </div> -->
        <!-- <div class="row m-auto"> -->
        <div class="col-md-12 mb-3 m-auto">
          <label for="date" class="gray-3 fs-6"
            >Event Date <span class="text-danger">*</span></label
          >
          <input type="date" v-model="event_date" class="input-theme" />
        </div>
        <div class="col-md-12 mb-3 m-auto">
          <label for="time" class="gray-3 fs-6"
            >Event Time <span class="text-danger">*</span></label
          >
          <input type="time" v-model="start_time" class="input-theme" />
        </div>
        <!-- </div> -->
        <div class="col-md-12 mb-3 m-auto">
          <label for="duration" class="gray-3 fs-6"
            >Seats Available <span class="text-danger">*</span></label
          >
          <input
            type="text"
            v-model="maximum_seats"
            class="input-theme"
          />
        </div>
        <!-- <div class="col-md-12 mb-3 m-auto">
          <label for="type" class="gray-3 fs-6"
            >Event Banner <i>(image only) </i>
            <span class="text-danger">*</span>
          </label>
          <input type="file" class="form-control input-theme" />
        </div> -->
        <div class="col-md-12 mb-3 m-auto">
          <label for="type" class="gray-3 fs-6"
            >Event Location
            <span class="text-danger">*</span>
          </label>
          <input
            type="text"
            class="form-control input-theme"
            v-model="location"
          />
        </div>
      </form>
    </div>
    <div
      class="card-footer bg-dark bg-opacity-50 glass d-flex justify-content-center py-3"
    >
      <button
        type="button"
        class="button-theme"
        :disabled="loading"
        @click="onUpdateEvent"
      >
        <!-- data-bs-dismiss="modal" -->
        <span
          v-show="loading"
          class="spinner-border spinner-border-sm mx-2"
        ></span>
        <span> CREATE EVENT </span>
      </button>
    </div>
  </div>
</div>
</div>
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
import axiosInstance from '@/services/axiosInstance';

export default {
  name: "UserViewEvent-vue",

  components: {
    HeaderUser,
    Footer,
  },

  data(){
    return {
      service: userService.getMyEvents(),
      singleEvent: [],
      loading: false,
      message: '',
      event_name: '',
        type: "",
        event_date: "",
        start_time: "",
        maximum_seats: "",
        location: "",
        events_id : '',
    }
  },

  created(){
      this.service.then(response => {
      this.singleEvent = response.data.data.events
    })
  },  
  
  computed:{
    myEvents(){
      return  this.singleEvent.find(event => event.id === this.$route.params.id) ;
    },
  },

  mounted(){
    this.event_name = this.myEvents.event_name
    this.type = this.myEvents.type
    this.event_date = this.myEvents.event_date
    this.start_time = this.myEvents.start_time
    this.maximum_seats = this.myEvents.maximun_seats
    this.location = this.myEvents.location
    this.events_id = this.myEvents.id
  },

  methods:{
    onUpdateEvent() {
      this.loading = true;
      let user = JSON.parse(localStorage.getItem("user"));
      let uid = JSON.parse(localStorage.getItem("uid"));
      

      const options = {
        method: "POST",
        url: "/api/event/update",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user}`,
        },
        data: {
          event_id: this.events_id,
          user_id: uid,
          event_name: this.event_name,
          location: this.location,
          event_date: this.event_date,
          type: this.type,
          status: 'active',
          start_time: this.start_time,
          maximun_seats: this.maximun_seats,
        },
      };

      axiosInstance
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.message = response.data.status
          if(response.data.status === 'Success'){
          this.$router.replace("/userpost");
          // location.reload()
        }
      })
        .catch((error) => {
          console.error(error);
          this.message = error.response.data.message
          // location.reload(false)
          // window.stop()
          this.loading = false;
        });
    }
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
