<template>
  <NavBar />
  <AllPatientsTableModal  /> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NavBar from '../components/NavBar.vue'

import AllPatientsTableModal from '../components/all patients page/AllPatientsTableModal.vue'


export default defineComponent({
  components: {
    NavBar,
    AllPatientsTableModal
  }
})
</script>
