<template>
    <div class="search">
        <input
         type="text" 
         placeholder="Search Teams and Leagues" />
    </div>
</template>
<script>
export default {
    name: 'Search'
}
</script>

<style>
.search input{
    height: 100%;
    font-size: 0.8em;
    width: 260px;
    background: #f1f1f1;
    padding: 4px 6px;
    border: none;
    border-radius: 4px;
}
</style>