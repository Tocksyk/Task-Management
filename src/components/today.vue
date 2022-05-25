<script setup>
import { computed } from 'vue';
let date = computed(()=>new Date().getDay().toLocaleString());
let fullDate = computed(()=> new Date().getDate().toString());
</script>
<template>
<div class="presentSection">
    <span class="goChange">
        <button class="prevButton"> <i class="fa fa-angle-right" aria-hidden="true"></i>
 </button>
    </span>
    <span>
        <section>{{date}}</section>
        <section>{{fullDate}}</section>
    </span>
    <span class="goChange">
        <button class="forwardButton"> &gt </button>
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
</style>