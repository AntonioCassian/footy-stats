<template>
    <div class="itMatch">
        <div class="team">
            <div class="info" style="width: 320px">
                <div class="count">
                    <div class="apres">
                        <span class="time">{{ tm }}, {{ hr }}</span>
                        <span class="posit">{{ divi }}</span>
                    </div>
                    <div class="compet">
                        <span class="posit equip">{{ comp1 }}</span>
                        <span class="posit equip">{{ comp2 }}</span>
                </div>
                <div class="values">
                    <span class="val med">{{ val1 }}</span>
                    <span class="val med">{{ val2 }}</span>
                </div>
               </div>
            </div>
            <div class="winner">
                <div class="item-body" style="width: 56px">
                    <div class="it-match">
                        {{ avg }}
                    </div>
                </div>
                <div class="item-body" style="width: 56px">
                    <div class="it-match">
                        {{ btts }}
                    </div>
                </div>
                <div class="item-body" style="width: 60px">
                    <div v-if="u15" class="it-match">
                        {{ u15 }}
                    </div>
                    <i v-else class="fa fa-lock"></i>
                </div>
                <div class="item-body" style="width: 60px">
                    <div v-if="d25" class="it-match">
                        {{ d25 }}
                    </div>
                    <i v-else class="fa fa-lock"></i>
                </div>
                <div class="item-body" style="width: 56px">
                    <div v-if="corners" class="it-match">
                        {{ corners }}
                    </div>
                    <i else class="fa fa-lock"></i>
                </div>
                <div class="item-body" style="width: 56px">
                    <div v-if="cards" class="it-match">
                        {{ cards }}
                    </div>
                    <i else class="fa fa-lock"></i>
                </div>
                <div class="item-body" style="width: 60px">
                    <div class="it-match">
                        {{ z05 }}
                    </div>
                </div>
                <div class="item-body" style="width: 60px">
                    <div class="it-match">
                        {{ t35 }}
                    </div>
                </div>
                <div class="item-body" style="width: 76px">
                    <div class="it-match">
                        {{ hr1 }}
                    </div>
                </div>
                <div class="item-body" style="width: 61px">
                    <div class="it-match">
                        {{ homex }}
                    </div>
                </div>
                <div class="item-body" style="width: 58px">
                    <div class="it-match">
                        {{ awayx }}
                    </div>
                </div>
                <div class="item-body" style="width: 60px">
                    <div class="it-match">
                        {{ btts1 }}
                    </div>
                </div>
                <div class="item-body" style="width: 60px">
                    <div class="it-match">
                        {{ btt2 }}
                    </div>
                </div>
                <div class="item-body" style="width: 92px">
                    <div class="it-match">
                        {{ hwo }}
                    </div>
                </div>
                <div class="item-body" style="width: 69px">
                    <div class="it-match">
                        {{ drodds }}
                    </div>
                </div>
                <div class="item-body" style="width: 89px">
                    <div class="it-match">
                        {{ awo }}
                    </div>
                </div>
                <div class="item-body" style="width: 91px">
                    <div class="it-match">
                        {{ btyo }}
                    </div>
                </div>
                <div class="item-body" style="width: 66px">
                    <div class="it-match">
                        {{ odds05 }}
                    </div>
                </div>
                <div class="item-body" style="width: 66px">
                    <div class="it-match">
                        {{ odds15 }}
                    </div>
                </div>
                <div class="item-body" style="width: 66px">
                    <div class="it-match">
                        {{ odds25 }}
                    </div>
                </div>
                <div class="item-body" style="width: 66px">
                    <div class="it-match">
                        {{ odds35 }}
                    </div>
                </div>
                <div class="item-body" style="width: 63px">
                    <div class="it-match">
                        {{ m1odds }}
                    </div>
                </div>
                <div class="item-body" style="width: 63px">
                    <div class="it-match">
                        {{ m2odds }}
                    </div>
                </div>
                <div class="item-body" style="width: 63px">
                    <div class="it-match">
                        {{ m3odds }}
                    </div>
                </div>
                <div class="item-body" style="width: 58px">
                    <div class="it-match">
                        {{ off }}
                    </div>
                </div>
                <div class="item-body" style="width: 78px">
                    <div v-if="cor85" class="it-match">
                        {{ cor85 }}
                    </div>
                    <i v-else class="fa fa-lock"></i>
                </div>
                <div class="item-body" style="width: 78px">
                    <div v-if="cor95" class="it-match">
                        {{ cor95 }}
                    </div>
                    <i v-else class="fa fa-lock"></i>
                </div>
                <div class="item-body" style="width: 83px">
                    <div v-if="cor10" class="it-match">
                        {{ cor10 }}
                    </div>
                    <i v-else class="fa fa-lock"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Info',
    props: ['tm', 'hr', 'divi', 'comp1', 'comp2', 'val1', 'val2',
     'avg', 'btts', 'u15', 'd25', 'corners', 'cards', 'z05', 't35', 'hr1', 'homex', 
     'awayx', 'u143', 'btts1', 'btt2', 'hwo', 'drodds', 'awo', 'btyo', 'odds05', 'odds15', 
     'odds25', 'odds35', 'm1odds', 'm2odds', 'm3odds', 'off', 'cor85', 'cor95', 'cor10'],
    components: {},
    
}
</script> 

<style>
  .team{
    display: flex;
    width: 2249px;
    margin-bottom: 2px;
  }
  .count{
    width: 320px;
    background: #fff;
    height: 56px;
    min-width: 56px;
    display: inline-flex;
    align-items: center;
    padding: 0 12px;
    margin-right: 2px;
  }
  .apres {
    font-size: 10px;
    width: 90px;
    color: #375086;
    border-right: 1px solid #eaeaea;
  }

  .time{
    display: block;
    overflow: hidden;
    font-size: 10px;
  }
  .posit {
    display: block;
    max-width: 95%;
    white-space: nowrap;
    font-weight: 500;
    display: inline-block;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    font-size: 10px;
  }

  .compet {
    margin-left: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;    
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .equip{
    font-size: 12px;
    font-weight: 500;
    margin: 0 5px 0 0;
    max-width: 95%!important;
    display: inline-block;
    text-overflow: ellipsis;
  }
  
  .values {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .val {
    border-radius: 0.2rem;
    height: 18px;
    padding: 0 0.2rem;
    line-height: 18px;
    margin: 0;
    font-size: 12px;
    color: inherit;
    font-weight: 600;
    padding: 0 4px;
  }

  .med {
    background: #f1a32b;
    color: #fff4e3;
  }

  .it-match {
    text-align: center;
    font-size: 13.5px;
    line-height: normal;
    border-bottom: 2px solid transparent;
    color: #151a31!important;
    padding: 0 10px;
  }

  .winner {
        display: inline-flex;
    }

    .item-body {
        background: #fff;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 2px;
        text-align: center;
        height: 56px;
    }
    .item-body i {
        color: #265ac7;
        font-weight: 900;
        font-size: 14px!important;
    }
</style>