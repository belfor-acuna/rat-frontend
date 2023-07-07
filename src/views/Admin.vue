<template>
    <div class="container" v-if="data"> <br><br>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
             <user
              v-for="user in users"
              :key="user._id"
              :userId="user._id"
            />
            </tbody>
        </table>
    </div>    
</template>
<script>
import { getMe } from "@/services/auth.service";
import {getUsers} from "@/services/admin.service.js";
import User from "@/components/User.vue"
export default {
  name: "AdminView",
  components:{
    User,
  },
  data(){
    return{
        admin:null,
        users:[]
    }
  },
  methods: {
    async getMeAdmin() {
      const admin = await getMe();
      this.admin = admin;
      if (admin.error) {
        this.admin = null;
      }
       const result = await getUsers({adminId:this.admin.user._id});
       this.users = result.users;
       console.log(this.users[0]._id);
       console.log(this.users)
    }
    
  },
  async mounted() {
    this.getMeAdmin();
  },
};
</script>
