<template>
    <div class="butt">
        <button block class="bt">
            <a href=""><i v-if="icon" :class="icon"></i>{{ text }}</a>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props:['icon', 'text']
}
</script>

<style scoped>
    .bt{
        background: rgba(0,0,0,0.11);
        border: 1px solid rgba(0, 0, 0, 0.15)!important;
        border-radius: 4px;
        width: 100%;
        text-align: center;
        padding: 15px;
    }
    .bt>a{
        text-decoration: none;
        font-size: 15px;
        font-weight: 600;
    }
    .bt > a:hover{
        text-decoration: underline;
    }
    
    i{
        margin-right: 4px;
    }
</style>