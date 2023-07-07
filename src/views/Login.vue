<template>
    <div class="row">
        <div class="col-xl-4 col-lg-2"></div>
        <div class="col-xl-4 col-lg-8 mt-5">
            <div class="row d-flex justify-content-center">
                <div class="col-xl-12 col-sm-8 d-flex justify-content-center">
                    <a href="home-page.html">
                        <img src="../assets/logo.png" class="mt-5 w-100" alt="">
                    </a>
                </div>
            </div>
            <form @submit.prevent="onSubmit" class="form" id="login-form">
                <div class="container">
                    <div class="row mt-5">
                        <input v-model="email" class="form-control-lg bg-secondary rounded-pill" id="email" name="email" type="text" placeholder="Email"  required minlength="2">
                    </div>
                    <div class="row mt-4">
                        <input v-model="password" class="form-control-lg mt-2 bg-secondary rounded-pill" id="password" name="password" type="password" placeholder="Password" required minlength="8">
                    </div>
                      <div class="row mt-5">
                        <div class="col-md-4 d-flex justify-content-center"><a @click="navigateTo('home')" class="btn text-decoration-none rounded-pill"> Inicio</a></div>
                        <div class="col-md-4 d-flex justify-content-center"><a @click="navigateTo('register')" class="btn text-decoration-none rounded-pill"> Sign up</a></div>
                        <div class="col-md-4 d-flex justify-content-center"><button class="btn text-white rounded-pill" type="submit" style="background-color: rgb(37, 150, 190);">  Login </button>
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
import {login} from '@/services/auth.service.js';
import {setToken} from '@/services/helpers.js';
import {ref} from 'vue';
import {useRouter} from "vue-router";

export default {
    name:"LoginView",
    methods:{
        navigateTo(route){
            this.$router.push({name: route});
        },
    },
    mounted(){
        this.onLoginError();
    },
    setup(){
        const router = useRouter();

        const email = ref(null);
        const password = ref(null);

        return{
            email,
            password,

            async onSubmit(){
                const response = await login({
                    email: email.value,
                    password: password.value,
                });

                if(response.error){
                    return console.error(response.error);
                }else{
                    console.log(response);
                }

                setToken(response.token);
                await router.push({name: 'home'});
            },

            onLoginError(){
                console.error("Credentials missing.");
            }
        };
    },
};
</script>
<style scoped>

  #login-form input{
    border-style: hidden;
  }
  
  #login-form input:hover{
    background-color: #535353 !important;
  }
  #login-form .btn:hover{
    background-color: #535353 !important;
    color: #FFFFFF;
    }
  
  ::placeholder{
    color: #FFFFFF !important;
    opacity: 0.5 !important;
    font-weight: lighter;
  }
  
  label{
    color: #535353;
  }
  
  
</style>
