<template>
    <ul class="togList">
        <Item icon="fa fa-bar-chart" title="Top BTTS Leagues" />
        <ItemTog icon="fa fa-window-close" text="South Australia State League 1 Reserves" kei="Season Progress" val="80%" />
        <ItemTog icon="fa fa-window-close" text="South Australia State League 1 Reserves" kei="Season Progress" val="80%" />
        <li class="text-center link-lis">
            <a href="">
                View Full Stats  
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </a>
        </li>
    </ul>
</template>

<script>
import ItemTog from './ItemTog'
import Item from '@/components/Statics/Item.vue'
export default {
    name: 'ListToggle',
    components: {ItemTog, Item}
}
</script>

<style>
    
</style>