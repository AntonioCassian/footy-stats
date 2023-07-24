<template>
    <div class="title-list">
        <i :class="icon"></i>
        {{ title }}
    </div>
</template>

<script>
export default {
    name: 'Title-list',
    props: ['icon', 'title']
}
</script>

<style scoped>
    .title-list {
        background: #23344D;
        padding: 0.8em;
        color: #FFF;
        font-weight: 600;
        border-radius: 4px 4px 0 0;
        margin-top: 28px;
    }
</style>