<template>
    <div  class="mr-2" :style="style">
            <div class="head-tab alt" >
                {{ head }}
            </div>
    </div>
</template>

<script>
export default {
    name: 'headTab',
    props: ['head', 'width'],
    computed: {
        style() {
            return "width: " + (this.width || "80px")
        }
    }
}
</script>

<style scoped>
    .head-tab{
        background: #E0E9F1;
        padding: 0 4px;
        color: #253B51;
        text-align: center;
        font-size: 10px;
        font-weight: 500;
    }
    .mr-2{
        margin-right: 2px;
    }
    .alt {
        line-height: 22px;
        height: 22px;
    }
    .col {
        margin-right: 2px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    }
</style>