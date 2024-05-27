<template>
  <NavBar />
  <AllPatientsTableModal  /> 
</template>

<script>
import NavBar from '../components/NavBar.vue'

import AllPatientsTableModal from '../components/all patients page/AllPatientsTableModal.vue'


export default {
  components: {
    NavBar,
    AllPatientsTableModal
  }
}
</script>
