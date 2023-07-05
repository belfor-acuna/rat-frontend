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
            <form action="home-page.html" method="get" id="register-form">
                <div class="container">
                    <div class="row mt-4">
                        <input class="form-control-lg bg-secondary rounded-pill" id="username" name="username" type="text" placeholder="Username"  required minlength="2">
                    </div>
                    <div class="row">
                        <input class="form-control-lg mt-2 bg-secondary rounded-pill" id="password" name="password" type="password" placeholder="Password" required minlength="8">
                    </div>
                    <div class="row">
                        <input class="form-control-lg mt-2 bg-secondary rounded-pill" id="email" name="email" type="email" placeholder="Email" required>
                    </div>
                    <div class="form-check mt-4">
                      <input class="form-check-input" type="radio" name="role" id="Student" value="Student">
                      <label class="form-check-label" for="role">
                        Student
                      </label>
                    </div>
                    <div class="form-check mt-3">
                        <input class="form-check-input" type="radio" name="role" id="Professional" value="Professional">
                        <label class="form-check-label" for="role">
                          Professional
                        </label>
                      </div>
                      <div class="form-check mt-3">
                        <input class="form-check-input" type="radio" name="role" id="Other" value="Other" checked>
                        <label class="form-check-label" for="role">
                          Other
                        </label>
                      </div>
                      <div class="row mt-5">
                        <div class="col-md-6 d-flex justify-content-center"><a href="home-page.html" class="btn text-decoration-none rounded-pill"> Inicio</a></div>
                        <div class="col-md-6 d-flex justify-content-center"><button class="btn text-white rounded-pill" type="submit" style="background-color: rgb(37, 150, 190);">  Sign up </button>
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
export default {
    name:"RegisterView"
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    transition: all .5s ease-in-out;
  }
  
  
  
  #register-form input{
    border-style: hidden;
  }
  
  #register-form input:hover{
    background-color: #535353 !important;
  }
  
  #register-form .btn:hover{
  background-color: #535353 !important;
  color: #FFFFFF !important;
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