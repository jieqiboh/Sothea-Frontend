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
                <input
                  v-model="name"
                  :disabled="!isEditing && !isAdd"
                  type="text"
                  placeholder="Name"
                  class="w-full bg-transparent rounded-md border border-stroke py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                />
                <span class="absolute top-1/2 left-4 -translate-y-1/2">
                  <img src="../assets/user.svg" width="20" height="20" />
                </span>
              </div>
            </div>

            <!-- Khmer Name Input -->
            <div class="ml-2 w-1/2">
              <label class="mb-1 block text-sm font-medium text-dark"> Khmer Name </label>
              <div class="relative">
                <input
                  v-model="khmerName"
                  :disabled="!isEditing && !isAdd"
                  type="text"
                  placeholder="Khmer Name"
                  class="w-full bg-transparent rounded-md border border-stroke py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                />
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
                <input
                  v-model="dob"
                  :disabled="!isEditing && !isAdd"
                  type="date"
                  class="w-full bg-transparent rounded-md border border-stroke py-1.5 px-3 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                />
              </div>
            </div>

            <!-- Age Input -->
            <div class="ml-2 w-1/4">
              <label for="" class="mb-1 block text-sm font-medium text-dark"> Age </label>
              <input
                v-model="age"
                :disabled="!isEditing && !isAdd"
                type="number"
                placeholder="Age"
                min="0"
                step="1"
                @input="validateAge"
                @keydown="preventNegative"
                class="w-full bg-transparent rounded-md border border-stroke py-1.5 px-3 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
              />
            </div>

            <!-- Gender Input -->
            <div class="ml-2 w-1/4">
              <label for="" class="mb-1 block text-sm font-medium text-dark"> Gender </label>
              <div class="relative z-20">
                <select
                  v-model="gender"
                  :disabled="!isEditing && !isAdd"
                  class="relative z-20 w-full appearance-none rounded-md border border-stroke bg-transparent py-1.5 pl-3 pr-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                >
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
                <input
                  v-model="contactNo"
                  :disabled="!isEditing && !isAdd"
                  type="tel"
                  placeholder="Contact No."
                  class="w-full bg-transparent rounded-md border border-stroke py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                />
                <span class="absolute top-1/2 left-4 -translate-y-1/2">
                  <img src="../assets/phone.svg" width="20" height="20" />
                </span>
              </div>
            </div>

            <!-- Date Registered Input -->
            <div class="ml-2 w-1/2">
              <label class="mb-1 block text-sm font-medium text-dark"> Date Registered </label>
              <div class="relative z-20">
                <input
                  v-model="regDate"
                  :disabled="!isEditing && !isAdd"
                  type="date"
                  class="w-full bg-transparent rounded-md border border-stroke py-1.5 px-3 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Photo Input -->

        <div class="flex flex-row w-1/2 ml-2">
          <div class="flex flex-col w-full">
            <div class="w-full">
              <label class="mb-1 block text-sm font-medium text-dark"> Photo ID </label>

              <div class="relative">
                <label
                  for="file"
                  class="flex w-full h-[11rem] justify-center items-center cursor-pointer rounded-md border border-dashed border-gray-300 p-3 mr-2"
                >
                  <div>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      class="sr-only"
                      @change="handleFileChange"
                      accept=".jpg, .jpeg, .png"
                    />
                    <img
                      v-if="selectedPhoto"
                      :src="selectedPhoto"
                      alt="Selected Image"
                      class="object-cover rounded-lg w-52 h-40"
                    />
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
        <!-- Village Input -->
        <div class="w-1/2">
          <label class="mb-1 block text-sm font-medium text-dark"> Village </label>
          <div class="relative">
            <input
              v-model="village"
              :disabled="!isEditing && !isAdd"
              type="text"
              placeholder="Village"
              class="w-full bg-transparent rounded-md border border-stroke py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
            />
            <span class="absolute top-1/2 left-4 -translate-y-1/2">
              <img src="../assets/house.svg" width="20" height="20" />
            </span>
          </div>
        </div>

        <!-- Family Group Input -->
        <div class="ml-2 w-1/2">
          <label class="mb-1 block text-sm font-medium text-dark"> Family Group </label>
          <div class="relative">
            <input
              v-model="familyGroup"
              :disabled="!isEditing && !isAdd"
              type="text"
              placeholder="Family Group"
              class="w-full bg-transparent rounded-md border border-stroke py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
            />
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
            <select
              v-model="pregnant"
              :disabled="!isEditing && !isAdd"
              class="relative z-20 w-full appearance-none rounded-md border border-stroke bg-transparent py-1.5 pl-12 pr-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
            >
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
            <input
              v-model="lastMenstrualPeriod"
              :disabled="!isEditing && !isAdd"
              type="date"
              class="w-full bg-transparent rounded-md border border-stroke py-1.5 px-3 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
            />
          </div>
        </div>
      </div>

      <!-- Row 6 -->
      <div class="flex flex-row w-full">
        <!-- Drug Allergies Input -->
        <div class="w-1/2">
          <label class="mb-1 block text-sm font-medium text-dark"> Drug Allergies </label>
          <div class="relative">
            <input
              v-model="drugAllergies"
              :disabled="!isEditing && !isAdd"
              type="text"
              placeholder="Enter Drug Allergies"
              class="w-full bg-transparent rounded-md border border-stroke py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
            />
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
            <select
              v-model="sentToId"
              :disabled="!isEditing && !isAdd"
              class="relative z-20 w-full appearance-none rounded-md border border-stroke bg-transparent py-1.5 pl-12 pr-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
            >
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
        <button
          v-if="isAdd"
          @click="submitData"
          class="px-5 py-2 transition ease-in duration-200 rounded-lg text-sm text-[#3f51b5] hover:bg-[#3f51b5] hover:text-white border-2 border-[#3f51b5] focus:outline-none"
        >
          Save
        </button>
      </div>
      <!-- Edit Button -->
      <div class="flex flex-row-reverse w-full mt-5">
        <button
          v-if="!isEditing && !isAdd"
          @click="toggleEdit"
          class="px-5 py-2 transition ease-in duration-200 rounded-lg text-sm text-[#3f51b5] hover:bg-[#3f51b5] hover:text-white border-2 border-[#3f51b5] focus:outline-none"
        >
          Edit
        </button>
      </div>
      <!-- Save Edits Button -->
      <div class="flex flex-row-reverse w-full mt-5">
        <button
          v-if="isEditing && !isAdd"
          @click="saveChanges"
          class="px-5 py-2 transition ease-in duration-200 rounded-lg text-sm text-[#3f51b5] hover:bg-[#3f51b5] hover:text-white border-2 border-[#3f51b5] focus:outline-none"
        >
          Save Edits
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
      default: null
    },
    patientData: {
      type: Object,
      default: null
    },
    isAdd: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      name: '',
      khmerName: '',
      dob: '',
      age: '',
      gender: '',
      contactNo: '',
      regDate: '',
      village: '',
      familyGroup: '',
      pregnant: null,
      lastMenstrualPeriod: '',
      drugAllergies: '',
      selectedPhoto: null,
      photo: '', //base 64 string (for POST)
      sentToId: null,
      isEditing: false
    }
  },
  created() {
    if (!this.isAdd) {
      const admin = this.patientData.admin
      if (!admin) return
      this.name = admin.name || ''
      this.khmerName = admin.khmerName || ''
      this.dob = this.formatDateForInput(admin.dob) || ''
      this.age = admin.age || ''
      this.gender = admin.gender || ''
      this.contactNo = admin.contactNo || ''
      this.regDate = this.formatDateForInput(admin.regDate) || ''
      this.village = admin.village || ''
      this.familyGroup = admin.familyGroup || ''
      this.pregnant = admin.pregnant
      this.lastMenstrualPeriod = this.formatDateForInput(admin.lastMenstrualPeriod) || ''
      this.drugAllergies = admin.drugAllergies || ''
      this.photo = admin.photo || ''
      this.sentToId = admin.sentToId

      this.selectedPhoto = `data:image/png;base64,${atob(this.photo)}`
    }
  },
  methods: {
    validateAge() {
      if (this.age < 0) {
        this.age = 0
      } else {
        // Ensure the age is a whole number
        this.age = Math.floor(this.age)
      }
    },
    preventNegative(event) {
      if (event.key === '-' || event.key === 'e' || event.key === '+') {
        event.preventDefault()
      }
    },
    // POST request to add a new patient
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
        if (!this.age) {
          toast.error('Age is required')
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
        if (!this.village) {
          toast.error('Village is required')
          return
        }
        if (!this.familyGroup) {
          toast.error('Family Group is required')
          return
        }
        if (this.pregnant === null) {
          toast.error('Pregnant? is required')
          return
        }
        if (this.sentToId === null) {
          toast.error('Sent to Infectious Disease? is required')
          return
        }

        const response = await axios.post('http://localhost:9090/patient', {
          admin: {
            name: this.name,
            khmerName: this.khmerName,
            dob: new Date(this.dob).toISOString(),
            age: this.age,
            gender: this.gender,
            contactNo: this.contactNo,
            regDate: new Date(this.regDate).toISOString(),
            village: this.village,
            familyGroup: this.familyGroup,
            pregnant: this.pregnant,
            lastMenstrualPeriod: new Date(this.lastMenstrualPeriod).toISOString(),
            drugAllergies: this.drugAllergies ? this.drugAllergies : null,
            photo: this.photo ? this.photo : null,
            sentToId: this.sentToId
          }
        })
        console.log(response.data)
        console.log('Data posted successfully!')
        toast.success('Admin Details saved successfully!')

        // Emit patient details to be rendered in sidebar
        this.$emit('patientCreated', { id: patientId, name: this.name, age: this.age })
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.error)
        } else {
          // No response received at all
          toast.error('An internal server error occurred.')
        }
      }
    },

    handleFileChange(event) {
      const file = event.target.files[0]
      if (file && /\.(jpg|jpeg|png)$/i.test(file.name)) {
        const reader = new FileReader()
        reader.onload = (e) => {
          // Remove the data URL prefix to get just the base64 string
          this.selectedPhoto = e.target.result
          this.photo = e.target.result.split(',')[1]
        }
        reader.readAsDataURL(file)
        console.log(this.selectedPhoto)
        console.log(this.photo)
      } else {
        // Reset selectedPhoto or show error message
        this.selectedPhoto = null
        alert('Please select a JPEG, JPG, or PNG file.')
      }
    },

    formatDateForInput(dateString) {
      const date = new Date(dateString);
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, '0'); 
      const day = String(date.getUTCDate()).padStart(2, '0');
      // Return the formatted date string
      return `${year}-${month}-${day}`;
    },

    // PUT request to update an existing patient
    async saveEdits() {
      const toast = useToast()
      try {
        console.log('saving edits....')
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
        if (!this.age) {
          toast.error('Age is required')
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
        if (!this.village) {
          toast.error('Village is required')
          return
        }
        if (!this.familyGroup) {
          toast.error('Family Group is required')
          return
        }
        if (this.pregnant === null) {
          toast.error('Pregnant? is required')
          return
        }
        if (this.sentToId === null) {
          toast.error('Sent to Infectious Disease? is required')
          return
        }
        const response = await axios.patch(`http://localhost:9090/patient/${this.patientId}`, {
          admin: {
            name: this.name,
            khmerName: this.khmerName,
            dob: new Date(this.dob).toISOString(),
            age: this.age,
            gender: this.gender,
            contactNo: this.contactNo,
            regDate: new Date(this.regDate).toISOString(),
            village: this.village,
            familyGroup: this.familyGroup,
            pregnant: this.pregnant,
            lastMenstrualPeriod: new Date(this.lastMenstrualPeriod).toISOString(),
            drugAllergies: this.drugAllergies ? this.drugAllergies : null,
            photo: this.photo ? this.photo : null,
            sentToId: this.sentToId
          }
        })
        console.log(response.data)
        console.log('Patient updated successfully!')
        this.$emit('reload')
        toast.success('Admin Details saved successfully!')
        // Emit updated patient details to be rendered in sidebar
        this.$emit('patientUpdated', { id: this.patientId, name: this.name, age: this.age })
      } catch (error) {
        console.error('Error updating patient:', error)
        toast.error('Error saving admin details')
        if (error.response) {
          toast.error(error.response.data.error)
        } else {
          // No response received at all
          toast.error('An internal server error occurred.')
        }
      }
    },

    toggleEdit() {
      console.log('toggleEdit')
      this.isEditing = !this.isEditing
      console.log(this.isEditing)
    },

    saveChanges() {
      console.log('saving changes....')
      this.saveEdits()
      this.toggleEdit()
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
