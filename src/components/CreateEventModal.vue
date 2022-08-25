<template>
  <!-- MODAL CONTENT -->

  <div
    class="modal fade"
    id="createEvent"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabdindex="-1"
    aria-labelledby="staticBackdropLiveLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div
          class="modal-header bg-dark bg-opacity-50 glass d-flex justify-content-center py-3"
        >
          <h5
            class="modal-title text-black fw-bolder text-center"
            id="staticBackdropLiveLabel"
          >
            CREATE EVENT
          </h5>
        </div>
        <div class="modal-body bg-white height-reduced overflow-y-scroll py-3">
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
                v-model="user.event_name"
              />
            </div>
            <div class="col-md-12 mb-3 m-auto">
              <label for="type" class="gray-3 fs-6"
                >Event Type<span class="text-danger">*</span>
              </label>
              <select
                class="input-theme"
                v-model="user.type"
                placeholder="Select Option..."
              >
                <option>Free</option>
                <option>Paid</option>
              </select>
            </div>
            <!-- </div> -->
            <!-- <div class="row m-auto"> -->
            <div class="col-md-12 mb-3 m-auto">
              <label for="date" class="gray-3 fs-6"
                >Event Date <span class="text-danger">*</span></label
              >
              <input
                type="date"
                v-model="user.event_date"
                class="input-theme"
              />
            </div>
            <div class="col-md-12 mb-3 m-auto">
              <label for="time" class="gray-3 fs-6"
                >Event Time <span class="text-danger">*</span></label
              >
              <input
                type="time"
                v-model="user.start_time"
                class="input-theme"
              />
            </div>
            <!-- </div> -->
            <div class="col-md-12 mb-3 m-auto">
              <label for="duration" class="gray-3 fs-6"
                >Seats Available <span class="text-danger">*</span></label
              >
              <input
                type="number"
                v-model="user.maximum_seats"
                class="input-theme"
              />
            </div>
            <div class="col-md-12 mb-3 m-auto">
              <label for="type" class="gray-3 fs-6"
                >Event Banner <i>(image only) </i>
                <span class="text-danger">*</span>
              </label>
              <input type="file" class="form-control input-theme" />
            </div>
            <div class="col-md-12 mb-3 m-auto">
              <label for="type" class="gray-3 fs-6"
                >Event Location
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control input-theme"
                v-model="user.location"
              />
            </div>
          </form>
        </div>
        <div
          class="modal-footer bg-dark bg-opacity-50 glass d-flex justify-content-center py-3"
        >
          <button type="button" class="button-danger" data-bs-dismiss="modal">
            CANCEL
          </button>
          <button
            type="button"
            class="button-theme" :disabled="loading"
            @click.prevent="onCreateEvent"
          >
          <span v-show="loading" class="spinner-border spinner-border-sm mx-2"></span>
           <span> CREATE EVENT </span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL END -->
</template>

<script>
import CreateEventMixins from "@/mixins/CreateEventMixins";
import User from "@/models/user";
// import axiosInstance from "@/services/axiosInstance";

export default {
  name: "EventModal-vue",

  data() {
    return {
      user: new User("", "", "", "", "", ""),
      loading: false,
      message: "",
    };
  },

  methods: {
    onCreateEvent() {
      this.loading = true;
      if (
        this.event_name &&
        this.type &&
        this.event_date &&
        this.start_time &&
        this.maximum_seats &&
        this.location
      ) {
        this.$store.dispatch("auth/onCreateEvent", this.user)
        .then(
          () => {
            this.$router.replace('/userpost')
          },
          (error) => {
            this.loading = false;
            this.message =
              (error.message && error.message.response.data) ||
              error.message ||
              error.toString();
          }
        );
      }
    },
  },
  // methods:{
  //   onCreateEvent(){
  //     if(this.loggedIn){
  //       this.$router.replace('/userpost')
  //       const createEvent = {
  //       method: "POST",
  //       url: "/api/event/create",
  //       headers: { "Media-Type": "application/json", Authorization: "Bearer" },
  //       data: {
  //         event_name: this.event_name,
  //         type: this.type,
  //         event_date: this.event_date,
  //         start_time: this.start_time,
  //         maximum_seats: this.maximum_seats,
  //         location: this.location,
  //       },
  //     };

  //     axiosInstance
  //       .request(createEvent)
  //       .then((response) => {
  //         console.log(response.data);
  //         this.$router.repplace("/userpost");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     } else {
  //       this.$router.replace('/login')
  //     }
  //   }
  // },

  mixins: [CreateEventMixins],
};
</script>

<style scoped></style>
