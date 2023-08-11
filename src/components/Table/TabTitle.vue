<template>
    <div class="mod-tab">
        <div class="tableTitle" :class="actived">
            <div class="tabT">
                <a href="" class="linkT" :link="link">
                    <div class="pais">
                        <span class="flag flag-eu fa-adjust-l4"></span>
                        {{ pais }} - 
                    </div>
                    <Modal v-show="open" />
                    <span class="competition ml-5">{{ campeonato }}</span>
                </a>
                <div class="sta">
                    <i class="fa fa-star star"  id="show-btn" @click="open = !open"></i>
                </div>
            </div>

            <div class="table-toggle" v-if="tab === undefined" @click=act>
                <i class="fa fa-sort-asc" aria-hidden="true"></i>
                <span>Hide Matches</span>
            </div>
            <div class="act" v-if="tab === true">
                <span class="act-mat">3 MATCHES</span>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
        </div>
        <div v-if="tab === undefined">
            <Table />
        </div>
    </div>
</template>

<script>
import Modal from '@/components/template/Modal.vue'
import Table from '@/components/Table/Table.vue'
export default {
    name: 'TableTitle',
    props:['link', 'pais', 'campeonato', 'id'],
    components:{Modal, Table},
    data() {
        return {
            open: false,
            tab: undefined,
            vis: false
        }
    },
    computed: {
        actived (){
            return {
                activtable: this.tab,

            }
        },
    },
    methods: {
        act() {
            this.tab = !this.tab
        }
    },
    watch: {
    }
}
</script>

<style scoped>
.tableTitle{
    padding: 4px 0px 8px 0px;
    display: block;
    position: relative;
}
.tabT {
    display: inline-flex;
    gap: 10px;
    line-height: 25px;
}
.linkT{
    display: inline-flex;
    text-decoration: none;
}

.linkT:hover {
    text-decoration: underline;
    color: #0066c0!important;
}

.pais{
    color: #222;
    font-size: 16px;
    font-weight: 700;
    display: block;
}

.competition{
    display: inline;
    color: #444;
    font-size: 12px;
    font-weight: 600;
    margin: 0;
    margin-left: 4px;
}

.star{
    color: #a7a7a7;
    cursor: pointer;
    font-size: 14px;
}
.star:hover{
    color: #d6ac04;
}

.table-toggle{
    float: right;
    color: #909CAD;
    font-size: 12px;
    text-align: center;
    position: relative;
    top: 5px;
}

.table-toggle i {
    font-weight: 900;
    margin-right: 10px;
    position: relative;
    top: 2px;
    cursor: pointer;
}

.activtable {
    background: #fff;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 3px 0 4px;
}
.activ-table:hover {
    border-color: #bed4e2;
}

.act {
    float: right;
    position: relative;
}
.act-mat {
    margin-right: 20px;
    color: #8B95A5;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
}

.act > i {
    width: 30px;
    padding: 0;
    background: #FFF;
    border-left: 1px solid #e4e4e4;
    border-radius: 0px 4px 4px 0;
    color: #2a6dd3;
    font-size: 18px;
    text-align: center;
}
</style>