<template>
  <div>
    <NavBar/>

    <div class="flex">
      <SideBar
        :activeSection="activeSection"
        :id="id"
        :name="name"
        :age="age"
        @update:activeSection="setActiveSection"
      />
      <div class="content flex-grow p-6">
        <keep-alive>
          <component
            :is="activeComponent"
            :patientId="id"
            :patientData="patient"
            :isAdd="false"
            @reload="loadPatientData"
          >
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useRoute} from "vue-router";

import SideBar from '../components/SideBar.vue'
import NavBar from '../components/NavBar.vue'

import AdminModal from '../components/AdminModal.vue'
import PastMedHistModal from '../components/PastMedHistModal.vue'
import SocialHistModal from '../components/SocialHistModal.vue'
import VitalStatsModal from '../components/VitalStatsModal.vue'
import HeightWeightModal from '../components/HeightWeightModal.vue'
import VisualAcuityModal from '../components/VisualAcuityModal.vue'
import DrConsultModal from '../components/DrConsultModal.vue'

import type Patient from '@/types/Patient'

import axios, { type AxiosResponse } from 'axios'
import type Admin from '@/types/Admin'

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
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      activeSection: 'admin',
      patient: {} as Patient,
      name: '',
      age: 0,
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
    setActiveSection(section : string) {
      console.log(section)
      this.activeSection = section
    },

    async getPatientData(id : string) {
      axios.get(`http://localhost:9090/patient/${id}`)
        .then((response : AxiosResponse) => {
          console.log(response)
          const { data } = response
          this.patient = JSON.parse(JSON.stringify(data)) as Patient
          this.age = new Date().getFullYear() - new Date(this.patient.admin.dob).getFullYear()
          this.name = this.patient.admin.name
        }).catch((error) => {
          console.log(error)
        })
    },
    async loadPatientData() {
      try {
        await this.getPatientData(this.id);
        if (this.patient && this.patient.admin) {
          const admin = this.patient.admin;
          this.name = admin.name;
          const dob = admin.dob;
          this.age = new Date().getFullYear() - new Date(dob).getFullYear();
        }
      } catch (error) {
        console.log('Error loading patient data:', error);
      }
    },
    back() {
      this.$router.push('/allpatients')
    }
  },
  created() {
    console.log("vieweditpatient created called")
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
