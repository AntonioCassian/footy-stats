<template>
    <div class="conted d-flex">
        <div class="w-25 bold">
            <p class="tit mb-0">
            <i class="fa fa-star sti"></i>
                Favourites
                <span class="min-tex">
                    (Shows 10 Max)
                </span>
            </p>
            <a href="" class="link-drop">
                Register and become a Premium subscriber to favourite leagues 
                <i class="fa fa-angle-right"></i>
            </a>
        </div>

        <div class="w-25 bold scrollspy-example">
            <p class="tit mb-0">
                Countries
            </p>
            <ul class="list-cab">
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
                <Item text="Afganistão" len="1" />
            </ul>
        </div>

        <div class="w-50 bold ">
            <p class="tit mb-0">
                Popular Leagues
            </p>
            <div class="text-center cent">
                <a href="" class="ilg link-drop">
                    <i class="fa fa-futbol-o cw"></i>
                        View All 1500+ Leagues 
                    <i class="fa fa-angle-double-right cw"></i>
                </a>
            </div>
            <ul class="list-cab list-league">
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
                <ItemList class="leag-it" icon="fa fa-window-close" text="Champions League"/>
            </ul>
        </div>
    </div>
</template>

<script>
import Item from './ItemLeag.vue'
import ItemList from './ItemList.vue'
    export default {
        components: {Item, ItemList}
    }
</script>

<style>
    .conted{
        width: 1000px;
        margin: 0 auto!important;
        gap: 20px;
    }
    .flr{
        float: left;
    }
    .tit{
        border-bottom: 1px solid #888;
        color: #fff!important;
        text-align: left;
    }
    .sti{
        color: #efc004;
        font-weight: 900;
    }
    .min-tex{
        color: #888;
        font-size: 0.8em;
        font-weight: normal!important;
    }
    .leag-it {
        display: inline-block;
        width: 50%;
    }
    .list-league li:nth-child(2n + 1)  {
        border-right:1px solid rgba(0, 0, 0, 0.15)!important;
    }
    .cw{
        color: #fff!important;
    }
</style>