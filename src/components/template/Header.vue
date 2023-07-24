<template>
    <header class="header">
        <div class="container-cab">
            <ul class="navLista">
                <li class="navItem left">
                    <div class="logo">
                        <img src="../../assets/logo.webp" />
                    </div>
                </li>
                <li class="navItem left">
                    <Search />
                </li>
              
                
                <li class="navItem right">
                    <Link icon="fa fa-sign-in" text="Login"/>
                </li>
                
                
                
                <li class="navItem right">
                    <Link  text="More" icon="fa fa-caret-down"/>
                </li>
                
                <li class="navItem right">
                    <Link text="Predictions"/>
                </li>
                <li class="navItem right">
                    <Link icon="fa fa-calendar" text="Matches"/>
                </li>
                <li class="navItem right">
                    <Link icon="fa fa-futbol-o" text="Leagues"/>
                </li>
                <li class="navItem right">
                    <Link icon="fa fa-area-chart" text="Stats"/>
                </li>
                <li class="navItem right">
                    <Link icon="fa fa-twitter"/>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import Search from './Search.vue'
import Link from './Link.vue'

export default {
    name: 'Header',
    components: {Search, Link}
}
</script>

<style>
.header {
    background: #222;
    height: 44px;
    width: 100%;
}

.container-cab {
    margin: 0 173px;
}

.navLista{
    display: inline-block;
    line-height: 44px;
    margin-bottom: 0;
    padding: 0;
    width: 100%
}

.navItem{
    padding: 0 6px;
    cursor: pointer;
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
</style>