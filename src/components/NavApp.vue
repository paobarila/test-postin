<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
<nav class="navbar navbar-dark  fixed-top">
  <div class="container-fluid justify-content-evenly">
    <img class="logo"  src="../assets/images/dibujo postin.png" alt="">
    <a class="navbar-brand fs-1 text-center" href="#">POSTIN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title fs-2" id="offcanvasDarkNavbarLabel">POSTIN</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <RouterLink to="/"><i class="bi bi-house-door fs-2">  Home</i></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/postin"><i class="bi bi-chat-square-heart fs-2">  Postin</i></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/login"><i class="bi bi-person fs-2">  Login</i></RouterLink>
          </li>
          
          <li class="nav-item">
            <RouterLink to="/about"><i class="bi bi-file-person fs-2">  About us</i></RouterLink>
          </li>
     
          <li class="nav-item">
            <RouterLink to="/rules"><i class="bi bi-list-check fs-2">  Rules</i></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact"><i class="bi bi-envelope-paper-heart fs-2">  Contact</i></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/work"><i class="bi bi-person-workspace fs-2">  Work whit us</i></RouterLink>
          </li>
                </ul>
        <!--<form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn" type="submit">Search</button>
        </form>-->
      </div>
    </div>
  </div>
</nav>

  <!--<nav class="sticky-top">
    <div class=" container-fluid d-flex justify-content-between">
      <div>
      <a class="navbar-brand" href="">
        <img src="../assets/images/postin.png" alt="logo" width="200" height="120">
      </a>
    </div>
      <div class="iconsnav m-5">
      <RouterLink to="/"><i class="bi bi-house-door fs-2 p-3"></i></RouterLink>
      <RouterLink to="/about"><i class="bi bi-file-person fs-2 p-3"></i></RouterLink>
      <RouterLink to="/rules"><i class="bi bi-list-check fs-2 p-3"></i></RouterLink>
      <RouterLink to="/work"><i class="bi bi-person-workspace fs-2 p-3"></i></RouterLink>
      <RouterLink to="/contact"><i class="bi bi-envelope-paper-heart fs-2 p-3"></i></RouterLink>
      <RouterLink to="/login"><i class="bi bi-person fs-2 p-3"></i></RouterLink></div> 
    </div>
  </nav>-->
</template> 


 <style scoped>
 .navbar{
  color:white!important;
  background-color:#256d85;
 }
.logo{
  width: 6em;
  height: 8em;
  margin-right: 2rem;
}
.navbar-brand{
  color: white;
  justify-content: space-evenly;
}
.offcanvas{
  background-color: #256d85;
}
i{
  text-decoration: none;
  color: white;

}
/*.btn{
background-color: coral;
color: white;
}*/
li{
  margin-bottom: 1rem;
}
</style>