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
              <div 
                class=" border-0 rounded-3 shadow-sm bg-light m-3 p-5"
              >
                  <div class="my-3">
                    <p class="card-title h4 theme fw-bolder">CREATE EVENT TICKETS</p>
                  </div>
                  
                  <p class="h5 text-secondary fw-bolder">
                    {{ eventGetter.event_name }} <span class="text-dark">|| </span> 
                    {{ eventGetter.event_date }} - {{ eventGetter.start_time }}
                  </p>

                  <div class="form-group">
                    <div class="text-danger" v-if="errorMessage" role="alert">
                      <div v-for="error in errorMessage" :key="error">
                        <li>{{ error.toString() }}</li>
                      </div>
                    </div>
                      <div>
                      <p v-if="message" class="text-danger">
                        {{ message }}
                      </p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mt-2">
                      <div>
                        
                        <div class="mb-3">
                          <label for="" class="form-label">Ticket Type</label>
                          <select class="input-theme" v-model="ticketData.type" name="" id="">
                            <option>regular</option>
                            <option>platinum</option>
                            <option>gold</option>
                          </select>
                        </div>

                        <div class="mb-3">
                          <label for="" class="form-label"> {{ticketData.type}} Tickets Available</label>
                          <input type="number" v-model="ticketData.maximum_reservation" class="input-theme" name="" id="" placeholder="000">
                        </div>

                        <div class="mb-3">
                          <label for="" class="form-label"> {{ticketData.type}} Ticket Amount</label>
                          <input type="number" v-model="ticketData.amount" class="input-theme" name="" id="" placeholder="enter figure only">
                        </div>
                        <button class="button-theme-2" 
            :disabled="loading"
            @click.prevent="handleTicket">
            <span
            v-show="loading"
            class="spinner-border spinner-border-sm mx-2"
          ></span>
                          ADD TICKET
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
import Footer from "@/components/Footer.vue";
import HeaderUser from "@/components/HeaderUser.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "CreateTicket-vue",
  data() {
    return {
      singleEvent: [],
      ticketData: {
        event_id: "",
        type: "",
        amount: '',
        maximum_reservation: '',
      },
      spinner: true,
      loading: false,
      errorMessage: [],
      message: '',
    };
  },

  components: { Footer, Spinner, HeaderUser },

  created() {
    userService.getAllEventsUser().then((response) => {
      this.singleEvent = response.data.data.events;
      this.spinner = false
    });

    // userService.deleteEvent(this.deleteData)
    // .then((response) => {
    //   this.singleEvent = response.data.data.events;
    //   console.log(this.singleEvent);
    // })
  },

  computed: {
    eventGetter() {
      return this.singleEvent.find(
        (event) => event.id === this.$route.params.id
      );
    },
  },

  mounted() {
    this.ticketData.event_id = this.eventGetter.event_uid;
  },

  methods: {
    handleTicket() {
      this.loading = true
      // if (this.ticketdata) {
        userService.createTicket(this.ticketData, this.eventGetter.id).then(
          () => {
            this.$router.go(-1);
          },
          (error) => {
            console.log(error);
            this.errorMessage = error.response.data.errors
            this.message = error.response.data.message.toString()
            console.log(error.response.data.message.toString())
            this.loading = false
          });
      // } 
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
      // userService.deleteEvent(this.eventGetter.id)
      // .then((response) => {
      //     this.deleteMessage = response.message;
      //   },
      //   (error) => {
      //     this.deleteMessage = error.data;
      //   }
      // );
    },
  },
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
