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

                             
      <article class="row my-3">
        <div class="col-md-10 m-auto">
          <div class="container">
            <!-- <div class="row" v-for="item in blogPost.details" :key="item.description"> -->
            <div class="row">
              <section class="col-md-6 m-auto">
                <div class="card border-0 shadow">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="../assets/img/card/burna.png"
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
                            to="/"
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
                                  <p class="fw-bolder fst-italic accent">
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
                                  <button type="button" class="btn bg-danger text-white shadow-none" @click.prevent="deleted">
                                    Confirm
                                  </button>
                                </div>
                            </div>
                          </div>
                        </div>

                        <!-- MODAL END -->

                        <div class="col-md-12">
                          <small class="fw-light text-muted">Title</small>
                          <h5 class="card-title theme fw-bolder">
                            Event Title
                          </h5>
                        </div>
                        <div class="d-flex justify-content-between">
                          <div class="col-md-5">
                            <small class="fw-light text-muted"
                              >Ticket Amount</small
                            >
                            <p class="card-text text-black font-16 fw-bolder">
                              Amount
                            </p>
                          </div>

                          <div class="col-md-7">
                            <small class="fw-light text-muted"
                              >Ticket Available</small
                            >
                            <small class="text-black fw-light d-block">
                              300 Seats Remaining
                            </small>
                          </div>
                        </div>
                        <div class="h-50">
                          <p class="text-black font-14"><small>
                            <i class="fa-solid fa-calendar-days"></i> Wed, 3 Aug
                            - 3:00pm</small>
                          </p>

                          <p class="text-black font-14 fw-bold"> <small>
                            <i class="fa-solid fa-clock"></i> 1hr 45mins</small>
                          </p>
                          <p class="text-black"><i class="fa-solid fa-location-dot"></i><small><em> sLocation addresss adress address address address </em></small> </p>
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
import axios from "axios";
import { onMounted, reactive } from "@vue/runtime-core";
import CreateEventModal from "@/components/CreateEventModal.vue";

export default {
    name: "BlogPost-vue",
    data() {
        return {
            title: "",
            description: "",
            image: "",
        };
    },
    setup() {
        const blogPost = reactive({});
        onMounted(() => {
            const post = {
                method: "GET",
                url: "https://event-reservation-system.herokuapp.com/api",
                headers: {},
            };
            axios
                .request(post)
                .then((response) => {
                blogPost.details = response.data;
                // console.log(blogPost.title)
            })
                .catch((error) => {
                console.error(error);
            });
        });
        const sample = () => {
            console.log("yay!");
        };
        const deleted = () => {
            const del = {
                method: "DELETE",
                url: "https://event-reservation-system.herokuapp.com/api/event/delete",
                headers: {
                    Mediatype: "applications/json"
                },
            };
            axios.request(del)
                .then((response) => {
                console.log(response.data);
                this.$router.replace("/userpost");
            });
        };
        return {
            blogPost,
            sample,
            deleted
        };
    },
    components: { CreateEventModal }
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
}
</style>
