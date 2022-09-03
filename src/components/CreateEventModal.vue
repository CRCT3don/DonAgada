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
                <div v-for="error in messages" :key="error">
                  <li>{{ error.toString() }}</li>
                </div>
                <!-- {{message}} -->
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
                v-model="event.event_name"
              />
            </div>
            <div class="col-md-12 mb-3 m-auto">
              <label for="type" class="gray-3 fs-6"
                >Event Type<span class="text-danger">*</span>
              </label>
              <select
                class="input-theme"
                v-model="event.type"
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
              <input
                type="date"
                v-model="event.event_date"
                class="input-theme"
              />
            </div>
            <div class="col-md-12 mb-3 m-auto">
              <label for="time" class="gray-3 fs-6"
                >Event Time <span class="text-danger">*</span></label
              >
              <input
                type="time"
                v-model="event.start_time"
                class="input-theme"
              />
            </div>
            <!-- </div> -->
            <div class="col-md-12 mb-3 m-auto">
              <label for="duration" class="gray-3 fs-6"
                >Seats Available <span class="text-danger">*</span></label
              >
              <input
                type="text"
                v-model="event.maximun_seats"
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
                >Event Description
                <span class="text-danger">*</span>
              </label>
              <textarea
                class="input-theme"
                rows="12"
                v-model="event.description"
              >
              </textarea>
            </div>
            <div class="col-md-12 mb-3 m-auto">
              <label for="type" class="gray-3 fs-6"
                >Event Location
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                class="form-control input-theme"
                v-model="event.location"
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
            class="button-theme"
            :disabled="loading"
            @click="onCreateEvent"
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

  <!-- MODAL END -->
</template>

<script>
import userService from "@/services/user.service";
// import axiosInstance from "@/services/axiosInstance";

export default {
  name: "EventModal-vue",

  data() {
    return {
      // user: new User("", "", "", "", "", ""),
      event: {
        event_name: "",
        type: "",
        event_date: "",
        start_time: "",
        maximun_seats: "",
        description: "",
        location: "",
        status: "active",
        user_id: JSON.parse(localStorage.getItem("uid")),
        user: JSON.parse(localStorage.getItem("user")),
      },
      message: "",
      messages: "",
      loading: false,
      // message: ''
    };
  },

  methods: {
    onCreateEvent() {
      this.loading = true;
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      console.log(this.event.user_id);
      console.log(this.event.maximum_seats);

      if (this.event) {
        userService.createEvent(this.event).then(
          () => {
            this.$router.replace("/userpost");
            location.reload();
          },
          (error) => {
            this.messages = error.response.data.errors;
            this.message = error.response.data.message.toString();
            this.loading = false;
            window.stop();
          }
        );
      }
      // console.log(this.event_name, this.type)
      // let uid = JSON.parse(localStorage.getItem("uid"));

      // const options = {
      //   method: "POST",
      //   url: "/api/event/create",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${user}`,
      //   },
      //   data: this.event,
      // };

      // axiosInstance
      //   .request(options)
      //   .then((response) => {
      //     console.log(response.data);
      //     if(response.data.status === 'Success'){
      //     this.$router.replace("/userpost");
      //     location.reload()
      //   }
      // })
      //   .catch((error) => {
      //     console.error(error);
      //       this.messages = error.response.data.errors
      //       this.message = error.response.data.message.toString()
      //     // location.reload(false)
      //     window.stop()
      //     this.loading = false;
      //   });
    },
  },
};
</script>

<style scoped></style>
