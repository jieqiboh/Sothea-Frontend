<template>
  <div>

    <!-- <div class="bar" style="display: flex; justify-content: space-between;">

      <p>Project Sothea</p>
      <div class="flex justify-end" v-on:click="back">
        <p class="pr-2 text-sm font-light">Back to All Patients</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4 stroke-2 pt-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
      </div>

    </div> -->
    <NavBar/>

    <div class="flex">
      <SideBar
        :activeSection="activeSection"
        :id="this.patientId"
        :name="this.name"
        :age="this.age"
        @update:activeSection="setActiveSection"
      />
      <div class="content flex-grow p-6">
        <keep-alive>
          <component
            :is="activeComponent"
            :patient="patient"
            :patientId="this.patientId"
            :patientData="this.patient"
            :isAdd="false"
            @reload="this.loadPatientData"
          >
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SideBar from '../components/SideBar.vue'
import NavBar from '../components/NavBar.vue'

import AdminModal from '../components/AdminModal.vue'
import PastMedHistModal from '../components/PastMedHistModal.vue'
import SocialHistModal from '../components/SocialHistModal.vue'
import VitalStatsModal from '../components/VitalStatsModal.vue'
import HeightWeightModal from '../components/HeightWeightModal.vue'
import VisualAcuityModal from '../components/VisualAcuityModal.vue'
import DrConsultModal from '../components/DrConsultModal.vue'

import axios from 'axios'

export default defineComponent({
  components: {
    SideBar,
    NavBar,
    AdminModal,
    PastMedHistModal,
    SocialHistModal,
    VitalStatsModal,
    HeightWeightModal,
    VisualAcuityModal,
    DrConsultModal
  },
  data() {
    return {
      activeSection: 'admin',
      patient: null,
      name: null,
      age: null
    }
  },
  computed: {
    activeComponent() {
      switch (this.activeSection) {
        case 'admin':
          return 'AdminModal'
        case 'past-med-hist':
          return 'PastMedHistModal'
        case 'social-hist':
          return 'SocialHistModal'
        case 'vital-stats':
          return 'VitalStatsModal'
        case 'height-weight':
          return 'HeightWeightModal'
        case 'visual-acuity':
          return 'VisualAcuityModal'
        case 'dr-consult':
          return 'DrConsultModal'
        default:
          return 'AdminModal'
      }
    }
  },
  methods: {
    setActiveSection(section) {
      console.log(section)
      this.activeSection = section
    },

    async loadPatientData() {
      try {
        console.log("Loading patient data")
        console.log(this.patientId)

        const response = await axios.get(`http://localhost:9090/patient/${this.patientId}`);
        const { data } = response;
        this.patient = data;
        
        if (this.patient && this.patient.admin) {
          const admin = this.patient.admin
          this.name = admin.name
          const dob = admin.dob
          this.age = new Date().getFullYear() - new Date(dob).getFullYear()
          console.log(this.name)
          console.log(this.age)
        }
      } catch (error) {
        console.log('Error loading patient data:', error)
      }
    },
    back() {
      this.$router.push('/allpatients')
    }
  },
  created() {
    this.patientId = this.$route.params.id
    this.loadPatientData()
  }
})
</script>

<style scoped>
.bar {
  background-color: #3f51b5;
  padding: 1rem;
  width: 100%;
  color: white;
  font-weight: 500;
  padding-left: 1.5rem;
}
</style>
