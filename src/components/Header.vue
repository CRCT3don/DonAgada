<template>
  <header>
  <nav class="navbar navbar-expand-md glass bg-opacity-50 fixed-top navbar-light bg-light">
      <div class="container-fluid">
      <router-link class="navbar-brand" to="/"> <img src="../assets/img/logoIcon/eventXLogo.png" alt="" class="img-fluid logo-scope"> </router-link>
      <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav ms-auto mt-2 bg-dark bg-opacity-25 px-4 mx-3 mt-lg-0">
          <li class="nav-item active">
            <router-link class="nav-link gray-4" to="/">Home <span class="visually-hidden">(current)</span></router-link>
          </li>
          <li class="nav-item dropdown visually hidden">
            <a class="nav-link dropdown-toggle gray-4" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Explore Events</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <a class="dropdown-item gray-4" href="#" >Action 1</a>
              <a class="dropdown-item gray-4" href="#">Action 2</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link gray-4" href="#">Print Invoice</a>
          </li>
        </ul>
        <div class="d-flex my-2 my-lg-0">
        <router-link to="signup" class="button-theme-2 mx-3 h5">  SIGNUP </router-link>
        <router-link to="/login" class="btn theme d-flex align-items-center pt-3 shadow-none h4">  LOGIN </router-link>
        </div>
      </div>
    </div>
  </nav>
  </header>
</template>

<script>
export default {
  name: "RandomFacts-vue",

  setup() {
    return {};
  },
};
</script>

<style scoped>
  .logo-scope{
    width: 80px;
}
</style>
