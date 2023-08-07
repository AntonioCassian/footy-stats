<template>
    <button class="submit-form">
        {{text}}
        <i v-if="icon" :class="icon"></i>
    </button>
</template>

<script>
export default{
    name: 'ButtonForm',
    props: ['text', 'icon']
}
</script>

<style scoped>
    .submit-form {
        width: 100%;
        padding: 0.5em 0;
        text-align: center;
        font-size: 20px;
        text-transform: uppercase;
        cursor: pointer;
        background: #27ae60;
        color: #fff;
        font-weight: 600;
        border: none;
        border-radius: 4px;
    }
    .submit-form:hover {
        opacity: 0.8;
    }

    .submit-form > i {
        font-size: 14px;
        padding-left: 20px;
        font-weight: 900;
    }
</style>