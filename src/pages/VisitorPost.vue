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

    <article class="row mb-3">
      <div class="col-md-10 m-auto">
        <div class="container">
          <!-- <div class="row" v-for="item in blogPost.details" :key="item.description"> -->
          <div class="row">
            <section class="col-md-4 m-auto">
              <div class="card border-0 shadow">
                <img
                  src="../assets/img/bg/Hero.png"
                  class="card-img-top img-fluid"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title theme fw-bolder"> Event Title</h5>
                  <div class="d-flex justify-content-between">
                  <div class="col-md-6">
                  <p class="card-text text-muted font-16 fw-light"
                    > Amount
                  </p>
                  </div>

                  <div class="col-md-6">
                  <p class="card-text text-muted font-16 fw-light"><i class="fa-solid fa-ticket"></i> 3000 Seats Remaining</p>
                  </div>
                  </div>
                </div>
                <div class="card-footer">
                <div class=" d-flex justify-content-between">
                  <small class="card-text text-muted font-10 fw-light"
                    ><i class="fa-solid fa-calendar-days"></i> Amount
                  </small>

                  <small class="card-text text-muted font-10 fw-light"><i class="fa-solid fa-ticket"></i> 3000 Seats Remaining</small>
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
import axios from "axios";
import { onMounted, reactive } from "@vue/runtime-core";

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
        headers: {}
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

    return {
      blogPost,
    };
  },
};
</script>

<style>

</style>
