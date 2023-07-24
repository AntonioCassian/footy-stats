<template>
    <div class="player">
        <ul class="list-play">
            <Item icon="fa fa-bar-chart" title="Top Goalscorers"/>
        </ul>
        <ul class="list-play">
            <Item icon="fa fa-bar-chart" title="Most Assists"/>
        </ul>
    </div>
</template>

<script>
import Item from './Item.vue'
export default {
    name: 'Player',
    props:['icon', 'title'],
    components: {Item}
}
</script>

<style scoped>
    .player{
        display: flex;
        justify-content: space-between;
    }
    .list-play{
        padding: 0;
        width: 49%;
    }
    
</style>