<template>
  <div>
    <Header />

    <!-- <div class="col-md-6 m-auto"> -->
    <div v-if="message" class="my-5 py-5 col-md-4 m-auto">
      <div class="alert alert-danger" role="alert">
        <span class=""> {{ message }} </span>
      </div>
      <!-- </div> -->
    </div>

    <div v-if="spinner" class="my-5 py-5 col-md-6 m-auto">
      <div class="card my-3 border-0">
        <img src="../assets/img/spinner.gif" class="card-img" />
        <div class="card-img-overlay m-auto">
          <span class="h6 theme fst-italic m-auto text-center"
            >Validating your payment...</span
          >
        </div>
      </div>
    </div>

    <div v-if="!spinner" class="alert alert-success my-5 py-5 alert-dismissible fade show" role="alert">
      <strong>Payment Confirmed  {{ticketDetails.name}}. </strong> <hr/> Please find your invoice and event ticket below.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="my-5" v-if="showInvoice">
      <section 
        class="col-md-8 m-auto mb-5 border-bottom-dash py-5 my-5 px-md-1"
      >
        <div class="border-0">
          <!-- <p>reference no = {{reference}}</p> -->

          <div class="card-header overlay p-2 shadow" >
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
                      {{ticketDetails.name}}
                    </p>
                  </div>
                  <div class="col-md-6 ms-auto">
                    <p class="fw-normal gray-3 text-right">
                      #eventX-{{ticketDetails.receipt_number}}
                      <span class="d-block"> Order Date: {{ticketDetails.payment.created_at}}</span>
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
                  <td> {{ticketDetails.event.event_name}} </td>
                  <td> {{ticketDetails.event.type }}</td>
                  <td> {{ticketDetails.number_of_reservation}} </td>
                  <td v-html="qty"> </td>
                  <!-- <td v-html="ticketDetails.payment.amount / ticketdetails.number_of_reservation"> </td> -->
                  <td> {{ticketDetails.payment.amount}} </td>
                </tr>
              </tbody>
            </table>
            <div class="col-md-4 ms-auto mb-5">
              <p class="h5 text-black my-4 fw-bolder">
                Invoice Total: N{{ticketDetails.payment.amount}}.00
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
              <h5 class="card-title theme  fw-bolder">{{ticketDetails.event.event_name}} - {{ticketDetails.event.event_date}} </h5>
                  <p> 
                    <span class="mb-2 d-block"> <small class="fw-light fst-italic text-muted d-block mb-2">{{ticketDetails.event.description}}</small> {{ticketDetails.event.location}} </span>
                  <span class="fw-light text-muted">{{ticketDetails.number_of_reservation}}x Ticket(s) </span>
                      <span class="fw-bolder ms-5">N{{ticketDetails.payment.amount}} </span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "@/components/Footer.vue";
// import userService from "@/services/user.service";
import axiosInstance from "@/services/axiosInstance";

export default {
  name: "Validate-vue",

  components: {
    Header,
    Footer,
  },

  data() {
    return {
      // reference: {
      //   reference: '',
      // },
      reference: "",
      spinner: false,
      showInvoice: false,
      message: "",
      ticketDetails:[],
      qty: '',
    };
  },

  created() {
    let params = window.location.href.split("reference")[1].split("=").join("");
    this.reference = params;
    // console.log(this.ticketDetails);
  },

  mounted() {
    console.log(this.reference);
    // if(this.reference) {
    //   this.spinner = true
    // userService.validatePayment(this.reference)
    // .then((response) => {
    //   console.log(response)
    //   this.spinner = false
    //   this.showInvoice = true
    // },
    // (error) => {
    //   console.log(error)
    //   this.message = error.response.data.message.toString()
    //   this.spinner = false
    // })

    // } else this.spinner = true

    const options = {
      method: "POST",
      url: "/api/validate-payment",
      headers: { "Content-Type": "application/json" },
      data: {
        reference: this.reference
      },
    };

    axiosInstance
      .request(options)
      .then((response) => {
        console.log(response.data.data);
        this.ticketDetails = response.data.data
        this.spinner = false;
        this.showInvoice = true;
        this.qty = response.data.data.payment.amount / response.data.data.number_of_reservation
      })
      .catch((error) => {
        console.log(error);
        this.message = error.response.data.message.toString();
        this.spinner = false;
      });

      // console.log(this.ticketDetails.payment)
      // this.qty = this.ticketDetails.payment.amount / this.ticketdetails.number_of_reservation
  },
};
</script>

<style scoped>
.spinner-bg {
  background-image: url("../assets/img/spinner.gif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: soft-light;
}

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

.card-image{
  object-position: center;
  object-fit: cover;
}
</style>
