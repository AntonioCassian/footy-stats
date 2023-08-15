<template>
    <div class="leagues">
        <Header />
        <div class="tit-page titLeague">
            <div class="wrapper-top">
                <PageTitle title="World Football Leagues" class="siz"/>
            </div>
        </div>
        <div class="wrapper-top">
            <div class="di-f">
                <aside class="pd-l n-width">
                    <Title title="Search Actions"/>
                        <b-list-group>
                            <Item v-for="li in list" :key="li.id" :text="li.text" :icon="li.icon"/>
                        </b-list-group>
                    <Title title="Sort Teams"/>
                    <form>

                    </form>
                    <Title title="Similar Tools"/>
                    <b-list-group>
                            <Item v-for="li in lista" :key="li.id" :text="li.text" :icon="li.icon"/>
                        </b-list-group>
                </aside>

                <main class="pd">
                    <div class="heg" style="overflow:scroll;">
                        <div class="team firt">
                            <TeamHeader title="Countries / Ranking" icon="fa fa-sort-amount-desc" />
                            <ItHead v-for="he in head" :key="he.id" :head="he.name" :width="he.width" />
                        </div> 
                        <Country v-for='bod in body' :key="bod.id"  :link="bod.link" :country="bod.country"
                         :stat="bod.start" :year="bod.ano" :progres="bod.progres" :hwin="bod.hwin" 
                         :draw="bod.draw" :awin="bod.awin"  :avGoal="bod.avGoal" :btts="bod.btts" 
                         :gls="bod.gls" :avCor="bod.avCor" :total="bod.total"/>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import PageTitle from '@/components/template/PageTitle.vue'
import TeamHeader from '@/components/TabL/TeamHeader.vue'
import Item from '@/components/Filters/ListItem.vue'
import ItHead from '@/components/TabL/ItHead.vue'
import Title from '@/components/template/TitleS.vue'
import Country from '@/components/TabL/Item.vue'
export default {
    name: "Leagues",
    components: {Header, PageTitle, Title, Item, TeamHeader, ItHead, Country},
    data(){
        return {
            list: [
                {'id':0, 'text':'Edit Filters', 'icon': 'fa fa-sliders'},
                {'id':1, 'text':'Reset Filters', 'icon': 'fa fa-undo'}
            ],
            lista: [
                {'id':0, 'text':' Team Search', 'icon': 'fa fa-shirtsinbulk'},
                {'id':1, 'text':' Match Search', 'icon': 'fa fa-search'}
            ],
            head: [
                {'id': 0, 'name': 'Status', 'width': '78px'},
                {'id': 1, 'name': 'Year', 'width': '82px'},
                {'id': 2, 'name': 'Progress', 'width': '60px'},
                {'id': 3, 'name': 'Home Win %', 'width': '76px'},
                {'id': 4, 'name': 'Draw %', 'width': '50px'},
                {'id': 5, 'name': 'Away Win %', 'width': '73px'},
                {'id': 6, 'name': 'AVG Goals', 'width': '68px'},
                {'id': 7, 'name': 'BTTS %', 'width': '54px'},
                {'id': 8, 'name': '+2.5 GLS %', 'width': '70px'},
                {'id': 9, 'name': 'AVG Corners', 'width': '77px'},
                {'id': 10, 'name': 'Total Corners', 'width': '80px'}
            ],
            body: [
                        {'id': 0, 'link': 'Afghan Premier League', 'icon': 'fa fa-window-close','country': 'Afghanistan','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '78px'},
                        {'id': 1, 'link': 'CAF Champions League','icon': 'fa fa-window-close', 'country': 'Africa','start': 'Completed', 'ano': '2020', 'progres': '', 'hwin': '', 'draw': '', 'awin': '', 'avGoal': '', 'btts': '', 'gls': '', 'avCor': '', 'total': ''},
                        {'id': 2, 'link': 'CAF Confederations Cup' , 'icon': 'fa fa-window-close','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210'},
                        {'id': 3, 'link': 'CECAFA Club Cup' , 'icon': 'fa fa-window-close','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '76px'},
                        {'id': 4, 'link': 'COSAFA Womens Cup', 'icon': 'fa fa-window-close','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '50px'},
                        {'id': 5, 'link': 'Superliga', 'icon': 'fa fa-window-close', 'country': 'Albania','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '73px'},
                        {'id': 6, 'link': 'Superliga', 'icon': 'fa fa-window-close','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '68px'},
                        {'id': 7, 'link': 'Superliga', 'icon': 'fa fa-window-close', 'start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '54px'},
                        {'id': 8, 'link': 'Superliga', 'icon': 'fa fa-window-close', 'start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '70px'},
                        {'id': 9, 'link': 'Superliga', 'icon': 'fa fa-window-close','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '77px'},
                        {'id': 10, 'link': 'Superliga', 'icon': 'fa fa-window-close','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '80px'},
                        {'id': 11, 'link': 'Superliga', 'icon': 'fa fa-window-close','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '80px'},
                        {'id': 12, 'link': 'Superliga', 'icon': 'fa fa-window-close','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '80px'},
                        {'id': 13, 'link': 'Superliga', 'icon': 'fa fa-window-close','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '80px'},
                        {'id': 13, 'link': 'Superliga', 'icon': 'fa fa-window-close','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '80px'},
                        {'id': 13, 'link': 'Superliga', 'icon': 'fa fa-window-close','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '80px'},
                        {'id': 13, 'link': 'Superliga', 'icon': 'fa fa-window-close','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '80px'},
                        {'id': 13, 'link': 'Superliga', 'icon': 'fa fa-window-close','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '80px'},
                        {'id': 13, 'link': 'Superliga', 'icon': 'fa fa-window-close','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '80px'},
                        {'id': 13, 'link': 'Superliga', 'icon': 'fa fa-window-close','start': 'Completed', 'ano': '2020', 'progres': '100%', 'hwin': '73%', 'draw': '28%', 'awin': '7%', 'avGoal': '2.77', 'btts': '47%', 'gls': '47%', 'avCor': '9.88', 'total': '1210', 'width': '80px'},
                        
                        
                    ]
        }
    }
}
</script>

<style scoped>
    .titLeague{
        padding: 12px 16px;
    }
    
    .team {
        display: flex;
        width: 1044px;
        margin-bottom: 2px;
    }
    .firt{
        -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 10px;
    align-items: center;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 60;
    }
    .heg {
        height: 500px;
    }
    .n-width{
        width: 15%;
    }
</style>