<template>
    <div class="caixas">
        <div class="perguntas">
        <div class="title">
            <h2>Football Stats by FootyStats</h2>
        </div>

        <div class="p-2">

            <div class="perg-res">
                <div class="perg">
                    <h3>What type of football stats do you offer?</h3>
                </div>
                <p class="res m-0">We offer a multitude of stats for over 1000 competitions worldwide. The list of football stats we cover are :</p>

                <ul>
                    <li>
                        <a href="" class="link">H2H Stats for Upcoming Fixtures</a>
                    </li>
                    <li>
                        <a href="" class="link">BTTS Stats</a>
                    </li>
                    <li>
                        <a href="" class="link">Corner Stats</a>
                    </li>
                    <li>
                        <a href="" class="link">Over 2.5 Goals</a>
                    </li>
                    <li>
                        <a href="" class="link">Card Stats</a>
                    </li>
                    <li>
                        <a href="" class="link">Expected Goals Stats</a>
                    </li>
                    <li>
                        <a href="" class="link">Football Livescores</a>
                    </li>
                    <li>
                        <a href="" class="link">Football League Stats</a>
                    </li>
                </ul>

                <p class="res">Aside from this list, we offer stats for every aspect of the football game and the stats are being updated by the minute. We recently included xG (Expected Goals) for hundreds of leagues, including the English Premier League’s xG. Under the hood, we have thousands of data-points all our supported leagues. We crunch the numbers and make them easy and intuitive for our users.</p>
            </div>

            <div class="perg-res">
                <div class="perg">
                    <h3>What tools do you offer?</h3>
                </div>
                
                <p class="res">We have spent time and effort building multiple search tools. <a href="" class="link">The Match Search</a> allows you filter through thousands of
                upcoming games to find high-value bets. The <a href="" class="link">Team Search</a> allows you to view all of our teams, finding those that suit the 
                stats you’re looking for. The <a href="" class="link">League Search</a> will show you all 1000+ leagues across FootyStats and allow you to filter and 
                sort them by specific stats, such as BTTS percentage. We also offer <a href="" class="link">Predictions</a>, <a href="" class="link">Form Guide</a>, <a href="" class="link">Automated Tips</a> and more.</p>
            </div>
            
            <div class="perg-res">
                <div class="perg">
                    <h3>What are football stats for?</h3>
                </div>
                
                <p class="res">Football stats can be used for research, satisfying you own curiosity, or winning a bet with a friend over who has the best knowledge! The stats on FootyStats aim to help you make better decisions when it comes to betting on football. Currently, our data is used by large organizations such as Oracle, Daum, University of Washington, and many others!</p>
            </div>

            <div class="perg-res">
                <div class="perg">
                    <h3>How often is data updated?</h3>
                </div>
                
                <p class="res">We update our core stats every 10 minutes, with other sections of our site updating at a much higher frequency.</p>
            </div>

            <div class="perg-res">
                <div class="perg">
                    <h3>Why do I need football stats for betting?</h3>
                </div>
                
                <p class="res">Humans are impulsive. We act without data and often make mistakes. FootyStats aims to provide intuitive yet detailed 
                stats, helping you make better predictions when it comes to football. Bookmakers conveniently hide some of the stats 
                that you will find on FootyStats, or simply offer the most basic form of stats that they can. This is because history is the 
                best method to predict the future, especially with football. FootyStats finds those patterns. Stats enable intelligent, more
                reliable <a href="" class="link">football predictions</a>.
                </p>
            </div>

            <div class="perg-res">
                <div class="perg">
                    <h3>How can I use your stats for football betting?</h3>
                </div>
                
                <p class="res">You can use our search tools, or explore one of our individual H2H pages. As an example, let’s say you are looking to bet 
                    on a match having +2.5 Goals. Using the <a href="" class="link">Match Search</a>, you can quickly find all matches being played, filtered by AVG 
                    Goals. This is completely customisable, so for this example, I would set AVG Goals to 3.00 or higher. This will then show 
                    me all matches where the combined AVG Goals for both teams fits. You can then view our detailed H2H pages for a 
                    deeper look at each fixture.
                </p>
            </div>

            <div class="perg-res">
                <div class="perg">
                    <h3>Do you offer tools to export data, like CSV?</h3>
                </div>
                
                <p class="res">Yes, we offer CSV export for all of our leagues, players and matches. You can learn more about this at <a href="" class="link">CSV Downloads</a>.
                </p>
            </div>

            <div class="perg-res">
                <div class="perg">
                    <h3>Can I use this football data in my own website / application?</h3>
                </div>
                
                <p class="res">Yes, we offer the <a href="" class="link">FootyStats API.</a>.</p>
            </div>
        </div>
    </div>
    <div class="perguntas per-simp">
        <div class="title">
            <h2>Football Stats by FootyStats</h2>
        </div>
        <p class="res p-2 m-0">
            Soccer Stats is often used by pundits, prediction makers, and journalists to make informed decisions on future soccer/football outcomes. For example, journalists often quote stats such as Goals per Match to indicate how well a Striker is performing. On the other hand, an average Joe may use soccer stats such as Over 2.5 or BTTS % to predict the outcome of an upcoming match. Soccer Stats can be useful for any persons interested in learning about the context of a soccer match. FootyStats provides hundreds of data points for over 450 leagues across the world.
        </p>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Perguntas'
}
</script>

<style scoped>
    .perguntas{
        background: #fff;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 4px;
    }
    .title{
        background: #dddddd;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 4px 4px 0 0;
    }
    .title > h2{
        font-size: 16px;
        font-weight: bold;
        display: inline;
        padding: 4px 0 5px 8px;
    }
    .perg-res {
        margin: 5px 5px 15px;
    }
    .perg h3 {
        font-size: 20px;
        font-weight: bold;
        color: #444;
        margin-bottom: 10px;
    }
    .res{
        line-height: 19px;
        text-align: left;
        font-size: small;
    }

    ul {
        padding: 0;
    }

    .link{
        text-decoration: none;
        color: #0066c0;
        font-size: small;
    }
    .link:hover {
        text-decoration: underline;
    }
</style>