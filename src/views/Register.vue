<template>
  <div class="row">
    <div class="col-xl-4 col-lg-2"></div>
    <div class="col-xl-4 col-lg-8">
      <div class="row d-flex justify-content-center">
        <div class="col-xl-12 col-sm-8 d-flex justify-content-center">
          <a href="home-page.html">
            <img src="../assets/logo.png" class="mt-5 w-100" alt="">
          </a>
        </div>
      </div>
      <form @submit.prevent="onSubmit" action="home-page.html" method="get" id="register-form">
        <div class="container">
          <div class="row mt-4">
            <input class="form-control-lg bg-secondary rounded-pill" v-model="username" id="username" name="username"
              type="text" placeholder="Username" required minlength="2">
          </div>
          <div class="row">
            <input class="form-control-lg mt-2 bg-secondary rounded-pill" v-model="password" id="password" name="password"
              type="password" placeholder="Password" required minlength="8">
          </div>
          <div class="row">
            <input class="form-control-lg mt-2 bg-secondary rounded-pill" v-model="email" id="email" name="email"
              type="email" placeholder="Email" required>
          </div>
          <div class="row mt-5">
            <div class="col-md-6 d-flex justify-content-center"><a href="home-page.html"
                class="btn text-decoration-none rounded-pill"> Inicio</a></div>
            <div class="col-md-6 d-flex justify-content-center"><button class="btn text-white rounded-pill" type="submit"
                style="background-color: rgb(37, 150, 190);"> Sign up </button>
            </div>
          </div>
        </div>
      </form>
      <br><br><br><br><br><br>
    </div>
    <div class="col-xl-4 col-lg-2"></div>
  </div>
</template>
<script>
import { register } from '@/services/auth.service.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'RegisterView',
  setup() {
    const router = useRouter();

    const username = ref(null);
    const email = ref(null);
    const password = ref(null);
    const roles = ref(null);

    return {
      username,
      email,
      password,
      roles,

      async onSubmit() {
        const response = await register({
          username: username.value,
          email: email.value,
          password: password.value,
        });

        if (response.error) {
          return console.error(response.error);
        } else {
          console.log(response);
        }

        await router.push({ name: 'home' });
      },
    };
  },
};


</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  transition: all .5s ease-in-out;
}



#register-form input {
  border-style: hidden;
}

#register-form input:hover {
  background-color: #535353 !important;
}

#register-form .btn:hover {
  background-color: #535353 !important;
  color: #FFFFFF !important;
}

::placeholder {
  color: #FFFFFF !important;
  opacity: 0.5 !important;
  font-weight: lighter;
}

label {
  color: #535353;
}
</style>