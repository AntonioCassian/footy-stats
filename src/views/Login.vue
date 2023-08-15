<template>
    <div class="login">
        <Header />
        <div class="area-log">
            <b-container>
                <b-row class="justify-content-center" align-v="center">
                    <b-col col md="5" sm="12" class="centered" >
                        <div class="wrapper-form">
                            <div class="form-head">
                                <SubTitle class="log" sub="Login" paragraph="Welcome back. Login using your user and password to access amazing features."/>
                            </div>
                            <form>
                                <div class="bod">
                                    <Input icon="fa fa-user" type="email" place="Email or Username" :model="user.email"/>
                                    <Input icon="fa fa-lock" type="password" place="Password" :model="user.senha" />
                                </div>
                                <div class="foot">
                                    <Button text="Login" type="submit"/>
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

                                    <Link text="Don't have an account? Register!  "/>
                                    <Link text="Forgot Password? Reset it  " class="lastf"/>
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
    name: 'Login',
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
    .area-log {
        background: #171717 url('../assets/backg.jpg');
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
    }
    .wrapper-form {
        background: #fff;
        border-radius: 4px;
        margin: 110px 0 100px;
    }
    .form-head{
        border-radius: 4px 4px 0 0;
        padding: 30px;
    }
    .bod{
        padding: 30px;
        background: #f3f3f3;
        border-top: 1px solid #e4e4e4;
    }
    .feed-form {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    .icon{
        font-size: 16px;
        margin-right: 14px;
        flex-basis: 22px;
        text-align: center;
        color: #1f406b;
    }
    .feed-form > input {
        flex: 1;
        width: 80%;
        font-size: 14px;
        height: 34px;
        line-height: normal;
        padding: 1px 2px 1px 10px;
    }
    .fin{
        margin-bottom: 0;
    }

    .foot{
        padding: 16px; 
        border-top: 1px solid #e4e4e4;
        border-radius: 0 0 4px 4px;
    }
    
    .foot-face{
        background: #1877f2;
        color: #fff;
        padding: 8px;
        border-radius: 4px;
    }
    .li-ft {
        color: #fff;
        text-decoration: none;
    }
    .ic {
        font-size: 24px;
        flex-basis: 24px;
    }
    .txt{
        font-size: 16px;
        font-weight: bold;
    }
    .foot-twt {
        background: #31a1e6;
        padding: 8px;
        border-radius: 4px;
    }
    .li-twt {
        color: #fff;
        text-decoration: none;
    }
    .twt:hover{
        text-decoration: underline;
    }

    
    .lastf[data-v-072bf005]{
        margin: 7px 0 12px;
    }
</style>