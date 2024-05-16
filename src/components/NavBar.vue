<template>
  <div>
    <nav class="bg-[#3F51B5]">
      <div class="px-8 mx-auto max-w-7xl">
        <div class="flex items-center justify-between h-1/6 pt-2">
          <div class="flex items-center">
            <h1>Project Sothea</h1>
            <div class="hidden md:block">
              <div class="flex items-baseline ml-10 space-x-4">
                <router-link
                  class="text-white hover:text-gray-300 px-3 py-2 rounded-t-lg text-sm font-medium"
                  active-class="active"
                  to="/allpatients"
                >
                  All Patients
                </router-link>
                <router-link
                  class="text-white hover:text-gray-300 px-3 py-2 rounded-t-lg text-sm font-medium"
                  active-class="active"
                  to="/addpatient"
                >
                  Add Patient
                </router-link>
              </div>
            </div>
          </div>

          <div class="flex items-center ml-4 md:ml-6">
            <button
              type="button"
              class="relative ml-3 text-left flex items-center justify-center w-full rounded-md px-4 py-2 text-sm font-medium hover:text-gray-300 text-white"
              id="options-menu"
            >
              <h2>Logout</h2>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
h1 {
  color: white;
  font-weight: 500;
}

h2 {
  color: white;
  padding: 0.25rem;
}
.active {
  background-color: white;
  color: #3f51b5;
  border: solid white;
  border-width: 0.25rem;
}
</style>
