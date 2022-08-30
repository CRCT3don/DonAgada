<template>
  <main class="bg-gray-2">
    <div class="container pt-3">
      <p class="gray-4 fw-bold fs-1">My<span class="theme">eventX</span></p>

      <!-- <div class="row m-auto">
      <div class="col-md-4 m-1 p-3 m-auto" v-for="item in blogPost.details" :key="item.description">
        <div class="card m-auto">
          <div class="img-fluid"> {{item.image}} </div>
          <img src="../assets/img/llc.png" alt="" class="img-fluid w-75 p-2 mt-auto">
           <img :src={{item.image}} alt="" class="img-fluid">
          <div class="card-body">
            <p class="card-title"> {{item.title}} </p>
            <p class="card-text"> {{item.description}} </p>
          </div>
        </div>
      </div>
    </div>-->

        <div v-if="deleteMessage" class="alert alert-success alert-dismissible fade show" role="alert">
          Event Deleted
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

      <article class="row my-3">
        <div class="col-md-10 m-auto">
          <div class="container">
            <!-- <div class="row" v-for="item in blogPost.details" :key="item.description"> -->
            <div class="row">
 


              <!-- REAL CONTENT -->
              <section class="col-md-6 m-auto"  v-for="items in eventDetails" :key="items">
                <div class="card border-0 shadow-sm my-2">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="../assets/img/blank_img.webp"
                        class="img-fluid card-img"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8 gap-0">
                      <div class="card-body">
                        <div class="bg-accent del text-white badge">
                          <button
                            to="/"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdropLive"
                            class="font-10 btn-sm btn text-decoration-none shadow-none text-white"
                          >
                            del
                          </button>
                        </div>
                        <div class="bg-theme edit text-white badge">
                          <router-link
                            :to="`/mysingleevent/${items.id}`"
                            class="font-10 text-decoration-none text-white"
                            >edit</router-link
                          >
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
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5
                                  class="modal-title theme fw-bolder"
                                  id="staticBackdropLiveLabel"
                                >
                                  Are you sure you want to delete?
                                </h5>
                                <!-- <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button> -->
                              </div>
                              <div class="modal-body">
                                <p class="fw-bolder fs-5 fst-italic accent">
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
                                  @click.prevent="deleteEvent"
                                >
                                  Confirm
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- MODAL END -->

                        <div class="col-md-12">
                          <small class="fw-light text-muted">  Title</small>
                          <h5 class="card-title theme fw-bolder">
                            {{items.event_name}}
                          </h5>
                        </div>
                        <div class="d-flex justify-content-between">
                          <div class="col-md-5">
                            <small class="fw-light text-muted"
                              >Event Type</small
                            >
                            <p class="card-text text-black font-16 fw-bolder">
                              {{items.type}}
                            </p>
                          </div>

                          <div class="col-md-7">
                            <small class="fw-light text-muted"
                              >Ticket Available</small
                            >
                            <small class="text-black fw-light d-block">
                              {{items.maximun_seats}}
                            </small>
                          </div>
                        </div>
                        <div class="h-50">
                          <p class="text-black font-14">
                            <small>
                              <i class="fa-solid fa-calendar-days"></i>{{items.event_date}} - {{items.start_time}} </small
                            >
                          </p>

                          <!-- <p class="text-black font-14 fw-bold">
                            <small>
                              <i class="fa-solid fa-clock"></i> 1hr
                              45mins</small
                            >
                          </p> -->
                          <p class="text-black">
                            <i class="fa-solid fa-location-dot"></i
                            ><small
                              ><em>
                                {{items.location}}
                              </em></small
                            >
                          </p>
                        </div>
                      </div>
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
import userService from "@/services/user.service";

export default {
  name: "BlogPost-vue",
  data() {
    return {
      deleteMessage: "",
      eventDelete: false,
      eventDetails:[]
    };
  },
  components: { CreateEventModal },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  mounted() {
    userService.getMyEvents()
    .then(
      (response) => {
        // console.log(response);
        this.eventDetails = response.data.data.events
      },
      (error) => {
        console.log(error);
      });
  },

  methods: {
    deleteEvent() {
    for (const item of this.eventDetails) {
      if(item.id === '' ){
      console.log(item.id)
    }
    }

    let deleteId = this.eventDetails.indexOf()
    console.log(deleteId)
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
    },
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
