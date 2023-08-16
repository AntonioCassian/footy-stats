<template>
    <header class="header">
        <div class="container-cab">
            <ul class="navLista">
                <li class="navItem left">
                    <div class="logo">
                        <router-link to="/"><img src="../../assets/logo.webp" /></router-link>
                    </div>
                </li>
                <li class="navItem left">
                    <Search />
                </li>
              
        
                <li class="navItem right">
                    <Link to="/login" icon="fa fa-sign-in" text="Login"/>
                    <div class="drop lg">
                        <Login />
                    </div>
                </li>
                
                <li class="navItem right">
                    <Link  text="More" icon="fa fa-caret-down"/>
                    <div class="drop p-lef">
                        <More />
                    </div>
                </li>
                
                <li class="navItem right">
                    <Link to="/predictions/" text="Predictions"/>
                </li>

                <li class="navItem right">
                    <Link to="/matches" icon="fa fa-calendar" text="Matches"/>
                </li>
                
                <li class="navItem navL right">
                    <Link to="/leagues" icon="fa fa-futbol-o" text="Leagues"/>
                    <div class="drop-leag w-100">
                        <League />
                    </div>
                </li>
                
                <li class="navItem right dr">
                    <Link to="/stats" icon="fa fa-area-chart" text="Stats"/>
                    <div class="drop">
                        <Stats class="st" />
                    </div>
                </li>

                <li class="navItem right">
                    <a class="lin tw" href="https://twitter.com/footystats_org" target="_blank">
                        <i class="fa fa-twitter"></i>
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import Search from '../template/Search.vue'
import Stats from './Stats.vue'
import League from './League.vue'
import Link from '../Lista/Link.vue'
import More from './More.vue'
import Login from './Login.vue'
export default {
    name: 'Header',
    components: {Search, Link, Stats, League, More, Login}
}
</script>

<style>
.header {
    background: #222;
    height: 44px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
}

.container-cab {
    margin: 0 173px;
}

.navLista{
    display: inline-block;
    margin-bottom: 0;
    padding: 0;
    width: 100%
}

.navItem{
    padding: 0 1px;
    cursor: pointer;
    line-height: 44px;
    position: relative;
}

.navItem:hover .drop {
    display: block;
}


.logo img{
    height: 30px;
}

.left{
    float: left;
    padding: 0;
    margin-left: 10px;
    margin-right: 30px;
}

.left:first-of-type {
    margin-left: 0;
    margin-right: 0;
}
.right {
    float: right;
}
.noHover{
    pointer-events: none;
}
.tw > i{
    font-size: 18px;
    font-weight: normal;
}

.drop{
    position: absolute;
    background: #444;
    margin-top: -1px;
    z-index: 100;
    display: none;
    left: 0;
}

.st{
    width: 180px;
}

.drop-leag{
    position: fixed;
    left: 0;
    height: 493px;
    background: #383838 !important;
    overflow: hidden;
    opacity: 1 !important;
    margin-top: -1px;
    cursor: default;
    display: none;
}
.navL:hover .drop-leag {
    display: block;
}

.p-lef{
    width: 430px;
    left: -188px;
    box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
}
.lg {
    width: 170px;
    left: -80px;
}
</style>