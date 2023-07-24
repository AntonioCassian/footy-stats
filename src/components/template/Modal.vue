<template>
    <div class="modal" v-show="close">
            <div class="d-block">
                <span class="premim" success>Go Premium</span>
                <h3 class="title">Save Your Favourites Leagues, Teams and More.</h3>
                <p class="parag">Keep track of the leagues and competitions you love the most with FootyStats Premium. Saved items will appear first in your match feed and will also have a special home in your user dashboard.</p>
                <div class="btn">
                    <b-button variant="primary" class="p1" block >Learn More</b-button>
                    <b-button variant="secondary" class="p2" @click.prevent.stop="close = !close" 
                    block >Close</b-button>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props:['PropM'],
    data() {
        return{
            close: true
        }
    }
}
</script>

<style scoped>
    .topModal{
        
    }
    .modal{
        background: #FFF url(https://cdn.footystats.org/img/star.svg);
        background-position: calc(100% - 20px) calc(100% - 15px);
        background-size: 44px;
        background-repeat: no-repeat;

        position: fixed;
        top: 100px;
        bottom: 0;
        right: 0;
        left: 34%;
        z-index: 13;
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        width: 30%;
        height: 40%;
        padding: 13px 28px;
    }
    
    .premim{
        display: block;
        font-size: 12px;
        color: #439843;
        font-weight: 600;
        margin-bottom: 5px;
    }

    .title{
        font-weight: 600;
        margin-bottom: 10px;
        color: #193873;
        font-size: 16px;
    }

    .parag{
        line-height: 1.5em;
        font-size: 12px;
        color: #656565;
        margin-bottom: 1.5em;
    }
    
    .btn{
        padding: 2px;
    }
    .btn:first-child{
        margin-right: 10px;
    }
</style>