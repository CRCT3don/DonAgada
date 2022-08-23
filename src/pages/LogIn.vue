<template>
  <div class="col-md-12">
    <!-- <div
      v-if="isLogIn"
      class="col-md-6 m-auto fixed-top alert alert-success alert-dismissible fade show"
      role="alert"
    >
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
      <strong>Success!</strong> Indicates a successful or positive action.
    </div> -->
    <div class="card">
      <div class="overlay p-4">
        <div class="text-center my-2 m-auto">
          <img
            src="../assets/img/logoIcon/eventXLogo.png"
            alt=""
            class="img-fluid logo-scoped m-auto"
          />
        </div>
        <div class="col-md-6 m-auto bg-black glass bg-opacity-50 rounded-3 p-4">
          <p class="fs-3 text-center fw-bolder card-title theme">LOGIN</p>
          <p class="text-center fw-normal fst-italic text-white">
            Login to continue from where we stopped!
          </p>
          <form
            class="col-md-12 my-4 px-4 pt-2 m-auto"
            @submit.prevent="handleLogin"
          >
            <div class="mb-4">
              <div class="col-md-12 my-3 m-auto px-3">
                <label for="email" class="form-label text-white fs-6 fst-italic"
                  >Email
                </label>
                <input
                  type="email"
                  class="input-theme"
                  id="email"
                  name="email"
                  v-model="user.email"
                />
              </div>
              <div class="col-md-12 my-3 m-auto px-3">
                <label
                  for="password"
                  class="form-label text-white fs-6 fst-italic"
                  >Password</label
                >
                <!-- <div
                  class="alert alert-danger"
                  role="alert"
                  v-if="error.has('email')"
                >
                  Please Check your email!
                </div> -->
                <input
                  type="password"
                  class="input-theme"
                  id="password"
                  name="password"
                  v-model="user.password"
                />
              </div>
              <!-- <div
                class="alert alert-danger"
                role="alert"
                v-if="error.has('password')"
              >
                Please Check your password!
              </div> -->
            </div>
            <div
              class="col-md-12 m-auto d-flex justify-content-center px-3 text-center"
            >
              <button class="button-theme text-decoration-none" :disabled="loading" type="submit">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>LOGIN</span>
              </button>
            </div>
            <div class="form-group">
              <div class="alert alert-danger" v-if="message" role="alert"> {{message}} </div>
            </div>
          </form>

          <div class="col-md-8 m-auto">
            <p class="text-center text-white fst-italic fw-normal">
              New here? Let’s help you
              <router-link
                to="/signup"
                class="text-decoration-none fw-bolder theme fs-5"
                >CREATE ACCOUNT</router-link
              >
            </p>
          </div>
          <div class="col-md-4 m-auto">
            <small class="fst-italic text-white text-center">
              Copyright Events @2022
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from '@/models/user';

export default {
  name: "LogIn-vue",

  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    }
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },

  created(){
    if(this.loggedIn){
      this.$router.replace('/userpost')
    }
  },

  methods:{
    handleLogin() {
      this.loading = true
      // this.$validator.validateAll()
      // .then(isValid => {
      //   if(!isValid) {
      //     this.loading = false
      //     return
      //   }
        if (this.user.email && this.user.password){
          this.$store.dispatch('auth/login', this.user)
          .then(() => {
            // this.$router.replace('/userpost')
          },
          error => {
            this.loading = false
            this.message = (error.response && error.response.data) || error.message || error.toString()
          })
        } else {
        alert('error')
        this.loading = false
        }
      // })
    }
  }

  // data() {
  //   return {
  //     email: "",
  //     password: "",
  //     errors: [],
  //     error: "",
  //     isLogIn: false
  //   };
  // },

  // methods: {
  //       loglIn() {
  //     const login = {
  //       method: "POST",
  //       url: "/api/signin",
  //       headers: {'Content-Type' : 'application/json', Authorization: 'Bearer'},
  //       data: {
  //           email: this.email,
  //           password: this.password,
  //         },
  //     };

  //     axiosInstance
  //       .request(login)
  //       .then((response) => {
  //         console.log(response.data);
  //         this.isLogIn = true;
  //         this.$router.replace("/userpost");
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   },
  // },
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
  width: 150px;
}
</style>
