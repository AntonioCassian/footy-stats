<template>
    <li class="list-it" @click="tog" :class="{active: toggle}">
        <div class="elip" > 
            <i :class="icon"></i>
            {{ text }}
        </div>

        <div class="fr">
            <div class="small-go">
            {{ num }}
            </div>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>

        <div class="colap" v-if="this.toggle === true">
            <div class="min-li">
                <div class="title">
                    Key Stats for 
                    <a href="" class="lin">
                        {{ text }}
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                </div>
                <ul class="min-list">
                    <li class="min-it">
                        <div class="text-min">
                        {{ kei }}
                    </div>
                    <div class="porc">
                        {{ val }}
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name:'ItemTog',
    props: ['icon', 'text', 'num', 'kei', 'val'],
    data () {
        return {
            toggle: false
        }
    },
    computed: {
        togg () {
            if(this.toggle == true) {
                return this.active
            }
        }
    },
    methods: {
        tog () {
            this.toggle = !this.toggle
        }
    }
}
</script>

<style scoped>
    .list-it{
        padding: 12px 0 7px;
        background: #fff;
        font-size: 12px;
        border-top: 1px solid #f5f5f5;
    }
    .elip{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 45%;
        display: inline-block;
        margin-right: 1em;
        font-weight: 500;
        font-size: 12px;
        margin-left: 12px;
    }

    .colap {
        background: #15264d!important;
        width: 100%;
        padding: 1em 1em 0.2em;
        color:#fff;
    }

    .title{
        display: block;
        font-size: 12px;
        font-weight: 500;
        color: #FFF;
        margin-bottom: 8px;
    }

    .min-list{
        margin: 0px;
        padding: 0px;
        width: 100%;
    }
    .min-li{
        padding: 0px;
    }

    .lin {
        display: inline;
        margin-left: 2px;
        color: #53ffba;
        text-decoration: none;
        font-weight: 600;
    }

    .lin > i {
        font-weight: 900;
        margin-left: 4px;
    }
    .it-sp i{
        color: #5d79b1;
        margin-right: 4px;
        font-size: 12px;
    }
    .fr{
        float: right;
    }
    .fr i {
        margin: 0 10px 0 12px;
        color: #bbc9e6;
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
    .min-it {
        display: flow-root;
        background: #15264d;
        border-bottom: 1px solid #354367;
        padding: 0px 4px;
        font-size: 11px;
        height: 26px;
        line-height: 25px;
    }
   .text-min{
        color: #d1deff;
        float: left;
        line-height: 25px;
   }

   .porc{
        float: right;
        line-height: 25px;
   }

    .active {
        background: #3e4c71;
        color: #fff;
   }
</style>