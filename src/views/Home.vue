<template>
     <div class="container mt-5">
        <div class="row">
            <div class="col-xl-5 col-lg-6 mt-xl-3 mt-2" style="background-image: url(/static/images/background2.png);">
              <div class="jumbotron">
                <h1 class="display-1 fs-1">Pick your template</h1>
                <p class="lead">and start creating</p>
                <hr class="my-2">
                <p class="text-muted">Create your own resume in less than fifteen minutes and go get your dream job</p>
                <p class="lead">
                  <a class="btn btn-primary btn-lg" href="https://www.youtube.com/watch?v=mCdA4bJAGGk" role="button">Click me!</a>
                </p>
              </div>
          </div>
          <div class="col-xl-7 col-lg-6" style="background-image: url(/static/images/background2.png);">
            <div id="template-carousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#template-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-black bg-opacity-25" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#template-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-black bg-opacity-25" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default{
    name:"HomeView"
}
</script>
<style scoped>
body {
    background-image: url(../assets/background2.png);
    background-repeat: no-repeat;
  }
  /*---------------|Page transition|--------------------*/
  /* Define una animación de transición */
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  /* Aplica la animación a los elementos */
  .transition {
    animation-name: fade;
    animation-duration: 0.5s;
  }
  
  /* ----------------| NAV |--------------------------*/
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
    padding-bottom: 0px;
    background: -moz-linear-gradient(top,  rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%); 
    background: -webkit-linear-gradient(top,  rgba(0,0,0,0.2) 0%,rgba(0,0,0,0) 100%);
    background: linear-gradient(to bottom,  rgba(0, 0, 0, 0.2) 0%,rgba(0,0,0,0) 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); 
    }
  #navbarNavDropdown.collapsing .navbar-nav,
  #navbarNavDropdown.show .navbar-nav {
    background: #037582;
    padding: 12px;
  }
  
  .main-content{
    height: 100vh;
    display: grid;
    grid-template-columns: 2fr 3fr;
  }
  
  .left-container{
    margin-bottom:28.5%;
    margin-left: 5%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  
  .left-container h1,p{
    margin-top: 10%;
    margin-left: 10%;
  }
  
  .right-container{
    background-color: #3f8ebf;
    margin-right: 5%;
    margin-bottom: 19%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  
  #template-carousel{
    margin-top: 5%;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  
  #template-carousel img{
    margin-left: auto;
    margin-right: auto;
  }
  
</style>