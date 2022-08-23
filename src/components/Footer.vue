<template>
  <footer class="bg-black">
    <div class="row bg-black p-5 text-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-3 my-4 m-auto">
                <img
                  src="../assets/img/logoIcon/eventXLogo.png"
                  alt=""
                  class="img-fluid logo-scope mb-2"
                />
                <p class="fw-light font-18">
                  Designed and built with all the love in the world by the
                  eventX team with the help of our contributors.
                </p>

                <a
                  href="tel:"
                  class="text-decoration-none d-block font-18 theme"
                  ><i class="fa-solid fa-phone text-white me-2"></i>+234
                  8000000000</a
                >
                <a
                  href="mail:"
                  class="text-decoration-none d-block font-18 theme"
                  ><i class="fa-solid fa-envelope text-white me-2"></i
                  >hello@eaventx.com</a
                >
              </div>

              <div class="col-md-2 my-4 m-auto">
                <p class="h5">Useful Links</p>
                <ul class="list-group">
                  <li class="list-unstyled">
                    <router-link to="/" class="nav-link text-white fw-light"
                      >Explore eventX
                    </router-link>
                  </li>
                  <li class="list-unstyled">
                    <router-link
                      to="/"
                      class="nav-link text-white fw-light"
                      >Pricing
                    </router-link>
                  </li>
                  <li class="list-unstyled">
                    <router-link
                      to="/"
                      class="nav-link text-white fw-light"
                      >Print Ticket
                    </router-link>
                  </li>
                  <li class="list-unstyled">
                    <router-link
                      to="/"
                      class="nav-link text-white fw-light"
                      >Pages
                    </router-link>
                  </li>
                </ul>
              </div>

              <div class="col-md-2 my-4 m-auto">
                <p class="h5">Resources</p>
                <ul class="list-group">
                  <li class="list-unstyled">
                    <router-link to="/" class="nav-link text-white fw-light"
                      >Blog
                    </router-link>
                  </li>
                  <li class="list-unstyled">
                    <router-link
                      to="/"
                      class="nav-link text-white fw-light"
                      >Pricing
                    </router-link>
                  </li>
                  <li class="list-unstyled">
                    <router-link
                      to="/"
                      class="nav-link text-white fw-light"
                      >Refer a friend
                    </router-link>
                  </li>
                </ul>
              </div>

              <div class="col-md-2 my-4 m-auto">
                <div class="my-2">
                  <p class="h5">FOLLOW US</p>
                  <a href="">
                    <i class="fa-brands fa-twitter text-white-50 mx-2"></i
                  ></a>
                  <a href="">
                    <i class="fa-brands fa-linkedin text-white-50 mx-2"></i
                  ></a>
                  <a href="">
                    <i class="fa-brands fa-facebook text-white-50 mx-2"></i>
                  </a>
                  <a href=""
                    ><i class="fa-brands fa-behance text-white-50 mx-2"></i
                  ></a>
                  <a href=""
                    ><i class="fa-brands fa-instagram text-white-50 mx-2"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-light border-light border-top text-center m-auto py-2 m-auto opacity-50">
      <!-- <div class="col-md-10 "> -->
      <div class="col-md-4 text-center m-auto">
        <small>@LightLife Ministries 2022. All rights reserved </small>
      </div>
      <div class="col-md-4 text-center m-auto">
        <small
          >Designed with ❤ by
          <span>
            <a href="https://twitter.com/gr8QM__" class="text-decoration-none"
              >gr8QM</a
            ></span
          >
        </small>
      </div>
      <!-- </div> -->
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer-vue",
};
</script>

<style scoped>
.logo-scope {
  width: 40%;
}
</style>
