<template>
    <li class="list-it">
        <span class="it-sp">
            <i :class="icon"></i>
            {{ title }}
        </span>

        <a href="" v-if="goal">
            <span class="it-sp">
            <i :class="icon"></i>
            {{ title }}
        </span>
        </a>

        <span v-if="goal">{{ goal }}</span>
    </li>
</template>

<script>
export default {
    name: 'Item',
    props:['icon', 'title', 'goal']
}
</script>

<style scoped>
    .list-it{
        padding: 0 12px;
        background: #fff;
        color: #16284c;
        font-size: 14px;
        line-height: 40px;
        font-weight: 600;
        cursor: inherit;
    }
    .it-sp i{
        color: #5d79b1;
        margin-right: 4px;
        font-size: 12px;
    }
</style>