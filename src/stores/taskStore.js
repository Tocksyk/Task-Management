import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';

export const useStore = defineStore('task',()=>{
    let ongoing = reactive(['Eat','Sleep','Repeat']);
    let pinned = reactive([]);
    let done = reactive([]);

    function addOngoingTask(task){
        ongoing.push(task)
    }

    function addPinnedTask(task){
        pinned.push(task)
    }

    function addDoneTask(task){
        done.push(task)
    }

    return{
        ongoing,pinned,done,
        addDoneTask,addOngoingTask,addPinnedTask
    }

})