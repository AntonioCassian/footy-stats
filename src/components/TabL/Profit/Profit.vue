<template>
    <div class="win">
        <div class="team">
            <div class="mr" style="width: 80px">
                <div class="profit-team back">
                    &nbsp;
                </div>
                <div class="profit-text">
                    100
                    <p class="text">Fixtures Tested</p>
                </div>
            </div>
            <Item v-for="pr in profit" :key="pr.id" :prof="pr.prof" :loss="pr.loss" :val="pr.val" :text="pr.text" />
        </div>
        <p class="profit-foot">What is Backtesting? How does it work? 
            <a href="">Read More 
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </a>
        </p>
        </div>
</template>

<script>
import Item from './ItProf.vue'
    export default {
        name: 'Profit',
        components: {Item},
        data() {
            return {
                profit: [
                    {'id': 0, 'prof': true, 'val': '+$2078', 'text': 'Away Win'},
                    {'id': 2, 'prof': true, 'val': '+$1753', 'text': 'Clean Sheet: Yes'},
                    {'id': 3, 'prof': true},
                    {'id': 4, 'prof': true},
                    {'id': 5, 'prof': true},
                    {'id': 6, 'prof': true},
                    {'id': 7, 'prof': true},
                    {'id': 8, 'prof': true},
                    {'id': 9, 'prof': true},
                    {'id': 10, 'prof': true},
                    {'id': 11, 'prof': true},
                    {'id': 12, 'prof': true},
                    {'id': 13, 'loss': true},
                    {'id': 14, 'loss': true},
                    {'id': 15, 'loss': true},
                    {'id': 16, 'loss': true},
                    {'id': 17, 'loss': true},
                    {'id': 18, 'loss': true},
                    {'id': 19, 'loss': true},
                    {'id': 20, 'loss': true},
                    {'id': 21, 'loss': true},
                ],
            }
        }
    }
</script>

<style>
    .fit-win{
        position: relative;
    display: block;
    width: 100%;
    display: flex;
    align-items: center;
    -webkit-box-align: center;
    margin-bottom: 2px;
    }
    .profit-header {
        padding: 0 5px;
        height: 30px;
        line-height: 30px;
        width: 100%;
        background: #E0E9F1;
        color: #253B51;
        font-size: 10px;
        font-weight: 500;
    }
    .team {
        display: flex;
        width: 78%;
        margin-bottom: 2px;
    }
    .profit-team {
        background: #2bab56;
        width: 100%;
        height: auto;
        color: white;
        font-size: 10px;
        text-align: center;
        padding: 4px;
        font-weight: bold;
    }
    .back{
        background: #E0E9F1;
        width: 80px;
        margin-right: 2px;
    }
    .profit-text {
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 0 10px;
        height: 76px;
        font-size: 13px;
        justify-content: center;
        font-weight: 500;
    }
    .gren {
        color: green;
    }
    .text{
        font-size: 11px;
        color: #375086;
        font-weight: 600;
        margin: 0;
    }

    .loss{
        background: #da5300;
    }
    .red{
        color: #993333!important;
    }

    .profit-foot{
        font-size: 12px;
        padding: 6px;
        margin-bottom: 0;
    }
    .profit-foot > a {
        color: #0066C0;
        text-decoration: none;
    }
    .profit-foot > a:hover {
        text-decoration: underline;
    }
    .profit-foot > a > i {
        font-weight: 900;
    }
    .mr{
        margin-right: 2px;
    }
</style>