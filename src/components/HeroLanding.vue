<template>
  <section class="w-100">
    <div class="col">
      <div class="overlay pt-5">
        <div class="row pt-5">
          <div class="col-md-8 m-auto mt-5 mb-3">
            <p class="h2 text-white fw-bolder fs-1 text-center">
              The smartest way to create your events and get your events SOLD
              OUT online
            </p>
          </div>
          <div class="col-md-7 m-auto mb-3">
            <p class="text-white text-center">
              eventX is an all-in-one event ticketing platform for event
              organisers, promoters, and managers. Easily create, promote and
              manage your events of any type and size.
            </p>
          </div>
          <div class="d-flex justify-content-center mb-5">
            <button
              class="button-theme-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropLive"
            >
              CREATE EVENT
            </button>

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
                      LogIn!
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <p class="fw-bolder fs-4 fst-italic">
                      You must Login to create an event on
                      <span class="theme">eventX</span>
                    </p>
                  </div>
                  <div class="modal-footer align-items-center">
                    <!-- <button
                      type="button"
                      class="btn btn-sm btn-outline-success shadow-none"
                    >
                      Cancel
                    </button> -->
                    <button
                      data-bs-dismiss="modal"
                      class="button-theme-2"
                      @click="onCreateEventAttempt"
                    >
                      SignIn
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- MODAL END -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroLaning-vue",

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  methods: {
    onCreateEventAttempt() {
      // if(!this.loggedIn){
      this.$router.replace("/login");
      // }
    },
  },
};
</script>

<style scoped>
.bg-none {
  background: none !important;
}

.overlay {
  background-image: url("../assets/img/bg/Hero.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: soft-light;
}

@media (max-width: 767px) {
  .ms-auto {
    margin: auto !important;
  }
}
</style>
