<script setup>
import { reactive, ref } from 'vue';
import { useStore } from '../stores/taskStore';

let store = useStore();

function addTask(task){
    store.addOngoingTask(task.target.elements.addTask.value);
}

</script>
<template>
<div class="taskAddition">
    <span>
        <form id="addForm" v-on:submit.prevent="addTask">
            <label for="addTask"></label>
            <input type="text" name="addTask">
            <button type="submit"> ADD </button>
        </form>
    </span>
</div>
</template>
<style>
#addForm{
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
}
input{
    background-color: beige;
    width: 255px;
    height: 20px;
    border-radius: 10px;
}

</style>