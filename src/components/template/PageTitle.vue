<template>
    <div class="PageTitle">
        <h1 class="title" v-if="!title == ''">{{ title }}</h1>
        <p v-if="!this.paragraph == ''" class="paragraph">{{ paragraph }}</p>
    </div>
</template>

<script>
export default{
    name: 'PageTitle',
    props:{ 
        'title': {String},
        'paragraph': {String},
        'sub': {String, Boolean}
    },
    computed: {
        subC() {
            if(this.sub === '') {
                this.sub == this.disp
            }
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
    .PageTitle{
    }
    .title{
        font-size: 20px;
        line-height: 19px;
        font-weight: bold;
        display: inline-block;
    }

    .siz >.title[data-v-137f44b8]{
        font-size: 22px;
    }
    .matches >.title {
        font-size: 24px;
        margin-bottom: 0;
    }

    .predic > .title {
        font-size: 23px;
        margin-bottom: 0;
        color: #14294a;
        font-weight: 600;
    }
    .paragraph{
        font-size: 11px;
    }
    
    p{
        margin: 0
    }
</style>