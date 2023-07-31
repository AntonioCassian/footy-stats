<template>
    <div>
        <ul class="p-0">
            <li class="data-item">
                <i class="fa fa-info-circle data-ic"></i>    
                <div class="data">{{ table.times }}</div>
            </li>
            <li class="data-item">
                <i class="fa fa-calendar data-ic"></i>    
                <div class="data">{{ table.data }}</div>
            </li>
            <li class="data-item">
                <i class="fa fa-trophy data-ic"></i>    
                <div class="data">{{ table.competion }}</div>
                <i class="fa fa-window-close fl-rig"></i>
            </li>

            <li class="data-item data-ic">
                <i class="fa fa-money data-ic"></i>    
                <div class="data">{{ table.coint }} Coins by</div>
                <a href="" class="fl-rig li-icon">
                    View Predictions  
                    <span class="fa fa-angle-right"></span>
                </a>
            </li>
            
            <li class="data-item">
                <i class="fa fa-coins data-ic"></i>    
                <div class="data">
                    <a href="">View H2H Stats</a>
                </div>
            </li>
        </ul>
        <Table :winHom="tab.winHom" :winFor="tab.winFor" :pgHom="tab.pgHom" :pgFor="tab.pgFor" :scoredHom="scoredHom" :scoredFor="tab.scoredFor" />
    </div>

</template>

<script>
import Table from '../Table/TabPredic.vue'
export default {
    name: 'ItemSimples',
    props: ['table'],
    components: {Table}
}
</script>

<style scoped>
    .data-item {
        display: flex;
        padding-bottom: 11px;
        border-bottom: 1px solid #eaeaea;
        margin-bottom: 11px;
        width: 100%;
    }
    .data-item:last-child {
        padding: 0;
        margin: 0;
        border-bottom: none;
    }
    .data-ic{
        font-size: 12px;
        color: #749fb5;
        margin-right: 11px;
        display: inline-flex;
        align-items: center;
    }
    .data {
        font-weight: 500;
        font-size: 12px;
        color: #101c33;
    }
    .data > a, .li-icon {
        font-size: 12px;
        text-decoration: none;
    }
    .data > a:hover {
        text-decoration: underline;
    }
    .li-icon:hover {
        text-decoration: underline;
    }
    .fl-rig{
        margin-left: auto;
        margin-right: 0;
    }
    
</style>