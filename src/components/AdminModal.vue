<template>
  <div class="flex items-center justify-center">
    <div class="flex flex-col rounded-lg w-3/4 max-h-fit border border-gray-300 p-10">
      <h1>Admin Details</h1>
      <br />
      <div class="flex flex-row w-full">
        <div class="flex flex-col">
          <!-- Row 1 -->
          <div class="flex flex-row mb-2">
            <!-- Name Input -->
            <div class="w-1/2">
              <label class="mb-1 block text-sm font-medium text-dark"> Name </label>
              <div class="relative">
                <input v-model="name" :disabled="!isEditing && !isAdd" type="text" placeholder="Name"
                  class="w-full bg-transparent rounded-md border border-stroke py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200" />
                <span class="absolute top-1/2 left-4 -translate-y-1/2">
                  <img src="../assets/user.svg" width="20" height="20" />
                </span>
              </div>
            </div>

            <!-- Khmer Name Input -->
            <div class="ml-2 w-1/2">
              <label class="mb-1 block text-sm font-medium text-dark"> Khmer Name </label>
              <div class="relative">
                <input v-model="khmerName" :disabled="!isEditing && !isAdd" type="text" placeholder="Khmer Name"
                  class="w-full bg-transparent rounded-md border border-stroke py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200" />
                <span class="absolute top-1/2 left-4 -translate-y-1/2">
                  <img src="../assets/user.svg" width="20" height="20" />
                </span>
              </div>
            </div>
          </div>
          <!-- Row 2 -->
          <div class="flex flex-row w-full">
            <!-- DOB Input -->
            <div class="w-1/2">
              <label class="mb-1 block text-sm font-medium text-dark"> DOB </label>
              <div class="relative z-20">
                <input v-model="dob" :disabled="!isEditing && !isAdd" type="date" :max="maxDate"
                  class="w-full bg-transparent rounded-md border border-stroke py-1.5 px-3 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 disabled:border-gray-2" />
              </div>
            </div>

            <!-- Age Input -->
            <div class="ml-2 w-1/4">
              <label for="" class="mb-1 block text-sm font-medium text-dark"> Age </label>
              <input :value="ageComputed" disabled type="number" placeholder="" min="0" step="1"
                class="w-full bg-[#3f51b5]/50 rounded-md border border-stroke py-1.5 px-3 text-sm text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2" />
            </div>

            <!-- Gender Input -->
            <div class="ml-2 w-1/4">
              <label for="" class="mb-1 block text-sm font-medium text-dark"> Gender </label>
              <div class="relative z-20">
                <select v-model="gender" :disabled="!isEditing && !isAdd"
                  class="relative z-20 w-full appearance-none rounded-md border border-stroke bg-transparent py-1.5 pl-3 pr-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200">
                  <option value="M">M</option>
                  <option value="F">F</option>
                </select>
                <span class="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                  <img src="../assets/chevrondown.svg" height="20" width="20" />
                </span>
              </div>
            </div>
          </div>

          <!-- Row 3 -->
          <div class="flex flex-row w-full mb-2">
            <!-- Contact No. Input -->
            <div class="w-1/2">
              <label class="mb-1 block text-sm font-medium text-dark"> Contact No. </label>
              <div class="relative">
                <input v-model="contactNo" :disabled="!isEditing && !isAdd" type="tel" placeholder="Contact No."
                  class="w-full bg-transparent rounded-md border border-stroke py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200" />
                <span class="absolute top-1/2 left-4 -translate-y-1/2">
                  <img src="../assets/phone.svg" width="20" height="20" />
                </span>
              </div>
            </div>

            <!-- Date Registered Input -->
            <div class="ml-2 w-1/2">
              <label class="mb-1 block text-sm font-medium text-dark"> Date Registered </label>
              <div class="relative z-20">
                <input v-model="regDate" :disabled="!isEditing && !isAdd" type="date" :max="maxDate"
                  class="w-full bg-transparent rounded-md border border-stroke py-1.5 px-3 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 disabled:border-gray-2" />
              </div>
            </div>
          </div>
        </div>

        <!-- Photo Input -->

        <div class="flex flex-row w-1/2 ml-2">
          <div class="flex flex-col w-full">
            <div class="w-full">
              <label class="mb-1 block text-sm font-medium text-dark"> Photo ID </label>

              <div :class="[
                'relative',
                { 'bg-gray-200': !isEditing && !isAdd, 'bg-white': isEditing || isAdd }
              ]">
                <label for="file"
                  class="flex w-full h-[11rem] justify-center items-center cursor-pointer rounded-md border border-dashed border-gray-300 p-3 mr-2">
                  <div>
                    <input type="file" name="file" id="file" class="sr-only" :disabled="!isEditing && !isAdd"
                      @change="handleImageUpload" accept=".jpg, .jpeg, .png" />
                    <img v-if="selectedPhoto" :src="selectedPhoto" alt="Selected Image"
                      class="object-cover rounded-lg w-52 h-40" />
                    <template v-else>
                      <span class="flex items-center justify-center">
                        <img src="../assets/camera.svg" height="20" width="20" />
                      </span>
                      <span class="text-sm text-body-color"> Add Photo ID </span>
                    </template>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 4 -->
      <div class="flex flex-row w-full mb-2">
        <!-- Queue No Input -->
        <div class="mr-2 w-1/3">
          <label class="mb-1 block text-sm font-medium text-dark"> Queue Number </label>
          <div class="relative">
            <input v-model="queueNo" :disabled="!isEditing && !isAdd" type="text" placeholder="Queue Number"
              class="w-full bg-transparent rounded-md border border-stroke py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200" />
            <span class="absolute top-1/2 left-4 -translate-y-1/2">
              <img src="../assets/queueno.svg" width="20" height="20" />
            </span>
          </div>
        </div>
        <!-- Village Input -->
        <div class="w-1/3">
          <label class="mb-1 block text-sm font-medium text-dark"> Village </label>
          <div class="relative">
            <input v-model="village" :disabled="!isEditing && !isAdd" type="text" placeholder="Village"
              class="w-full bg-transparent rounded-md border border-stroke py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200" />
            <span class="absolute top-1/2 left-4 -translate-y-1/2">
              <img src="../assets/house.svg" width="20" height="20" />
            </span>
          </div>
        </div>

        <!-- Family Group Input -->
        <div class="ml-2 w-1/3">
          <label class="mb-1 block text-sm font-medium text-dark"> Family Group </label>
          <div class="relative">
            <input v-model="familyGroup" :disabled="!isEditing && !isAdd" type="text" placeholder="Family Group"
              class="w-full bg-transparent rounded-md border border-stroke py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200" />
            <span class="absolute top-1/2 left-4 -translate-y-1/2">
              <img src="../assets/users.svg" width="20" height="20" />
            </span>
          </div>
        </div>
      </div>

      <!-- Row 5 -->
      <div class="flex flex-row w-full mb-2">
        <!-- Pregnant Input -->
        <div class="w-1/2">
          <label for="" class="mb-1 block text-sm font-medium text-dark"> Pregnant? </label>
          <div class="relative z-20">
            <span class="absolute top-1/2 left-4 -translate-y-1/2">
              <img src="../assets/pregnantwoman.svg" width="25" height="25" />
            </span>
            <select v-model="pregnant" :disabled="!isEditing && !isAdd"
              class="relative z-20 w-full appearance-none rounded-md border border-stroke bg-transparent py-1.5 pl-12 pr-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200">
              <option :value="true">Y</option>
              <option :value="false">N</option>
            </select>
            <span class="absolute top-1/2 right-4 z-10 -translate-y-1/2">
              <img src="../assets/chevrondown.svg" height="20" width="20" />
            </span>
          </div>
        </div>

        <!-- Last Menstrual Period -->
        <div class="ml-2 w-1/2">
          <label class="mb-1 block text-sm font-medium text-dark"> Last Menstrual Period </label>
          <div class="relative z-20">
            <input v-model="lastMenstrualPeriod" :disabled="(!isEditing && !isAdd) || isMale" type="date" :max="maxDate"
              class="w-full bg-transparent rounded-md border border-stroke py-1.5 px-3 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 disabled:border-gray-2" />
          </div>
        </div>
      </div>

      <!-- Row 6 -->
      <div class="flex flex-row w-full">
        <!-- Drug Allergies Input -->
        <div class="w-1/2">
          <label class="mb-1 block text-sm font-medium text-dark"> Drug Allergies </label>
          <div class="relative">
            <input v-model="drugAllergies" :disabled="!isEditing && !isAdd" type="text"
              placeholder="Enter Drug Allergies"
              class="w-full bg-transparent rounded-md border border-stroke py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200" />
            <span class="absolute top-1/2 left-4 -translate-y-1/2">
              <img src="../assets/drug.svg" width="20" height="20" />
            </span>
          </div>
        </div>

        <!-- Infectious Disease Input -->
        <div class="w-1/2 ml-2">
          <label for="" class="mb-1 block text-sm font-medium text-dark">
            Sent to Infectious Disease?
          </label>
          <div class="relative z-20">
            <span class="absolute top-1/2 left-4 -translate-y-1/2">
              <img src="../assets/mask.svg" width="25" height="25" />
            </span>
            <select v-model="sentToId" :disabled="!isEditing && !isAdd"
              class="relative z-20 w-full appearance-none rounded-md border border-stroke bg-transparent py-1.5 pl-12 pr-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200">
              <option :value="true">Y</option>
              <option :value="false">N</option>
            </select>
            <span class="absolute top-1/2 right-4 z-10 -translate-y-1/2">
              <img src="../assets/chevrondown.svg" height="20" width="20" />
            </span>
          </div>
        </div>
      </div>

      <!-- Save Button -->
      <div class="flex flex-row-reverse w-full mt-5">
        <button v-if="isAdd" @click="submitData"
          class="px-5 py-2 transition ease-in duration-200 rounded-lg text-sm text-[#3f51b5] hover:bg-[#3f51b5] hover:text-white border-2 border-[#3f51b5] focus:outline-none">
          Save
        </button>
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
        <button v-if="isEditing && !isAdd" @click="saveChanges"
          class="px-5 py-2 transition ease-in duration-200 rounded-lg text-sm text-[#3f51b5] hover:bg-[#3f51b5] hover:text-white border-2 border-[#3f51b5] focus:outline-none">
          Save Edits
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

