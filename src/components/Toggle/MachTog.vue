<template>
    <ul class="sid-odds">
        <li class="sid-it" @click="tog">
        <div class="sid-text" > 
            Result
        
            <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>

        <div class="min-li" v-if="this.toggle === true">
                <ul class="min-list">
                    <li class="min-it">
                        <div class="text-match">
                            Home Win
                        </div>

                        <div class="val-match">
                            1.87
                        </div>
                    </li>
                    <li class="min-it">
                        <div class="text-match">
                            Draw
                        </div>

                        <div class="val-match">
                            3.85
                        </div>
                    </li>
                    <li class="min-it">
                        <div class="text-match">
                            Away Win
                        </div>

                        <div class="val-match">
                            3.42
                        </div>
                    </li>
                </ul>
            </div>
        </li>

        <li class="sid-it" @click="tog">
        <div class="sid-text" > 
            Result
        
            <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>

        <div class="min-li" v-if="this.toggle === true">
                <ul class="min-list">
                    <li class="min-it">
                        <div class="text-match">
                            Home Win
                        </div>

                        <div class="val-match">
                            1.87
                        </div>
                    </li>
                    <li class="min-it">
                        <div class="text-match">
                            Draw
                        </div>

                        <div class="val-match">
                            3.85
                        </div>
                    </li>
                    <li class="min-it">
                        <div class="text-match">
                            Away Win
                        </div>

                        <div class="val-match">
                            3.42
                        </div>
                    </li>
                </ul>
            </div>
        </li>

        <li class="sid-it" @click="tog">
        <div class="sid-text" > 
            Result
        
            <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>

        <div class="min-li" v-if="this.toggle === true">
                <ul class="min-list">
                    <li class="min-it">
                        <div class="text-match">
                            Home Win
                        </div>

                        <div class="val-match">
                            1.87
                        </div>
                    </li>
                    <li class="min-it">
                        <div class="text-match">
                            Draw
                        </div>

                        <div class="val-match">
                            3.85
                        </div>
                    </li>
                    <li class="min-it">
                        <div class="text-match">
                            Away Win
                        </div>

                        <div class="val-match">
                            3.42
                        </div>
                    </li>
                </ul>
            </div>
        </li>

        <li class="sid-it" @click="tog">
        <div class="sid-text" > 
            Result
        
            <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>

        <div class="min-li" v-if="this.toggle === true">
                <ul class="min-list">
                    <li class="min-it">
                        <div class="text-match">
                            Home Win
                        </div>

                        <div class="val-match">
                            1.87
                        </div>
                    </li>
                    <li class="min-it">
                        <div class="text-match">
                            Draw
                        </div>

                        <div class="val-match">
                            3.85
                        </div>
                    </li>
                    <li class="min-it">
                        <div class="text-match">
                            Away Win
                        </div>

                        <div class="val-match">
                            3.42
                        </div>
                    </li>
                </ul>
            </div>
        </li>

      
    </ul>
</template>

<script>
export default {
    name:'ItemTog',
    data () {
        return {
            toggle: false
        }
    },
    computed: {
        togg () {
            if(this.toggle == true) {
                return this.active
            }
        }
    },
    methods: {
        tog () {
            this.toggle = !this.toggle
        }
    }
}
</script>

<style>
    .sid-odds{
        padding: 0;
    }
    .sid-it{
        color: #295cc4;
        font-weight: 500;
        align-items: center;
        border-bottom: 1px solid #eaeaea;
        cursor: pointer;
    }
    .sid-text {
        font-size: 12px;
        color: #295cc4;
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        padding: 12px;
    }
    .sid-text > i {
        font-weight: 900;
        font-size: 13px;
        float: right;
    }
    .min-list{
        margin: 0px;
        padding: 0px;
        width: 100%;
    }
    .min-it{
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #eaeaea;
        padding: 12px;
    }
    .text-match{
        font-weight: 500;
        color: #526a90;
        font-size: 11px;
    }
    .val-match{
        font-weight: 600;
        color: #183258;
        font-size: 12px;
    }
</style>