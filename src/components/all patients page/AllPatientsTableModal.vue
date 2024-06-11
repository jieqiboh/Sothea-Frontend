<template>
    <div class="container max-w-3xl px-4 mx-auto sm:px-8 table">
        <div class="py-8">
            <div class="flex flex-row justify-between w-full mb-1 sm:mb-0">
                <h2 class="text-3xl leading-tight" style="color:black">
                    All Patients
                </h2>
            </div>

            <div class="flex justify-between items-center" style="padding: 20px 0px;">
                <div class="relative flex-grow w-20">
                    <input 
                        type="text" 
                        id="search-input" 
                        class="rounded-lg border-transparent appearance-none bg-gray-300 border border-gray-300 py-3 px-10 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                        placeholder="Search ID/Name/Contact"
                        @input="searchPatient"
                    />
                </div>
                <router-link active-class="active" to="/addpatient">
                    <div class="flex items-center space-x-3">
                        <Text style="font-size:medium" class="hover:text-gray-500">Add New Patient</Text>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>
                        </span>
                    </div>
                </router-link>
            </div>

            <hr class="line" />

            <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8 table">
                <div class="inline-block min-w-full overflow-hidden shadow table">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col"
                                    class="px-5 py-5 text-sm font-medium text-left text-gray-800 uppercase border-b border-gray-200"
                                    style="background: rgba(63, 81, 181, 0.3);">
                                    Patient ID
                                </th>
                                <th scope="col"
                                    class="px-10 py-5 text-sm font-medium text-left text-gray-800 uppercase bg-indigo-200 border-b border-gray-200"
                                    style="background: rgba(63, 81, 181, 0.3);">
                                    Patient Name
                                </th>
                                <th scope="col"
                                    class="px-14 py-5 text-sm font-medium text-left text-gray-800 uppercase bg-indigo-200 border-b border-gray-200"
                                    style="background: rgba(63, 81, 181, 0.3);">
                                    Khmer Name
                                </th>
                                <th scope="col"
                                    class="px-3 py-5 text-sm font-medium text-left text-gray-800 uppercase bg-indigo-200 border-b border-gray-200"
                                    style="background: rgba(63, 81, 181, 0.3);">
                                    Gender
                                </th>
                                <th scope="col"
                                    class="px-5 py-5 text-sm font-medium text-left text-gray-800 uppercase bg-indigo-200 border-b border-gray-200"
                                    style="background: rgba(63, 81, 181, 0.3);">
                                    DOB
                                </th>
                                <th scope="col"
                                    class="px-5 py-5 text-sm font-medium text-left text-gray-800 uppercase bg-indigo-200 border-b border-gray-200"
                                    style="background: rgba(63, 81, 181, 0.3);">
                                    Contact No.
                                </th>
                                <th scope="col"
                                    class="px-5 py-5 text-sm font-medium text-left text-gray-800 uppercase bg-indigo-200 border-b border-gray-200"
                                    style="background: rgba(63, 81, 181, 0.3);">
                                    Queued At
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow class="hover:cursor-pointer" v-for="patient in patients" :key="patient.id"
                                :id="patient.id" :name="patient.name" :khmername="patient.khmerName"
                                :gender="patient.gender" :DOB="patient.dob" :contactnumber="patient.contactNo"
                                :queuedat="getMockQueuedAt()" />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import TableRow from './TableRow.vue';
import axios from 'axios';
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

export default {
    components: {
        TableRow
    },
    data() {
        return {
            patients: [],
            patientsFixed: [], // for searching patients 
            token: null
        }
    },
    methods: {
        async getData() {
            const toast = useToast()
            try {
                const { data } = await axios.get('http://localhost:9090/get-all-admin');
                this.patients = data;  // Store the fetched data in the patients array
                this.patientsFixed = data;
                console.log(this.patients);
            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.error)
                } else { // No response received at all
                    toast.error("An internal server error occurred.")
                }
            }
        },
        getMockQueuedAt() {
            // Generate a mock queuedat value
            const date = new Date();
            const hours = Math.floor(Math.random() * 24);
            const minutes = Math.floor(Math.random() * 60);
            date.setHours(hours, minutes);
            return date.toISOString();  // Return ISO string format of the date
        },
        searchPatient() {
            console.log('searching')
            // get value of the search input
            const searchValue = document.getElementById('search-input').value;
            // filter patients array based on the search value
            this.patients = this.patientsFixed.filter(patient => {
                return patient.name.toLowerCase().includes(searchValue) ||
                    patient.id.toString().includes(searchValue) ||
                    patient.contactNo.toLowerCase().includes(searchValue);
            });
        }
    },
    created() {
        this.getData();
    }
}

</script>

<style>
.table {
    width: 1200px;
}

.table-heading {
    background: rgba(63, 81, 181);
}

.line {
    height: 1px;
    background: rgba(0, 0, 0, 0.17);
}
</style>