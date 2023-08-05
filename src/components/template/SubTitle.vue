<template>
    <div class="subtitle log">
        <h2 v-if="!this.sub == ''" class="sub">{{ sub }}</h2>
        <p>{{ paragraph }}</p>
    </div>
</template>

<script>
export default {
    name: "Subtitle",
    props:['sub', 'paragraph']
}
</script>

<style scoped>
    .subtitle h2{
        color: #222;
        font-size: 15px;
        font-weight: bold;
    }
    .subtitle p {
        line-height: 19px;
        text-align: left;
        font-size: 13px;
    }

    .log > h2{
        font-size: 23px;
    }
</style>