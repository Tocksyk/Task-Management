<script setup>
import toolbar from './components/toolbar.vue'
import today from './components/today.vue'
import addTask from './components/addTask.vue'
</script>
<template>
<div id="canvas">
    <toolbar />
    <today />
    <addTask />
    ---------pinnedTask-----------<br>
    ---------showTask-----------<br>
    ---------doneTask-----------<br>
</div>
</template>

<style>
body{
    background-color: #E55C8A;
}
#app{
    /* DC-DP */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* color: aquamarine;
    background-color: black; */
    
    height: 95vh;

}

#canvas{
    color: white;
    background-color: #3C424A;
    height: 550px;
    width: 400px;
}

</style>