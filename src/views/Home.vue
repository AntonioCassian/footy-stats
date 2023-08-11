<template>
    <div class="home">
        <Header />
        <div class="content">
            <b-container fluid="xl">
                <b-row>
                    <div class="min-container d-flex">
                        <b-col cols="8">
                            <PageTitle title="Football Stats, Tables and Results"
                                paragraph="FootyStats is the premier football stats and analysis site, with data coverage in 1500+ football leagues worldwide including UK, Europe, and South America. We also cover " 
                                link="football livescores" 
                                res=". Team stats, League stats, and Player stats are covered with details on form, goals scored, conceded, shots, xG, corner stats, and more. You can also download the data using our CSV or API service."
                                  
                            />
                            <hr />

                            <Nav />
                            <NavSecund />

                            <TabTitle title="Stats For Football Fixtures" color="#303D52" normal="normal"/>

                            <Table pais="South America" campeonato="Copa Sudamericana"/>

                            <SubTitle title="Player Statistics" color="#0066c0" link="link" icon="fa fa-angle-double-right"/>

                            <Statics />

                            <TabTitle title="Team Statistics" color="#0066c0" link="link" icon="fa fa-angle-double-right"/>

                            <TeamList />
                            
                            <Perguntas />
                        </b-col>

                        <b-col cols="4" class="pad-l">
                            <aside class="asid">
                                <SubTitle sub="Football Statistics. Made Simple."
                                paragraph="FootyStats provides comprehensive data for football matches for all purposes including Machine Learning, AI, research, and analysis. We display stats per team, per league, and even head-to-head comparisons. Explore and see how you can make better analysis!"
                                />
                                <Button icon="fa fa-download" text="Download Soccer Stats"/>

                                <Embed src="https://cdn.footystats.org/img/premium/michael_owen_3_en.mp4#t=0.8"/>

                                <ButtonTag  text="How we profitted $2,300 in 20 days -" tex="Blog Update"/>
                                <ButtonTag  text="Where do I find X stats on FootyStats? Full Guide"/>
                                <ButtonTag  icon="fa fa-calendar" text="This Weekend's Fixtures"/>

                                <ListaS />

                                <TitleList icon="fa fa-star" title="Featured Matches"/>
                                <GroupList />

                                <TitleList icon="fa fa-star" title="Featured Teams"/>
                                <GroupFeat />

                                <TitleList icon="fa fa-calendar" title="Weekday Fixtures"/>
                                <GroupS />
                            </aside>
                        </b-col>
                    </div>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import Header from '@/components/template/Header'
import PageTitle from '@/components/template/PageTitle.vue'
import Nav from '@/components/template/Nav.vue'
import NavSecund from '@/components/template/NavSecund.vue'
import TabTitle from '@/components/Table/SubTitle.vue'
import Table from '@/components/Table/TabTitle.vue'
import Statics from '@/components/Statics/PlayerStatics.vue'
import TeamList from '@/components/Statics/TeamStatics.vue'
import Perguntas from '@/components/Statics/Perguntas.vue'
import SubTitle from '@/components/template/SubTitle.vue'
import Button from '@/components/template/Button.vue'
import Embed from '@/components/Embed/Embed.vue'
import ButtonTag from '@/components/template/ButtonTag.vue'
import ListaS from '@/components/Lista/ListaS.vue'
import TitleList from '@/components/Lista/TitleList.vue'
import GroupList from '@/components/Lista/GroupList.vue'
import GroupFeat from '@/components/Lista/GroupFeat.vue'
import GroupS from '@/components/Lista/GroupS.vue'
export default {
    components: {Header, PageTitle, Nav, NavSecund, TabTitle, Table, Statics, TeamList, Perguntas, SubTitle, Button, Embed, ButtonTag, ListaS, TitleList, GroupList, GroupFeat, GroupS}
}
</script>

<style scoped>
    .content{
        padding-top: 16px;
    }
    .min-container{
        padding: 0 60px;
    }
    .pad-l{
        padding-left: 15px;
    }
    .asid{
        margin-top: 2.5em;
    }
</style>