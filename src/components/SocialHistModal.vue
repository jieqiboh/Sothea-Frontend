<template>
  <div class="flex items-center justify-center">
    <div class="flex flex-col rounded-lg w-3/4 max-h-fit border border-gray-300 p-10">
      <h1>Social History</h1>
      <br />

      <div class="flex flex-col">
        <!-- Header -->
        <div class="flex flex-row">
          <div class="font-medium text-md w-1/3">History</div>
          <div class="font-medium text-md pr-5">Yes</div>
          <div class="font-medium text-md">No</div>
          <div class="font-medium text-md w-1/3 pl-10">Remarks</div>
        </div>
      </div>

      <!-- Past Smoking History -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal items-center inline-flex text-sm w-1/3">Past Smoking History</div>

          <div class="flex w-1/6">
            <div class="flex items-center pr-7">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="smoking-hist"
                  class="w-4 h-4"
                  v-model="pastSmokingHistory"
                  :value="true"
                />
              </label>
            </div>
            <div class="flex items-center">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="smoking-hist"
                  class="w-4 h-4"
                  v-model="pastSmokingHistory"
                  :value="false"
                />
              </label>
            </div>
          </div>

          <div class="flex w-1/3 grow">
            <textarea
              rows="1"
              placeholder="If Y, no. of years"
              type="number"
              v-model="numberOfYears"
              class="w-full bg-transparent rounded-md border border-stroke p-3 text-sm text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Current Smoking History -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal items-center inline-flex text-sm w-1/3">
            Current Smoking History
          </div>

          <div class="flex w-1/6">
            <div class="flex items-center pr-7">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="curr-smoking-hist"
                  class="w-4 h-4"
                  v-model="currentSmokingHistory"
                  :value="true"
                />
              </label>
            </div>
            <div class="flex items-center">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="curr-smoking-hist"
                  class="w-4 h-4"
                  v-model="currentSmokingHistory"
                  :value="false"
                />
              </label>
            </div>
          </div>

          <div class="flex w-1/3 grow">
            <textarea
              rows="1"
              placeholder="If Y, how many cigarettes/day?"
              type="number"
              v-model="cigarettesPerDay"
              class="w-full bg-transparent rounded-md border border-stroke p-3 text-sm text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Alcohol History -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal items-center inline-flex text-sm w-1/3">Alcohol History</div>

          <div class="flex w-1/6">
            <div class="flex items-center pr-7">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="alc-hist"
                  class="w-4 h-4"
                  v-model="alcoholHistory"
                  :value="true"
                />
              </label>
            </div>
            <div class="flex items-center">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="alc-hist"
                  class="w-4 h-4"
                  v-model="alcoholHistory"
                  :value="false"
                />
              </label>
            </div>
          </div>

          <div class="flex w-1/3 grow">
            <textarea
              rows="1"
              placeholder="If Y, how regularly?"
              v-model="howRegular"
              class="w-full bg-transparent rounded-md border border-stroke p-3 text-sm text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Save Button -->
      <div class="flex flex-row-reverse w-full mt-5">
        <button
          @click="submitData"
          class="px-5 py-2 transition ease-in duration-200 rounded-lg text-sm text-[#3f51b5] hover:bg-[#3f51b5] hover:text-white border-2 border-[#3f51b5] focus:outline-none"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

export default {
  props: {
    patientId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      pastSmokingHistory: null,
      numberOfYears: null,
      currentSmokingHistory: null,
      cigarettesPerDay: null,
      alcoholHistory: null,
      howRegular: ''
    }
  },
  methods: {
    async submitData() {
      const toast = useToast()
      try {
        if (this.pastSmokingHistory === null) {
          toast.error('Please indicate past smoking history')
          return
        }
        if (this.currentSmokingHistory === null) {
          toast.error('Please indicate current smoking history')
          return
        }
        if (this.alcoholHistory === null) {
          toast.error('Please indicate alcohol history')
          return
        }
        const response = await axios.patch(`http://localhost:9090/patient/${this.patientId}`, {
          socialHistory: {
            pastSmokingHistory: this.pastSmokingHistory,
            numberOfYears: this.numberOfYears,
            currentSmokingHistory: this.currentSmokingHistory,
            cigarettesPerDay: this.cigarettesPerDay,
            alcoholHistory: this.alcoholHistory,
            howRegular: this.howRegular
          }
        })
        console.log(response.data)
        console.log('Social history posted successfully!')
        toast.success('Social history saved successfully!')
      } catch (error) {
        console.error('Error posting data:', error)
        toast.error('Error saving social history')
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 1.25rem;
  font-weight: 500;
}
</style>
