<template>
    <li class="item">
        <i :class="icon"></i>
        <a href="">
            {{ text }}
        </a>
    </li>
</template>

<script>
export default {
    name: 'ItemSimples',
    props: ['icon', 'text']
}
</script>

<style scoped>
    .item {
        display: flex;
        padding-left: 10px;
        padding: 5px 16px;
    }
    .item > a {
        font-size: 12px;
        text-decoration: none;
    }
    .item > a:hover {
        text-decoration: underline;
    }
    .item i {
        margin-right: 16px;
    }
    .pad-over > .item {
        padding: 12px;
    }
</style>