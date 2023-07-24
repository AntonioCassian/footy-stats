<template>
    <div class="small title">{{ title }}</div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
    .title{
        padding: 0;
        margin-bottom: 1.5em!important;
        font-size: 14px;
        display: block;
        color: #35518c;
        font-weight: 500;
    }
      
</style>