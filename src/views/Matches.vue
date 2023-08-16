<template>
    <div class="leagues">
        <Header />
        <div class="tit-page titLeague">
            <div class="wrapper-top">
                <PageTitle title="Football Match Filter" class="matches"/>
            </div>
        </div>
        <div class="matches-winner">
            <i class="fa fa-lock" aria-hidden="true"></i>
            <span>Limited Search</span>
            <span>Max 25 Results</span>
            <span>Found 1543 Matches</span>
        </div>
        <div class="wrapper-top">
            <div class="di-f">
                <aside class="pd-l n-width">
                    <Title title="Search Actions"/>
                        <b-list-group class="list-filt">
                            <Item v-for="li in list" :key="li.id" :text="li.text" :icon="li.icon" :actived="li.actived"/>
                        </b-list-group>
                    <Title title="Sort Teams"/>
                    <Form />
                    
                    <Sidebar />
                    
                </aside>

                <main class="pd">
                    <div class="firt-win">
                        <div class="profit-header w-100">
                            <b>Backtesting (Profit/Loss)</b>
                            - If you bet in past fixtures using this filter...
                        </div>
                    </div>
                    <Modal v-show="open"/>
                    <div class="match-profile">
                        <Profit />
                    </div>
                    <div class="heg" style="overflow:scroll;">
                        <div class="team firt mat">
                            <TeamHeader  title="KO Time" icon="fa fa-sort-amount-asc" />
                            <ItHead v-for="he in head" :key="he.id" :head="he.head" :width="he.wd" />
                        </div> 
                        <Match v-for='bod in body' :key="bod.id" :tm="bod.tm" :hr="bod.hr" :divi="bod.divi" :comp1="bod.comp1" :comp2="bod.comp2" :val1="bod.val1" :val2="bod.val2"
                         :avg="bod.avg" :btts="bod.btts" :u15="bod.u15" :d25="bod.d25" :corners="bod.corners" :cards="bod.cards" :z05="bod.z05" :t35="bod.t35" :hr1="bod.hr1" :hr2="bod.hr" :homex="bod.homex"
                         :awayx="bod.awayx"  :btts1="bod.btts1" :btt2="bod.btt2" :hwo="bod.hwo" :drodds="bod.drodds" :awo="bod.awo" :btyo="bod.btyo" :odds05="bod.odds05" :odds15="bod.odds15" 
                         :odds25="bod.odds25" :odds35="bod.odds35" :m1odds="bod.m1odds" :m2odds="bod.m2odds" :m3odds="bod.m3odds" :off="bod.off" :cor85="bod.cor85" :cor95="bod.cor95" :cor10="bod.cor10"/>
                    </div>
                </main>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import PageTitle from '@/components/template/PageTitle.vue'
