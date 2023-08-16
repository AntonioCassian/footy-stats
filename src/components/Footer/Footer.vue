<template>
    <footer class="footer">
        <div class="contain-foot">
            <div class="row">
                <div class="col-4 logo-desc p-0">
                    <div class="logo-foot">
                        <img src="../../assets/logo.webp" />
                    </div>
                    <p>
                        FootyStats is your best resource for stats such as Goals, Over 2.5/Under 2.5, HT/FT, Dynamic In-Play Stats, and much more. If you have any questions, thoughts or feedback please don't hesitate to get in touch.
                        <br/><br/>
                        <span class="bold">Our content is not intended for an audience under 18 years of age.</span> Content on this website is not advice and should only be used as reference. We are not responsible for your outcomes. All trademarks, brands, images, logos and names appearing on this website belong to their respective owners.
                        <br><br>
                        <a class="foot-link" href="">www.gambleaware.co.uk - BeGambleAware</a>
                    </p>
                </div>

                <div class="col-2 p-0"><Stat /></div>
                <div class="col-2 p-0"><More /></div>
                <div class="col-4 p-0"><Stay /></div>
            </div>
        </div>
    </footer>
</template>
<script>
import Stat from './Stat.vue'
import More from './More.vue'
import Stay from './Stay.vue'
export default {
    name: 'Footer',
    components: {Stat, More, Stay}
}
</script>
<style>
    .footer{
        background: #1E1E1E;
        padding-top: 2.67em;
        color: #C6C6C6;
        margin-top: 40px;
    }
    .contain-foot{
        width: 1000px;
        min-width: 1000px;
        margin: 0 auto;
        height: 100%;
    }

    .logo-foot > img {
        width: 141px;
        margin-bottom: 20px;
    }
    .logo-desc > p {
        font-size: 14px;
        line-height: 18px;
    }
    .bold{
        font-weight: bold;
    }
    .foot-link {
        text-decoration: none;
        color: #fff;
        font-weight: 600;
    }
    .foot-link:hover {
        text-decoration: underline;
    }
</style>