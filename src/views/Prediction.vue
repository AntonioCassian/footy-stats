<template>
    <div class="prediction">
        <Header />
        <div class="predic-tit">
            <div class="wrapper-top" >
                <PageTitle class="predic" title="Football Predictions" />
            </div>
        </div>

        <div class="wrapper-top">
            <div class="di-f">
                <aside class="pd-l">
                    <Title title="View Feeds" icon="fa fa-sliders"/>
                    
                    <b-list-group class="list-filt">
                        <Item v-for="li in list" :key="li.id" :text="li.text" :icon="li.icon" :actived="li.actived"/>
                    </b-list-group>
                </aside>

                <main class="pd pd-pred">
                    <Title title="Predictions for Today" />
                    <TogPred v-for="tab in table" :key="tab.id" :table="table"/>
                </main>

                <aside>
                    
                </aside>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/template/Header.vue'
import PageTitle from '@/components/template/PageTitle.vue'
import Title from '@/components/template/TitleS.vue'
import Item from '@/components/Filters/ListItem.vue'
import TogPred from '@/components/Toggle/Prediction.vue'
    export default {
        name: 'Prediction',
        components: {Header, PageTitle, Title, Item, TogPred},
        data() {
            return {
                list: [
                {'id':0, 'text':'Today', 'icon': 'fa fa-calendar-o'},
                {'id':1, 'text':'Tomorrow', 'icon': 'fa fa-calendar-o'},
                {'id':2, 'text':'Profitable', 'icon': 'fa fa-line-chart'},
                {'id':3, 'text':'Latest', 'icon': 'fa fa-clock-o'},
                {'id':4, 'text':'Corners', 'icon': 'fa fa-flag'},
                {'id':5, 'text':'Mathematical Predictions', 'icon': 'fa fa-square'},
                {'id':6, 'text':'Premium', 'icon': 'fa fa-bolt'},
                {'id':7, 'text':'BTTS', 'icon': 'fa fa-exchange'},
                {'id':8, 'text':'Home Wins', 'icon': 'fa fa-futbol-o'},
                {'id':9, 'text':'Away Wins', 'icon': 'fa fa-futbol-o'},
                {'id':10, 'text':'Over 1.5', 'icon': 'fa fa-futbol-o'},
                {'id':11, 'text':'Over 2.5', 'icon': 'fa fa-futbol-o'},
                {'id':12, 'text':'Accumulator Tips', 'icon': 'fa fa-futbol-o'},
                {'id':13, 'text':'1X2 Tips', 'icon': 'fa fa-futbol-o'},
                {'id':14, 'text':'Correct Score', 'icon': 'fa fa-futbol-o'},
                {'id':14, 'text':'Leaderboard', 'icon': 'fa fa-trophy'},
            ],
            table: [
                {'id': 0, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 1, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 2, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 3, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 4, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 5, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
            ]
            }
        }
    }
</script>

<style scoped>
    .predic-tit {
        background: #fff;
        padding: 13px 16px;
    }
    .pd-pred {
        width: 50%;
    }
    
</style>