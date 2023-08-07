<template>
    <div class="links-form">
        <a href="" class="reg">
            {{text}}  
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </a>
    </div>
</template>

<script>
export default {
    name:'LinkForm',
    props: ['text'],
}
</script>

<style scoped>
    .links-form{
        color: #0066c0;
        text-align: center;
        font-size: 13px;
        margin: 25px 0 12px;
    }
    .reg{
        text-decoration: none;
        font-weight: 600;
    }
    .reg:hover{
        text-decoration: underline;   
    }
</style>