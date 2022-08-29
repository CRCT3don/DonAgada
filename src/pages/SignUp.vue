<template>
  <router-link
    to="/"
    class="p-2 badge bg-theme btn text-decoration-none btn-sm"
  >
    HOME
  </router-link>

  <section>
    <div class="col-md-12 m-auto">
      <div class="card border-0 rounded-0">
        <div class="row g-0">
          <div class="col-md-6 overlay p-5 d-flex align-items-center">
            <div class="bg-black glass bg-opacity-50 rounded-3 p-4 m-4">
              <img
                src="../assets/img/logoIcon/eventXLogo.png"
                alt=""
                class="class-fluid logo mb-5 mt-3"
              />
              <div class="my-5 col-md-6">
                <p class="fs-6 fw-normal fst-italic text-white">
                  The smartest way to create your events and get your events
                  SOLD OUT online
                </p>
              </div>
              <div class="my-5">
                <p class="fs-5 fw-normal fst-italic text-white">
                  Already have an account?
                </p>
                <router-link
                  to="/login"
                  class="text-decoration-none fw-bold theme fst-italic fs-5"
                >
                  LOG IN
                </router-link>
              </div>

              <p class="fs-6 fst-italic text-white text-center">
                Copyright Events @2022
              </p>
            </div>
          </div>
          <div class="col-md-6 gap-3 my-4 d-flex align-self-center">
            <div class="col-md-8 m-auto">
              <div class="card-body border-gray-3 border-2 border rounded-3">
                <p class="fs-3 text-center fw-bolder card-title theme">
                  SIGN UP
                </p>
                <p
                  class="font-16 gray-3 fst-italic text-center col-md-12 m-auto"
                >
                  Create your account and let’s get you started.
                </p>

                <!-- <div
                  v-if="message"
                  class="alert"
                  :class="successful ? 'alert-success' : 'alert-danger'"
                >
                  {{ message }}
                </div> -->

                <div v-if="message">

                <div
                  v-for="items in message" :key="items"
                  class="alert alert-danger" :class="successful ? 'alert-success' : 'alert-danger'"
                >
                <li class="list-unstyled"> {{ items.toString() }} </li>
                </div>
                </div>
                <form
                  class="col-md-12 my-2 px-4 pt-2 m-auto"
                  @submit.prevent="handleRegister()"
                >
                  <div class="row m-auto w-100">
                    <div class="col-md-6">
                      <label for="first_name" class="form-label fs-6 fst-italic"
                        >First Name<span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="input-theme"
                        id="first_name"
                        name="first_name"
                        v-model="user.first_name"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="last_name" class="form-label fs-6 fst-italic"
                        >Last Name<span class="text-danger">*</span></label
                      >
                      <input
                        type="last_name"
                        class="input-theme"
                        id="last_name"
                        name="last_name"
                        v-model="user.last_name"
                      />
                    </div>
                  </div>
                  <!-- <div class="col-md-12 px-2"> -->
                  <div class="col-md-12 m-auto px-3">
                    <label for="email" class="form-label fs-6 fst-italic"
                      >Email<span class="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      class="input-theme"
                      id="email"
                      name="email"
                      v-model="user.email"
                    />
                  </div>
                  <!-- </div> -->
                  <div class="col-md-12 m-auto px-3">
                    <label for="password" class="form-label fs-6 fst-italic"
                      >Password<span class="text-danger">*</span></label
                    >
                    <input
                      type="password"
                      class="input-theme"
                      id="password"
                      name="password"
                      v-model="user.password"
                    />
                  </div>
                  <!-- ERROR
                  <p class="text-danger bg-danger bg-opacity-50" v-for="error in errorsPassword" :key="error"> {{errorPassword}} </p>
                <div v-if="errorCode" >
                                  <div v-for="error in errorsPassword" :key="error" class="alert alert-danger alert-dismissible fade show" role="alert">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                <ul class="list-group">
                 <li class="list-group-item"> {{ error }} </li>
                </ul>
                </div>
                                  </div>
                ERROR -->
                  <div class="col-md-12 m-auto px-3">
                    <label
                      for="confirm_password"
                      class="form-label fs-6 fst-italic"
                      >Confirm Password<span class="text-danger">*</span></label
                    >
                    <input
                      type="password"
                      class="input-theme"
                      id="confirm_password"
                      name="confirm_password"
                      v-model="user.password_confirmation"
                    />
                  </div>
                  <div class="col-md-12 m-auto px-3 text-center">
                    <small class="text-muted fst-italic"
                      >By clicking "Sign up", you agree to
                      <router-link
                        to="/"
                        class="theme fw-bold fst-normal text-decoration-none"
                      >
                        eventX Terms & Conditions </router-link
                      >and have read the
                      <router-link
                        to="/"
                        class="theme fw-bold fst-normal text-decoration-none"
                      >
                        Privacy Policy</router-link
                      ></small
                    >
                  </div>
                  <div
                    class="col-md-12 m-auto d-flex justify-content-center px-3 text-center"
                  >
                    <button
                      class="button-theme"
                      :disabled="loading"
                      type="submit"
                    >
                      <span
                        v-show="loading"
                        class="spinner-border spinner-border-sm mx-2"
                      ></span>
                      <span>SIGN UP</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import User from "@/models/user";

export default {
  name: "Signin-vue",

  data() {
    return {
      user: new User("", "", "", "", ""),
      submitted: false,
      successful: false,
      message: "",
      loading: false,
    };
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  mounted() {
    if (this.loggedIn) {
      this.$router.replace("/userpost");
      console.log(this.loggedIn);
    }
  },

  methods: {
    handleRegister() {
      this.message = "", 
      this.submitted = true,
      this.loading = true
      // this.$validator.validate()
      // .then(isValid => {
      //   if(isValid){
      this.$store.dispatch("auth/register", this.user)
      .then((data) => {
          this.message = data.message;
          this.successful = true;
        },
        (error) => {
          this.loading = false;
          // this.message =
          //   (error.response && error.response.data) ||
          //   error.message ||
          //   error.toString();
            // this.message = error.response.data.message
            this.message = error.response.data.errors
            // console.log(error.response.data.errors)
          this.successful = false;
        });
    },
    // })
  },
};
</script>

<style scoped>
.overlay {
  /*padding: 20%; */
  background-image: url("../assets/img/bg/SignUp.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: soft-light;
}

.badge {
  position: absolute;
  top: 20px;
  right: 40px;
  z-index: 999;
}
</style>
