<template>
    <div class="stats">
        <Header />
        <div class="tit-page">
            <div class="wrapper-top">
                <PageTitle title="Football Betting Stats"
                    paragraph="Stats and Insight for Your Predictions"/>
            </div>
        </div>
        <div class="wrapper-top">
            <div class="di-f">
                <aside class="pd-l">
                    <Title title="Betting Stats"/>
                    <List />
                </aside>

            <main class="pd">
                <Title title="Explore Our Stats" />
                <ul class="togList flo-l">
                    <Item icon="fa fa-bar-chart" title="Top BTTS Leagues" />
                    <ItemTog icon="fa fa-window-close" text="South Australia State League 1 Reserves" num="80%" kei="Season Progress"  val="80%" />
                    <ItemTog icon="fa fa-window-close" text="3. Deild" val="79%" />
                    <ItemTog icon="fa fa-window-close" text="Reserve League" val="80%" />
                    <ItemTog icon="fa fa-window-close" text=" U19 League C" kei="Season Progress" val="80%" />
                    <ItemTog icon="fa fa-window-close" text="BVIFA National League" kei="Season Progress" val="80%" />
                    <li class="text-center link-lis">
                        <a href="">
                            View Full Stats  
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
                <ul class="togList flo-r">
                    <Item icon="fa fa-bar-chart" title="Top BTTS Leagues" />
                    <ItemTog icon="fa fa-window-close" text="South Australia State League 1 Reserves" num="80%" kei="Season Progress"  val="80%" />
                    <ItemTog icon="fa fa-window-close" text="3. Deild" val="79%" />
                    <ItemTog icon="fa fa-window-close" text="Reserve League" val="80%" />
                    <ItemTog icon="fa fa-window-close" text=" U19 League C" kei="Season Progress" val="80%" />
                    <ItemTog icon="fa fa-window-close" text="BVIFA National League" kei="Season Progress" val="80%" />
                    <li class="text-center link-lis">
                        <a href="">
                            View Full Stats  
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </main>
            </div>
        </div>
    </div>
    
</template>

<script>
import Header from '@/components/template/Header.vue'
import PageTitle from '@/components/template/PageTitle.vue'
import List from '@/components/Filters/ListLeft.vue'
import ItemTog from '@/components/Toggle/ItemTog.vue'
import Title from '@/components/template/TitleS.vue'
export default {
    name:'Stats',
    components: {Header, PageTitle, List, ItemTog, Title}
}
</script>

<style scoped>
    .stats{
        background: #eff2f5!important;
    }
    .wrapper-top{
        max-width: 1000px;
        margin: 0 159px;
    }

    .tit-page{
        background: #fff;
        padding: 20px 13px;
    }
    .pd-l {
        padding-top: 20px;
        width: 20%;
        margin-right: 20px;
    }
    .pd{
        padding-top: 20px;
        width: 100%;
    }
    .di-f{
        display: flex;
    }

    .togList{
        padding: 0;
        margin-bottom: 0;
        width: 49%;
    }
    .link-lis{
        display: block;
        height: 38px;
        line-height: 38px;
        background: #FFF;
        padding: 0 1em;
        border-top: 1px solid #eff2f5;
    }

    .link-lis > a {
        color: #295cc4;
        text-decoration: none;
        font-size: 12px;
    }
    .flo-l{
        float: left;
    }
    .flo-r{
        float: right;
    }
</style>