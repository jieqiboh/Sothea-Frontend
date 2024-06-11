<template>
  <NavBar />
  <!-- <SideBar /> -->

  <div class="flex">
    <SideBar
      :activeSection="activeSection"
      @update:activeSection="setActiveSection"
      :id="this.patientId"
      :name="this.name"
      :age="this.age"
    />
    <div class="content flex-grow p-6">
      <keep-alive>
        <component
          :is="activeComponent"
          :patientId="patientId"
          @patientCreated="handlePatientCreated"
        ></component>
      </keep-alive>
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
      // patient: null,
      patientId: ''
      // name: '',
      // age: ''
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
    this.getIsValidToken()
  },
  methods: {
    setActiveSection(section) {
      this.activeSection = section
    },
    async getIsValidToken() {
      await axios.get('http://localhost:9090/login/is-valid-token')
    },
    // async getPatientData(id) {
    //   axios
    //     .get(`http://localhost:9090/patient/${id}`)
    //     .then((response) => {
    //       const { data } = response
    //       this.patient = data
    //     })
    //     .catch((error) => {
    //       this.patient = {}
    //     })
    // },
    // async loadPatientData() {
    //   try {
    //     await this.getPatientData(this.patientId)
    //     if (this.patient && this.patient.admin) {
    //       const admin = this.patient.admin
    //       this.name = admin.name
    //       const dob = admin.dob
    //       this.age = new Date().getFullYear() - new Date(dob).getFullYear()
    //     }
    //   } catch (error) {
    //     console.log('Error loading patient data:', error)
    //   }
    // },
    handlePatientCreated(id) {
      console.log('Patient created with ID:', id)
      this.patientId = id
      // this.loadPatientData()
    }
  }
}
</script>
