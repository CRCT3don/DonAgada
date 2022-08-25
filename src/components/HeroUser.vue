<template>
  <section class="w-100">
    <div class="col ">
    <div class="overlay pt-5">
      <div class=" py-5">
        <div class="col-md-4 m-auto mt-5 mb-3">
          <p class="h2 text-white fw-bolder fs-1 text-center">
            ...you think organize it, we get it sold out!
          </p>
        </div>
        <div class="col-md-7 m-auto mb-3">
          <p class=" text-white text-center">
            eventX is an all-in-one event ticketing platform for event organisers, promoters, and managers. Easily create, promote and manage your events of any type and size.
          </p>
        </div>
        <div class="d-flex justify-content-center mb-5">
          <button class="button-theme-2" data-bs-toggle="modal" data-bs-target="#createEvent">CREATE EVENT</button>
        </div>
      </div>
      </div>
    </div>
    <CreateEventModal />
  </section>
</template>

<script>
import CreateEventModal from './CreateEventModal.vue';
export default {
  name: "HeroLaning-vue",

  components: { CreateEventModal },

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
  background-image: url("../assets/img/bg/HeroUser.png");
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
