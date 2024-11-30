<template>
    <div class="flex items-center justify-center">
        <div class="flex flex-col rounded-lg w-3/4 max-h-fit border border-gray-300 p-10">
            <h1>Fall Risk (For patients above 60)</h1>
            <br />

            <!-- How often patient worries about falling -->
            <div class="flex flex-col mt-4">
                <div class="flex flex-row">
                    <div class="font-medium text-sm">How often do you worry about falling? <span class="req">*</span></div>
                </div>

                <!-- Options (displayed vertically) -->
                <div class="flex flex-col items-start mt-2 space-y-2">
                    <label>
                        <input type="radio" name="fallWorries" v-model="fallWorries" :value="'a'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">A: Never</span>
                    </label>

                    <label>
                        <input type="radio" name="fallWorries" v-model="fallWorries" :value="'b'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">B: 1x a week</span>
                    </label>

                    <label>
                        <input type="radio" name="fallWorries" v-model="fallWorries" :value="'c'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">C: >1x a week</span>
                    </label>

                    <label>
                        <input type="radio" name="fallWorries" v-model="fallWorries" :value="'d'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">D: Every day</span>
                    </label>
                </div>
            </div>

            <!-- History of fall within past 12 months -->
            <div class="flex flex-col mt-4">
                <div class="flex flex-row">
                    <div class="font-medium text-sm">History of fall within the past 12 months: <span class="req">*</span></div>
                </div>

                <!-- Options (displayed vertically) -->
                <div class="flex flex-col items-start mt-2 space-y-2">
                    <label>
                        <input type="radio" name="fallHistory" v-model="fallHistory" :value="'a'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">A: No fall (Score 0)</span>
                    </label>

                    <label>
                        <input type="radio" name="fallHistory" v-model="fallHistory" :value="'b'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">B: 1 fall prior to admission (Score 1)</span>
                    </label>

                    <label>
                        <input type="radio" name="fallHistory" v-model="fallHistory" :value="'c'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">C: 2 or more falls prior to admission (Score 5)</span>
                    </label>

                    <label>
                        <input type="radio" name="fallHistory" v-model="fallHistory" :value="'d'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">D: 1 or more falls during current admission (Score 5)</span>
                    </label>
                </div>
            </div>


            <!-- Cognitive status -->
            <div class="flex flex-col mt-4">
                <div class="flex flex-row">
                    <div class="font-medium text-sm">Cognitive status: <span class="req">*</span></div>
                </div>

                <!-- Options (displayed vertically) -->
                <div class="flex flex-col items-start mt-2 space-y-2">
                    <label>
                        <input type="radio" name="cognitiveStatus" v-model="cognitiveStatus" :value="'a'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">A: Intact (Score 0)</span>
                    </label>

                    <label>
                        <input type="radio" name="cognitiveStatus" v-model="cognitiveStatus" :value="'b'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">B: Minimally impaired (Score 1)</span>
                    </label>

                    <label>
                        <input type="radio" name="cognitiveStatus" v-model="cognitiveStatus" :value="'c'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">C: Moderately impaired (Score 2)</span>
                    </label>

                    <label>
                        <input type="radio" name="cognitiveStatus" v-model="cognitiveStatus" :value="'d'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">D: Severely impaired (Score 3)</span>
                    </label>
                </div>
            </div>

            <!-- Continence problems -->
            <div class="flex flex-col mt-4">
                <div class="flex flex-row">
                    <div class="font-medium text-sm">Continence problems: <span class="req">*</span></div>
                </div>

                <!-- Options (displayed vertically) -->
                <div class="flex flex-col items-start mt-2 space-y-2">
                    <label>
                        <input type="radio" name="continenceProblems" v-model="continenceProblems" :value="'a'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">A: No continence problems or IDC in-situ (Score 0)</span>
                    </label>

                    <label>
                        <input type="radio" name="continenceProblems" v-model="continenceProblems" :value="'b'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">B: Incontinence of urine and/or faeces (Score 1)</span>
                    </label>

                    <label>
                        <input type="radio" name="continenceProblems" v-model="continenceProblems" :value="'c'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">C: Frequency (empties bladder > 6 times daily)/ Diarrhoea (Score
                            1)</span>
                    </label>

                    <label>
                        <input type="radio" name="continenceProblems" v-model="continenceProblems" :value="'d'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">D: Urgency (Score 1)</span>
                    </label>


                    <label>
                        <input type="radio" name="continenceProblems" v-model="continenceProblems" :value="'e'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">E: Needing nocturnal toileting more than 2 times daily (Score 1)</span>
                    </label>
                </div>
            </div>


            <!-- Safety Awareness -->
            <div class="flex flex-col mt-4">
                <div class="flex flex-row">
                    <div class="font-medium text-sm">Safety Awareness: <span class="req">*</span></div>
                </div>

                <!-- Options (displayed vertically) -->
                <div class="flex flex-col items-start mt-2 space-y-2">
                    <label>
                        <input type="radio" name="safetyAwareness" v-model="safetyAwareness" :value="'a'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">A: Good awareness and requests appropriate assistance (Score 0)</span>
                    </label>

                    <label>
                        <input type="radio" name="safetyAwareness" v-model="safetyAwareness" :value="'b'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">B: Occasional risk-taking behaviours (Score 1)</span>
                    </label>

                    <label>
                        <input type="radio" name="safetyAwareness" v-model="safetyAwareness" :value="'c'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">C: Inappropriate fear for activities (Score 2)</span>
                    </label>

                    <label>
                        <input type="radio" name="safetyAwareness" v-model="safetyAwareness" :value="'d'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">D: Frequent risk-taking behaviours (Score 3)</span>
                    </label>
                </div>
            </div>

            <!-- Unsteadiness when standing, transferring and/or walking -->
            <div class="flex flex-col mt-4">
                <div class="flex flex-row">
                    <div class="font-medium text-sm">Unsteadiness when standing, transferring and/or walking: <span class="req">*</span>
                    </div>
                </div>

                <!-- Options (displayed vertically) -->
                <div class="flex flex-col items-start mt-2 space-y-2">
                    <label>
                        <input type="radio" name="unsteadiness" v-model="unsteadiness" :value="'a'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">A: Steady gait or complete dependent or on traction (Score 0)</span>
                    </label>

                    <label>
                        <input type="radio" name="unsteadiness" v-model="unsteadiness" :value="'b'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">B: Minimally unsteadiness which needs supervision (Score 1)</span>
                    </label>

                    <label>
                        <input type="radio" name="unsteadiness" v-model="unsteadiness" :value="'c'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">C: Moderately unsteadiness which require hands-on assist at times (Score
                            4)</span>
                    </label>

                    <label>
                        <input type="radio" name="unsteadiness" v-model="unsteadiness" :value="'d'"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">D: Severely unsteadiness and need constant hands-on assist (Score
                            5)</span>
                    </label>
                </div>
            </div>

            <!-- Current Score Display -->
            <div class="font-medium text-lg mt-4" :class="{ 'text-red-500': fallRiskScore >= 8 }">Current Score: {{ fallRiskScore }}</div>

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
import axios, { AxiosError, type AxiosResponse } from 'axios'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import type Patient from '@/types/Patient'
import { BaseURL } from '@/main'
import type FallRisk from '@/types/FallRisk'
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
    computed: {
        fallRiskScore() {
            const scoresMap = {
                'fallHistory': {
                    'a': 0,
                    'b': 1,
                    'c': 5,
                    'd': 5
                },
                'cognitiveStatus': {
                    'a': 0,
                    'b': 1,
                    'c': 2,
                    'd': 3
                },
                'continenceProblems': {
                    'a': 0,
                    'b': 1,
                    'c': 1,
                    'd': 1,
                    'e': 1
                },
                'safetyAwareness': {
                    'a': 0,
                    'b': 1,
                    'c': 2,
                    'd': 3
                },
                'unsteadiness': {
                    'a': 0,
                    'b': 1,
                    'c': 4,
                    'd': 5
                }
            };

            let totalScore = 0;
            totalScore += this.fallHistory ? scoresMap['fallHistory'][this.fallHistory] : 0;
            totalScore += this.cognitiveStatus ? scoresMap['cognitiveStatus'][this.cognitiveStatus] : 0;
            totalScore += this.continenceProblems ? scoresMap['continenceProblems'][this.continenceProblems] : 0;
            totalScore += this.safetyAwareness ? scoresMap['safetyAwareness'][this.safetyAwareness] : 0;
            totalScore += this.unsteadiness ? scoresMap['unsteadiness'][this.unsteadiness] : 0;
            return totalScore;
        }
    },
    watch: {
        patientData: function (newVal: Patient, oldVal: Patient) {
            // watch it
            if (!this.isAdd) {
                const fallRisk = this.patientData.fallrisk
                if (!fallRisk) {
                    this.fallWorries = ''
                    this.fallHistory = ''
                    this.cognitiveStatus = ''
                    this.continenceProblems = ''
                    this.safetyAwareness = ''
                    this.fallRiskScore = 0
                } else {
                    this.fallWorries = fallRisk.fallWorries as 'a' | 'b' | 'c' | 'd'
                    this.fallHistory = fallRisk.fallHistory as 'a' | 'b' | 'c' | 'd'
                    this.cognitiveStatus = fallRisk.cognitiveStatus as 'a' | 'b' | 'c' | 'd'
                    this.continenceProblems = fallRisk.continenceProblems as 'a' | 'b' | 'c' | 'd' | 'e'
                    this.safetyAwareness = fallRisk.safetyAwareness as 'a' | 'b' | 'c' | 'd'
                    this.unsteadiness = fallRisk.unsteadiness as 'a' | 'b' | 'c' | 'd'
                    this.fallRiskScore = fallRisk.fallRiskScore
                }
            }
        },
    },
    created() {
        if (!this.isAdd) {
            const fallRisk = this.patientData.fallrisk
            if (!fallRisk) return
            this.fallWorries = fallRisk.fallWorries as 'a' | 'b' | 'c' | 'd'
            this.fallHistory = fallRisk.fallHistory as 'a' | 'b' | 'c' | 'd'
            this.cognitiveStatus = fallRisk.cognitiveStatus as 'a' | 'b' | 'c' | 'd'
            this.continenceProblems = fallRisk.continenceProblems as 'a' | 'b' | 'c' | 'd' | 'e'
            this.safetyAwareness = fallRisk.safetyAwareness as 'a' | 'b' | 'c' | 'd'
            this.unsteadiness = fallRisk.unsteadiness as 'a' | 'b' | 'c' | 'd'
            this.fallRiskScore = 0
        }
    },
    data() {
        return {
            fallWorries: '' as 'a' | 'b' | 'c' | 'd' | '',              // restrict to valid keys
            fallHistory: '' as 'a' | 'b' | 'c' | 'd' | '',              // restrict to valid keys
            cognitiveStatus: '' as 'a' | 'b' | 'c' | 'd' | '',          // restrict to valid keys
            continenceProblems: '' as 'a' | 'b' | 'c' | 'd' | 'e' | '', // restrict to valid keys
            safetyAwareness: '' as 'a' | 'b' | 'c' | 'd' | '',          // restrict to valid keys
            unsteadiness: '' as 'a' | 'b' | 'c' | 'd' | '',             // restrict to valid keys
            isEditing: false,
        }
    },
    methods: {
        async submitData() {
            const toast = useToast()
            try {
                if (
                    this.fallWorries === '' ||
                    this.fallHistory === '' ||
                    this.cognitiveStatus === '' ||
                    this.continenceProblems === '' ||
                    this.safetyAwareness === '' ||
                    this.unsteadiness === ''
                ) {
                    toast.error('Please select options for all fields')
                    return
                }
                const fallRisk: FallRisk = {
                    // need to define outside to catch missing fields
                    fallWorries: this.fallWorries,
                    fallHistory: this.fallHistory,
                    cognitiveStatus: this.cognitiveStatus,
                    continenceProblems: this.continenceProblems,
                    safetyAwareness: this.safetyAwareness,
                    unsteadiness: this.unsteadiness,
                    fallRiskScore: this.fallRiskScore
                }
                await axios
                    .patch(`${BaseURL}/patient/${this.patientId}/${this.patientVid}`, {
                        fallRisk: fallRisk
                    })
                    .then((response) => {
                        console.log(response)
                        console.log('Fall Risk posted successfully!')
                        this.toggleEdit() // to switch back to read-only mode
                        toast.success('Fall Risk saved successfully!')
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
        },
        toggleEdit() {
            console.log('toggleEdit')
            this.isEditing = !this.isEditing
            console.log(this.isEditing)
        }
    }
})
</script>

<style scoped>
h1 {
    font-size: 1.25rem;
    font-weight: 500;
}
.req {
        color: red;
}
</style>