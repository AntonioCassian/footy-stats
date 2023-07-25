<template>
    <form class="form">
        <select class="select">
            <option value="">KoTime</option>
            <option value="">Home Form</option>
            <option value="">Away Form</option>
            <option value="">AVG Goals</option>
            <option value="">BTTS Potential</option>
            <option value="">AVG Cards</option>
        </select>
        <select class="select">
            <option value="">Lowest First</option>
            <option value="">Highest First</option>
        </select>

        <button class="w-100 my-3 bt-filt">
            <i class="fa fa-search" aria-hidden="true"></i>
            Search
        </button>

    </form>
</template>

<style>
    .select {
        height: 34px;
        display: block;
        border: 0;
        background: #fff;
        color: #2a5bc4;
        font-weight: 500;
        width: 100%;
        margin-bottom: 4px;
    }

    .bt-filt {
        background: #265ac7!important;
        color: #FFF!important;
        height: 32px;
        line-height: 32px;
        padding: 0 1em;
        font-weight: 600;
        font-size: 13px;
        border: none;
        border-radius: 4px;
    }
</style>