<template>
    <div>
        <div class="mr" v-if="prof === true" style="width: 80px">
                <div class="profit-team">
                    Profitable
                </div>
                <div class="profit-text">
                    <b v-if="val" class="gren bold">{{ val }}</b>
                    <b v-if="!val" class="gren bold">$
                        <a v-if="!val" href="">
                            <i class="fa fa-lock"></i>
                        </a>
                    </b>    
                    <p v-if="text" class="text">{{text}}</p>
                    <p v-else class="text">Premium Only</p>
                </div>
            </div>

            <div  class="mr" v-if="loss === true" style="width: 80px">
                <div class="profit-team loss">
                    Loss
                </div>
                <div class="profit-text">
                    <b class="red bold">-$$
                        <a v-if="!val" href="">
                            <i class="fa fa-lock"></i>
                        </a>
                    </b>  
                    <p class="text">Premium Only</p>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'item-profit',
        props: ['prof', 'loss', 'val', 'text']
    }
</script>