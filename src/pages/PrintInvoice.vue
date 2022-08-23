<template>
  <div>
    <Header />
    <div class="mt-5">
      <section class="bg-white pt-5 my-5">
        <div class="m-auto">
          <p class="h5 theme fw-bolder text-center">Get your invoice</p>
          <p class="text-muted font-18 fw-bolder fst-italic text-center">
            Enter your tickect ID below
          </p>
          <div class="m-auto col-md-6">
            <div class="row align-items-center">
              <div class="m-auto col-md-7 mt-3">
                <input type="text" class="input-theme" />
              </div>
              <div class="m-auto col-md-5">
                <router-link to="/" class="button-theme-2"
                  >Get Reservation Info
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      John Doe
                      <span class="d-block"> XYZ street, Example Address </span>
                    </p>
                  </div>
                  <div class="col-md-4 ms-auto">
                    <p class="fw-normal gray-3 text-right">
                      Ticket ID: #eventX-19002
                      <span class="d-block"> Order Date: 09/18/2022</span>
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
                  <td>Event Name</td>
                  <td>Paid</td>
                  <td>2</td>
                  <td>10,000</td>
                  <td>20,000</td>
                </tr>
              </tbody>
            </table>
            <div class="col-md-4 ms-auto mb-5">
              <p class="h5 text-black my-4 fw-bolder">
                Invoice Total: N20,000.00
                <small class="text-muted font-14 fw-normal text-right d-block"
                  >Paid via PayStack</small
                >
              </p>
            </div>
          </div>
        </div>
      </section>
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
                  <div class="d-flex justify-content-between">
                    <div class="col-md-5">
                      <small class="fw-bolder h5 theme"
                        >Event Date - Event Time</small
                      >
                      <p><small class="fw-light text-muted">Duration</small></p>

                      <p>
                        <small class="fw-light text-muted">2x Ticket(s)</small>
                      </p>
                      <p><small class="fw-light text-muted">N20,0000</small></p>

                      <p class="card-text text-black font-16 fw-bolder">
                        Amount
                      </p>
                    </div>
                  </div>
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
// import axios from 'axios';
// import axiosInstance from '@/services/axiosInstance';
import Header from "../components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "MakeReservation-vue",

  components: {
    Header,
    Footer,
  },

  data() {
    return {};
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
