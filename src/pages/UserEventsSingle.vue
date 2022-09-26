<template>
  <main class="bg-gray-1">
    <HeaderUser />
    <div class="mt-5">
      <div class="row">
        <section class="col-md-10 m-auto my-5">
          <router-link to="/" class="text-decoration-none p-4 font-18 theme">
            &lt; Back
          </router-link>
          <div v-if="spinner">
            <Spinner />
          </div>
          <div class="card bg-dark bg-opacity-10 border-0 p-4">
            <div class="row gap-sm-4 p-5 m-auto">
              <div
                class="col-md-6 bg-light p-5 shadow m-auto rounded-3 align-self-center"
              >
                <p class="h5 theme fw-bolder">
                  {{ eventGetter.event_name }}
                </p>
                <p class="h5 theme fw-bolder">
                  {{ eventGetter.event_date }} - {{ eventGetter.start_time }}
                </p>
                <img
                  src="../assets/img/blank_img.webp"
                  class="img-fluid card-img"
                  alt="..."
                />
                <small class="text-muted">
                  {{ eventGetter.description }}
                </small>
              </div>
              <div
                class="col-md-3 border-0 rounded-3 shadow-sm align-self-center bg-light my-3"
              >
                <div class="card-body">
                  <div class="badges">
                    <div class="bg-accent del text-white badge">
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdropLive"
                        class="font-10 btn-sm btn text-decoration-none shadow-none text-white"
                      >
                        del
                      </button>
                    </div>
                    <div class="bg-theme p-3 edit text-white badge">
                      <router-link
                        :to="`/myevent/edit-my-event/${eventGetter.id}`"
                        class="font-10 text-decoration-none text-white"
                        >edit</router-link
                      >
                    </div>
                  </div>
                  <!-- MODAL CONTENT -->

                  <div
                    class="modal fade"
                    id="staticBackdropLive"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabdindex="-1"
                    aria-labelledby="staticBackdropLiveLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h6
                            class="modal-title accent fw-bolder"
                            id="staticBackdropLiveLabel"
                          >
                            Are you sure you want to delete?
                          </h6>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <p class=" fst-italic">
                            Action cannot be undone!
                          </p>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-danger shadow-none"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            class="btn bg-danger text-white shadow-none"
                            @click.prevent="handleDelete()"
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- MODAL END -->
                  <div class="my-3">
                    <p class="card-title h6 theme fw-bolder">Event Details</p>
                  </div>
                  <div>
                    <small class="fw-light text-muted">Event Organizer </small>
                    <p class="card-text text-black font-14 fw-bolder">
                      {{ eventGetter.user.first_name }}
                      {{ eventGetter.user.last_name }}
                    </p>
                  </div>

                  <div class="row">
                    <div class="col-md-12 mt-2">
                      <div>
                        <small class="fw-light text-muted"
                          ><i class="fa-solid fa-calendar-days"></i> Date and
                          time</small
                        >
                        <p class="card-text text-black font-14 fw-bolder">
                          {{ eventGetter.event_date }} :
                          {{ eventGetter.start_time }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-2">
                    <small class="fw-light text-muted">
                      <i class="fa-solid fa-location-dot"></i> Location
                    </small>
                    <p class="text-black font-14">
                      {{ eventGetter.location }}
                    </p>
                  </div>

                  <div class="mt-2">
                    <small class="fw-light text-muted">
                      <i class="fa-solid fa-ticket"></i>
                      Tickets Available
                    </small>
                    <p
                      class="card-text text-black font-14 fw-bolder"
                      v-html="
                        eventGetter.maximun_seats -
                        eventGetter.total_reservation
                      "
                    ></p>
                  </div>

                  <div class="mt-2">
                    <small class="fw-light text-muted">
                      <i class="fa-solid fa-ticket"></i>
                      Tickets Sold
                    </small>
                    <p
                      class="card-text text-black font-14 fw-bolder"
                      v-html="
                        eventGetter.total_reservation
                      "
                    ></p>
                    
                  <div class=" mb-3">
                    <div class="bg-theme del text-white badge">
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#viewBooking"
                        class="font-10 btn-sm btn text-decoration-none shadow-none text-white"
                        @click.prevent="setBookings"
                      >
                        View Bookings
                      </button>
                    </div>
                  </div>
                  <UserViewBookings />
                  </div>

                  <div class="mt-2">
                    <small class="fw-light text-muted">
                      <i class="fa-solid fa-ticket"></i>
                      Amount
                    </small>
                    <div v-if="(eventGetter.type = 'paid')">
                      <p
                        class="card-text text-black font-14 fw-bolder"
                        v-for="item in eventGetter.ticket"
                        :key="item"
                      >
                        {{ item.type }}: {{ item.amount }}
                      </p>
                    </div>
                    <!-- <div v-if="(eventGetter.type = 'free')">
                      <p class="card-text text-black font-14 fw-bolder">FREE</p>
                    </div> -->
                  </div>
                </div>
                <router-link :to="`/myevent/createticket/${eventGetter.id}`" class="button-theme text-decoration-none my-4">CREATE TICKET</router-link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script>
import userService from "@/services/user.service";
import Footer from "@/components/Footer.vue";
import Spinner from "@/components/Spinner.vue";
import HeaderUser from "@/components/HeaderUser.vue";
import UserViewBookings from "./UserViewBookings.vue";

export default {
  name: "UserEventsSingle-vue",
  data() {
    return {
      singleEvent: [],
      allEvents: "",
      eventDelete: "",
      // spinner: true,
      deleteData: {
        event_id: "",
        event_name: "",
      },
      viewBookings: [],
    };
  },

  components: { Footer, HeaderUser, Spinner, UserViewBookings },

  created() {
    userService.getAllEventsUser().then((response) => {
      this.singleEvent = response.data.data.events;
      // console.log(this.singleEvent);
    });
 
  },

  computed: {
    eventGetter() {
      return this.singleEvent.find(
        (event) => event.id === this.$route.params.id
        
        );
      },
  },

  mounted() {
    this.deleteData.event_id = this.eventGetter.event_uid;
    this.deleteData.event_name = this.eventGetter.event_name;
    this.spinner = false
  },

  methods: {
    handleDelete() {
      console.log(this.deleteData)
      // if (this.deleteData.event_id) {
        userService.deleteMyEvents(this.deleteData)
        .then(
          () => {
            this.$router.replace("/userpost");
            location.reload();
          }, 
          (error) => {
            console.log(error);
            window.stop();
          });
    },
  }
};
</script>

<style scoped>
.edit,
.del {
  margin: 10px;
}

.badges {
  position: absolute;
  top: 18px;
  right: 70px;
}

.card-img {
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
