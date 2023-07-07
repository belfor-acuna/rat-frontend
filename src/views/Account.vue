<template>
  <div v-if="user">
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Account</title>
    </head>
    <body>
      <div>
        <h1>{{user.user.username}}</h1>
        <img :src="user.user.photo" alt="User Photo">
        <p>Email: {{user.user.email}}</p>
        <p>Name: {{user.user.name}}</p>
        <p>Surname: {{user.user.surname}}</p>
        <p>Address: {{user.user.adress}}</p>
        <p>Phone: {{user.user.phone}}</p>
        <p>LinkedIn: {{user.user.linkedin}}</p>
        <h2>Languages:</h2>
        <ul>
          <li v-for="(language, index) in user.user.languages" :key="index">
            <strong>{{language}}</strong>
          </li>
        </ul>
        <h2>Education:</h2>
        <ul>
          <li v-for="(education, index) in user.user.education" :key="index">
            <strong>Date:</strong> {{education[0]}}<br>
            <strong>Place:</strong> {{education[1]}}<br>
            <strong>Description:</strong> {{education[2]}}<br>
          </li>
        </ul>
        <h2>Proficiencies:</h2>
        <ul>
        </ul>
        <h2>Job Experience:</h2>
        <ul>
          <li v-for="(job, index) in user.user.jobExperience" :key="index">
            <strong>Date:</strong> {{job[0]}}<br>
            <strong>Place:</strong> {{job[1]}}<br>
            <strong>Description:</strong> {{job[2]}}<br>
          </li>
        </ul>
        <a @click="navigateTo('panel')" style="cursor:pointer">Editar</a>
      </div>
    </body>
    </html>
  </div>
</template>
<script>
import { getMe } from "@/services/auth.service";
export default {
  name: "AccountView",
  methods: {
    navigateTo(route) {
      this.$router.push({
        name: route,
      });
    },
    async getMeAccount() {
      const user = await getMe();
      this.user = user;
      if(user.error){
        this.user = null;
      }
},
  },
  data() {
    return {
      user: null,
    };
  },
  async mounted() {
    await this.getMeAccount();
  },
};
</script>
<style>
</style>
