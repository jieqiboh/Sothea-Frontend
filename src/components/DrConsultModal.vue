<template>
  <div class="flex items-center justify-center">
    <div class="flex flex-col rounded-lg w-3/4 max-h-fit border border-gray-300 p-10">
      <h1>Doctor's Consult</h1>
      <br />

      <div class="flex flex-col">
        <!-- Header -->
        <div class="flex flex-row">
          <div class="font-medium text-md w-1/3">Condition</div>
          <div class="font-medium text-md w-1/6">Yes</div>
          <div class="font-medium text-md w-1/6">No</div>
        </div>
      </div>

      <!-- Healthy -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal text-sm w-1/3">Healthy</div>

          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="healthy" class="w-4 h-4" v-model="healthy" :value="true" />
            </label>
          </div>
          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="healthy" class="w-4 h-4" v-model="healthy" :value="false" />
            </label>
          </div>
        </div>
      </div>

      <!-- MSK -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal text-sm w-1/3">MSK</div>

          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="msk" class="w-4 h-4" v-model="msk" :value="true" />
            </label>
          </div>
          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="msk" class="w-4 h-4" v-model="msk" :value="false" />
            </label>
          </div>
        </div>
      </div>

      <!-- CVS -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal text-sm w-1/3">CVS</div>

          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="cvs" class="w-4 h-4" v-model="cvs" :value="true" />
            </label>
          </div>
          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="cvs" class="w-4 h-4" v-model="cvs" :value="false" />
            </label>
          </div>
        </div>
      </div>

      <!-- Respi -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal text-sm w-1/3">Respi</div>

          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="respi" class="w-4 h-4" v-model="respi" :value="true" />
            </label>
          </div>
          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="respi" class="w-4 h-4" v-model="respi" :value="false" />
            </label>
          </div>
        </div>
      </div>

      <!-- GU -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal text-sm w-1/3">GU</div>

          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="gu" class="w-4 h-4" v-model="gu" :value="true" />
            </label>
          </div>
          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="gu" class="w-4 h-4" v-model="gu" :value="false" />
            </label>
          </div>
        </div>
      </div>

      <!-- GIT -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal text-sm w-1/3">GIT</div>

          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="git" class="w-4 h-4" v-model="git" :value="true" />
            </label>
          </div>
          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="git" class="w-4 h-4" v-model="git" :value="false" />
            </label>
          </div>
        </div>
      </div>

      <!-- EYE -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal text-sm w-1/3">EYE</div>

          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="eye" class="w-4 h-4" v-model="eye" :value="true" />
            </label>
          </div>
          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="eye" class="w-4 h-4" v-model="eye" :value="false" />
            </label>
          </div>
        </div>
      </div>

      <!-- DERM -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal text-sm w-1/3">DERM</div>

          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="derm" class="w-4 h-4" v-model="derm" :value="true" />
            </label>
          </div>
          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="derm" class="w-4 h-4" v-model="derm" :value="false" />
            </label>
          </div>
        </div>
      </div>
      <!-- Others -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row items-center">
          <div class="font-normal text-sm w-1/3">Others:</div>

          <div class="flex w-1/3">
            <input
              v-model="others"
              type="text"
              placeholder="Specify"
              class="w-full bg-transparent rounded-md border border-stroke py-2 px-2 text-sm text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
            />
          </div>
        </div>
      </div>

      <!-- Consultation Notes -->
      <div class="mt-4">
        <label for="" class="mb-2 block text-sm font-medium text-dark">Consultation Notes</label>
        <textarea
          v-model="consultationNotes"
          rows="3"
          placeholder="Remarks"
          class="w-full bg-transparent rounded-md border border-stroke p-3 font-normal text-sm text-dark-4 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
        ></textarea>
      </div>

      <!-- Diagnosis -->
      <div class="mt-4">
        <label for="" class="mb-2 block text-sm font-medium text-dark">Diagnosis</label>
        <textarea
          v-model="diagnosis"
          rows="3"
          placeholder="Remarks"
          class="w-full bg-transparent rounded-md border border-stroke p-3 font-normal text-sm text-dark-4 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
        ></textarea>
      </div>

      <!-- Treatment -->
      <div class="mt-4">
        <label for="" class="mb-2 block text-sm font-medium text-dark">Treatment</label>
        <textarea
          v-model="treatment"
          rows="3"
          placeholder="Remarks"
          class="w-full bg-transparent rounded-md border border-stroke p-3 font-normal text-sm text-dark-4 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
        ></textarea>
      </div>

      <div class="flex flex-col mt-2">
        <!-- Referral Header -->
        <div class="flex flex-row">
          <div class="w-1/3"></div>
          <div class="font-medium text-sm pr-5">Yes</div>
          <div class="font-medium text-sm">No</div>
          <div class="font-medium text-sm w-1/3 pl-11">Location</div>
        </div>
      </div>

      <!-- Referral Needed? -->
      <div class="flex flex-col mt-2">
        <div class="flex flex-row">
          <div class="font-normal items-center inline-flex text-sm w-1/3">Referral Needed?</div>

          <div class="flex w-1/6">
            <div class="flex items-center pr-7">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="ref-needed"
                  class="w-4 h-4"
                  v-model="referralNeeded"
                  :value="true"
                />
              </label>
            </div>
            <div class="flex items-center">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  name="ref-needed"
                  class="w-4 h-4"
                  v-model="referralNeeded"
                  :value="false"
                />
              </label>
            </div>
          </div>

          <div class="flex w-1/3 grow">
            <textarea
              v-model="referralLoc"
              rows="1"
              placeholder="Enter Location"
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

