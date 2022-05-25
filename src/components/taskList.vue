<script setup>
import { computed } from '@vue/reactivity';
import { useStore } from '../stores/taskStore';

import ongoing from './tasks/ongoing.vue'
import pinned from './tasks/pinned.vue'
import done from './tasks/done.vue'

let store = useStore();
let ongoingList = computed(()=>Boolean(store.ongoing.length))
let pinnedList = computed(()=>Boolean(store.pinned.length))
let doneList = computed(()=>Boolean(store.done.length))

</script>
<template>
<div>
    <div id="pinned" v-show="pinnedList">
        <pinned />
    </div>
    <div id="taskList" v-show="ongoingList">
        <ongoing />
    </div>
    <div id="done" v-show="doneList">
        <done />
    </div>
</div>
</template>
<style>
#pinned{
    border-bottom: black solid 1px;
}

#done{
    border-top: black solid 1px;
}

.multiOption{
    margin-left: auto;
}

.task{
    display: flex;
    gap: 20px;
}

.task>span{
    word-wrap: break-word;
}


</style>