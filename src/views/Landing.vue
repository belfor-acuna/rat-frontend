<template>
    <div class="container-fluid">
         <div class="row mx-auto mt-5">
            <div class="col-xl-4 col-xs-6 mt-5">
                <div class="text-start">
                    <h1> Resume</h1>
                    <h1> Adapter</h1>
                    <h1> Template</h1>
                </div>
                
            <div class="row w-100 py-2 fw-bold">
                <div class="col-md-6 ">
                    <div
                        class="h-100 p-2 text-white bg-primary border rounded-3">
                        <p class="">Enter your information and browse through the variety of designs we have for you!</p>
                        <button class="btn btn-outline-dark" @click="navigateTo('register')">Sign Up</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <div
                        class="h-100 p-2 bg-primary border rounded-3">
                        <p class="text-light">Just choose a template and start working!</p>
                        <button class="btn btn-outline-dark mt-4" @click="navigateTo('login')">Login</button>
                    </div>
                </div>
            </div>
        
    
    </div>
    <div class="col-xl-8 col-xs-6">
        <img src="../assets/logo1.png" class="w-75" alt="">
    </div>
         </div>
    </div>
</template>
<script>
export default{
    name:"LandingView",
    methods:{
        navigateTo(route){
            this.$router.push({
                name:route
            })
        }
    }
}
</script>