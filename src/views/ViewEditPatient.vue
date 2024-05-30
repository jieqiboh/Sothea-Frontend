<template>
    <NavBar />
    <!-- <SideBar /> -->
  
    <div class="flex">
      <SideBar :activeSection="activeSection" @update:activeSection="setActiveSection" />
      <div class="content flex-grow p-6">
        <component :is="activeComponent" :patient="patient"></component>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from '../components/NavBar.vue'
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
      NavBar,
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
        patient: null 
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
      const patientId = this.$route.params.id;
      this.getPatientData(patientId);
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
      }
    }
  }
  </script>
  