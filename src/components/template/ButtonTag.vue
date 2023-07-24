<template>
    <div class="btTag">
        <a href="">
            <i v-if="icon" :class="icon"></i>{{ text }} <br v-if="tex"> {{ tex }}</a>
    </div>
</template>

<script>
    export default {
        name: 'btTag',
        props: ['text', 'icon', 'tex']
    }
</script>

<style>
    .btTag {
        border: 1px solid rgba(0, 0, 0, 0.15)!important;
        padding: 14px;
        text-align: center;
        line-height: 16px;
        margin-top: 28px;
    }
    .btTag>a{
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
    }
    .btTag > a:hover{
        text-decoration: underline;
    }
    
    i{
        margin-right: 4px;
    }
</style>