<template>
    <li class="ilg" @click="op">
        {{ text }}({{ len }})<i class="fa fa-angle-down"></i>
        <ul class="list-cab" v-if="open === true">
            <li class="list-cab">
                <a class="link-drop">
                    Afghanistan Premier Ligue
                </a>
            </li>
            <li class="list-cab">
                <a class="link-drop">
                    Afghanistan Premier
                </a>
            </li>
        </ul>
    </li>
</template>

<script>
    export default {
        props: ['text','len'],
        data() {
            return {
                open: false
            }
        },
        methods: {
            op() {
                this.open = !this.open
            }
        }
    }
</script>

<style>
    .ilg{
        cursor: pointer;
        line-height: 39px;
        border-top: 1px solid #484848;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15)!important;
        font-size: 12.5px;
        color: #fff;
    }
    .ilg > i {
        margin-left: 2px;
        color: #888;
        font-weight: 900;
    }
</style>