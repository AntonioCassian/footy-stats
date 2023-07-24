<template>
    <div class="team">
        <ul class="li-team">
            <Item icon="fa fa-bar-chart" title="Top Goalscorers"/>
            <ItemTeam icon="flag flag-it-12" title="Top Goalscorers" goal="Goals" color=" #377d2f" background="#b7e8b3"/>
            <ItemTeam icon="flag flag-it-12" title="Top Goalscorers" goal="Goals"/>
            <ItemTeam icon="flag flag-it-12" title="Top Goalscorers" goal="Goals"/>
            <ItemTeam icon="flag flag-it-12" title="Top Goalscorers" goal="Goals"/>
            <ItemTeam icon="flag flag-it-12" title="Top Goalscorers" goal="Goals"/>
            <ItemTeam icon="flag flag-it-12" title="Top Goalscorers" goal="Goals"/>
            <ItemTeam icon="flag flag-it-12" title="Top Goalscorers" goal="Goals"/>
            <ItemTeam icon="flag flag-it-12" title="Top Goalscorers" goal="Goals"/>
        </ul>

        <ul class="li-team">
            <Item icon="fa fa-bar-chart" title="Concedes The Most"/>
        </ul>
    </div>
</template>

<script>
import Item from './Item.vue';
import ItemTeam from './ItemTeam.vue';
export default {
    name: 'ListTeam',
    components:{ItemTeam, Item}
}
</script>

<style scoped>
    .team{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .li-team{
        padding: 0;
        width: 49%;
    }
</style>