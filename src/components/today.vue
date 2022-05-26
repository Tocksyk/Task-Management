<script setup>
import { computed } from 'vue';
let date = computed(()=>{
    let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    return days[new Date().getDay()]
});
let fullDate = computed(()=> new Date(Date.now()).toLocaleDateString());
</script>
<template>
<div class="presentSection">
    <span class="goChange">
        <button class="prevButton">
            <i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>
            </button>
    </span>
    <span>
        <section>{{date}}</section>
        <section>{{fullDate}}</section>
    </span>
    <span class="goChange">
        <button class="forwardButton">
            <i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>
            </button>
    </span>
</div>
</template>
<style>
.presentSection{
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin: 11px;
}

.prevButton,.forwardButton{
    background-color: #3C424A;
    border: none;
}
i{
    color: grey;
}
</style>