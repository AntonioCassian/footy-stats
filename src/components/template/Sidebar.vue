<template>
  <div>
    
    <b-sidebar id="sidebar-no-header"  class="bar"
    aria-labelledby="sidebar-no-header-title"
     no-header 
     backdrop
     shadow>
      <template #default="{ hide }">
        <div class="p-3 head">
          <h4 id="sidebar-no-header-title">Match Preview</h4>
          <div class="btns">
            <button class="btn-lin">VIEW H2H</button>
            <button class="bt" block @click="hide">Close</button>
          </div>
        </div>
        <div class="side-winner">
            <div class="sid-win">
              <div class="titles">
                <div class="side-title" @click="Over" :class="activeOver">Overview</div>
                <div class="side-title" @click="Odds" :class="activeOdds">Odds</div>
                <div class="side-title" @click="Pred" :class="activePred">Predictions</div>
              </div>
              <div class="toggle">
                <i class="fa fa-star star"  id="show-btn" @click="open = !open"></i>
              </div>
            </div>
            <ul v-if="open === 'over'" class="over-list pad-over">
              <Item icon="" text="Mercedes vs El Porvenir"/>
              <li class="over-it">
                <span class="text">AVG Goals</span> 
                <span class="val">2.13</span>
              </li>
              <li class="over-it">
                <span class="text">AVG Goals</span> 
                <span class="val">2.13</span>
              </li>
              <li class="over-it">
                <span class="text">AVG Goals</span> 
                <span class="val">2.13</span>
              </li>
              <li class="over-it">
                <span class="text">AVG Goals</span> 
                <span class="val">2.13</span>
              </li>
              <li class="over-it">
                <span class="text">AVG Goals</span> 
                <span class="val">2.13</span>
              </li>
              <li class="over-it">
                <span class="text">AVG Goals</span> 
                <span class="val">2.13</span>
              </li>
              <li class="over-it">
                <span class="text">AVG Goals</span> 
                <span class="val">2.13</span>
              </li>
              <li class="over-it">
                <span class="text-match">AVG Goals</span> 
                <span class="val-match">2.13</span>
              </li>
            </ul>
            <ul v-if="open === 'odds'" class="over-list">
              <ItemMatch titleTog="Result" fieldOver="Home Win" val="1.46" />
              <ItemMatch titleTog="Goals (Over)" fieldOver="Over 0.5 Goals" val="N/A" drawOvUnd="Over 1.5 Goals" val1="N/A" />
              <ItemMatch titleTog="Goals (Under)" fieldOver="Under 0.5 Goals" val="N/A" drawOvUnd="Under 1.5 Goals" val1="N/A" />
              <ItemMatch titleTog="BTTS" fieldOver="Yes" val="N/A" drawOvUnd="No" val1="N/A" />
            </ul>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>

import Item from '../Lista/ItemS.vue'
import ItemMatch from '../Toggle/MachTog.vue'
export default {
  components: {Item, ItemMatch},
  data(){
    return {
      open: 'over',
    }
  },
  computed: {
    activeOver() {
      return{
        active: this.open === 'over' 
      }
    },
    activeOdds() {
      return{
        active: this.open === 'odds' 
      }
    },
    activePred() {
      return{
        active: this.open === 'pred' 
      }
    },
  },
  methods: {
    Over() {
      this.open = 'over'
    },
    Odds() {
      this.open = 'odds'
    },
    Pred() {
      this.open = 'pred'
    }
  }
}
</script>
<style>
  .bar > .b-sidebar{
    width: 400px;
  }
  .btns{
    display: flex;
    gap: 4px;
  }
  .btn-lin {
    background: #2459c7;
    font-weight: 900;
    color: #FFF!important;
    font-size: 16px;
    padding: 6px 10px;
    border: none;
    border-radius: 4px;
    display: inline;
    line-height: 25px;
    text-decoration: none;
    width: 100%;
    text-transform: uppercase;
  }
  .bt{
    background: none;
    color: #71859a;
    border: none;
    font-size: 14px;
    text-transform: uppercase;
  }
  .head {
    display: flex;
    justify-content: space-between;
  }
  .active{
    color: #183258!important;
    border-bottom: 2px solid #364d6e;
  }
  .sid-win {
    border-bottom: 1px solid #eaeaea;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .toggle{
    width: 46px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #eaeaea;
  }

  .star {
    cursor: pointer;
    font-weight: 600;
    color: #bcc6de;
    font-size: 18px;
  }
  .star:hover{
    color: #d6ac04;
  }

  .titles {
    padding: 0 12px;
  }
  .side-title{
    cursor: pointer!important;
    display: inline-block;
    height: 44px;
    line-height: 44px;
    font-size: 12px;
    font-weight: 600;
    color: #2c78e7;
    text-decoration: none;
    margin-right: 18px;
  }
  .side-title:hover {
    border-bottom: 2px solid;
  }

  .over-list {
    padding: 0;
    background: #fff;
  }
  .over-it{
    font-weight: 500;
    color: #526a90;
    font-size: 11px;
    display: flex;
    justify-content: space-between;
    text-align: justify;
    padding: 12px;
    border-top: 1px solid #eaeaea;
  }
  .val-match{
    font-weight: 600;
    color: #183258;
    font-size: 12px;
  }
</style>