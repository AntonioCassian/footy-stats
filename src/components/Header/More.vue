<template>
    <div class="d-flex">
        <ul class="list-cab w-50">
            <Item class="mor" icon="fa fa-apple" text="iOS App" />
            <Item class="mor" icon="fa fa-android" text="Android App" />
            <Item class="mor" icon="fa fa-calendar" text="Weekend's Matches" />
            <Item class="mor" icon="fa fa-user-circle" text="Player Stats" />
            <Item class="mor" icon="fa fa-list" text="Team Search" />
            <Item class="mor" icon="fa fa-list" text="Tables" />
            <Item class="mor" icon="fa fa-usd" text="Profitable Betting Systems" />
            <Item class="mor" icon="fa fa-graduation-cap" text=" The Academy" />
            <Item class="mor" icon="fa fa-newspaper-o" text="News" />
            <Item class="mor" icon="fa fa-window-close" text="Japanese Site" />
            <Item class="mor" icon="fa fa-window-close" text="Korean Site" />
            <Item class="mor" icon="fa fa-window-close" text="Indonesian Site" />
            <Item class="mor" icon="fa fa-window-close" text="Czech Site" />
            <Item class="mor" icon="fa fa-window-close" text="Chinese Traditional Site" />
            <Item class="mor" icon="fa fa-window-close" text="Chinese Simplified Site" />
            <Item class="mor" icon="fa fa-window-close" text="Norwegian Site" />
            <Item class="mor" icon="fa fa-window-close" text="Vietnamese Site" />
        </ul>
        <ul class="list-cab w-50">
            <Item class="mor" icon="fa fa-window-close" text="Turkish Site" />
            <Item class="mor" icon="fa fa-window-close" text="Portuguese Site" />
            <Item class="mor" icon="fa fa-window-close" text="Spanish Site" />
            <Item class="mor" icon="fa fa-window-close" text="Russian Site" />
            <Item class="mor" icon="fa fa-window-close" text="Danish Site" />
            <Item class="mor" icon="fa fa-window-close" text="French Site" />
            <Item class="mor" icon="fa fa-window-close" text="Swedish Site" />
            <Item class="mor" icon="fa fa-window-close" text="German Site" />
            <Item class="mor" icon="fa fa-window-close" text="Dutch Site" />
            <Item class="mor" icon="fa fa-window-close" text="Greek Site" />
            <Item class="mor" icon="fa fa-window-close" text="Polish Site" />
            <Item class="mor" icon="fa fa-window-close" text="Italian Site" />
            <Item class="mor" icon="fa fa-window-close" text="Romanian Site" />
            <Item class="mor" icon="fa fa-window-close" text="Croatian Site" />
            <Item class="mor" icon="fa fa-window-close" text="Thai Site" />
            <Item class="mor" icon="fa fa-window-close" text="Finnish Site" />
        </ul>
    </div>
</template>

<script>
import Item from './ItemList.vue'
export default {
    components: {Item}
}
</script>

<style>
.mor{
    background: linear-gradient(to top, #3e3e3e, #383838);
}
.mor > a{
    line-height: 1.8em;
}
</style>