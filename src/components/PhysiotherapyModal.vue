<template>
  <div class="flex items-center justify-center">
    <div class="flex flex-col rounded-lg w-3/4 max-h-fit border border-gray-300 p-10">
      <h1>Physiotherapy Assessment</h1>
      <br />

      <!-- Pain/Stiffness During the Day -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-col">
          <div class="font-medium text-sm">
            Pain/stiffness during the day: 
          </div>
          <div class="text-xs mt-1">
            How severe was your usual joint or muscle pain and/or stiffness overall during
            the day in the last 2 weeks? <span class="req">*</span>
          </div>
        </div>

        <!-- Pain levels (0-5) -->
        <div class="flex flex-row mt-2 space-x-4">
          <label v-for="level in [0, 1, 2, 3, 4, 5]" :key="'day' + level">
            <input type="radio" :name="'painStiffnessDay'" v-model="painStiffnessDay" :value="level"
              :disabled="!isEditing" />
            <span class="ml-2 text-sm">{{ level }}</span>
          </label>
        </div>
      </div>

      <!-- Pain/Stiffness During the Night -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-col">
          <div class="font-medium text-sm">
              Pain/stiffness during the night: 
          </div>
          <div class="text-xs mt-1">
            How severe was your usual joint or muscle pain and/or stiffness overall
            during the night in the last 2 weeks? <span class="req">*</span>
          </div>
        </div>

        <!-- Pain levels (0-5) -->
        <div class="flex flex-row mt-2 space-x-4">
          <label v-for="level in [0, 1, 2, 3, 4, 5]" :key="'night' + level">
            <input type="radio" :name="'painStiffnessNight'" v-model="painStiffnessNight" :value="level"
              :disabled="!isEditing" />
            <span class="ml-2 text-sm">{{ level }}</span>
          </label>
        </div>
      </div>

      <!-- Symptoms Interfere with Tasks -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-medium text-sm">
            How much has your symptoms interfered with your ability to walk or do everyday tasks like cooking, cleaning or
            dressing in the last 2 weeks? <span class="req">*</span>
          </div>
        </div>

        <!-- Interference levels -->
        <div class="flex flex-col items-start mt-2 space-y-2">
          <label v-for="option in ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']" :key="'tasks' + option">
            <input type="radio" :name="'symptomsInterfereTasks'" v-model="symptomsInterfereTasks" :value="option"
              :disabled="!isEditing" />
            <span class="ml-2 text-sm">{{ option }}</span>
          </label>
        </div>
      </div>

      <!-- Symptoms Change -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-medium text-sm">
            Have your symptoms improved, worsened, or stayed the same over the last 2 weeks? <span class="req">*</span>
          </div>
        </div>

        <!-- Symptoms change options -->
        <div class="flex flex-col items-start mt-2 space-y-2">
          <label v-for="option in ['Improved', 'Worsened', 'Stayed the same']" :key="'symptomsChange' + option">
            <input type="radio" :name="'symptomsChange'" v-model="symptomsChange" :value="option"
              :disabled="!isEditing" />
            <span class="ml-2 text-sm">{{ option }}</span>
          </label>
        </div>
      </div>

      <!-- Need Help Because of Symptoms -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-medium text-sm">
            How often have you needed help from others (including family, friends, or carers) because of your joint or
            muscle symptoms in the last 2 weeks? <span class="req">*</span>
          </div>
        </div>

        <!-- Help needed options -->
        <div class="flex flex-col items-start mt-2 space-y-2">
          <label v-for="option in ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']" :key="'needHelp' + option">
            <input type="radio" :name="'symptomsNeedHelp'" v-model="symptomsNeedHelp" :value="option"
              :disabled="!isEditing" />
            <span class="ml-2 text-sm">{{ option }}</span>
          </label>
        </div>
      </div>

      <!-- Trouble Sleeping Due to Symptoms -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-medium text-sm">
            How often have you had trouble with either falling asleep or staying asleep because of your joint or muscle
            symptoms in the last 2 weeks? <span class="req">*</span>
          </div>
        </div>

        <!-- Trouble sleeping options -->
        <div class="flex flex-col items-start mt-2 space-y-2">
          <label v-for="option in ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']" :key="'troubleSleep' + option">
            <input type="radio" :name="'troubleSleepSymptoms'" v-model="troubleSleepSymptoms" :value="option"
              :disabled="!isEditing" />
            <span class="ml-2 text-sm">{{ option }}</span>
          </label>
        </div>
      </div>

      <!-- Fatigue -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-medium text-sm">
            How much fatigue or low energy have you felt in the last 2 weeks? <span class="req">*</span>
          </div>
        </div>

        <!-- Fatigue levels (0-5) -->
        <div class="flex flex-row mt-2 space-x-4">
          <label v-for="level in [0, 1, 2, 3, 4, 5]" :key="'fatigue' + level">
            <input type="radio" :name="'howMuchFatigue'" v-model="howMuchFatigue" :value="level" :disabled="!isEditing" />
            <span class="ml-2 text-sm">{{ level }}</span>
          </label>
        </div>
      </div>

      <!-- Anxiety/Low Mood -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-medium text-sm">
            How much have you felt anxious or low in your mood because of your joint or muscle symptoms in the last 2
            weeks? <span class="req">*</span>
          </div>
        </div>

        <!-- Anxiety/low mood levels (0-5) -->
        <div class="flex flex-row mt-2 space-x-4">
          <label v-for="level in [0, 1, 2, 3, 4, 5]" :key="'mood' + level">
            <input type="radio" :name="'anxiousLowMood'" v-model="anxiousLowMood" :value="level" :disabled="!isEditing" />
            <span class="ml-2 text-sm">{{ level }}</span>
          </label>
        </div>
      </div>

      <!-- Medication to Manage Symptoms -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-medium text-sm">
            Have you used any medication to manage your symptoms in the last 2 weeks? If yes, how often? <span
              class="req">*</span>
          </div>
        </div>

        <!-- Medication options -->
        <div class="flex flex-col items-start mt-2 space-y-2">
          <label v-for="option in ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']" :key="'medication' + option">
            <input type="radio" :name="'medicationManageSymptoms'" v-model="medicationManageSymptoms" :value="option"
              :disabled="!isEditing" />
            <span class="ml-2 text-sm">{{ option }}</span>
          </label>
        </div>
      </div>

      <!-- Edit Button -->
      <div class="flex flex-row-reverse w-full mt-5">
          <button v-if="!isEditing && !isAdd" @click="toggleEdit"
              class="px-5 py-2 transition ease-in duration-200 rounded-lg text-sm text-[#3f51b5] hover:bg-[#3f51b5] hover:text-white border-2 border-[#3f51b5] focus:outline-none">
              Edit
          </button>
      </div>

      <!-- Save Edits Button -->
      <div class="flex flex-row-reverse w-full mt-5">
          <button v-if="isEditing && !isAdd" @click="submitData"
              class="px-5 py-2 transition ease-in duration-200 rounded-lg text-sm text-[#3f51b5] hover:bg-[#3f51b5] hover:text-white border-2 border-[#3f51b5] focus:outline-none">
              Save Edits
          </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import axios, { AxiosError } from 'axios'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import type Patient from '@/types/Patient'
