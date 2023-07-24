<template>
    <div class="tableTitle">
        <div class="tabT">
            <a href="" class="linkT" :link="link">
                <div class="pais">
                    <span class="flag flag-eu fa-adjust-l4"></span>
                    {{ pais }} -
                </div>
                <Modal v-show="open" />
                <span class="competition ml-5">  {{ campeonato }}</span>
            </a>
             <div class="sta">
                <i class="fa fa-star star"  id="show-btn" @click="open = !open"></i>
             </div>
        </div>

        <div class="toggle"  v-b-toggle.:id="id">
            <i class="fa fa-sort-asc" aria-hidden="true"></i>
            <span>Hide Matches</span>
        </div>
    </div>
</template>

<script>
import Modal from '@/components/template/Modal.vue'
export default {
    name: 'TableTitle',
    props:['link', 'pais', 'campeonato', 'id'],
    components:{Modal},
    data() {
        return {
            open: false
        }
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
}
.linkT{
    display: inline-flex;
    text-decoration: none;
}

.linkT:hover{
    text-decoration: underline;
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
    line-height: 26px;
}

.star{
    color: #a7a7a7;
    cursor: pointer;
}
.star:hover{
    color: #d6ac04;
}

.toggle{
    float: right;
    color: #909CAD;
    font-size: 12px;
    text-align: center;
}

.toggle i {
    font-weight: 900;
    margin-right: 10px;
    position: relative;
    top: 2px;
}

</style>