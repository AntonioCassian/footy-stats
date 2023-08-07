<template>
    <div class="feed-form">
        <span :class="icon" aria-hidden="true"></span>
        <input :type="type" :placeholder="place" :v-model="model"/>
    </div>
</template>
<script>
export default {
    name: 'Input',
    props: ['type', 'icon', 'place', 'model']
}
</script>

<style scoped>
    .feed-form {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    .feed-form > span{
        font-size: 16px;
        margin-right: 14px;
        flex-basis: 22px;
        text-align: center;
        color: #1f406b;
    }
    .feed-form > input {
        flex: 1;
        width: 80%;
        font-size: 14px;
        height: 34px;
        line-height: normal;
        padding: 1px 2px 1px 10px;
    }
</style>