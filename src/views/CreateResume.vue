<template>
    <div v-if="user" class="container-fluid">
        <div class="row mt-5">
            <div class="col-xl-6 col-sm-12 bg-dark">
                <form class="row g-3 text-white mt-1">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">{{Nombre}}</label>
                    <input type="text" class="form-control" id="name" v-model="user.user.name">
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Surname</label>
                    <input type="text" class="form-control" id="surname" v-model="user.user.surname">
                </div>
                <div class="col-12">
                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">About you</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style="resize:none"></textarea>
                    </div>
                    </div>
                <div class="col-12">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4" v-model="user.user.email">
                </div>
                <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" v-model="user.user.adress">
                </div>
                <div class="col-md-6">
                <label for="inputAddress2" class="form-label">Phone</label>
                <input type="text" class="form-control" id="phone" placeholder="+56912345678" v-model="user.user.phone">
                </div>
                <div class="col-md-6">
                <label for="inputCity" class="form-label">LinkedIn</label>
                <input type="text" class="form-control" id="linkedIn" v-model="user.user.linkedin">
                </div>
                <div class="row mt-3">
                    <div class="col-md-4">
                        <label for="institution" class="form-label">Education</label>
                        <input type="text" class="form-control" id="institution" v-model="user.user.education[1]">
                    </div>
                    <div class="col-md-3">
                        <label for="graduationDate" class="form-label">Graduation date</label>
                        <input type="date" class="form-control" id="graduationDate" v-model="user.user.education[0]">
                    </div>
                    <div class="col-md-5">
                        <label for="educationDescription" class="form-label">Description</label>
                        <input type="text" class="form-control" id="educationDescription" v-model="user.user.education[2]">
                    </div>
                </div>
                <div class="row mt-3" id="profecienciesElement">
                    <div class="col-md-4">
                        <label for="proficiency" class="form-label">Proficiency</label>
                        <input type="text" class="form-control" id="proficiency" v-model="user.user.proficiencies[0]">
                    </div>
                    <div class="col-md-8">
                        <label for="proficiencyDescription" class="form-label">Description</label>
                        <input type="text" class="form-control" id="proficiencyDescription" v-model="user.user.proficiencies[1]">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-4">
                        <label for="company" class="form-label">Company</label>
                        <input type="text" class="form-control" id="company" v-model="user.user.jobExperience[1]">
                    </div>
                    <div class="col-md-4">
                        <label for="fromDate" class="form-label">From</label>
                        <input type="date" class="form-control" id="fromDate" v-model="user.user.jobExperience[0]">
                    </div>
                    
                    <div class="col-md-12 mt-2">
                        <label for="jobDescription" class="form-label">Description</label>
                        <input type="text" class="form-control" id="jobDescription" v-model="user.user.jobExperience[2]">
                    </div>
                </div>
                <div class="col-md-2">
                    Level
                    <select class="form-select" aria-label="Default select example">
                       <option selected disabled></option>
                       <option value="1">Basic</option>
                       <option value="2">Intermediate</option>
                       <option value="3">Advanced</option>
                       <option value="3">Native</option>
                    </select>
                   </div>
                <div class="mb-3">
                <label for="formFile" class="form-label">Photo</label>
                <input class="form-control" type="file" id="formFile">
                </div>
                <div class="col-12">
                <button type="submit" class="btn btn-primary">Update</button>
                </div>
                </form>
            </div>
            <div class="col-xl-6 col-sm-12 bg-light justify-content-center d-flex">
                <img src="/static/templates/template-test-4.png" class="w-100" alt="">
                <br>
            </div>
        </div>
    </div>
</template>
<script>
import { getMe } from '../services/auth.service';
export default {
    name:"CreateResumeView",
    methods:{
        async getMeCreateResume() {
      const user = await getMe();
      this.user = user;
      if(user.error){
        this.user = null;
      }
    },
    },data(){
        return{
            user:null
        }
    },
    async mounted(){
        await this.getMeCreateResume();
    }
}
</script>