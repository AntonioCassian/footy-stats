<template>
    <div class="TSmall">
        <span v-b-tooltip.hover :title='title'>
            <i class="fa fa-lock" aria-hidden="true"></i>
        </span>
    </div>
</template>

<script>
export default {
    name: 'Tsmall',
    props: ['title']
}
</script>