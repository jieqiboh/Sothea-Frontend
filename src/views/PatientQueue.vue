<template>
    <NavBar />
    <PatientQueueTableModal  /> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NavBar from '../components/NavBar.vue'
import PatientQueueTableModal from '../components/patient queue page/PatientQueueTableModal.vue'


export default defineComponent({
components: {
    NavBar,
    PatientQueueTableModal
}
})
</script>
  