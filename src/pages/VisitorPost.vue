<template>
  <main class="bg-gray-2">
    <div class="container pt-3">
      <p class="gray-4 fw-bold fs-1">Explore<span class="theme">eventX</span></p>

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

    <div v-if="loading">
      <Spinner />
    </div>

    <div v-if="emptyState">
      <Empty />
    </div>
    <article class="row mb-3">
      <div class="col-md-12 m-auto">
        <div class="container" >
          <!-- <div class="row" v-for="item in blogPost.details" :key="item.description"> -->
          <div class="row" >
            <section class="col-md-3 m-auto" v-for="events in event_details" :key="events">
              <div class="card  my-4 border- shadow-sm">
                <img
                  src="../assets/img/blank_img.webp"
                  class="card-img-top img-fluid"
                  alt="..."
                />
                <div class="card-body">
                  <router-link :to="`/makereservation/${events.id}`" class="text-decoration-none">
                    <h5 class="card-title theme fw-bolder"> {{events.event_name}}</h5>
                  </router-link> 
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
  </main>
</template>

<script>
// import axios from "axios";
// import { onMounted, reactive } from "@vue/runtime-core";

import userService from '@/services/user.service';
import Spinner from '@/components/Spinner.vue';
import Empty from '@/components/Empty.vue';

export default {
  name: "BlogPost-vue",

  components:{
    Spinner,
    Empty
},

  data() {
    return {
      event_details: [],
      loading : true,
      emptyState : false,
    };
  },

  mounted(){
    userService.getAllEvents()
    .then((response) => {
      // console.log(response)
      this.event_details = response.data.data.events
      this.loading = false
      if(this.event_details.length === 0) this.emptyState = true
    }, 
    error => {
      console.log(error)
    })
  }


};
</script>

<style scoped>
  .height{
   height: 200px !important;
  }
</style>
