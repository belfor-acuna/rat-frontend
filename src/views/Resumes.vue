<template>
  <div v-if="user">
    <div class="container-fluid"><br>
      <h1 class="text-dark mt-5">Lista de Curriculums</h1>
      <div class="col-xl-12">
        <div class="row">
          <resume-item
              v-for="resume in resumes"
              :key="resume._id"
              :resume="resume"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {listCV } from "@/services/cv.service.js";
import {getMe} from "@/services/auth.service.js";
import ResumeItem from "@/components/ResumeItem.vue";
export default {
  name: "ResumesView",
  components:{
    ResumeItem
  },
  methods: {
    navigateTo(route) {
      this.$router.push({
        name: route,
      });
    },
    async getMeResumes() {
      const user = await getMe();
      this.user = user;
      if(user.error){
        this.user = null;
      }
      await this.listResumes(this.user.user._id);
    },
    async listResumes(userId){
      const result = await listCV(userId);
      this.resumes = result.resumesUser;
    }
  },
  data(){
    return {
      user: null,
      resumes:[] 
    };
  },
  async mounted() {
    await this.getMeResumes();
  },
};
</script>
