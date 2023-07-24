<template>
    <div class="caixaNav">
        <h2 class="title">List of Football Stats for 1500+ Competitions</h2>
        <ul class="caixaList">
            <li class="caixaIt">
                <a h-ref="" class="link">BTTS Stats</a>
            </li>
            <li class="caixaIt">
                <a h-ref="" class="link">Corner Stats</a>
            </li>
            <li class="caixaIt">
                <a h-ref="" class="link">Over 2.5 Goals Stats</a>
            </li>
            <li class="caixaIt">
                <a h-ref="" class="link">Expected Goals Stats</a>
            </li>
            <li class="caixaIt">
                <a h-ref="" class="link">Yellow & Red Card Stats</a>
            </li>
            <li class="caixaIt">
                <a h-ref="" class="link">1H/2H Goals Stats</a>
            </li>
            <li class="caixaIt">
                <a h-ref="" class="link">World Cup Stats</a>
            </li>
            <li class="caixaIt">
                <a h-ref="" class="link">Player Stats</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'caixaNav'
    }
</script>

<style scoped>
    .caixaNav{
        border: 1px solid #d2d2d2;
        border-radius: 4px;
        margin-bottom: 20px;
    }

    .title {
        font-size: 1em;
        background: #e2e2e2;
        color: #303D52;
        font-weight: 600;
        padding: 0.4em;
        margin: 0;
    }
    
    .caixaList {
        background: #fff;
        text-align: left;
        padding: 0;
        box-sizing: border-box;
        display: inline-block;
        margin: 0;
        height: 100%;
    }
    .caixaIt {
        font-size: 1em;
        font-weight: 600;
        width: 50%;
        float: left;
        padding: 0.4em;
        box-sizing: border-box;
    }
    .link{
        color: #0066c0;
        text-decoration: none;
    }
</style>