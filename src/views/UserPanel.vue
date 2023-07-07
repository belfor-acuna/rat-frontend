<template>
  <div v-if="panel==2 && user">
    <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Resume Adapter Template</title>
  </head>
  <br /><br /><br /><br /><br /><br />
  <body style="background-image: url(/static/images/background2.png)">
    <div class="container">
      <div class="row bg-light">
        <div class="col-xl-2 col-xs-6" style="background-color: #4e637a">
          <div class="row">
            <div class="col-12 d-flex justify-content-center">
              <a href="home-page.html"
                ><img src="/static/images/logos/logo.png" class="w-100 h-75 mt-2"
              /></a>
            </div>
          </div>
        </div>
        <div class="col-xl-10 col-xs-6">
          <h2 class="text-muted fw-bold mt-xl-3 mt-xs-1 ms-1">Account Settings</h2>
        </div>
      </div>
      <div class="row" style="background-color: #e4e4e4;">
        <div class="col-xl-2 col-xs-6" style="background-color: #303c49;">
          <div class="row mt-xl-3 ms-2 mt-xs-0">
            <h5 class="text-secondary">Account</h5>
          </div>
          <div class="row mt-xl-3 ms-2 mt-xs-0">
            <a @click="changePanel(1)" class=" ms-2 text-decoration-none"  style="color: #7a7c80;"> <i class="fa-solid fa-user text-dark fs-5"></i> General Info</a>
            <a @click="changePanel(2)" class=" ms-2 mt-3 text-decoration-none text-light"> <i class="fa-solid fa-lock text-dark fs-5"></i> Account Info</a>
            <a @click="navigateTo('resumes')" class=" ms-2 mt-3 text-decoration-none"  style="color: #7a7c80;"> <i class="fa-solid fa-book text-dark"></i> Your Resumes</a><br><br><br><br><br><br><br><br>

          </div>
          <div class="row justify-content-center">
            <a href="index.html" class="btn text-decoration-none fs-5" style="color: rgb(183, 185, 190);"> Log Out</a>
            <a @click="navigateTo('home')" class="btn text-decoration-none fs-5 bg-secondary text-light w-75 rounded-pill">Home</a>
          </div>
        </div>
        <div class="col-xl-10 col-xs-6">
          <div class="container mt-2 bg-light">
            <div class="row">
              <h4 class="text-muted fw-bold mt-2 ms-1">Account Information</h4>
              <p class="text-secondary fw-bold ms-1"> Setup your account email and password, this information is private and no one form RAT will ask you to give it.</p>
              <form @submit.prevent="editUser" method="put">
                <div class="row">
                  <div class="col-xxl-4 col-xs-12">
                    <label for="email" class="fw-bold text-secondary">EMAIL</label>
                    <input type="email" class="form-control w-75" id="email" name="email" v-model="user.user.email">
                  </div>
                  <div class="col-xxl-4 col-xs-12">
                    <label for="password" class="fw-bold text-secondary">PASSWORD</label>
                    <input type="password" class="form-control w-75" id="password" name="password" v-model="user.user.password">
                  
                  </div>
                  <div class="col-4 col-xs-12">
                    <button type="submit" class="btn btn-secondary mt-4 rounded-pill"> Save</button>
                  </div>
                </div> 
              </form>
            </div>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
  </div>
  <div v-if="panel==1 && user">
    <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Resume Adapter Template</title>
  </head>
  <br /><br /><br /><br /><br /><br />
  <body style="background-image: url(/static/images/background2.png)">
    <div class="container">
      <div class="row bg-light">
        <div class="col-xl-2 col-xs-6" style="background-color: #4e637a">
          <div class="row">
            <div class="col-12 d-flex justify-content-center">
              <a href="home-page.html"
                ><img src="/static/images/logos/logo.png" class="w-100 h-75 mt-2"
              /></a>
            </div>
          </div>
        </div>
        <div class="col-xl-10 col-xs-6">
          <h2 class="text-muted fw-bold mt-xl-3 mt-xs-1 ms-1">Account Settings</h2>
        </div>
      </div>
      <div class="row" style="background-color: #e4e4e4;">
        <div class="col-xl-2 col-xs-6" style="background-color: #303c49;">
          <div class="row mt-xl-3 ms-2 mt-xs-0">
            <h5 class="text-secondary">Account</h5>
          </div>
          <div class="row mt-xl-3 ms-2 mt-xs-0">
            <a @click="changePanel(1)" class=" ms-2 text-decoration-none text-light"  > <i class="fa-solid fa-user text-dark fs-5"></i> General Info</a>
            <a @click="changePanel(2)" class=" ms-2 mt-3 text-decoration-none" style="color: #7a7c80;"> <i class="fa-solid fa-lock text-dark fs-5"></i> Account Info</a>
            <a @click="navigateTo('resumes')" class=" ms-2 mt-3 text-decoration-none"  style="color: #7a7c80;"> <i class="fa-solid fa-book text-dark"></i> Your Resumes</a>

            <br><br><br><br><br><br><br><br>
          </div>
          <div class="row justify-content-center">
            <a href="index.html" class="btn text-decoration-none fs-5" style="color: rgb(183, 185, 190);"> Log Out</a>
            <a href="home-page.html" class="btn text-decoration-none fs-5 bg-secondary text-light w-75 rounded-pill">Home</a>
          </div>
        </div>
        <div class="col-xl-10 col-xs-6">
          <div class="container mt-2 bg-light">
            <div class="row">
              <h4 class="text-muted fw-bold mt-2 ms-1">General Information</h4>
              <p class="text-secondary fw-bold ms-1"> Setup your identity, when you create a new resume this information wil be used to autofill the respective fields</p>
              <form @submit.prevent="editUser" method="put">
                <div class="row">
                  <div class="col-xxl-4 col-xs-12">
                    <label for="first-name" class="fw-bold text-secondary">FIRST NAME</label>
                    <input type="text" class="form-control w-75" id="first-name" name="first-name" v-model="user.user.name">
                  </div>
                  <div class="col-xxl-4 col-xs-12">
                    <label for="last-name" class="fw-bold text-secondary">LAST NAME</label>
                    <input type="text" class="form-control w-75" id="last-name" name="last-name" v-model="user.user.surname">
                  
                  </div>
                  <div class="col-4 col-xs-12">
                    <button type="submit" class="btn btn-secondary mt-4 rounded-pill"> Save</button>
                  </div>
                </div>
              </form>
            </div>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
  </div>
</template>

<script>
import {editUser} from "@/services/user.service.js";
import {getMe} from "@/services/auth.service.js";
export default {
  name:"UserPanelView",
  data(){
    return{
      panel: 1,
      user: null,
    };
  },
  methods:{
    changePanel(panel){
      this.panel = panel
    },
    navigateTo(route) {
      this.$router.push({
        name: route,
      });
    },
    async getMePanel(){
      const user = await getMe();
      this.user = user;
      if(user.error){
        this.user = null;
      }
    },
    async editUser(){
      const formData = {...this.user.user};
      const result = await editUser({
        userId: formData._id,
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        password: formData.password
      });
      this.user = result.user;
    }
  },
  async mounted(){
    await this.getMePanel();
  }
}
</script>
