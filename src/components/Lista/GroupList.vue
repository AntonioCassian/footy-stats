<template>
    <b-list-group class="br-r">
        <GroupItem src="https://cdn.footystats.org/img/competitions/europe-uefa-champions-league_thumb.png"
         text="Tallinna FC Flora vs Raków Częstochowa" goals="1.00" icon="fa fa-angle-right"/>
        
        <GroupItem src="https://cdn.footystats.org/img/competitions/europe-uefa-champions-league_thumb.png"
         text="Tallinna FC Flora vs Raków Częstochowa" goals="1.00" icon="fa fa-angle-right"/>
        
        <GroupItem src="https://cdn.footystats.org/img/competitions/europe-uefa-champions-league_thumb.png"
         text="Tallinna FC Flora vs Raków Częstochowa" goals="1.00" icon="fa fa-angle-right"/>
        
        <GroupItem src="https://cdn.footystats.org/img/competitions/europe-uefa-champions-league_thumb.png"
         text="Tallinna FC Flora vs Raków Częstochowa" goals="1.00" icon="fa fa-angle-right"/>
        
        <GroupItem src="https://cdn.footystats.org/img/competitions/europe-uefa-champions-league_thumb.png"
         text="Tallinna FC Flora vs Raków Częstochowa" goals="1.00" icon="fa fa-angle-right"/>
    </b-list-group>
</template>

<script>
import GroupItem from './GroupItem.vue'
export default {
    name: 'GroupList',
    components: {GroupItem}
}
</script>

<style scoped>
    .br-r{
        border-radius: 4px 0px 4px 0
    }
</style>