<template>
    <li>
        <a class="link-drop">
            <i v-if="icon" :class="icon"></i>
            {{text}}
        </a>
    </li>
</template>

<script>
export default {
    name: 'Item',
    props: ['icon', 'text']
}
</script>

<style>
    .link-drop {
        font-size: 12px;
        font-weight: 500;
        text-decoration: none;
        color: #fff;
        border-top: 1px solid #484848;
        border-bottom: 1px solid #2e2e2e;
        display: block;
        padding: 6px 10px;
        line-height: 2em;
    }
    .link-drop:hover {
        opacity: 0.7;
    }
    .yl > a > i{
        color: yellow;
    }
    .cent > a{
        color: #fff!important;
        line-height: 27px;
    }
</style>