import type Admin from '@/types/Admin'
import imageCompression from 'browser-image-compression';

import axios, { Axios, AxiosError, type AxiosResponse } from 'axios'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import type Patient from '@/types/Patient'
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
      // watch it
      if (!this.isAdd) {
        // In View / Edit Page
        const admin = this.patientData.admin
        if (!admin) return
        this.name = admin.name
        this.khmerName = admin.khmerName
        this.dob = (admin.dob != null) ? this.formatDateForInput(admin.dob) : null
        this.age = admin.age
        this.gender = admin.gender
        this.contactNo = admin.contactNo
        this.regDate = this.formatDateForInput(admin.regDate)
        this.queueNo = admin.queueNo
        this.village = admin.village
        this.familyGroup = admin.familyGroup
        this.pregnant = admin.pregnant
        this.lastMenstrualPeriod =
          admin.lastMenstrualPeriod != null
            ? this.formatDateForInput(admin.lastMenstrualPeriod)
            : null
        this.drugAllergies = admin.drugAllergies
        this.photo = admin.photo
        this.sentToId = admin.sentToId

        this.selectedPhoto = this.photo ? `data:image/png;base64,${atob(this.photo)}` : ''
      }
    },
    gender(newValue) {
      // Set isMale based on the gender value
      this.isMale = newValue === 'M'
    }
  },
  data() {
    // Default values in the AddPatient page, types mirror Admin type except for booleans, which always take on boolean | null
    return {
      name: '' as string,
      khmerName: '' as string,
      dob: '' as string | null,
      age: 0 as number | null,
      gender: '' as 'M' | 'F' | '',
      contactNo: '' as string,
      regDate: '' as string,
      queueNo: '' as string,
      village: '' as string,
      familyGroup: '' as string,
      pregnant: null as boolean | null,
      lastMenstrualPeriod: null as string | null,
      drugAllergies: '' as string | null,
      selectedPhoto: '' as string,
      photo: '' as string | null, //base 64 string (for POST)
      sentToId: null as boolean | null,
      isEditing: false,
      maxDate: new Date().toISOString().split('T')[0], // Set maxDate to today's date in YYYY-MM-DD format
      // Vars used for disabling / enabling fields
      isMale: false
    }
  },
  computed: {
    ageComputed() {
      if (this.dob) {
        return new Date().getFullYear() - new Date(this.dob).getFullYear()
      }
      return null
    }
  },
  methods: {
    // POST request to add a new patient / PUT request to update an existing patient
    // If isAdd is true, do insert patient, otherwise do update patient
    async submitData() {
      const toast = useToast()

      try {
        // Perform validation checks
        if (!this.name) {
          toast.error('Name is required')
          return
        }
        if (!this.khmerName) {
          toast.error('Khmer Name is required')
          return
        }
        if (!this.dob) {
          toast.error('Date of Birth is required')
          return
        }
        if (!this.gender) {
          toast.error('Gender is required')
          return
        }
        if (!this.contactNo) {
          toast.error('Contact No. is required')
          return
        }
        if (!this.regDate) {
          toast.error('Date Registered is required')
          return
        }
        if (!this.queueNo) {
          toast.error('Queue Number is required')
          return
        }
        if (!this.village) {
          toast.error('Village is required')
          return
        }
        if (this.familyGroup == '') {
          toast.error('Family Group is required')
          return
        }
        if (this.pregnant == null) {
          toast.error('Pregnant? is required')
          return
        }
        if (this.sentToId == null) {
          toast.error('Sent to Infectious Disease? is required')
          return
        }
        if (this.ageComputed == null) {
          toast.error('Please enter a valid Date of Birth')
          return
        }

        const admin = {
          familyGroup: this.familyGroup,
          regDate: new Date(this.regDate).toISOString(),
          queueNo: this.queueNo || null,
          name: this.name,
          khmerName: this.khmerName,
          dob: new Date(this.dob).toISOString(),
          age: this.ageComputed,
          gender: this.gender,
          village: this.village,
          contactNo: this.contactNo,
          pregnant: this.pregnant,
          lastMenstrualPeriod: this.lastMenstrualPeriod
            ? new Date(this.lastMenstrualPeriod).toISOString()
            : null,
          drugAllergies: this.drugAllergies || null,
          sentToId: this.sentToId,
          photo: this.photo || null
        }

        if (this.isAdd && !this.isEditing) {
          // Add new patient
          await axios
            .post(`${BaseURL}/patient`, admin)
            .then((response) => {
              toast.success('New Patient created successfully!')
              // Emit patient details to be rendered in sidebar
              this.$emit('patientCreated', {
                id: response.data['id'],
                name: this.name,
                age: this.ageComputed,
                vid: 1, // newly created patient will always have a visit id of 1
                regDate: this.regDate,
                queueNo: this.queueNo
              })
            })
        } else if (!this.isAdd && this.isEditing) {
          // Editing an existing patient
          await axios
            .patch(`${BaseURL}/patient/${this.patientId}/${this.patientVid}`, {
              admin: admin
            })
            .then(() => {
              toast.success('Admin Details updated successfully!')
              // Emit updated patient details to be rendered in sidebar
              this.$emit('patientUpdated', {
                id: this.patientId,
                name: this.name,
                age: this.ageComputed,
                vid: this.patientVid,
                regDate: this.regDate,
                queueNo: this.queueNo
              })
              // TODO: update visit date and queue number
            })
        }
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
    },
    // handleFileChange(event: any) {
    //   const file = event.target.files[0]
    //   if (file && /\.(jpg|jpeg|png)$/i.test(file.name)) {
    //     const reader = new FileReader()
    //     reader.onload = (e) => {
    //       // Remove the data URL prefix to get just the base64 string
    //       if (e.target != null && typeof e.target.result == 'string') {
    //         this.selectedPhoto = e.target.result
    //         this.photo = e.target.result.split(',')[1]
    //       }
    //     }
    //     reader.readAsDataURL(file)
    //     console.log(this.selectedPhoto)
    //     console.log(this.photo)
    //   } else {
    //     // Reset selectedPhoto or show error message
    //     this.selectedPhoto = ''
    //     alert('Please select a JPEG, JPG, or PNG file.')
    //   }
    // },
    async handleImageUpload(event: any) {
      const imageFile = event.target.files[0];
      console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      }
      try {
        const compressedFile = await imageCompression(imageFile, options);
        console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
        const reader = new FileReader()
        reader.onload = (e) => {
          // Remove the data URL prefix to get just the base64 string
          if (e.target != null && typeof e.target.result == 'string') {
            this.selectedPhoto = e.target.result
            this.photo = e.target.result.split(',')[1]
          }
        }
        reader.readAsDataURL(compressedFile)
      } catch (error) {
        console.log(error);
        this.selectedPhoto = ''
        alert('Please select a JPEG, JPG, or PNG file.')
      }
    },

    formatDateForInput(dateString: string) {
      const date = new Date(dateString)
      const year = date.getUTCFullYear()
      const month = String(date.getUTCMonth() + 1).padStart(2, '0')
      const day = String(date.getUTCDate()).padStart(2, '0')
      // Return the formatted date string
      return `${year}-${month}-${day}`
    },

    toggleEdit() {
      // console.log('toggleEdit')
      this.isEditing = !this.isEditing
      // console.log(this.isEditing)
    },

    saveChanges() {
      // console.log('saving changes....')
      this.submitData()
      this.toggleEdit()
    }
  }
})
</script>

<style scoped>
h1 {
  font-size: 1.25rem;
  font-weight: 500;
}
</style>
