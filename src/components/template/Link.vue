<template>
    <div class="link">
        <i v-if="icon" :class="icon"></i>
        <span>{{ text }}</span>
    </div>
</template>

<script>
export default{
    name:'LinkHeader',
    props: ['icon', 'text', 'revert'],
    computed:{}
}
</script>

<style>
.link i{
    color: #fff;
    font-size: 14px;
    color: #fff;
}
.link span{
    color: #fff; 
    font-size: 14px;
    font-size: 14px;
    margin-left: 3px;
    font-weight: 300;
}
</style>