<template>
        <li class="sid-it">
        <div class="sid-text" @click="tog" > 
            {{titleTog}}
        
            <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>

        <div class="min-li" v-if="this.toggle === true">
                <ul class="min-list">
                    <li class="min-it">
                        <div class="text-match">
                            {{ fieldOver }} 
                        </div>

                        <div class="val-match">
                            {{ val }}
                        </div>
                    </li>

                    <li class="min-it">
                        <div class="text-match">
                            {{ drawOvUnd }}
                        </div>

                        <div class="val-match">
                            {{ val1 }}
                        </div>
                    </li>

                    <li v-if="awOvUndTr" class="min-it">
                        <div class="text-match">
                            {{ awOvUndTr }}
                        </div>

                        <div class="val-match">
                            {{ val2 }}
                        </div>
                    </li>

                    <li v-if="overUnder" class="min-it">
                        <div class="text-match">
                            {{ overUnder }}
                        </div>

                        <div class="val-match">
                            {{ val3 }}
                        </div>
                    </li>

                    <li v-if="overUnder4" class="min-it">
                        <div class="text-match">
                            {{ overUnder4 }}
                        </div>

                        <div class="val-match">
                            {{ val4 }}
                        </div>
                    </li>

                </ul>
            </div>
        </li>
    
</template>

<script>
export default {
    name:'ItemTog',
    props: ['titleTog', 'fieldOver', 'drawOvUnd', 'awOvUndTr', 'overUnder', 'overUnder4' ,'val', 'val1', 'val2', 'val3', 'val4'],
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