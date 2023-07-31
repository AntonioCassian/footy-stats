<template>
    <table class="w-100">
        <tbody>
            <tr class="head-table mb-1">
                <td>
                    <span class="title-tab">Key Stats (Home vs Away)</span>
                </td>
                <td class="wd"></td>
                <td>
                    <div class="competit escudo1"></div>
                </td>
                <td class="wd"></td>
                <td>
                    <div class="competit escudo1"></div>
                </td>
            </tr>

            <tr class="bod-tab mb-1">
                <td>
                    <div class="corpo-tab">
                        Win Percentage
                    </div>
                </td>

                <td class="wd"></td>

                <td class="mr">
                    <div class="corpo-tab text-center p-0">
                        {{ table.winHom }}
                    </div>
                </td>

                <td class="wd"></td>

                <td class="mr">
                    <div class="corpo-tab text-center p-0">
                        {{ table.winFor }}
                    </div>    
                </td>

            </tr>

            <tr class="bod-tab mb-1">
                <td>
                    <div class="corpo-tab">
                        Points Per Game
                    </div>
                </td>

                <td class="wd"></td>

                <td class="mr">
                    <div class="corpo-tab text-center p-0">
                        {{ table.pgHom }}
                    </div>
                </td>

                <td class="wd"></td>

                <td class="mr">
                    <div class="corpo-tab text-center p-0">
                        {{ table.pgFor }}
                    </div>    
                </td>

            </tr>

            <tr class="bod-tab mb-1">
                <td>
                    <div class="corpo-tab">
                        AVG Goals Scored
                    </div>
                </td>

                <td class="wd"></td>

                <td class="mr">
                    <div class="corpo-tab text-center p-0">
                        {{ table.scoredHom }}
                    </div>
                </td>

                <td class="wd"></td>

                <td class="mr">
                    <div class="corpo-tab text-center p-0">
                        {{ table.scoredFor }}
                    </div>    
                </td>

            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'TablePred',
    props: ['table']
}
</script>

<style scoped>
    .head-table{
        height: 30px;
    }
    .bod-tab {
        height: 32px;
    }
    .title-tab{
        position: relative;
        display: block;
        font-size: 10px;
        color: #778190;
        float: left;
        height: 20px;
        padding-left: 12px;
    }
    .escudo1{
        background: url("https://cdn.footystats.org/img/teams/argentina-ca-river-plate.png");
    }
    .competit {
        background-size: 20px;
        background-position: center;
        background-repeat: no-repeat;
        height: 20px;
        width: 100%;
    }
    .mr{
        width: 100px;
    }
    .corpo-tab {
        color: #394454;
    height: 26px;
    line-height: 26px;
    background: #eff2f5;
    border-radius: 100px;
    font-size: 12px;
    padding-left: 12px;
    }

    .wd{
        width: 2px;
    }
</style>