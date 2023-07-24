<template>
  <div>
    <b-button v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-no-header"  class="bar"
    aria-labelledby="sidebar-no-header-title"
     no-header 
     backdrop
     shadow>
      <template #default="{ hide }">
        <div class="p-3 head">
          <h4 id="sidebar-no-header-title">Match Preview</h4>
          <b-button variant="primary" block>VIEW H2H</b-button>
          <b-button variant="secondary" block @click="hide">Close</b-button>
        </div>
        <div class="side-winner">
            <div class="sid-win">
              <div class="titles">
                <div class="side-title active">Overview</div>
                <div class="side-title">Odds</div>
                <div class="side-title">Predictions</div>
              </div>
              <div class="toggle">
                <i class="fa fa-star star"  id="show-btn" @click="open = !open"></i>
              </div>
            </div>
            <ul class="over-list pad-over" v-show="open">
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
            <ul class="over-list">
              <ItemMatch />
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
      open: false
    }
  }
}
</script>
<style>
  .bar > .b-sidebar{
    width: 415px;
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