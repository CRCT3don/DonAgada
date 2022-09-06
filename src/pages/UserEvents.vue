<template>
  <main class="bg-gray-2">
    <div class="container pt-3">
      <p class="gray-4 fw-bold fs-1">All<span class="theme">eventX</span></p>

      <article class="row my-3">
        <div class="col-md-10 m-auto">
          <div class="container">
            <!-- <div class="row" v-for="item in blogPost.details" :key="item.description"> -->
              <div v-if="spinner">
                <Spinner />
              </div>

            <div class="row">
              <!-- REAL CONTENT -->
              <section class="col-md-6 m-auto"  v-for="events in eventDetails" :key="events">
                  <div class="card  my-4 border- shadow-sm">
                    <img
                      src="../assets/img/blank_img.webp"
                      class="card-img-top img-fluid"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title theme fw-bolder"> {{events.event_name}}</h5>
                      <div class="d-flex justify-content-between">
                      <div class="col-md-6">
                      <p class="card-text text-muted font-16 fw-light"
                        > {{events.type}}
                      </p>
                      </div>
    
                      <div class="col-md-6">
                      <p class="card-text text-muted font-16 fw-light"><i class="fa-solid fa-ticket"></i> {{events.maximun_seats}} Seats Left</p>
                      </div>
                      </div>
                      <p class="card-text text-muted font-14 fw-light">
                        <i class="fa-solid fa-location"></i> {{events.location}}
                      </p>
                    </div>
                    <div class="card-footer">
                    <div class=" d-flex justify-content-between">
                      <small class="card-text text-muted fw-light"
                        ><i class="fa-solid fa-calendar-days"></i> {{events.event_date}}
                      </small>
    
                      <small class="card-text text-muted fw-light"><i class="fa-solid fa-ticket"></i> {{events.start_time}}</small>
                    </div>
                    </div>
                  </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </div>

    <CreateEventModal />
  </main>
</template>

<script>
import CreateEventModal from "@/components/CreateEventModal.vue";
import Spinner from "@/components/Spinner.vue";
import userService from "@/services/user.service";

export default {
  name: "UserAllView-vue",
  data() {
    return {
      deleteMessage: "",
      eventDelete: false,
      eventDetails:[],
      spinner: true,
    };
  },

  components: { 
    CreateEventModal,
    Spinner,
 },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  mounted() {
    userService.getAllEventsUser()
    .then(
      (response) => {
        // console.log(response);
        this.eventDetails = response.data.data.events
        this.spinner = false
      },
      (error) => {
        console.log(error);
      });
  },

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