import TeamHeader from '@/components/TabL/TeamHeader.vue'
import Item from '@/components/Filters/ListItem.vue'
import Form from '@/components/Filters/Form.vue'
import ItHead from '@/components/TabL/ItHead.vue'
import Title from '@/components/template/TitleS.vue'
import Match from '@/components/TabL/Match.vue'
import Profit from '@/components/TabL/Profit/Profit.vue'
import Sidebar from '@/components/template/Sidebar.vue'
import Modal from '@/components/template/Modal.vue'
import Footer from '@/components/Footer/Footer.vue'
export default {
    name: "Leagues",
    components: {Header, PageTitle, Title, Item, Form, TeamHeader, ItHead, Match, Profit, Sidebar, Modal, Footer},
    data(){
        return {
            open: false,
            list: [
                {'id':0, 'text':'Edit Filters', 'icon': 'fa fa-sliders'},
                {'id':1, 'text':'Saved Games', 'icon': 'fa fa-star'},
                {'id':2, 'text':'Reset Filters', 'icon': 'fa fa-undo'},
                {'id':3, 'text':' Download CSV', 'icon': 'fa fa-download'},
                {'id':4, 'text':'Backtest CSV', 'icon': 'fa fa-download'},
                {'id':5, 'text':'Go Premium', 'icon': 'fa fa-star', 'actived': true},
                {'id':6, 'text':'Team Search', 'icon': 'fa fa-shirtsinbulk'},
            ],

            head: [
                {'id': 0, 'head':'AVG', 'wd': '56px'},
                {'id': 1, 'head':'BTTS', 'wd': '56px'},
                {'id': 2, 'head':'+1.5 GLS', 'wd': '60px'},
                {'id': 3, 'head':'+2.5 GLS', 'wd': '60px'},
                {'id': 4, 'head':'Corners', 'wd': '56px'},
                {'id': 5, 'head':'Cards', 'wd': '56px'},
                {'id': 6, 'head':'+0.5 GLS', 'wd': '60px'},
                {'id': 7, 'head':'+3.5 GLS', 'wd': '60px'},
                {'id': 8, 'head':'+0.5 1H GLS', 'wd': '76px'},
                {'id': 9, 'head':'Home xG', 'wd': '61px'},
                {'id': 10, 'head':'Away xG', 'wd': '58px'},
                {'id': 11, 'head':'1H BTTS', 'wd': '60px'},
                {'id': 12, 'head':'2H BTTS', 'wd': '60px'},
                {'id': 13, 'head':'Home Win Odds', 'wd': '92px'},
                {'id': 14, 'head':'Draw Odds', 'wd': '69px'},
                {'id': 15, 'head':'Away Win Odds', 'wd': '89px'},
                {'id': 16, 'head':'BTTS:YES Odds', 'wd': '91px'},
                {'id': 17, 'head':'+0.5 Odds', 'wd': '66px'},
                {'id': 18, 'head':'+1.5 Odds', 'wd': '66px'},
                {'id': 19, 'head':'+2.5 Odds', 'wd': '66px'},
                {'id': 20, 'head':'+3.5 Odds', 'wd': '66px'},
                {'id': 21, 'head':'-1.5 Odds', 'wd': '63px'},
                {'id': 22, 'head':'-2.5 Odds', 'wd': '63px'},
                {'id': 23, 'head':'-3.5 Odds', 'wd': '63px'},
                {'id': 24, 'head':'Offsides', 'wd': '58px'},
                {'id': 25, 'head':'+8.5 Corners', 'wd': '78px'},
                {'id': 26, 'head':'+9.5 Corners', 'wd': '78px'},
                {'id': 27, 'head':'+10.5 Corners', 'wd': '83px'}
           ],
            body: [
                    {'id': 0, 'tm': '22nd', 'hr':'15:30', 'divi': 'Primera División', 'comp1': 'San Lorenzo', 'comp2': 'Argentinos Juniors', 'val1': '1.56', 'val2': '1.56', 
                    'avg': '1.00', 'btts': '8%','u15': '19%' ,'d25': '12%', 'corners': '', 'cards': '', 'z05': '66%', 't35': '4%', 'hr1': '27%', 'homex': '1.39', 'awayx': '1.43', 'btts1': '4%', 'btt2': '0%', 'hwo': '2.30', 'drodds': '2.88', 'awo': '3.40', 'btyo': '2.25', 'odds05': '1.12', 'odds15': '1.60', 'odds25': '2.88', 'odds35': '5.50', 'm1odds': '2.20', 'm2odds': '1.40', 'm3odds': '1.12', 'off': '4.23', 'cor85': '', 'cor95': '', 'cor10': ''},    
                    {'id': 0, 'tm': '22nd', 'hr':'15:30', 'divi': 'Primera División', 'comp1': 'San Lorenzo', 'comp2': 'Argentinos Juniors', 'val1': '1.56', 'val2': '1.56', 
                    'avg': '1.00', 'btts': '8%','u15': '19%' ,'d25': '12%', 'corners': '', 'cards': '', 'z05': '66%', 't35': '4%', 'hr1': '27%', 'homex': '1.39', 'awayx': '1.43', 'btts1': '4%', 'btt2': '0%', 'hwo': '2.30', 'drodds': '2.88', 'awo': '3.40', 'btyo': '2.25', 'odds05': '1.12', 'odds15': '1.60', 'odds25': '2.88', 'odds35': '5.50', 'm1odds': '2.20', 'm2odds': '1.40', 'm3odds': '1.12', 'off': '4.23', 'cor85': '', 'cor95': '', 'cor10': ''},    
                    {'id': 0, 'tm': '22nd', 'hr':'15:30', 'divi': 'Primera División', 'comp1': 'San Lorenzo', 'comp2': 'Argentinos Juniors', 'val1': '1.56', 'val2': '1.56', 
                    'avg': '1.00', 'btts': '8%','u15': '19%' ,'d25': '12%', 'corners': '', 'cards': '', 'z05': '66%', 't35': '4%', 'hr1': '27%', 'homex': '1.39', 'awayx': '1.43', 'btts1': '4%', 'btt2': '0%', 'hwo': '2.30', 'drodds': '2.88', 'awo': '3.40', 'btyo': '2.25', 'odds05': '1.12', 'odds15': '1.60', 'odds25': '2.88', 'odds35': '5.50', 'm1odds': '2.20', 'm2odds': '1.40', 'm3odds': '1.12', 'off': '4.23', 'cor85': '', 'cor95': '', 'cor10': ''},    
                    {'id': 0, 'tm': '22nd', 'hr':'15:30', 'divi': 'Primera División', 'comp1': 'San Lorenzo', 'comp2': 'Argentinos Juniors', 'val1': '1.56', 'val2': '1.56', 
                    'avg': '1.00', 'btts': '8%','u15': '19%' ,'d25': '12%', 'corners': '', 'cards': '', 'z05': '66%', 't35': '4%', 'hr1': '27%', 'homex': '1.39', 'awayx': '1.43', 'btts1': '4%', 'btt2': '0%', 'hwo': '2.30', 'drodds': '2.88', 'awo': '3.40', 'btyo': '2.25', 'odds05': '1.12', 'odds15': '1.60', 'odds25': '2.88', 'odds35': '5.50', 'm1odds': '2.20', 'm2odds': '1.40', 'm3odds': '1.12', 'off': '4.23', 'cor85': '', 'cor95': '', 'cor10': ''},    
                    {'id': 0, 'tm': '22nd', 'hr':'15:30', 'divi': 'Primera División', 'comp1': 'San Lorenzo', 'comp2': 'Argentinos Juniors', 'val1': '1.56', 'val2': '1.56', 
                    'avg': '1.00', 'btts': '8%','u15': '19%' ,'d25': '12%', 'corners': '', 'cards': '', 'z05': '66%', 't35': '4%', 'hr1': '27%', 'homex': '1.39', 'awayx': '1.43', 'btts1': '4%', 'btt2': '0%', 'hwo': '2.30', 'drodds': '2.88', 'awo': '3.40', 'btyo': '2.25', 'odds05': '1.12', 'odds15': '1.60', 'odds25': '2.88', 'odds35': '5.50', 'm1odds': '2.20', 'm2odds': '1.40', 'm3odds': '1.12', 'off': '4.23', 'cor85': '', 'cor95': '', 'cor10': ''},    
                    {'id': 0, 'tm': '22nd', 'hr':'15:30', 'divi': 'Primera División', 'comp1': 'San Lorenzo', 'comp2': 'Argentinos Juniors', 'val1': '1.56', 'val2': '1.56', 
                    'avg': '1.00', 'btts': '8%','u15': '19%' ,'d25': '12%', 'corners': '', 'cards': '', 'z05': '66%', 't35': '4%', 'hr1': '27%', 'homex': '1.39', 'awayx': '1.43', 'btts1': '4%', 'btt2': '0%', 'hwo': '2.30', 'drodds': '2.88', 'awo': '3.40', 'btyo': '2.25', 'odds05': '1.12', 'odds15': '1.60', 'odds25': '2.88', 'odds35': '5.50', 'm1odds': '2.20', 'm2odds': '1.40', 'm3odds': '1.12', 'off': '4.23', 'cor85': '', 'cor95': '', 'cor10': ''},    
                    
                ]
        }
    }
}
</script>

<style scoped>
    .titLeague{
        padding: 18px 16px;
    }
    .matches-winner{
        background: #ced8da;
        padding: 0;
        height: 34px;
        line-height: 34px;
        text-align: center;
        font-weight: 600;
        color: #253d50;
    }
    .matches-winner i {
        margin-right: 0.5em;
        color: #3d719a;
        font-size: 9px;
    }
    .matches-winner > span {
        font-size: 12px;
        font-weight: bold;
        margin-right: 12px;
        padding-right: 12px;
        border-right: 1px solid #b5bebf;
    }
    .matches-winner > span:last-child{
        border: 0;
        padding: 0;
        margin: 0;
    }
    
    .team {
        display: inline-flex;
        width: 2249px;
        margin-bottom: 2px;
    }

    .firt-win {
        margin-bottom: 4px;
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

    .match-profile{
        overflow-x: scroll;
        margin-bottom: 20px;
    }
    .heg {
        height: 500px;
    }
    .n-width{
        width: 15%;
    }
    .list-filt{
        margin-bottom: 17px;
    }
    .team-maches {
        width: 320px!important;
    }
</style>