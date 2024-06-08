<template>
  <div class="bar">Project Sothea</div>
  <!-- <SideBar /> -->

  <div class="flex">
    <SideBar :activeSection="activeSection" :id="this.patientId" :name="this.name" :age="this.age" @update:activeSection="setActiveSection" />
    <div class="content flex-grow p-6">
      <component :is="activeComponent" :patient="patient" :patientId="this.patientId" :patientData="this.patient" :isAdd="false"></component>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'

import AdminModal from '../components/AdminModal.vue'
import PastMedHistModal from '../components/PastMedHistModal.vue'
import SocialHistModal from '../components/SocialHistModal.vue'
import VitalStatsModal from '../components/VitalStatsModal.vue'
import HeightWeightModal from '../components/HeightWeightModal.vue'
import VisualAcuityModal from '../components/VisualAcuityModal.vue'
import DrConsultModal from '../components/DrConsultModal.vue'

import axios from 'axios'

export default {
  components: {
    SideBar,
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
      patientId: null,
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
  created() {
    this.patientId = this.$route.params.id;
    this.loadPatientData();
  },
  methods: {
    setActiveSection(section) {
      this.activeSection = section
    },
    async getPatientData(id) {
      try {
        const { data } = await axios.get(`http://localhost:9090/patient/${id}`);
        this.patient = data;
        console.log(this.patient);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    },
    async loadPatientData() {
      try {
        await this.getPatientData(this.patientId);
        console.log(this.patient);
        if (this.patient && this.patient.admin) {
          const admin = this.patient.admin;
          this.name = admin.name;
          const dob = admin.dob;
          this.age = new Date().getFullYear() - new Date(dob).getFullYear();
          console.log(this.name)
        }
      } catch (error) {
        console.error('Error loading patient data:', error);
      }
    }
  }
}
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