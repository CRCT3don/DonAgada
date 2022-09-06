<template>
  <!-- DEPRECATED -->
  <HeaderUser />
  <div class="bg-dark mt-5">
    <div class="container mt-5">
      <div class="card">
        <div class="row g-0">
          <input v-model="event_name" />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import HeaderUser from "../components/HeaderUser.vue";
import Footer from "@/components/Footer.vue";
import axiosInstance from "@/services/axiosInstance";
import userService from "@/services/user.service";

export default {
  name: "UpdateEvent-vue",

  components: {
    HeaderUser,
    Footer,
  },

  data() {
    return {
      event_name: "",
      type: "",
      event_date: "",
      start_time: "",
      maximum_seats: "",
      location: "",
      loading: false,
      message: "",
    };
  },

  computed: {
    myEvents() {
      return userService
        .getMyEvents()
        // .find((event) => event.uid === this.$route.params.uid);
    },
  },

  created() {
    (this.event_name = "ssss"), console.log(this.myEvents);
  },

  methods: {
    onCreateEvent() {
      console.log(this.event_name, this.type);
      this.loading = true;
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(user);

      const options = {
        method: "POST",
        url: "/api/event/update",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user}`,
        },
        data: {
          event_name: this.event_name,
          type: this.type,
          event_date: this.event_date,
          start_time: this.start_time,
          maximum_seats: this.maximum_seats,
          location: this.location,
        },
      };

      axiosInstance
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.$router.replace("/userpost");
        })
        .catch((error) => {
          console.error(error);
          this.loading = false;
        });
    },
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
