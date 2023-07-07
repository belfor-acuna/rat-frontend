<template>
  <div id="mainNavigation">
    <nav role="navigation">
      <div class="py-3 text-center border-bottom">
        <img src="../assets/logo.png" width="150" />
      </div>
    </nav>
    <div class="navbar-expand-md">
      <div class="navbar-dark text-center my-2">
        <button
          class="navbar-toggler w-75 bg-primary bg-opacity-10 text-black"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
          <span class="align-middle">Menu</span>
        </button>
      </div>
      <div
        class="text-center mt-3 collapse navbar-collapse"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" @click="navigateTo('home')"
              >Home</a
            >
          </li>
          
            <li v-if="!user" class="nav-item">
              <a class="nav-link" @click="navigateTo('register')">Register</a>
            </li>
            <li v-if="!user" class="nav-item">
              <a class="nav-link" @click="navigateTo('login')">Login</a>
            </li>

          <li v-else class="nav-item">
            <a class="nav-link" @click="navigateTo('account')" style="cursor:pointer">{{user.user.username}} </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getMe } from "@/services/auth.service";
export default {
  name: "NavBar",
  methods: {
    navigateTo(route) {
      this.$router.push({
        name: route,
      });
    },
    async getMeNavbar() {
      const user = await getMe();
      this.user = user;
      if(user.error){
        this.user = null;
      }
},
  },
  data() {
    return {
      user: null,
    };
  },
  async mounted() {
    await this.getMeNavbar();
  },
};
</script>
<style scoped>
#mainNavigation a {
  font-size: 14px;
  letter-spacing: 2px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
}

.dropdown-menu {
  background: #03727d;
}
a.dropdown-toggle {
  color: #dfdfdf !important;
}
a.dropdown-item:hover {
  color: #03727d !important;
}
.nav-item a {
  color: #000000;
}
.nav-item a:hover {
  color: #fff;
}
.nav-item {
  min-width: 12vw;
}
#mainNavigation {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 123;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 );
}
#navbarNavDropdown.collapsing .navbar-nav,
#navbarNavDropdown.show .navbar-nav {
  background: #037582;
  padding: 12px;
}
</style>
