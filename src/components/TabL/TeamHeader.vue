<template>
    <div class="titleH info alt">
        <i  v-if="icon" :class="icon"></i>
        {{ title }}
    </div>
</template>

<script>
export default {
    name: 'TitleH',
    props: ['title']
}
</script>

<style>
    .titleH {
        background: #ecf2f7ed;
        text-align: left;
        font-size: 12px;
        color: #16284c;
        padding: 0;
        margin: 0;
        width: 250px;
        padding-left: 10px;
        margin-right: 2px;
    }
    .mat > .titleH {
        width: 320px!important;
    }
    .info {
        position: sticky;
        left: 0;
        z-index: 50;
        margin-right: 2px;
    }
    .alt {
        line-height: 22px;
        height: 22px;
    }
</style>