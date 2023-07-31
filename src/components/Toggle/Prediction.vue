<template>
    <div class="wrapper-tog">
        <div class="click-tog" @click="tog" :class="{activ: toggle}">
            <div class="pred-tit" :class="{activ: toggle}">
                <i class="fa fa-window-close ic"></i>
                <span class="tit" :class="{activ: toggle}">{{table.market}}</span>
                    {{table.times}}
            </div>

            <div class="result" :class="{activ: toggle}">
                <span class="key">To Play</span>
                    {{ table.odds }}
                <i class="fa fa-sort-desc" aria-hidden="true"></i>
            </div>
        </div>
        <div class="tog"  v-if="this.toggle === true">
            <div class="head">
                <div class="mark-tit">
                    <span class="tit-tab">Market</span>
                    <span class="bod">{{ table.market }}</span>
                </div>

                <div class="odds">
                    <span class="tit-tab">Odds</span>
                    <span class="bod">{{ table.odds }}</span>
                </div>
            </div>
            <List :table="table"/>
        </div>

    </div>
</template>

<script>
import List from '@/components/Lista/ListPred.vue'
export default {
    name: 'Prediction',
    components: {List},
    props: {table: Object},
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

<style>

    .wrapper-tog {
        background: #fff;
        margin-bottom: 5px;
    }

    .click-tog {
        display: flex;
        justify-content: space-between;
        background: #fff;
        height: 38px;
        line-height: 38px;
        align-items: center;
        font-size: 12px;
        color: #36528a;
        cursor: pointer;
        padding: 0 12px;
    }
    .pred-tit{
        font-weight: 300;
    }
    .ic {
        margin-right: 10px;
        font-size: 12px;
    }
    .tit{
        color: #36528a;
        font-weight: 600;
    }
    .result {
        color: #2c5ec1;
    }
    .key{
        color: #99a1b1;
        margin-right: 8px;
    }
    .result > i {
        position: relative;
        color: #99a1b1;
        margin-left: 8px;
        bottom: 2px;
    }

    .tog {
        padding: 12px;
    }
    .head {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        color: #101c33;
        font-weight: 600;
        margin-bottom: 1.7em;
    }
    .tit-tab {
        font-size: 12px;
        color: #0a8409;
        font-weight: 500;
    }
    .mark-tit, .odds {
        display: inline-flex;
        flex-direction: column;
    }
    .list-tog {
        
    }
    .activ {
        background: #16284c;
        color: #fff!important;
    }
</style>