import type Physiotherapy from '@/types/Physiotherapy'
import { BaseURL } from '@/main'

export default defineComponent({
  props: {
    patientId: {
      type: String,
      default: null
    },
    patientData: {
      type: Object as PropType<Patient>,
      default: null
    },
    isAdd: {
      type: Boolean,
      default: true
    },
    patientVid: {
      type: String,
      default: null
    }
  },
  watch: {
    patientData: function (newVal: Patient, oldVal: Patient) {
      if (!this.isAdd) {
        const physiotherapy = this.patientData.physiotherapy
        if (!physiotherapy) {
          this.painStiffnessDay = null
          this.painStiffnessNight = null
          this.symptomsInterfereTasks = ''
          this.symptomsChange = ''
          this.symptomsNeedHelp = ''
          this.troubleSleepSymptoms = ''
          this.howMuchFatigue = null
          this.anxiousLowMood = null
          this.medicationManageSymptoms = ''
        } else {
          this.painStiffnessDay = physiotherapy.painStiffnessDay
          this.painStiffnessNight = physiotherapy.painStiffnessNight
          this.symptomsInterfereTasks = physiotherapy.symptomsInterfereTasks
          this.symptomsChange = physiotherapy.symptomsChange
          this.symptomsNeedHelp = physiotherapy.symptomsNeedHelp
          this.troubleSleepSymptoms = physiotherapy.troubleSleepSymptoms
          this.howMuchFatigue = physiotherapy.howMuchFatigue
          this.anxiousLowMood = physiotherapy.anxiousLowMood
          this.medicationManageSymptoms = physiotherapy.medicationManageSymptoms
        }
      }
    }
  },
  created() {
    if (!this.isAdd) {
      const physiotherapy = this.patientData?.physiotherapy
      if (!physiotherapy) return
      this.painStiffnessDay = physiotherapy.painStiffnessDay
      this.painStiffnessNight = physiotherapy.painStiffnessNight
      this.symptomsInterfereTasks = physiotherapy.symptomsInterfereTasks
      this.symptomsChange = physiotherapy.symptomsChange
      this.symptomsNeedHelp = physiotherapy.symptomsNeedHelp
      this.troubleSleepSymptoms = physiotherapy.troubleSleepSymptoms
      this.howMuchFatigue = physiotherapy.howMuchFatigue
      this.anxiousLowMood = physiotherapy.anxiousLowMood
      this.medicationManageSymptoms = physiotherapy.medicationManageSymptoms
    }
  },
  data() {
    return {
      isEditing: false,
      painStiffnessDay: null as 0 | 1 | 2 | 3 | 4 | 5 | null,
      painStiffnessNight: null as 0 | 1 | 2 | 3 | 4 | 5 | null,
      symptomsInterfereTasks: '' as 'Never' | 'Rarely' | 'Sometimes' | 'Often' | 'Always' | '',
      symptomsChange: '' as 'Improved' | 'Worsened' | 'Stayed the same' | '',
      symptomsNeedHelp: '' as 'Never' | 'Rarely' | 'Sometimes' | 'Often' | 'Always' | '',
      troubleSleepSymptoms: '' as 'Never' | 'Rarely' | 'Sometimes' | 'Often' | 'Always' | '',
      howMuchFatigue: null as 0 | 1 | 2 | 3 | 4 | 5 | null,
      anxiousLowMood: null as 0 | 1 | 2 | 3 | 4 | 5 | null,
      medicationManageSymptoms: '' as 'Never' | 'Rarely' | 'Sometimes' | 'Often' | 'Always' | ''
    };
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing
    },
    async submitData() {
      const toast = useToast()
      try {
        if (
          this.painStiffnessDay === null ||
          this.painStiffnessNight === null ||
          this.symptomsInterfereTasks === '' ||
          this.symptomsChange === '' ||
          this.symptomsNeedHelp === '' ||
          this.troubleSleepSymptoms === '' ||
          this.howMuchFatigue === null ||
          this.anxiousLowMood === null ||
          this.medicationManageSymptoms === ''
        ) {
          toast.error('Please fill in all required fields')
          return
        }
        const physiotherapy: Physiotherapy = {
          painStiffnessDay: this.painStiffnessDay,
          painStiffnessNight: this.painStiffnessNight,
          symptomsInterfereTasks: this.symptomsInterfereTasks,
          symptomsChange: this.symptomsChange,
          symptomsNeedHelp: this.symptomsNeedHelp,
          troubleSleepSymptoms: this.troubleSleepSymptoms,
          howMuchFatigue: this.howMuchFatigue,
          anxiousLowMood: this.anxiousLowMood,
          medicationManageSymptoms: this.medicationManageSymptoms
        }
        await axios
          .patch(`${BaseURL}/patient/${this.patientId}/${this.patientVid}`, {
            physiotherapy: physiotherapy
          })
          .then((response) => {
            console.log(response)
            this.toggleEdit()
            toast.success('Physiotherapy assessment saved successfully')
          })
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError; // Safe casting
          if (axiosError.response) {
            // The request was made and server responded with a status code out of range 2xx
            console.log(axiosError.response.data)
            toast.error(axiosError.message)
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request)
            toast.error('No server response received, check your connection.')
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', axiosError.message);
            toast.error('An internal server error occurred.')
          }
        } else {
          // No response received at all
          console.log(error)
          toast.error('An internal server error occurred.')
        }
      }
    }
  }
})
</script>

<style scoped>
.req {
  color: red;
}
</style>
