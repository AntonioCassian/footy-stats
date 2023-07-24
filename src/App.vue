<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,800&display=swap');
  *{
    margin: 0px; 
    padding: 0px;
    font-family: "Source Sans 3", "Source Sans Pro", "Roboto", "Open Sans", Helvetica, sans-serif;
    list-style: none;
  }
  
  body{
    background: #f5f5f5 !important;
  }

  ul{
    padding: 0;
  }
  
  .tooltip-inner{
    width: 100%;
  }

  .wrapper-top{
    max-width: 1000px;
    margin: 0 159px;
  }

  .tit-page{
    background: #fff;
    padding: 20px 13px;
  }

  .di-f{
    display: flex;
  }

  .pd-l {
    padding-top: 20px;
    width: 20%;
    margin-right: 20px;
  }

  .pd{
      padding-top: 20px;
      width: 78%;
    }
</style>
