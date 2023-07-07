<template >
    <div class="container" v-if="data"> <br><br>
        <tr>
            <td>{{ user.username }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
        </tr>
    </div>
</template>
<script>
import { getUser } from "@/services/auth.service.js";
import { getMe } from '@/services/auth.service';


export default {
    name: "UserDetail",
    props: {
        userId: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            data: null,
            username: null,
            name: null,
            email: null,
            adminId: null
        }
    },
    async mounted() {
        const dt = await getUser(this.getMeUser ,this.userId);
        this.data = dt;
        this.username = dt.username;
        this.name = dt.name;
        this.email = dt.email;

    },
    methods: {
        async getMeUser() {
            const user = await getMe();
            this.user = user;
            if (user.error) {
                this.adminId = null;
            } else{
                this.adminId = user.user._id;
            }
        }
    },
};
</script>