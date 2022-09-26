<template>
    <!-- MODAL CONTENT -->

    <div
    class="modal fade"
    id="viewBooking"
    data-bs-keyboard="true"
    tabdindex="-1"
    aria-labelledby="staticBackdropLiveLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header" >
          <h6
            class="modal-title theme fw-bolder"
            id="staticBackdropLiveLabel"
          >
            I'm not there
          </h6>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        CAtch
        <div class="modal-body"  v-for="items in viewBookings" :key="items">
          <p class="fst-italic">
            {items.id} 
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary shadow-none"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL END -->
</template>

<script>
import userService from '@/services/user.service'

export default {
    mounted() {
      userService.viewBookings(this.deleteData)
    .then((response) =>{
      console.log(response)
      this.viewBookings = response
    },
    (error) => {
            console.log(error);
          })
    }
}

</script>

<style>

</style>