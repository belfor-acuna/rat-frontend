<template>
    <div v-if="user" class="container-fluid">
        <div class="row mt-5">
            <div class="col-xl-6 col-sm-12 bg-dark">
                <form @submit.prevent="submitForm" class="row g-3 text-white mt-1">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="name" v-model="user.user.name">
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Surname</label>
                        <input type="text" class="form-control" id="surname" v-model="user.user.surname">
                    </div>

                    <div class="col-12">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" v-model="user.user.email">
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"
                            v-model="user.user.adress">
                    </div>
                    <div class="col-md-6">
                        <label for="inputAddress2" class="form-label">Phone</label>
                        <input type="text" class="form-control" id="phone" placeholder="+56912345678"
                            v-model="user.user.phone">
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
                            <input type="text" class="form-control" id="graduationDate" v-model="user.user.education[0]">
                        </div>
                        <div class="col-md-5">
                            <label for="educationDescription" class="form-label">Description</label>
                            <input type="text" class="form-control" id="educationDescription"
                                v-model="user.user.education[2]">
                        </div>
                    </div>
                    <div class="row mt-3" id="profecienciesElement">
                        <div class="col-md-4">
                            <label for="proficiency" class="form-label">Proficiency</label>
                            <input type="text" class="form-control" id="proficiency" v-model="user.user.proficiencies[0]">
                        </div>
                        <div class="col-md-8">
                            <label for="proficiencyDescription" class="form-label">Description</label>
                            <input type="text" class="form-control" id="proficiencyDescription"
                                v-model="user.user.proficiencies[1]">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-4">
                            <label for="company" class="form-label">Company</label>
                            <input type="text" class="form-control" id="company" v-model="user.user.jobExperience[1]">
                        </div>
                        <div class="col-md-4">
                            <label for="fromDate" class="form-label">From</label>
                            <input type="text" class="form-control" id="fromDate" v-model="user.user.jobExperience[0]">
                        </div>

                        <div class="col-md-12 mt-2">
                            <label for="jobDescription" class="form-label">Description</label>
                            <input type="text" class="form-control" id="jobDescription"
                                v-model="user.user.jobExperience[2]">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Photo</label>
                        <input class="form-control" type="text" id="formFile" v-model="user.user.photo">
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
            <div class="col-xl-6 col-sm-12 bg-success">
                <div v-if="resume" class="col-8 w-100">
                    <div class="row fw-bold fs-2 mt-3 w-100 btn btn-primary">{{resume.name}}  {{ resume.surname }}</div>
                    <div class="text-start fw-bold text-dark"> {{resume.email}}</div>
                    <div class="row text-end fw-bold bg-danger fs-1">{{resume.phone}}</div>
                    <div class="row align-items-md-stretch">
                        <div class="col-md-6">
                            <div
                                class="h-100 p-5 text-white bg-primary border rounded-3">
                                <h2>Visita mi linkedin!</h2>
                                <a href="{{resume.linkedin}}">{{resume.linkedin}}</a>
                                <button class="btn btn-outline-primary" type="button">Example button</button>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div
                                class="h-100 p-5 bg-primary border rounded-3">
                                <h2>Contactame!</h2>
                                <img :src="resume.photo" alt="" class="w-100 rounded">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { createCv } from '@/services/cvservice';
import { getMe } from '../services/auth.service';
export default {
    name: "CreateResumeView",
    methods: {
        async getMeCreateResume() {
            const user = await getMe();
            this.user = user;
            if (user.error) {
                this.user = null;
            }
        },
        async submitForm() {
            const formData = { ...this.user.user };
            console.log(formData);
            const result = await createCv({name:formData.name,surname:formData.surname, email: formData.email,
            address: formData.address,
            languages: formData.languages,
            phone: formData.phone,
            education: formData.education,
            proficiencies: formData.proficiencies,
            linkedin: formData.linkedin,
            jobExperience: formData.jobExperience,
            photo: formData.photo, id:this.user.user._id });
            console.log(result);
            this.resume = result.resume;
        }
    }, data() {
        return {
            user: null,
            resume: null
        }
    },
    async mounted() {
        await this.getMeCreateResume();
    }
}
</script>