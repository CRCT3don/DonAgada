<template>
  <div class="bg-gray-1">
    <Header />
    <div class="mt-5">
      <div class="row m-auto">
        <section class="col-md-8 m-auto my-5">
          <router-link to="/" class="text-decoration-none p-4 font-18 theme">
            &lt; Back
          </router-link>
          <div class="card bg-dark bg-opacity-10 border-0 p-4 m-auto">
            <div class="row gap-md-5 gap-sm-4 p-5 m-auto">
              <div
                class="col-md-5 bg-light p-5 shadow m-auto rounded-3 align-self-center"
              >
                <p class="h5 theme fw-bolder">
                  {{ eventGetter.event_name }}
                  - {{ eventGetter.event_date }} - {{ eventGetter.start_time }}
                </p>
                <img
                  src="../assets/img/blank_img.webp"
                  class="img-fluid card-img"
                  alt="..."
                />
              </div>
              <div
                class="col-md-5 border-0 rounded-3 shadow-sm align-self-center bg-light my-3"
              >
                <div class="card-body">
                  <div class="mb-3">
                    <p class="card-title h6 theme fw-bolder">Event Details</p>
                  </div>
                  <small class="fw-light text-muted"
                    >Event Organizer
                  </small>
                  <p class="card-text text-black font-14 fw-bolder">
                    {{ eventGetter.user.first_name }}
                    {{ eventGetter.user.last_name }}
                  </p>

                  <div class="">
                    <small class="fw-light text-muted"
                      ><i class="fa-solid fa-calendar-days"></i> Date and
                      time</small
                    >
                    <p class="card-text text-black font-14 fw-bolder">
                      {{ eventGetter.event_date }} -
                      {{ eventGetter.start_time }}
                    </p>
                  </div>

                  <div class="mt-2">
                    <small class="fw-light text-muted">
                      <i class="fa-solid fa-clock font-10"></i>
                      Location</small
                    >
                    <p class="card-text text-black font-14 fw-bolder">
                      {{ eventGetter.location }}
                    </p>
                  </div>
                  <small class="fw-light d-block mt-4 text-muted">
                    <i class="fa-solid fa-tags"></i>Amount 
                  </small>
                  <p class="theme fw-bold d-inline font-10 mt-2" v-for="item in eventGetter.ticket" :key="item"> {{ item.type }}: {{ item.amount }} &nbsp;</p>
                  <div class="text-black font-14">
                    <div
                      v-if="(eventGetter.type = 'paid')"
                      class="text-black font-14"
                    >
                    <label for="amount">Please choose ticket type</label>
                    <select class="input-theme"  v-model="reservationAmount" name="amount" id="">
                        <option v-for="item in eventGetter.ticket" :key="item">
                           {{ item.amount }}
                        </option>
                      </select>
                    </div>
                    <div v-else>
                      <p>FREE</p>
                    </div>
                  </div>

                  <hr />
                  <div class="d-flex col-md-8 justify-content-between">
                    <div class="col-md-6">
                      <p class="text-muted">
                        <span v-if="payload.number_of_reservation">
                          {{ payload.number_of_reservation }}</span
                        >x Ticket<span
                          v-show="payload.number_of_reservation > 1"
                          >s
                        </span>
                      </p>
                    </div>

                    <div class="col-md-6">N
                      <p class="h6 d-inline fw-bolder" v-html="reservationAmount * payload.number_of_reservation"></p>
                    </div>
                  </div>

                  <div class="d-flex col-md-12 justify-content-between">
                    <div class="col-md-8"></div>

                    <div class="col-md-4">
                      <input
                        type="number"
                        v-if="a"
                        class="input-theme"
                        v-model="payload.number_of_reservation"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="" v-if="message" role="alert">
                      <p class="fst-italic text-danger">{{ message }}</p>
                    </div>
                  </div>
                  <!-- <div class="form-group">
                    <div class="" v-if="amount" role="alert"> <p class="fst-italic text-danger">N{{ eventGetter }} </p> </div>
                  </div> -->
                  <div
                    class="col-md-12 m-auto d-flex justify-content-center px-3 text-center"
                  >
                    <button
                      class="button-theme-2 text-decoration-none"
                      :disabled="loading"
                      type="submit"
                      @click.prevent="handleReservation"
                    >
                      <span
                        v-show="loading"
                        class="spinner-border spinner-border-sm"
                      ></span>
                      <span>MAKE RESERVATION</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "@/components/Footer.vue";
import userService from "@/services/user.service";

export default {
  name: "MakeReservation-vue",

  components: {
    Header,
    Footer,
  },

  data() {
    return {
      allEvents: userService.getAllEvents(),
      singleEvent: [],
      loading: false,
      message: " ",
      payload: {
        name: "",
        event_id: "",
        phone: "0808989809",
        email: " ",
        ticket_type: "regular",
        number_of_reservation: "",
        reservationAmount: '',
      },
    };
  },

  created() {
    this.allEvents.then((response) => {
      this.singleEvent = response.data.data.events;
      console.log(this.singleEvent);
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
    this.payload.name =
      this.eventGetter.user.first_name + this.eventGetter.user.last_name;
    this.payload.email = this.eventGetter.user.email;
    this.payload.event_id = this.eventGetter.id;
  },

  methods: {
    handleReservation() {
      this.loading = true;
      if (this.payload) {
        userService.makeReservation(this.payload).then(
          () => {},
          (error) => {
            this.loading = false;
            this.message = error.response.data.message;
          }
        );
      }
      // else {
      //       this.message = 'Error occured!'
      //   // alert('error')
      //   this.loading = false
      //   }
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
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
