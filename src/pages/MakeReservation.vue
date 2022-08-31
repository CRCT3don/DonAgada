<template>
  <div class="bg-gray-1">
    <Header />
    <div class="mt-5">
      <div class="row m-auto">
        <section class="col-md-8 m-auto my-5">
          <div class="card bg-dark bg-opacity-10 border-0 p-4 m-auto">
            <div class="row gap-md-5 gap-sm-4 p-5 m-auto">
              <div
                class="col-md-5 bg-light p-5 shadow m-auto rounded-3 align-self-center"
              >
                <p class="h5 theme fw-bolder">
                  {{ eventGetter.event_name }} 
                  - {{eventGetter.event_date}} - {{eventGetter.start_time}}
                </p>
                <img
                  src="../assets/img/blank_img.webp"
                  class="img-fluid card-img"
                  alt="..."
                />
              </div>
              <div
                class="col-md-5 border-0 rounded-3 shadow-sm align-self-center bg-light"
              >
                <div class="card-body">
                  <div class="mb-3">
                    <p class="card-title h6 theme fw-bolder">Event Details</p>
                  </div>
                  <small class="fw-light text-muted font-10"
                    >Event Organizer </small
                  >
                  <p class="card-text text-black font-14 fw-bolder">
                    {{eventGetter.user.first_name}} {{eventGetter.user.last_name}}
                  </p>

                  <div class="d-flex col-md-12 justify-content-between">
                    <div class="col-md-6">
                      <small class="fw-light text-muted font-10"
                        ><i class="fa-solid fa-calendar-days"></i>  Date and time</small
                      >
                      <p class="card-text text-black font-14 fw-bolder">
                        {{eventGetter.event_date}} - {{eventGetter.start_time}}
                      </p>
                    </div>

                    <div class="col-md-6">
                      <small class="fw-light text-muted">
                        <i class="fa-solid fa-clock font-10"></i>
                        Duration</small
                      >
                      <p class="card-text text-black font-14 fw-bolder">
                        Hours
                      </p>
                    </div>
                  </div>
                  <small class="fw-light text-muted font-10">
                    <i class="fa-solid fa-location-dot"></i> Location
                  </small>
                  <p class="text-black font-14">
                    {{eventGetter.location}}
                  </p>
                  <!-- <div class="d-flex col-md-8 justify-content-between">
                    <div class="col-md-6">
                      <small class="fw-light text-muted font-10"
                        ><i class="fa-solid fa-tags"></i>Amount</small
                      >
                      <p class="card-text text-black font-14 fw-bolder">
                        N10,000.00
                      </p>
                    </div>

                    <div class="col-md-6">
                      <input type="number" class="input-theme" />
                    </div>
                  </div> -->
                  <hr />
                  <!-- <div class="d-flex col-md-12 justify-content-between">
                    <div class="col-md-6">
                      <p class="text-muted">2x Ticket(s)</p>
                    </div>

                    <div class="col-md-6">
                      <p class="h6 fw-bolder">N20,000.00</p>
                    </div>
                  </div> -->
                  <button class="button-theme-2 m-auto text-center">
                    MAKE RESERVATIONS
                  </button>
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
import userService from '@/services/user.service';

export default {
  name: "MakeReservation-vue",

  components: {
    Header,
    Footer,
  },

  data() {
    return {
      allEvents: userService.getAllEvents(),
      singleEvent : [],
    };
  },

  created(){
    this.allEvents.then((response) => {
      this.singleEvent = response.data.data.events
    })
  },

  computed:{
    eventGetter(){
      return this.singleEvent.find(event => event.id === this.$route.params.id)
    }
  },
  
  // mounted(){
  //   console.log(this.singleEvent)
  // }

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
