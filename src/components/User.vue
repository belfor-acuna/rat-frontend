<template>
    <tr>
        {{userId}}
    </tr>
</template>
<script>
export default {
    name:"UserDetail",
    props:{
        userId:{
            type:String,
            default:""
        }
    }
}
</script>
