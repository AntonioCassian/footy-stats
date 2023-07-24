<template>
    <div class="secundaryNav">
        <ul class="secondList" secundary>
            <li class="secondIt">
                <a href="">Yesterday</a>
            </li>
            <li class="secondIt">
                <a href="">Today</a>
            </li>
            <li class="secondIt" active>
                <a href="">Tomorrow</a>
            </li>
            <li class="secondIt">
                <a href="">Wed - Jul 13</a>
            </li>
            <li class="secondIt">
                <a href="">Wed - Jul 14</a>
            </li>
            <li class="secondIt">
                <a href="">Wed - Jul 15</a>
            </li>
            <li class="secondIt">
                <a href="">Wed - Jul 16</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'SecundaryNav'
}
</script>

<style scoped>
    .secondList{
        padding: 0;
        display: flex !important;
        background:#e2e2e2;
        border: none;
        border-radius: 4px;
    }
    .secondIt{
        flex: 1;
        text-align: center;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
    }
    .secondIt:last-child{
        border: none;
    }

    .secondIt > a{
        font-size: 12px;
        font-weight: 600;
        line-height: 22px;
        height: auto;
        display: block;
        text-decoration: none;
        padding: 2px 4px;
    }
    .secondIt > a:hover{
        text-decoration: underline;
    }
</style>