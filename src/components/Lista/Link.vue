<template>
    <router-link  :to="to" class="link">
        <i v-if="icon" :class="icon"></i>
        <span v-if="text">{{ text }}</span>
    </router-link>
</template>

<script>
export default{
    name:'LinkHeader',
    props: {
        icon: {String},
        text: {String},
        to: {String}, 
        href: {String}
    },
    computed:{}
}
</script>

<style>
    .link, .lin{
        padding: 10px 8px;
        text-decoration: none;
        font-weight: 600;
    }
    .lin{
        color: #fff;
    }
    .link:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    .link i{
        color: #fff;
        font-size: 12px;
        font-weight: 900;
        margin: 0;
    }
    .link span{
        color: #fff; 
        font-size: 14px;
        margin-left: 6px;
    }


</style>