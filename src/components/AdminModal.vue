<template>
  <div class="flex items-center justify-center">
    <div class="flex flex-col rounded-lg w-3/4 max-h-fit border border-gray-300 p-8">
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
                  type="text"
                  placeholder="Name"
                  class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-1.5 pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                />
                <span class="absolute top-1/2 left-4 -translate-y-1/2">
                  <img src="../assets/user.svg" width="20" height="20" />
                </span>
              </div>
            </div>

            <!-- Khmer Name Input -->
            <div class="ml-2 w-1/2">
              <label class="mb-1 block text-sm font-medium text-dark dark:text-white">
                Khmer Name
              </label>
              <div class="relative">
                <input
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
                  class="flex w-full h-[11rem] justify-center items-center cursor-pointer rounded-md border border-dashed border-gray-300 p-6 mr-2"
                >
                  <div>
                    <input type="file" name="file" id="file" class="sr-only" />
                    <span class="flex items-center justify-center">
                      <img src="../assets/camera.svg" height="20" width="20" />
                    </span>
                    <span class="text-sm text-body-color"> Add Photo ID </span>
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
              class="relative z-20 w-full appearance-none rounded-md border border-stroke dark:border-dark-3 bg-transparent py-1.5 pl-3 pr-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
            >
              <option value="NA" class="dark:bg-dark-2">NA</option>
              <option value="Y" class="dark:bg-dark-2">Y</option>
              <option value="N" class="dark:bg-dark-2">N</option>
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
          class="px-5 py-2 transition ease-in duration-200 rounded-lg text-sm text-[#3f51b5] hover:bg-[#3f51b5] hover:text-white border-2 border-[#3f51b5] focus:outline-none"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
const dob = ref('')
const gender = ref('')
const pregnant = ref('')
const isInfectious = ref('')
export default {
  setup() {
    return {
      dob,
      gender,
      pregnant,
      isInfectious
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
