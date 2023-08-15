<template>
    <div class="login">
        <Header />
        <div class="area-log">
            <b-container>
                <b-row class="justify-content-center" align-v="center">
                    <b-col col md="5" sm="12" class="centered" >
                        <div class="wrapper-form">
                            <div class="form-head">
                                <SubTitle class="log" sub="Create an Account" paragraph="To create an account with FootyStats, simply enter your details below:"/>
                            </div>
                            <form>
                                <div class="bod">
                                    <Input icon="fa fa-user" type="email" place="Username" :model="user.email"/>
                                    <Input icon="fa fa-envelope" type="email" place="Your E-mail Address" :model="user.email"/>
                                    <Input icon="fa fa-unlock-alt" type="password" place="Password" :model="user.senha" />
                                    <p class="ipt-min-txt">* minimum 6 characters</p>
                                    <Input icon="fa fa-lock" type="password" place="Cinfirm Password" :model="user.senha" />
                                </div>
                                <div class="foot">
                                    <Button text="Create my account" icon="fa fa-angle-right" type="submit"/>
                                    <p class="text-center mb-0">or</p>
                                    <div class="foot-icons">
                                        <div class="feed-form foot-face">
                                            <a href="" class="li-ft">
                                                <i class="fa fa-facebook-official ic" aria-hidden="true"></i>
                                                <span class="txt">Log in With Facebook</span>
                                            </a>
                                        </div>
                                        <div class="feed-form foot-twt">
                                            <a href="" class="li-twt">
                                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                                <span class="txt twt">Log in With Twitter</span>
                                            </a>
                                        </div>
                                    </div>

                                    <Link text="Already have an account? Login!  "/>
                                    
                                </div>
                            </form>
                        </div>
                    </b-col>
                </b-row>        
            </b-container>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import SubTitle from '@/components/template/SubTitle.vue'
import Input from '@/components/Form/Input.vue'
import Button from '@/components/Form/Button.vue'
import Link from '@/components/Form/Link.vue'
export default {
    name: 'Register',
    components: {SubTitle, Header, Input, Button, Link},
    data(){
        return {
            user: {
                email: '',
                senha: ''
            }
        }
    }
}
</script>

<style>
.ipt-min-txt {
    font-size: 11px;
    color: #888!important;
    text-align: right;
    margin-bottom: 10px;
}
</style>