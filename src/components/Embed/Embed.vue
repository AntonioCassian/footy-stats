<template>
    <div class="embed">
        <div class="title">
            <h5>
                Premium is Here!<br />
                500+ Great leagues known to be advantageous!
            </h5>
        </div>
        <p class="text">We've done the research into which leagues have the most winning potential. Plus, you get Corner stats and Card stats along with CSV. Subscribe to FootyStats Premium today!</p>

        <p class="text tp">
            Michael Owen endorses<br>
            FootyStats Premium
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </p>

        <video width="230" height="295" preload="metadata" controls class="vi">
            <source :src="src" type="video/mp4">
        </video>

        <button class="bt">
            <a href="">Join Premium NOW<i class="fa fa-angle-right" aria-hidden="true"></i></a>            
        </button>
    </div>
</template>

<script>
export default {
    name: 'Embed',
    props: ['src']
}
</script>

<style scoped>
    .embed{
        background: #0a71c5;
        text-align: center;
        background: #0a71c5;
        color: #fff;
        padding: 20px 20px 20px 28px;
        margin-top: 28px;
    }
    .title {
        font-size: 20px;
        font-weight: 800;
    }
    .text{
        font-size: 14px;
        line-height: 1.4em;
    }
    .text > i{
        font-weight: 900;
    }
    .tp{
        border-top: 1px solid rgba(255,255,255,0.7);
        padding-top: 14px;
    }
    .vi{
        clear: both;
        display: block;
        margin: 0 auto;
        width: 230px;
    }
    .bt{
        height: 42px;
        text-align: center;
        line-height: 42px;
        text-transform: uppercase;
        font-size: 12px;
        padding: 0 26px;
        font-weight: 600;
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
        border-radius: 100px;
        background: #058fff;
        display: inline-block;
        border: none;
        margin-top: 20px;
    }
    .bt a{
        text-decoration: none;
        color: #fff;
        font-size: 12px;
    }
    a > i{
        font-weight: 900;
        margin-left: 10px;
    }
</style>