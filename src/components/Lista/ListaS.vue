<template>
    <ul class="lista-s">
        <li class="cab">
            <span>Active Leagues</span>
        </li>

        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
        <Item icon="fa fa-window-close" text="U21 League"/>
    </ul>
</template>

<script>
import Item from './ItemS.vue'
export default {
    name: 'ListaSimples',
    components: {Item}
}
</script>

<style>
    .lista-s{
        height: 320px;
        background: #fff;
        overflow-y: scroll;
        padding: 0;
        margin-bottom: 0.5rem;
        margin-top: 20px;
    }
    .cab{
        position: sticky;
        top: 0;
        background: #fff;
        z-index: 100;
        height: 40px;
        line-height: 40px;
        box-shadow: 0 1px 4px 0 rgba(9, 17, 33, 0.15);
        padding: 0 11px;
        font-weight: 600;
    }
</style>