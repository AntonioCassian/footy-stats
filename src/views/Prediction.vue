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
                        <TogPred v-for="tab in table.slice(0, 8)" :key="tab.id" :table="table"/>
                    <div class="pb-3" />
                        <TogPred v-for="tab in table.slice(8, 15)" :key="tab.id" :table="table"/>
                    
                    <Video />
                        <TogPred v-for="tab in table.slice(8, 22)" :key="tab.id" :table="table" :visib="tab.vs"/>
                        <div class="vis">
                            <Visible />
                            <TogPred class="filt" v-for="tab in table.slice(8, 15)" :key="tab.id" :table="table" :visib="tab.vs"/>
                        </div>
                </main>

                <aside class=" pd-l pd-r">
                    <Title title="Predictions by League" />
                    <b-list-group class="list-filt mb-4">
                        <Item v-for="li in league" :key="li.id" :text="li.text" :icon="li.icon" />
                    </b-list-group>
                    
                    <Title title="In Numbers" />
                    <Card num="390" text="Predictions In Last 24 Hours" />
                    <Card num="568,663" text="Total Predictions Placed" />
                    <Card num="222,373,655,579" text="Total Coins Spent" />

                    <Title title="Related Pages" class="mt-3" />

                    <b-list-group class="list-filt">
                        <Item v-for="li in pages" :key="li.id" :text="li.text" />
                    </b-list-group>
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
import Card from '@/components/template/NumElem.vue'
import Video from '@/components/Embed/PredicEmbed.vue'
import Visible from '@/components/template/Visb.vue'
    export default {
        name: 'Prediction',
        components: {Header, PageTitle, Title, Item, TogPred, Card, Video, Visible},
        data() {
            return {
                limit: 9,
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
                {'id': 6, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 7, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 8, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 9, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 10, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 11, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 12, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 13, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 14, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 15, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 16, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 17, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 18, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 19, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 20, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71},
                {'id': 21, 'times': 'TPS vs SJK Akatemia' ,'market': 'Home Win', 'odds': 1.63, 'data': '29th July at 07:15pm', 'competion': 'Úrvalsdeild', 'coins': 1000, 'winHom': '71%', 'winFor': '0%', 'pgHom': 2.29, 'pgFor': 0.29, 'scoredHom': 3, 'scoredFor': 0.71}
            ],

            league: [
                {'id': 0, 'icon': 'fa fa-window-close', 'text': ' Premier League Predictions'},
                {'id': 1, 'icon': 'fa fa-window-close', 'text': ' La Liga Predictions'},
                {'id': 2, 'icon': 'fa fa-window-close', 'text': ' Bundesliga Predictions'},
                {'id': 3, 'icon': 'fa fa-window-close', 'text': ' Serie A Predictions'},
                {'id': 4, 'icon': 'fa fa-window-close', 'text': ' MLS Predictions'},
            ],
            pages: [
                {'id': 0, 'text':'Football Tips'},
                {'id': 0, 'text':'BTTS Tips'},
                {'id': 0, 'text':'Corner Tips'},
                {'id': 0, 'text':'+2.5 Goals Tips'},
                {'id': 0, 'text':'Form Guide'},
                {'id': 0, 'text':'Team Search'},
                {'id': 0, 'text':'Match Search'}
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
        margin-right: 20px;
    }
    .pd-r{
        width: 25%;
        height: 100%;
        margin-right: 0;
    }
    .filt {
        filter: blur(4px);
    }
</style>