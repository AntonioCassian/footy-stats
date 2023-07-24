<template>
    <div>
        <h2 class="title" v-if="!this.normal == ''" :normal="this.normal" :style="style">{{ title }}</h2>

        <a  class="li-sub" href="" v-if="!this.link == ''">
            <h2 class="title" :style="style">{{ title }}</h2>
            <i v-if="!this.icon == ''" :class="icon" :style="color"></i>
        </a>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'TitleTab',
    props: ['title', 'icon', 'color', 'normal', 'link'],
    computed: {
        style() {
            return "color: " + (this.color || "#000")
        }
    }
}
</script>

<style scoped>
    .title{
        font-size: 16px;
        font-weight: 600;
        padding-bottom: 1px;
        margin: 0;
    }

    .li-sub {
        display: flex;
        text-decoration: none;
    }
    .li-sub:hover {
        text-decoration: underline;
    }

    .li-sub i {
        line-height: 18px;
        margin-left: 5px;
        font-weight: bold;
    }

    hr{
        margin: 0;
    }
</style>