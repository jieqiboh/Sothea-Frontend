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
                  type="text"
                  placeholder="Khmer Name"
                  class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
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
              <label class="mb-1 block text-sm font-medium text-dark dark:text-white"> DOB </label>
              <div class="relative z-20">
                <input
                  v-model="dob"
                  type="date"
                  class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-1.5 px-3 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                />
              </div>
            </div>

            <!-- Age Input -->
            <div class="ml-2 w-1/4">
              <label for="" class="mb-1 block text-sm font-medium text-dark dark:text-white">
                Age
              </label>
              <input
                v-model="age"
                type="number"
                placeholder="Age"
                class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-1.5 px-3 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
              />
            </div>

            <!-- Gender Input -->
            <div class="ml-2 w-1/4">
              <label for="" class="mb-1 block text-sm font-medium text-dark dark:text-white">
                Gender
              </label>
              <div class="relative z-20">
                <select
                  v-model="gender"
                  class="relative z-20 w-full appearance-none rounded-md border border-stroke dark:border-dark-3 bg-transparent py-1.5 pl-3 pr-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                >
                  <option value="M" class="dark:bg-dark-2">M</option>
                  <option value="F" class="dark:bg-dark-2">F</option>
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
                  type="tel"
                  placeholder="Contact No."
                  class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                />
                <span class="absolute top-1/2 left-4 -translate-y-1/2">
                  <img src="../assets/phone.svg" width="20" height="20" />
                </span>
              </div>
            </div>

            <!-- Date Registered Input -->
            <div class="ml-2 w-1/2">
              <label class="mb-1 block text-sm font-medium text-dark dark:text-white">
                Date Registered
              </label>
              <div class="relative z-20">
                <input
                  v-model="regDate"
                  type="date"
                  class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-1.5 px-3 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
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
              type="text"
              placeholder="Village"
              class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
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
              type="text"
              placeholder="Family Group"
              class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
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
          <label for="" class="mb-1 block text-sm font-medium text-dark dark:text-white">
            Pregnant?
          </label>
          <div class="relative z-20">
            <span class="absolute top-1/2 left-4 -translate-y-1/2">
              <img src="../assets/pregnantwoman.svg" width="25" height="25" />
            </span>
            <select
              v-model="pregnant"
              class="relative z-20 w-full appearance-none rounded-md border border-stroke dark:border-dark-3 bg-transparent py-1.5 pl-12 pr-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
            >
              <option :value="true" class="dark:bg-dark-2">Y</option>
              <option :value="false" class="dark:bg-dark-2">N</option>
            </select>
            <span class="absolute top-1/2 right-4 z-10 -translate-y-1/2">
              <img src="../assets/chevrondown.svg" height="20" width="20" />
            </span>
          </div>
        </div>

        <!-- Last Menstrual Period -->
        <div class="ml-2 w-1/2">
          <label class="mb-1 block text-sm font-medium text-dark dark:text-white">
            Last Menstrual Period
          </label>
          <div class="relative z-20">
            <input
              v-model="lastMenstrualPeriod"
              type="date"
              class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-1.5 px-3 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
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
              type="text"
              placeholder="Enter Drug Allergies"
              class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
            />
            <span class="absolute top-1/2 left-4 -translate-y-1/2">
              <img src="../assets/drug.svg" width="20" height="20" />
            </span>
          </div>
        </div>

        <!-- Infectious Disease Input -->
        <div class="w-1/2 ml-2">
          <label for="" class="mb-1 block text-sm font-medium text-dark dark:text-white">
            Sent to Infectious Disease?
          </label>
          <div class="relative z-20">
            <span class="absolute top-1/2 left-4 -translate-y-1/2">
              <img src="../assets/mask.svg" width="25" height="25" />
            </span>
            <select
              v-model="isInfectious"
              class="relative z-20 w-full appearance-none rounded-md border border-stroke dark:border-dark-3 bg-transparent py-1.5 pl-12 pr-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
            >
              <option value="Y" class="dark:bg-dark-2">Y</option>
              <option value="N" class="dark:bg-dark-2">N</option>
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

export default {
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
      isInfectious: '',
      selectedPhoto: null,
      photo: ''
    }
  },
  methods: {
    // async getData() {
    //   const { data } = await axios.get('http://localhost:9090/get-all-admin')
    //   console.log(data)
    // },
    // async submitData() {
    //   try {
    //     const response = await axios.post('http://localhost:9090/patient', {
    //       name: this.name,
    //       khmerName: this.khmerName,
    //       dob: new Date(this.dob).toISOString(),
    //       age: this.age,
    //       gender: this.gender,
    //       contactNo: this.contactNo,
    //       regDate: new Date(this.regDate).toISOString(),
    //       village: this.village,
    //       familyGroup: this.familyGroup,
    //       pregnant: this.pregnant,
    //       lastMenstrualPeriod: new Date(this.lastMenstrualPeriod).toISOString(),
    //       drugAllergies: this.drugAllergies,
    //       // isInfectious: this.isInfectious,
    //       photo: this.photo,
    //       sentToID: false
    //     })
    //     console.log(response.data)
    //   } catch (error) {
    //     console.error('Error posting data:', error)
    //   }
    // },

    async submitData() {
      try {
        const payload = {
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
          lastMenstrualPeriod: this.lastMenstrualPeriod
            ? new Date(this.lastMenstrualPeriod).toISOString()
            : null,
          drugAllergies: this.drugAllergies,
          // isInfectious: this.isInfectious,
          photo: this.photo,
          sentToID: false
        }

        const response = await axios.post('http://localhost:9090/patient', payload, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log(response.data)
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          console.error('Server responded with an error:', error.response.data)
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up request:', error.message)
        }
      }
    },

    // For debugging
    // submitData() {
    //   // Convert dob and regDate to RFC3339 format
    //   const dob = new Date(this.dob).toISOString()
    //   const regDate = new Date(this.regDate).toISOString()
    //   const lastMenstrualPeriod = new Date(this.lastMenstrualPeriod).toISOString()

    //   console.log('Name:', this.name, 'Type:', typeof this.name)
    //   console.log('Khmer Name:', this.khmerName, 'Type:', typeof this.khmerName)
    //   console.log('DOB:', dob, 'Type:', typeof dob)
    //   console.log('Age:', this.age, 'Type:', typeof this.age)
    //   console.log('Gender:', this.gender, 'Type:', typeof this.gender)
    //   console.log('Contact No:', this.contactNo, 'Type:', typeof this.contactNo)
    //   console.log('Reg Date:', regDate, 'Type:', typeof regDate)
    //   console.log('Village:', this.village, 'Type:', typeof this.village)
    //   console.log('Family Group:', this.familyGroup, 'Type:', typeof this.familyGroup)
    //   console.log('Pregnant:', this.pregnant, 'Type:', typeof this.pregnant)
    //   console.log(
    //     'Last Menstrual Period:',
    //     lastMenstrualPeriod,
    //     'Type:',
    //     typeof lastMenstrualPeriod
    //   )
    //   console.log('Drug Allergies:', this.drugAllergies, 'Type:', typeof this.drugAllergies)
    //   console.log('Is Infectious:', this.isInfectious, 'Type:', typeof this.isInfectious)
    //   console.log('Selected Photo:', this.photo, 'Type:', typeof this.photo)
    // },
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
      } else {
        // Reset selectedPhoto or show error message
        this.selectedPhoto = null
        alert('Please select a JPEG, JPG, or PNG file.')
      }
    }
  }
  // created() {
  //   this.getData()
  // }
}
</script>

<style scoped>
h1 {
  font-size: 1.25rem;
  font-weight: 500;
}
</style>
