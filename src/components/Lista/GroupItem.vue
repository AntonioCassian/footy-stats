<template>
    <b-list-group-item class="p-0 m-0 list-g" button>
        <div v-if="src" class="img-f">
            <img :src="src"/>
        </div>
        <div v-if="text" class="item-link">
            <a href="">
                <i v-if="icone" :class="icone"></i>
                {{ text }}
            </a>
            <span v-if="goals">
                Average Goals: {{ goals }}
            </span>
            <span v-if="go">
                Point Per Game: {{ go }}
            </span>
        </div>
        <div v-if="icon" class="icon-r">
            <a href="">
                <i :class="icon"></i>
            </a>
        </div>
        <a v-if="tex" href="" class="pad">
            {{ tex }}
        </a>
    </b-list-group-item>
</template>

<script>
export default {
    name: 'ItemGroup',
    props: ['src', 'icone', 'icon', 'text', 'goals', 'go', "tex"]
}
</script>

<style scoped>
    .list-g {
        display: flex;
        justify-content: space-between;
        gap: 2px;
        text-align: start;
        align-items: center;
    }
    .img-f {
        float: left;
        border-right: 1px solid #eaeaea;
        padding: 0.5em;
        background: #FFF;
        width: 15%;
        display: block;
    }
    .img-f > img {
        width: 100%;
    }

    .item-link {
        font-size: 12.5px;
        font-weight: 600;
        width: 68%;
        padding: 7.5px 0 0 10px;
        line-height: 14px;
    }
    .item-link > a{
        color: #0066c0;
        text-decoration: none;
    }
    .item-link > span {
        display: block;
        margin-top: 4px;
        font-size: 12px;
        font-weight: 400;
    }

    .icon-r{
        float: right;
        padding: 10px 15px 14px 18px;
    }
    i {
       font-weight: bold;
    }

    .pad{
        padding: 10px;
        color: #0066c0;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.4em;
    }
    .pad:hover{
        text-decoration: underline;
    }
</style>