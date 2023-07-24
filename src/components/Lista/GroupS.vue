<template>
    <b-list-group class="br-r">
        <GroupItem tex="Monday's Football Fixtures"/>
        
        <GroupItem tex="Monday's Football Fixtures"/>
        
        <GroupItem tex="Monday's Football Fixtures"/>
        
        <GroupItem tex="Monday's Football Fixtures"/>
        
        <GroupItem tex="Monday's Football Fixtures"/>
     
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