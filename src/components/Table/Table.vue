<template>
    <div class="tablePrincipal">
        <TableTitle pais="South America" campeonato="Copa Sudamericana"/>

        <table>
            <thead class="headTab">
                <tr>
                    <td></td>
                    <td class="width"></td>
                    <td>
                        <span class="right">Home</span></td>
                    <td class="width"></td>
                    <td>
                        <span class="right">Form</span>
                    </td>
                    <td class="width"></td>
                    <td></td>
                    <td class="width"></td>
                    <td class="left tam-l">
                        <span>Form</span>
                    </td>
                    <td class="width"></td>
                    <td class="m-0">
                        <span class="left">Away</span>
                    </td>
                    <td class="width"></td>
                    <td></td>
                    <td class="width"></td>
                    <td class="text-center">
                        <span>odds</span>
                    </td>
                    <td class="width"></td>
                    <td></td>
                    <td class="width"></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr class="tr-w tr-bot">
                    <td>
                        <span class="live red">Live</span>
                    </td>

                    <td class="width"></td>

                    <td class="text-end">
                        <Tooltip time="Barcelona" bloc="block"/>
                    </td>

                    <td class="width"></td>

                    <td class="tam">
                        <span class="c-lock right">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </td>

                    <td class="width"></td>
                    
                    <td class="text-center">
                        <a href="" class="text-center link-valor">
                            <span>2 - 1</span>
                            <span class="ft red">FT</span>
                        </a>
                    </td>

                    <td class="width"></td>
                    
                    <td class="tam">
                        <span class="c-lock left">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </td>

                    <td class="width"></td>

                    <td>
                        <Tooltip time="Estudiantes" />
                    </td>

                    <td class="width"></td>

                    <td class="text-center">
                        <span>
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </td>

                    <td class="width"></td>

                    <td class="text-center">
                        <span>
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </td>

                    <td class="width"></td>

                    <td class="text-center">
                        <span>
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </td>
                    <td class="width"></td>
                </tr>

                <tr class="tr-w tr-bot iten-tab">
                    <td>
                        <span class="live red">Live</span>
                    </td>

                    <td class="width"></td>

                    <td class="text-end">
                        <Tooltip time="Barcelona" />
                    </td>

                    <td class="width"></td>

                    <td class="tam">
                        <span class="c-lock right">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </td>

                    <td class="width"></td>
                    
                    <td class="text-center">
                        <a href="" class="text-center link-valor">
                            <span>2 - 1</span>
                            <span class="ft red">FT</span>
                        </a>
                    </td>

                    <td class="width"></td>
                    
                    <td class="tam">
                        <span class="c-lock left">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </td>

                    <td class="width"></td>

                    <td>
                        <Tooltip time="Estudiantes" />
                    </td>

                    <td class="width"></td>

                    <td class="text-center">
                        <TSmall title="Barcelona" />
                    </td>

                    <td class="width"></td>

                    <td class="text-center">
                        <TSmall title="Drown" />
                    </td>

                    <td class="width"></td>

                    <td class="text-center">
                        <TSmall title="Estudiantes" />
                    </td>
                    <td class="width"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import TableTitle from './TableTitle.vue';
import Tooltip from '../Tooltip/Tooltip.vue'
import TSmall from '../Tooltip/TolltipSmall.vue'
export default {
    name: 'Table',
    components: {TableTitle, Tooltip, TSmall}
}
</script>

<style scoped>
    table{
        width: 100%;
        border: 1px solid #e2e2e2;
    }
    .headTab{
        background: #e2e2e2;
        font-size: 11px;
        color: #303D52;
    }

    .tr-w{
        background: #fff;
    }
    .tr-bot{
        border-bottom: 1px solid #e4e4e4;
    }
    .width{
        width: 1px;
    }

    .live{
        font-size: 11px;
        font-weight: bold;
    }
    .red{
        color: #993333!important;
    }


    .link-valor{
        color: #2a6dd3;
        text-decoration: none;
        font-size: 12px;
        font-weight: bold;
    }
    .link-valor:hover{
        text-decoration: underline;
    }








    .iten-tab {
        background: #F5F5F5;
    }


    .tam{
        width: 6%;
    }

    .tam-l{
        margin: 0;
        margin-right: 20px;
    }


    .c-lock{
        background: #0066c0;
        color: #fff;
        padding: 1px 16px;
        border-radius: 4px;
    }

    .ft{
        font-size: 8px;
        position: relative;
        display: block;
        width: 100%;
        text-align: center;
        margin-top: -2px;
    }

    .left{
        float: left;
    }
</style>