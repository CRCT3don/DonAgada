<template>
  <div>
    <Header />
    <div class="mt-5">
      <section class="bg-white pt-5 px-3 my-5">
        <div v-if="message" class=" col-md-4 m-auto">
          <div class="alert alert-danger" role="alert">
            <span class=""> {{ message }} </span>
          </div>
        </div>
        <div class="m-auto">
          <p class="h5 theme fw-bolder text-center">Get your invoice</p>
          <p class="text-muted font-18 fw-bolder fst-italic text-center">
            Enter your name or email below
          </p>
          <div class="m-auto col-md-6">
            <div class="row align-items-center">
              <div class="m-auto col-md-7 mt-3">
                <input
                  type="tel"
                  class="input-theme d-block mb-3"
                  placeholder="enter your phone here "
                  v-model="phone"
                />
                <p class="theme h5 fw-bolder text-center">OR</p>
                <input
                  type="email"
                  class="input-theme"
                  placeholder="enter your email here "
                  v-model="email"
                />
              </div>
              <div
                class="col-md-12 m-auto d-flex justify-content-center px-3 text-center"
              >
                <button
                  class="button-theme-2"
                  @click.prevent="getReservationHistory()"
                  type="button"
                >
                  <span
                    v-if="loading"
                    class="spinner-border spinner-border-sm"
                  ></span>
                  <span> Get Reservation Info </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- <section v-show="showReservation"> -->
      <section>
        <div class="col-md-6 m-auto px-3">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Receipt No</th>
                <th scope="col">Ticket Type </th>
                <th scope="col">No of Tickets</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="items in reservations" :key="items">
                <th scope="row">{{items.receipt_number}}</th>
                <td> {{items.ticket_type}} </td>
                <td>{{items.number_of_reservation}}</td>
                <td> <router-link :to="`/printinvoice/${items.id}`" @click="save" class="button-theme-2 text-decoration-none"> View </router-link> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import axiosInstance from "@/services/axiosInstance";
import Header from "../components/Header.vue";
// import userService from "@/services/user.service";
import Footer from "@/components/Footer.vue";

export default {
  name: "PrintInvoice-vue",

  components: {
    Header,
    Footer,
  },

  data() {
    return {
      // info: {
      email: "",
      phone: "",
      // },
      loading: "",
      showReservation: false,
      reservations: [],
      message: "",
    };
  },

  methods: {
    getReservationHistory() {
      console.log(this.phone + this.email);

      let phone = this.phone;
      let email = this.email;

      if (email === "") email = undefined;
      if (phone === "") phone = undefined;

      console.log(phone + email);

      // if (this.info.email || this.info.phone) {
      this.loading = true;
      //   userService.reservationHistory(this.info).then(
      //     (response) => {
      //       console.log(response);
      //       this.spinner = false;
      //       this.showReservation = true;
      //     },
      //     (error) => {
      //       console.log(error);
      //       this.message = error.response.data.message.toString();
      //       this.spinner = false;
      //     }
      //   );
      // } else this.spinner = true;

      const options = {
        method: "POST",
        url: "/api/reservation-history",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
       },
        data: {
          email: email,
          phone: phone,
        },
      };

      axiosInstance
        .request(options)
        .then((response) => {
          this.reservations = response.data.data;
          console.log(this.reservations);
          this.loading = false;
          this.showReservation = true;
        })
        .catch((error) => {
          console.log(error);
          this.message = error.response.data.message.toString();
          this.loading = false;
        });
    },

    save() {
      localStorage.setItem('details', JSON.stringify(this.reservations))
        }
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
  width: 100px;
}

.border-bottom-dash {
  border-bottom: 2px dashed #6e736e;
}
</style>
