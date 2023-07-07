<template>
  <div class="container mt-2">
    <div v-if="resume" class="w-75 btn btn-outline-primery">
      <div class="row" style="">
        <div class="col-4">
          <img v-if="resume.photo" :src="resume.photo" class="w-75 rounded">
        </div>
        <div class="col-8">
          <h5>{{resume.name}}</h5>
          <p>{{resume.address}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"ResumeItem",
  props:{
    resume:{
      type:Object,
      default:null
    }
  },
  methods:{
    navigateTo({route, resume}){
      const resumeId = resume._id;
      this.$router.push({
        name:route,
        params:{
          id:resumeId
        }
      });
    }
  }
  
}
</script>
