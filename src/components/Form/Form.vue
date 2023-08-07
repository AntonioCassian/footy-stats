<template>
    <form>
        <div class="bod">
            <div class="feed-form">
                <span class="fa fa-user icon" aria-hidden="true"></span>
                <input type="email" placeholder="Email or Username" v-model="email"/>
            </div>
            <div class="feed-form fin">
                <span class="fa fa-user icon" aria-hidden="true"></span>
                <input type="email" v-model="email"/>
            </div>                                 
        </div>

        <div class="foot">
            <button class="submit-form">
                Login
            </button>
            
                                
            <div class="links-form">
                <a href="" class="reg">
                    Don't have an account? Register! 
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
            </div>

            <div class="links-form lastf">
                <a href="" class="reg">
                    Forgot Password? Reset it 
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
            </div>
        </div>

    </form>
</template>

<script>
export default {
    name: 'Form',
    props: ['']
}
</script>