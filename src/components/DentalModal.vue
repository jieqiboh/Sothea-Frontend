<template>
    <div class="flex items-center justify-center">
        <div class="flex flex-col rounded-lg w-3/4 max-h-fit border border-gray-300 p-10">
            <h1>Dental</h1>
            <br />

            <!-- pastYearDecay -->
            <div class="flex flex-col mt-4">
                    <div class="font-medium text-sm">Bacterial Exposure Question: Has anyone in the immediate
                        family (including a caregiver) had tooth decay or lost a tooth from tooth decay in the past
                        year? <span class="req">*</span></div>
                <div class="flex flex-col items-start mt-2 space-y-2">
                    <label>
                        <input type="radio" name="pastYearDecay" v-model="pastYearDecay" :value="true"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">True</span>
                    </label>

                    <label>
                        <input type="radio" name="pastYearDecay" v-model="pastYearDecay" :value="false"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">False</span>
                    </label>
                </div>
            </div>

            <!-- brushTeethPain -->
            <div class="flex flex-col mt-4">
                <div class="font-medium text-sm">Oral Symptoms Question: Does your child complain of tooth pain or
                    bleeding gums when they brush their teeth? <span class="req">*</span></div>
                <div class="flex flex-col items-start mt-2 space-y-2">
                    <label>
                        <input type="radio" name="brushTeethPain" v-model="brushTeethPain" :value="true"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">True</span>
                    </label>
                    <label>
                        <input type="radio" name="brushTeethPain" v-model="brushTeethPain" :value="false"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">False</span>
                    </label>
                </div>
            </div>

            <!-- drinkOtherWater -->
            <div class="flex flex-col mt-5">
                <div class="font-medium text-sm">Oral Hygiene Question: Does your child wake up to drink anything
                    other than water throughout the night? <span class="req">*</span></div>
                <div class="flex flex-col items-start mt-5 space-y-2">
                    <label>
                        <input type="radio" name="drinkOtherWater" v-model="drinkOtherWater" :value="true"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">True</span>
                    </label>

                    <label>
                        <input type="radio" name="drinkOtherWater" v-model="drinkOtherWater" :value="false"
                            :disabled="!isEditing" />
                        <span class="ml-2 text-sm">False</span>
                    </label>
                </div>
            </div>

            <!-- cleanTeethFreq -->
            <div class="flex flex-row w-full mt-5">
                <div>
                    <label for="cleanTeethFreq" class="mb-1 block text-sm font-medium text-dark">
                        How many days per week do you clean your child's teeth or supervise / monitor them brush with
                        fluoride toothpaste twice a day? <span class="req">*</span>
                    </label>
                    <div class="relative z-20 w-1/5">
                        <select v-model="cleanTeethFreq" :disabled="!isEditing"
                            class="relative z-20 w-full appearance-none rounded-md border border-stroke bg-transparent py-1.5 pl-12 pr-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200">
                            <option :value="0">0</option>
                            <option :value="1">1</option>
                            <option :value="2">2</option>
                            <option :value="3">3</option>
                            <option :value="4">4</option>
                            <option :value="5">5</option>
                            <option :value="6">6</option>
                            <option :value="7">7</option>
                        </select>
                        <span class="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                            <img src="../assets/chevrondown.svg" height="20" width="20" />
                        </span>
                    </div>
                </div>
            </div>

            <!-- sugarConsumeFreq -->
            <div class="flex flex-row w-full mt-5">
                <div>
                    <label for="sugarConsumeFreq" class="mb-1 block text-sm font-medium text-dark">
                        Diet Question: On average, how many times daily does your child consume starch or sugar (food or
                        drinks) between meals? <span class="req">*</span>
                    </label>
                    <div class="relative z-20 w-1/5">
                        <select v-model="sugarConsumeFreq" :disabled="!isEditing"
                            class="relative z-20 w-full appearance-none rounded-md border border-stroke bg-transparent py-1.5 pl-12 pr-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200">
                            <option :value="0">0</option>
                            <option :value="1">1</option>
                            <option :value="2">2</option>
                            <option :value="3">3</option>
                            <option :value="4">4</option>
                            <option :value="5">5</option>
                            <option :value="6">6</option>
                        </select>
                        <span class="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                            <img src="../assets/chevrondown.svg" height="20" width="20" />
                        </span>
                    </div>
                </div>
            </div>

            <!-- Dental Notes -->
            <div class="flex flex-col mt-5">
                <div class="flex flex-row">
                    <div class="font-medium text-sm pl-13">Dental Notes</div>
                </div>
                <div class="flex flex-row">
                    <div class="flex pl-13 grow">
                        <textarea v-model="dentalNotes" rows="1" placeholder="Enter dental notes"
                            class="w-full bg-transparent rounded-md border border-stroke p-3 text-sm text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200"
                            :disabled="!isEditing"></textarea>
                    </div>
                </div>
            </div>

            <div class="flex flex-col mt-5">
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
                    <div class="font-normal items-center inline-flex text-sm w-1/3">Referral Needed? <span class="req">*</span></div>

                    <div class="flex">
                        <div class="flex items-center pr-7">
                            <label class="inline-flex items-center">
                                <input type="radio" name="ref-needed" class="w-4 h-4" v-model="referralNeeded"
                                    :value="true" :disabled="!isEditing" />
                            </label>
                        </div>
                        <div class="flex items-center">
                            <label class="inline-flex items-center">
                                <input type="radio" name="ref-needed" class="w-4 h-4" v-model="referralNeeded"
                                    :value="false" :disabled="!isEditing" />
                            </label>
                        </div>
                    </div>

                    <div class="flex w-1/3 pl-11 grow">
                        <textarea v-model="referralLoc" rows="1" placeholder="Enter Location"
                            class="w-full bg-transparent rounded-md border border-stroke p-3 text-sm text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200"
                            :disabled="!isEditing"></textarea>
                    </div>
                </div>
            </div>

            <!-- Tooth Chart Right Upper Header -->
            <div class="flex flex-row justify-between mt-5">
                <div class="font-normal items-center inline-flex text-sm w-1/5">Right Upper Cavities?</div>
                <div class="font-medium text-sm">11</div>
                <div class="font-medium text-sm">12</div>
                <div class="font-medium text-sm">13</div>
                <div class="font-medium text-sm">14</div>
                <div class="font-medium text-sm">15</div>
                <div class="font-medium text-sm">16</div>
                <div class="font-medium text-sm">17</div>
                <div class="font-medium text-sm">18</div>
            </div>

            <div class="flex flex-row mt-2 justify-between">
                <div class="flex flex-col w-1/5">
                    <p class="text-sm font-medium mb-2">Yes</p>
                    <p class="text-sm font-medium">No</p>
                </div>

                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_11" class="w-4 h-4" v-model="tooth11" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_11" class="w-4 h-4" v-model="tooth11" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>

                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_12" class="w-4 h-4" v-model="tooth12" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_12" class="w-4 h-4" v-model="tooth12" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>

                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_13" class="w-4 h-4" v-model="tooth13" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_13" class="w-4 h-4" v-model="tooth13" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>
                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_14" class="w-4 h-4" v-model="tooth14" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_14" class="w-4 h-4" v-model="tooth14" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>
                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_15" class="w-4 h-4" v-model="tooth15" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_15" class="w-4 h-4" v-model="tooth15" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>

                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_16" class="w-4 h-4" v-model="tooth16" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_16" class="w-4 h-4" v-model="tooth16" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>

                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_17" class="w-4 h-4" v-model="tooth17" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_17" class="w-4 h-4" v-model="tooth17" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>
                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_18" class="w-4 h-4" v-model="tooth18" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_18" class="w-4 h-4" v-model="tooth18" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>
            </div>

            <!-- Tooth Chart Right Lower Header -->
            <div class="flex flex-row mt-2 justify-between">
                <div class="font-normal items-center inline-flex text-sm w-1/5">Right Lower Cavities?</div>
                <div class="font-medium text-sm">41</div>
                <div class="font-medium text-sm">42</div>
                <div class="font-medium text-sm">43</div>
                <div class="font-medium text-sm">44</div>
                <div class="font-medium text-sm">45</div>
                <div class="font-medium text-sm">46</div>
                <div class="font-medium text-sm">47</div>
                <div class="font-medium text-sm">48</div>
            </div>

            <div class="flex flex-row mt-2 justify-between">
                <div class="flex flex-col w-1/5">
                    <p class="text-sm font-medium mb-2">Yes</p>
                    <p class="text-sm font-medium">No</p>
                </div>

                <div>
                    <div class="mb-2">
                        <input type="radio" name="tooth_41" class="w-4 h-4" v-model="tooth41" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_41" class="w-4 h-4" v-model="tooth41" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>

                <div>
                    <div class="mb-2">
                        <input type="radio" name="tooth_42" class="w-4 h-4" v-model="tooth42" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_42" class="w-4 h-4" v-model="tooth42" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>

                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_43" class="w-4 h-4" v-model="tooth43" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_43" class="w-4 h-4" v-model="tooth43" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>
                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_44" class="w-4 h-4" v-model="tooth44" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_44" class="w-4 h-4" v-model="tooth44" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>
                <div class="flex-col">
                    <div class=" mb-2">
                        <input type="radio" name="tooth_45" class="w-4 h-4" v-model="tooth45" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_45" class="w-4 h-4" v-model="tooth45" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>

                <div class="flex-col">
                    <div class=" mb-2">
                        <input type="radio" name="tooth_46" class="w-4 h-4" v-model="tooth46" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_46" class="w-4 h-4" v-model="tooth46" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>

                <div class="flex-col">
                    <div class=" mb-2">
                        <input type="radio" name="tooth_47" class="w-4 h-4" v-model="tooth47" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_47" class="w-4 h-4" v-model="tooth47" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>
                <div class="flex-col">
                    <div class=" mb-2">
                        <input type="radio" name="tooth_48" class="w-4 h-4" v-model="tooth48" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_48" class="w-4 h-4" v-model="tooth48" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>
            </div>

            <!-- Tooth Chart Left Upper Header -->
            <div class="flex flex-row mt-2 justify-between">
                <div class="font-normal items-center inline-flex text-sm w-1/5">Left Upper Cavities?</div>
                <div class="font-medium text-sm">21</div>
                <div class="font-medium text-sm">22</div>
                <div class="font-medium text-sm">23</div>
                <div class="font-medium text-sm">24</div>
                <div class="font-medium text-sm">25</div>
                <div class="font-medium text-sm">26</div>
                <div class="font-medium text-sm">27</div>
                <div class="font-medium text-sm">28</div>
            </div>

            <div class="flex flex-row mt-2 justify-between">
                <div class="flex flex-col w-1/5">
                    <p class="text-sm font-medium mb-2">Yes</p>
                    <p class="text-sm font-medium">No</p>
                </div>

                <div>
                    <div class="mb-2">
                        <input type="radio" name="tooth_21" class="w-4 h-4" v-model="tooth21" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_21" class="w-4 h-4" v-model="tooth21" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>

                <div>
                    <div class="mb-2">
                        <input type="radio" name="tooth_22" class="w-4 h-4" v-model="tooth22" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_22" class="w-4 h-4" v-model="tooth22" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>

                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_23" class="w-4 h-4" v-model="tooth23" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_23" class="w-4 h-4" v-model="tooth23" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>
                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_24" class="w-4 h-4" v-model="tooth24" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_24" class="w-4 h-4" v-model="tooth24" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>
                <div class="flex-col">
                    <div class=" mb-2">
                        <input type="radio" name="tooth_25" class="w-4 h-4" v-model="tooth25" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_25" class="w-4 h-4" v-model="tooth25" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>

                <div class="flex-col">
                    <div class=" mb-2">
                        <input type="radio" name="tooth_26" class="w-4 h-4" v-model="tooth26" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_26" class="w-4 h-4" v-model="tooth26" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>

                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_27" class="w-4 h-4" v-model="tooth27" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_27" class="w-4 h-4" v-model="tooth27" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>
                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_28" class="w-4 h-4" v-model="tooth28" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_28" class="w-4 h-4" v-model="tooth28" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>
            </div>

            <!-- Tooth Chart Left Lower Header -->
            <div class="flex flex-row mt-2 justify-between">
                <div class="font-normal items-center inline-flex text-sm w-1/5">Left Lower Cavities?</div>
                <div class="font-medium text-sm">31</div>
                <div class="font-medium text-sm">32</div>
                <div class="font-medium text-sm">33</div>
                <div class="font-medium text-sm">34</div>
                <div class="font-medium text-sm">35</div>
                <div class="font-medium text-sm">36</div>
                <div class="font-medium text-sm">37</div>
                <div class="font-medium text-sm">38</div>
            </div>

            <div class="flex flex-row mt-2 justify-between">
                <div class="flex flex-col w-1/5">
                    <p class="text-sm font-medium mb-2">Yes</p>
                    <p class="text-sm font-medium">No</p>
                </div>

                <div>
                    <div class="mb-2">
                        <input type="radio" name="tooth_31" class="w-4 h-4" v-model="tooth31" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_31" class="w-4 h-4" v-model="tooth31" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>

                <div>
                    <div class="mb-2">
                        <input type="radio" name="tooth_32" class="w-4 h-4" v-model="tooth32" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_32" class="w-4 h-4" v-model="tooth32" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>

                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_33" class="w-4 h-4" v-model="tooth33" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_33" class="w-4 h-4" v-model="tooth33" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>
                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_34" class="w-4 h-4" v-model="tooth34" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_34" class="w-4 h-4" v-model="tooth34" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>
                <div class="flex-col">
                    <div class=" mb-2">
                        <input type="radio" name="tooth_35" class="w-4 h-4" v-model="tooth35" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_35" class="w-4 h-4" v-model="tooth35" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>

                <div class="flex-col">
                    <div class=" mb-2">
                        <input type="radio" name="tooth_36" class="w-4 h-4" v-model="tooth36" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_36" class="w-4 h-4" v-model="tooth36" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>

                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_37" class="w-4 h-4" v-model="tooth37" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_37" class="w-4 h-4" v-model="tooth37" :value="false"
                            :disabled="!isEditing" />
                    </div>
                </div>
                <div class="flex-col">
                    <div class="mb-2">
                        <input type="radio" name="tooth_38" class="w-4 h-4" v-model="tooth38" :value="true"
                            :disabled="!isEditing" />
                    </div>
                    <div>
                        <input type="radio" name="tooth_38" class="w-4 h-4" v-model="tooth38" :value="false"
                            :disabled="!isEditing" />
                    </div>
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
import axios, { AxiosError, type AxiosResponse } from 'axios'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import type Patient from '@/types/Patient'
import { BaseURL } from '@/main'
import type Dental from '@/types/Dental'
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
                const dental = this.patientData.dental
                if (!dental) {
                    this.cleanTeethFreq = null
                    this.sugarConsumeFreq = null
                    this.pastYearDecay = null
                    this.brushTeethPain = null
                    this.drinkOtherWater = null
                    this.dentalNotes = null
                    this.referralNeeded = null
                    this.referralLoc = null
                    this.tooth11 = null
                    this.tooth12 = null
                    this.tooth13 = null
                    this.tooth14 = null
                    this.tooth15 = null
                    this.tooth16 = null
                    this.tooth17 = null
                    this.tooth18 = null
                    this.tooth21 = null
                    this.tooth22 = null
                    this.tooth23 = null
                    this.tooth24 = null
                    this.tooth25 = null
                    this.tooth26 = null
                    this.tooth27 = null
                    this.tooth28 = null
                    this.tooth31 = null
                    this.tooth32 = null
                    this.tooth33 = null
                    this.tooth34 = null
                    this.tooth35 = null
                    this.tooth36 = null
                    this.tooth37 = null
                    this.tooth38 = null
                    this.tooth41 = null
                    this.tooth42 = null
                    this.tooth43 = null
                    this.tooth44 = null
                    this.tooth45 = null
                    this.tooth46 = null
                    this.tooth47 = null
                    this.tooth48 = null
                } else {
                    this.cleanTeethFreq = dental.cleanTeethFreq
                    this.sugarConsumeFreq = dental.sugarConsumeFreq
                    this.pastYearDecay = dental.pastYearDecay
                    this.brushTeethPain = dental.brushTeethPain
                    this.drinkOtherWater = dental.drinkOtherWater
                    this.dentalNotes = dental.dentalNotes
                    this.referralNeeded = dental.referralNeeded
                    this.referralLoc = dental.referralLoc
                    this.tooth11 = dental.tooth11
                    this.tooth12 = dental.tooth12
                    this.tooth13 = dental.tooth13
                    this.tooth14 = dental.tooth14
                    this.tooth15 = dental.tooth15
                    this.tooth16 = dental.tooth16
                    this.tooth17 = dental.tooth17
                    this.tooth18 = dental.tooth18
                    this.tooth21 = dental.tooth21
                    this.tooth22 = dental.tooth22
                    this.tooth23 = dental.tooth23
                    this.tooth24 = dental.tooth24
                    this.tooth25 = dental.tooth25
                    this.tooth26 = dental.tooth26
                    this.tooth27 = dental.tooth27
                    this.tooth28 = dental.tooth28
                    this.tooth31 = dental.tooth31
                    this.tooth32 = dental.tooth32
                    this.tooth33 = dental.tooth33
                    this.tooth34 = dental.tooth34
                    this.tooth35 = dental.tooth35
                    this.tooth36 = dental.tooth36
                    this.tooth37 = dental.tooth37
                    this.tooth38 = dental.tooth38
                    this.tooth41 = dental.tooth41
                    this.tooth42 = dental.tooth42
                    this.tooth43 = dental.tooth43
                    this.tooth44 = dental.tooth44
                    this.tooth45 = dental.tooth45
                    this.tooth46 = dental.tooth46
                    this.tooth47 = dental.tooth47
                    this.tooth48 = dental.tooth48
                }
            }
        },
    },
    created() {
        if (!this.isAdd) {
            const dental = this.patientData.dental
            if (!dental) return
            this.cleanTeethFreq = dental.cleanTeethFreq
            this.sugarConsumeFreq = dental.sugarConsumeFreq
            this.pastYearDecay = dental.pastYearDecay
            this.brushTeethPain = dental.brushTeethPain
            this.drinkOtherWater = dental.drinkOtherWater
            this.dentalNotes = dental.dentalNotes
            this.referralNeeded = dental.referralNeeded
            this.referralLoc = dental.referralLoc
            this.tooth11 = dental.tooth11
            this.tooth12 = dental.tooth12
            this.tooth13 = dental.tooth13
            this.tooth14 = dental.tooth14
            this.tooth15 = dental.tooth15
            this.tooth16 = dental.tooth16
            this.tooth17 = dental.tooth17
            this.tooth18 = dental.tooth18
            this.tooth21 = dental.tooth21
            this.tooth22 = dental.tooth22
            this.tooth23 = dental.tooth23
            this.tooth24 = dental.tooth24
            this.tooth25 = dental.tooth25
            this.tooth26 = dental.tooth26
            this.tooth27 = dental.tooth27
            this.tooth28 = dental.tooth28
            this.tooth31 = dental.tooth31
            this.tooth32 = dental.tooth32
            this.tooth33 = dental.tooth33
            this.tooth34 = dental.tooth34
            this.tooth35 = dental.tooth35
            this.tooth36 = dental.tooth36
            this.tooth37 = dental.tooth37
            this.tooth38 = dental.tooth38
            this.tooth41 = dental.tooth41
            this.tooth42 = dental.tooth42
            this.tooth43 = dental.tooth43
            this.tooth44 = dental.tooth44
            this.tooth45 = dental.tooth45
            this.tooth46 = dental.tooth46
            this.tooth47 = dental.tooth47
            this.tooth48 = dental.tooth48
        }
    },
    data() {
        return {
            cleanTeethFreq: null as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | null,
            sugarConsumeFreq: null as 0 | 1 | 2 | 3 | 4 | 5 | 6 | null,
            pastYearDecay: null as boolean | null,
            brushTeethPain: null as boolean | null,
            drinkOtherWater: null as boolean | null,
            dentalNotes: '' as string | null,
            referralNeeded: null as boolean | null,
            referralLoc: '' as string | null,
            tooth11: null as boolean | null,
            tooth12: null as boolean | null,
            tooth13: null as boolean | null,
            tooth14: null as boolean | null,
            tooth15: null as boolean | null,
            tooth16: null as boolean | null,
            tooth17: null as boolean | null,
            tooth18: null as boolean | null,
            tooth21: null as boolean | null,
            tooth22: null as boolean | null,
            tooth23: null as boolean | null,
            tooth24: null as boolean | null,
            tooth25: null as boolean | null,
            tooth26: null as boolean | null,
            tooth27: null as boolean | null,
            tooth28: null as boolean | null,
            tooth31: null as boolean | null,
            tooth32: null as boolean | null,
            tooth33: null as boolean | null,
            tooth34: null as boolean | null,
            tooth35: null as boolean | null,
            tooth36: null as boolean | null,
            tooth37: null as boolean | null,
            tooth38: null as boolean | null,
            tooth41: null as boolean | null,
            tooth42: null as boolean | null,
            tooth43: null as boolean | null,
            tooth44: null as boolean | null,
            tooth45: null as boolean | null,
            tooth46: null as boolean | null,
            tooth47: null as boolean | null,
            tooth48: null as boolean | null,
            isEditing: false,
        }
    },
    methods: {
        async submitData() {
            const toast = useToast()
            try {
                if (this.pastYearDecay === null || this.brushTeethPain === null || this.drinkOtherWater === null || this.referralNeeded === null) {
                    toast.error('Please fill in all required fields.')
                    return
                }
                if (this.cleanTeethFreq === null || this.sugarConsumeFreq === null) {
                    toast.error('Please fill in all required fields.')
                    return
                }
                const dental: Dental = {
                    // need to define outside to catch missing fields
                    cleanTeethFreq: this.cleanTeethFreq,
                    sugarConsumeFreq: this.sugarConsumeFreq,
                    pastYearDecay: this.pastYearDecay,
                    brushTeethPain: this.brushTeethPain,
                    drinkOtherWater: this.drinkOtherWater,
                    dentalNotes: this.dentalNotes,
                    referralNeeded: this.referralNeeded,
                    referralLoc: this.referralLoc,
                    tooth11: this.tooth11,
                    tooth12: this.tooth12,
                    tooth13: this.tooth13,
                    tooth14: this.tooth14,
                    tooth15: this.tooth15,
                    tooth16: this.tooth16,
                    tooth17: this.tooth17,
                    tooth18: this.tooth18,
                    tooth21: this.tooth21,
                    tooth22: this.tooth22,
                    tooth23: this.tooth23,
                    tooth24: this.tooth24,
                    tooth25: this.tooth25,
                    tooth26: this.tooth26,
                    tooth27: this.tooth27,
                    tooth28: this.tooth28,
                    tooth31: this.tooth31,
                    tooth32: this.tooth32,
                    tooth33: this.tooth33,
                    tooth34: this.tooth34,
                    tooth35: this.tooth35,
                    tooth36: this.tooth36,
                    tooth37: this.tooth37,
                    tooth38: this.tooth38,
                    tooth41: this.tooth41,
                    tooth42: this.tooth42,
                    tooth43: this.tooth43,
                    tooth44: this.tooth44,
                    tooth45: this.tooth45,
                    tooth46: this.tooth46,
                    tooth47: this.tooth47,
                    tooth48: this.tooth48
                }
                await axios
                    .patch(`${BaseURL}/patient/${this.patientId}/${this.patientVid}`, {
                        dental: dental
                    })
                    .then((response) => {
                        console.log(response)
                        console.log('Dental posted successfully!')
                        this.toggleEdit() // to switch back to read-only mode
                        toast.success('Dental saved successfully!')
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