<template>
  <section class="w-100">
    <div class="col ">
    <div class="overlay pt-5">
      <div class="row pt-5">
        <div class="col-md-8 m-auto mt-5 mb-3">
          <p class="h2 text-white fw-bolder fs-1 text-center">
            The smartest way to create your events and get your events SOLD OUT
            online
          </p>
        </div>
        <div class="col-md-7 m-auto mb-3">
          <p class=" text-white text-center">
            eventX is an all-in-one event ticketing platform for event organisers, promoters, 
and managers. Easily create, promote and manage your events of any type and size.
          </p>
        </div>
        <div class="d-flex justify-content-center mb-5">
          <button class="button-theme-2">CREATE EVENT</button>
        </div>

      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroLaning-vue",

  components: {},

  setup() {
    return {};
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
