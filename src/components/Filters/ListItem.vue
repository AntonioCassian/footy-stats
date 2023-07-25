<template>
    <b-list-group-item class="item" href="#some-link" :class="{active: this.actived}">
        <i v-if="icon" :class="icon"></i> {{ text }}</b-list-group-item>
</template>

<script>
export default {
    name: 'ListItem',
    props: ['text', 'icon', 'actived']
}
</script>
<style scoped>
    .item{
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        font-weight: 500;
        display: block;
        color: #295cc4;
        font-size: 12px;
        padding: 0 0 0 1em;
        white-space: nowrap;
        max-width: 100%;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        border: none;
        border-radius: 0px;
    }
    .item:hover{
        background: #295cc4;
        color: #fff;
    }
    .list-group-item[data-v-53c66b96] {
        border-radius: 0;
    }
    .active[data-v-53c66b96]{
        background: #55a255!important;
        color: #fff!important;
    }
</style>