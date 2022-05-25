<script setup>
import { computed } from '@vue/reactivity';
import { useStore } from '../../stores/taskStore';

let store = useStore();

</script>
<template>
<div class="task" v-for="(task,index) in store.ongoing" :key="index">
        <span>{{++index}}</span>
        <span>{{task}}</span>
        <button class="multiOption">Options</button>
        </div>
</template>
<style></style>