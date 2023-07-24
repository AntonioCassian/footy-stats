<template>
    <li class="list-it">
        <a class="lin" href="">
            <i :class="icon"></i>
            {{ title }}
        </a>

        <div class="fr">
            <div class="small-go" :style="style && back">
            0
            <span class="go"> {{ goal }}</span>
        </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'Item',
    props:['icon', 'title', 'goal', 'color', 'background'],
    computed: {
        style() {
            return `color: ${this.color} !important`
        },
        back() {
            return "background: " + (this.background || "#eff2f5")
        }
    }
}
</script>

<style scoped>
    .list-it{
        padding: 0 12px;
        background: #fff;
        font-size: 12px;
        line-height: 40px;
        border-top: 1px solid #f5f5f5;
    }
    .lin{
        text-decoration: none;
    }
    .lin:hover {
        text-decoration: underline;
    }
    .it-sp i{
        color: #5d79b1;
        margin-right: 4px;
        font-size: 12px;
    }
    .fr{
        float: right;
    }
    .small-go {
        font-size: 12px;
        font-weight: 600;
        margin-left: 2px;
        color: #6b7a8a;
        background: #eff2f5;
        display: inline; 
        padding: 4px 6px;
        border-radius: 100px;
    }

    .go{
        font-size: 9px;
    }

</style>