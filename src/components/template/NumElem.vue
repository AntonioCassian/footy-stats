<template>
    <div class="card-min">
        <div class="min">
            {{ num }} 
            <span>{{ text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'number',
    props: ['num', 'text' ]
}
</script>

<style scoped>

    .card-min {
        background: #fff;
        margin-bottom: 5px;
    }
    .min {
        padding: 1em;
        font-weight: 600;
        color: #008500;
    }

    .min > span {
        display: block;
        font-size: 12px;
        font-weight: 500;
        margin-top: 0.8em;
        color: #000;
    }
</style>