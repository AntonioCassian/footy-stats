<template>
    <div class="team">
        <div class="info" style="width: 250px;">
            <div class="count">
            <i :class="icon"></i>
            <a href="" class="link">
                {{ link }}
            </a>
            <span class="elip" v-if="country" :class="icon">{{ country }}</span>
            <span v-if="w === true" class="w">W</span>
            </div>
        </div>

            <div class="winner">
            <div class="item-body" style="width: 78px">
                <div class="status">
                    {{ stat }} 
                </div>
            </div>
            <div class="item-body" style="width: 82px">
                <div class="status nFonte">
                    {{ year }} 
                </div>
            </div>
            <div  class="item-body" style='width: 60px'>
                <div  v-if="progres"  class="status nFonte" >
                    {{ progres }} 
                </div>
                <i v-else class="fa fa-lock"></i>
            </div>
            <div class="item-body" style="width: 76px">
                <div v-if="hwin" class="status nFonte">
                    {{ hwin}} 
                </div>
                <i v-else class="fa fa-lock"></i>
            </div>
            <div class="item-body" style="width: 50px">
                <div v-if="draw" class="status nFonte">
                    {{ draw }} 
                </div>
                <i v-else class="fa fa-lock"></i>
            </div>
            <div class="item-body" style="width: 73px">
                <div v-if="awin" class="status nFonte">
                    {{ awin }} 
                </div>
                <i v-else class="fa fa-lock"></i>
            </div>
            <div class="item-body" style="width: 68px">
                <div v-if="avGoal" class="status nFonte">
                    {{ avGoal }} 
                </div>
                <i v-else class="fa fa-lock"></i>
            </div>
            <div class="item-body" style="width: 54px">
                <div v-if="btts" class="status nFonte">
                    {{ btts }} 
                </div>
                <i v-else class="fa fa-lock"></i>
            </div>
            <div class="item-body" style="width: 70px">
                <div v-if="gls" class="status nFonte">
                    {{ gls }} 
                </div>
                <i v-else class="fa fa-lock"></i>
            </div>
            <div class="item-body" style="width: 77px">
                <div v-if="avCor" class="status nFonte">
                    {{ avCor }} 
                </div>
                <i v-else class="fa fa-lock"></i>
            </div>
            <div class="item-body" style="width: 80px">
                <div v-if="total" class="status nFonte">
                    {{ total }} 
                </div>
                <i v-else class="fa fa-lock"></i>
            </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'Stat',
    props: ['icon', 'link', 'country', 'w', 'stat', 'year', 'progres', 'hwin', 'draw', 'awin', 'avGoal', 'btts', 'gls', 'avCor', 'total']
}
</script>

<style scoped>
    .team {
        display: flex;
        width: 1033px;
        margin-bottom: 2px;
    }
      .count{
        display: flex;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        background: #fff;
        justify-content: flex-start;
        overflow: visible;
        position: relative;
        height: 32px;
        padding: 0 10px;
        width: 250px;
    }
    .count i {
        font-size: 18px;
        margin-right: 10px;
    }
    .link{
        font-weight: 600;
        font-size: 14px;
        white-space: nowrap;
        max-width: 120px;
        overflow: hidden;
        color: #265ac7;
        margin-right: auto;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        max-width: 80%;
        text-decoration: none;
    }
    .link:hover {
        text-decoration: underline;
    }

    .elip{
        font-size: 10px;
        background: #e4ebf3;
        position: absolute;
        right: 5px;
        top: -8px;
        display: inline;
        padding: 2px 4px;
        font-weight: 500;
        color: #385063;
        max-width: 70px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }

    .w{
        background: #f1c9e1;
        display: inline;
        font-size: 12px;
        font-size: 10px;
        color: #a74981;
        font-weight: 600;
        height: 14px;
        width: 14px;
        text-align: center;
        line-height: 14px;
    }
    .winner {
        display: inline-flex;
    }
    .status {
        font-size: 9px;
        text-transform: uppercase;
        font-weight: 600;
        min-width: 32px;
        line-height: normal;
        border-bottom: 2px solid transparent;
        color: #151a31!important;
        text-align: center;
        padding: 0 10px;
        
    }
    .item-body {
        background: #fff;
        height: 32px;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 2px;
        text-align: center;
    }
    .item-body i {
        color: #265ac7;
        font-weight: 900;
        font-size: 11px!important;
    }
    .nFonte{
        font-size: 12px;
    }
    
</style>