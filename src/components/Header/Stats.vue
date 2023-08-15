<template>
        <ul class="list-cab">
            <Item text="BTTS Stats" />
            <Item text="Over 1.5 Goals" />
            <Item text="Over 2.5 Goals" />
            <Item text="Under 2.5 Goals" />
            <Item icon="fa fa-flag" text="Corner Stats" />
            <Item text="1st / 2nd Half Goals" />
            <Item text="xG (Expected Goals) Stats" />
            <Item text="Scored In Both Halves" />
            <Item text="Common Scorelines" />
            <Item class="yl" icon="fa fa-stop" text="Yellow / Red Card Stats" />
            <Item text="Clean Sheet Stats" />
            <Item text="Referee Stats" />
            <Item text="Home Advantage Stats" />
            <Item text="Form Guide" />
            <Item text="Women's Football Stats" />
            <Item icon="fa fa-download" text="Download Data to CSV" />
            <Item icon="fa fa-clone" text="H2H Team Comparison" />
            <Item icon="fa fa-code" text="Stats API (JSON)" />
        </ul>
</template>

<script>
import Item from './ItemList'
    export default {
        name: 'stats',
        components: {Item}
    }
</script>
<style>
    .list-cab {
        padding: 0;
        line-height: normal;
    }
</style>