export default {
  props: {
    patientId: {
      type: Number,
      required: true
    },
    patientData: {
      type: Object,
      default: null
    },
    isAdd : {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      healthy: null,
      msk: null,
      cvs: null,
      respi: null,
      gu: null,
      git: null,
      eye: null,
      derm: null,
      others: '',
      consultationNotes: '',
      diagnosis: '',
      treatment: '',
      referralNeeded: null,
      referralLoc: '',
      remarks: 'remarks'
    }
  },
  created() {
    if (!this.isAdd) {
      const drConsult = this.patientData.doctorsconsultation;
      this.healthy = drConsult.healthy;
      this.msk = drConsult.msk;
      this.cvs = drConsult.cvs;
      this.respi = drConsult.respi;
      this.gu = drConsult.gu;
      this.git = drConsult.git;
      this.eye = drConsult.eye;
      this.derm = drConsult.derm;
      this.others = drConsult.others;
      this.consultationNotes = drConsult.consultationNotes;
      this.diagnosis = drConsult.diagnosis;
      this.treatment = drConsult.treatment;
      this.referralNeeded = drConsult.referralNeeded;
      this.referralLoc = drConsult.referralLoc;
      this.remarks = drConsult.remarks;
    } 
  },
  methods: {
    async submitData() {
      try {
        console.log('healthy', this.healthy, typeof this.healthy)
        console.log('msk', this.msk, typeof this.msk)
        console.log('cvs', this.cvs, typeof this.cvs)
        console.log('respi', this.respi, typeof this.respi)
        console.log('gu', this.gu, typeof this.gu)
        console.log('git', this.git, typeof this.git)
        console.log('eye', this.eye, typeof this.eye)
        console.log('derm', this.derm, typeof this.derm)
        console.log('others', this.others, typeof this.others)
        console.log('consultationNotes', this.consultationNotes, typeof this.consultationNotes)
        console.log('diagnosis', this.diagnosis, typeof this.diagnosis)
        console.log('treatment', this.treatment, typeof this.treatment)
        console.log('referralNeeded', this.referralNeeded, typeof this.referralNeeded)
        console.log('referralLoc', this.referralLoc, typeof this.referralLoc)
        console.log('remarks', this.remarks, typeof this.remarks)
        const response = await axios.patch(`http://localhost:9090/patient/${this.patientId}`, {
          doctorsConsultation: {
            healthy: this.healthy,
            msk: this.msk,
            cvs: this.cvs,
            respi: this.respi,
            gu: this.gu,
            git: this.git,
            eye: this.eye,
            derm: this.derm,
            others: this.others,
            consultationNotes: this.consultationNotes,
            diagnosis: this.diagnosis,
            treatment: this.treatment,
            referralNeeded: this.referralNeeded,
            referralLoc: this.referralLoc,
            remarks: this.remarks
          }
        })
        console.log(response.data)
        console.log('Doctors Consultation posted successfully!')
      } catch (error) {
        console.error('Error posting data:', error)
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
