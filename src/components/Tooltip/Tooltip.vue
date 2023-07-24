<template>
    <div class="Tooltip">
        <span id="tooltip-target-1" class="time">
            {{ time }}
        </span>
        <b-tooltip target="tooltip-target-1" triggers="hover" placement="bottomright">
            <div class="tooltip-content">
                <div class="top">
                    <div class="img-top">
                        <img src="https://cdn.footystats.org/img/teams/slovakia-sk-slovan-bratislava.png" />
                    </div>

                    <div class="text-top"> 
                        <h3>ŠK Slovan Bratislava</h3>
                        <p>UEFA Champions League</p>
                        <span>Performace rank. 0/37</span>
                        <p>Europe</p>
                    </div>
                </div>

                <table class="w-100 border mt-3 mb-3">
                    <tbody>
                        <tr class="bdt w-100">
                            <td class="bdr fon">Form</td>
                            <td colspan="4" class="text-center bdr fonte-top">Last 5</td>
                            <td class="font-weight-900 fonte-top">PPG</td>
                        </tr>

                        <tr>
                            <td class="bdr">
                                <span class="fonte">Overvall</span>
                            </td>
                            <td colspan="4" class="bdr text-center" >
                                
                            </td>
                            <td class="text-center" >
                                <span>
                                    <b-badge variant="danger">0.00</b-badge>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td class="bdr" >
                                <span class="fonte">Home</span>
                            </td>
                            <td colspan="4" class="bdr text-center" >
                                
                            </td>
                            <td class="text-center" >
                                <span>
                                    <b-badge variant="danger">0.00</b-badge>
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td class="bdr">
                                <span class="fonte">Away</span>
                            </td>
                            <td colspan="4" class="bdr text-center" >
                                
                            </td>
                            <td class="text-center" >
                                <span>
                                    <b-badge variant="danger">0.00</b-badge>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <table class="w-100 border mt-3 mb-3">
                    <tbody>
                        <tr class="bdt w-100">
                            <td class="bdr fon">Statistics</td>
                            <td class="bdr">
                                <span class="fonte-top">Overvall</span>
                            </td>
                            <td class="bdr">
                                <span class="fonte-top">Home</span>
                            </td>
                            <td class="bdr">
                                <span class="fonte-top">Away</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="bdr">
                                <span class="fonte-top">Win%</span>
                            </td>
                            <td class="bdr">
                                <span>0%</span>
                            </td>
                            <td class="bdr">
                                <span>0%</span>
                            </td>
                            <td class="bdr">
                                <span>0%</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="bdr">
                                <span class="fonte-top">AVG</span>
                            </td>
                            <td class="bdr">
                                <span>0.00</span>
                            </td>
                            <td class="bdr">
                                <span>0.00</span>
                            </td>
                            <td class="bdr">
                                <span>0.00</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="bdr">
                                <span class="fonte-top">Scored</span>
                            </td>
                            <td class="bdr">
                                <span>0.00</span>
                            </td>
                            <td class="bdr">
                                <span>0.00</span>
                            </td>
                            <td class="bdr">
                                <span>0.00</span>
                            </td>
                        </tr>

                        <tr>
                            <td class="bdr">
                                <span class="fonte-top">Conceded</span>
                            </td>
                            <td class="bdr">
                                <span>0.00</span>
                            </td>
                            <td class="bdr">
                                <span>0.00</span>
                            </td>
                            <td class="bdr">
                                <span>0.00</span>
                            </td>
                        </tr>
                        
                        <tr>
                            <td class="bdr">
                                <span class="fonte-top">BTTS</span>
                            </td>
                            <td class="bdr">
                                <span>0%</span>
                            </td>
                            <td class="bdr">
                                <span>0%</span>
                            </td>
                            <td class="bdr">
                                <span>0%</span>
                            </td>
                        </tr>
                        
                        <tr>
                            <td class="bdr">
                                <span class="fonte-top">Cs</span>
                            </td>
                            <td class="bdr">
                                <span>0%</span>
                            </td>
                            <td class="bdr">
                                <span>0%</span>
                            </td>
                            <td class="bdr">
                                <span>0%</span>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <div :block="this.bloc" class="bt-bloc">
                    <div class="title-start">
                        <i class="fa fa-star"></i>
                        <span class="title-bnt">UNLOCK STATS</span>
                    </div>
                    <span class="text-btn">
                        Upgrade to FootyStats Premium and unlock Win %, BTTS, CS, Corner Stats , Card Stats , FTS , Over 2.5 ~ 3.5.
                        <br />
                        <br />
                        footystats.org/premium
                    </span>
                </div>

                <div :abs="this.ab" class="bt-bloc pad">
                    <span class="text-btn">Want to see Corner Stats , Card Stats , FTS , Over 2.5 ~ 3.5 here?
                        <br />
                        Upgrade to FootyStats Premium!
                    </span>
                </div>
            </div>
        </b-tooltip>
    </div>
</template>

<script>
export default {
    name: 'Tooltip',
    props: ['time', 'bloc', 'ab']
}
</script>

<style>
    .time {
        font-size: 13px;
        position: relative;
        bottom: 2px;
    }
    .tooltip{
        width: 270px;
    }
    .tooltip > .tooltip-inner{
        max-width:  100%;
        padding: 14px;
    }

    .top{
        display: flex;
        justify-content: flex-start; 
        gap: 13px;
        padding-top: 6px;
    }
    .img-top{
        background: #fff;
    }
    .img-top img{
        flex: 1;
        width: 60px;
        height: 60px;
    }

    .text-top{
        text-align: left;
    }
    .text-top h3{
        font-size: 12px;
        font-weight: bold;
        margin: 0;
    }

    .text-top p {
        font-size: 10px;
        margin: 0;
    }

    .text-top span {
        font-size: 9px;
        margin: 0;
    }

    .fonte{
        font-size: 9px;
        font-weight: 900;
        line-height: 14px;
    }
    .fon{
        font-size: 12px;
    }
    .fonte-top{
        font-size: 12px;
        font-weight: 900;
    }



    .bdr{
        border-right: 1px solid #fff;
    }
    .bdt {
        border-bottom: 1px solid #fff;
    }



    .bt-bloc{
        background: #0a71c5;
        text-align: center;
        display: flex;
        flex-direction: column;
    }
    .title-start{
        font-weight: bold;
    }
    .title-bnt{
        text-transform: uppercase;
        margin-left: 5px;
    }
    .text-btn{
        font-size: 12px;
        line-height: 16px;
        font-weight: bold;
    }
    .pad {
        padding: 12px 11px;
    }
</style>