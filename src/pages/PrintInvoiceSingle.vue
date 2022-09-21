<template>
  <div>
    <Header />
    <div class="my-5 pt-5">



      <section class="col-md-8 m-auto mb-5 border-bottom-dash pb-5">
        <div class="border-0">
          <div class="card-header overlay p-2 shadow">
            <img
              src="../assets/img/logoIcon/eventXLogo.png"
              alt="logo"
              class="img-fluid logo-scoped"
            />
          </div>
          <div class="card-body">
            <div class="bg-dark bg-opacity-10 pt-5 mb- pb-3 px-5">
              <p class="h5 gray-3 fw-bolder">Invoice</p>
              <div class="col-md-10 m-auto mt-3">
                <div class="row">
                  <div class="col-md-4">
                    <p class="fw-normal gray-3 ms-auto">
                      {{reservationHistory.name}}
                    </p>
                  </div>
                  <div class="col-md-6 ms-auto">
                    <p class="fw-normal gray-3 text-right">
                      Ticket ID: #eventX-{{reservationHistory.receipt_number}}
                      <span class="d-block"> Order Date: {{reservationHistory.payment.created_at}}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <table
              class="table table-hover table-responsive m-auto text-center"
            >
              <thead class="thead-inverse">
                <tr class="bg-secondary text-white-50">
                  <th>#</th>
                  <th width="40%">Event name</th>
                  <th>Type</th>
                  <th>Qty</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">1</td>
                  <td>{{reservationHistory.event.event_name}}</td>
                  <td>{{reservationHistory.event.type}}</td>
                  <td>{{reservationHistory.number_of_reservation}}</td>
                  <td v-html="reservationHistory.payment.amount / reservationHistory.number_of_reservation"></td>
                  <td>{{reservationHistory.payment.amount}}</td>
                </tr>
              </tbody>
            </table>
            <div class="col-md-4 ms-auto mb-5">
              <p class="h5 text-black my-4 fw-bolder">
                Invoice Total: N{{reservationHistory.payment.amount}}.00
                <small class="text-muted font-14 fw-normal text-right d-block"
                  >Paid via PayStack</small
                >
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="card mb-3 m-auto shadow" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="../assets/img/empty.jpg" class="img-fluid rounded-start h-100 card-image" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title theme  fw-bolder">{{reservationHistory.event.event_name}} - {{reservationHistory.event.event_date}} </h5>
                  <p> 
                    <span class="mb-2 d-block"> <small class="fw-light fst-italic text-muted d-block mb-2">{{reservationHistory.event.description}}</small> {{reservationHistory.event.location}} </span>
                  <span class="fw-light text-muted">{{reservationHistory.number_of_reservation}}x Ticket(s) </span>
                      <span class="fw-bolder ms-5">N{{reservationHistory.payment.amount}} </span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// import axios from 'axios';
// import axiosInstance from '@/services/axiosInstance';
import Header from "../components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "PrintInvoiceSingle-vue",

  components: {
    Header,
    Footer,
  },

  data() {
    return {
      phoneName: "",
      reservationHistory: '',
    };
  },

  created() {
    this.reservationHistory = JSON.parse(localStorage.getItem('ticketData'))
  },


  // computed: {
  //   sortEvents() {
  //     return this.reservationHistory.find((ticket) => ticket.receipt_number === this.$route.params.receipt_number
  //     )
  //   }
  // },

  // beforeMounted() {
  //   localStorage.removeItem('ticketData')
  // },

  unmounted() {
    localStorage.removeItem('ticketData')
  }
  
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
