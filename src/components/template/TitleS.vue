<template>
    <div class="small title">
        <i v-if="icon" :class="icon"></i> 
        {{ title }}
        <p v-if="paragrap">{{ paragrap }}</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'icon', 'paragrap']
}
</script>

<style scoped>
    .title{
        padding: 0;
        margin-bottom: 1.5em!important;
        font-size: 15px;
        display: block;
        color: #35518c;
        font-weight: 600;
    }
      
</style>