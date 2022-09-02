<template>
  <main class="bg-gray-1">
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
                      <p class="h6 fw-bolder">N20,000.00</p>
                    </div>
                  </div>

                    -->
                  <hr />
                  <div class="d-flex col-md-12 justify-content-between">
                    <div class="col-md-6">
                      <p class="text-muted" v-if="payload.number_of_reservation"> {{payload.number_of_reservation}}x Ticket<span v-show=" payload.number_of_reservation > 1">s </span> </p>
                    </div>
                    
                    <div class="col-md-6">
                      <input type="number" class="input-theme"
                      v-model="payload.number_of_reservation" />
                    </div>
                  </div> 
                  <div class="form-group">
                    <div class="" v-if="message" role="alert"> <p class="fst-italic text-danger"> {{ message }} </p> </div>
                  </div>
                  <div
                  class="col-md-12 m-auto d-flex justify-content-center px-3 text-center"
                >
                  <button class="button-theme-2 text-decoration-none" :disabled="loading" type="submit" @click.prevent="handleReservation">
                  <span v-show="loading" class="spinner-border spinner-border-sm"></span>
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
  </main>
</template>

<script>
import userService from "@/services/user.service";

export default {
  name: "UserEventsSingle-vue",
  data() {
    return {
      singleEvent:[],
      allEvents: '',
    };
  },

  components: {  },

  created(){
    userService.getAllEventsUser().then((response) => {
      this.singleEvent = response.data.data.events
      console.log(this.singleEvent)
    })
  },

  computed: {
    eventGetter(){
      return this.singleEvent.find(event => event.id === this.$route.params.id)
    },
  },

  // mounted() {
  //   userService.getAllEventsUser()
  //   .then(
  //     (response) => {
  //       // console.log(response);
  //       this.allEvents = response.data.data.events
  //     },
  //     (error) => {
  //       console.log(error);
  //     });
  // },

  // methods: {
    // deleteEvent() {
      // this.singleEvent.find(event => event.id === this.$route.params.id) ;


    // let deleteId = this.eventDetails.find(event => event.id === this.$route.params.id)
    // console.log(deleteId)
      // let deleteId = this.eventDetails.filter(item => {
      //   console.log(item)
      //   return item.id
      // })
//       let deleteId = this.eventDetails.find((event) => {return event.forEach((e) => {
//   e.onclick = (e) => console.log(e.id);
// })})


      // userService.deleteEvent(deleteId)
      // .then((response) => {
      //     this.deleteMessage = response.message;
      //   },
      //   (error) => {
      //     this.deleteMessage = error.data;
      //   }
      // );
  //   },
  // },
};
</script>

<style scoped>
.edit {
  position: absolute;
  top: 10px;
  right: 10px;
}

.del {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.card-img {
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
