<template>
  <div class="flex items-center justify-center">
    <div class="flex flex-col rounded-lg w-3/4 max-h-fit border border-gray-300 p-8">
      <h1>Past Medical history</h1>
      <br />

      <div class="flex flex-col">
        <!-- Header -->
        <div class="flex flex-row">
          <div class="font-medium text-md w-1/3">Condition:</div>
          <div class="font-medium text-md w-1/6">Yes</div>
          <div class="font-medium text-md w-1/6">No</div>
        </div>
      </div>

      <!-- Tubercolosis -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal text-sm w-1/3">Tubercolosis</div>

          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="tubercolosis" class="w-4 h-4" />
            </label>
          </div>
          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="tubercolosis" class="w-4 h-4" />
            </label>
          </div>
        </div>
      </div>

      <!-- Diabetes -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal text-sm w-1/3">Diabetes</div>

          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="diabetes" class="w-4 h-4" />
            </label>
          </div>
          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="diabetes" class="w-4 h-4" />
            </label>
          </div>
        </div>
      </div>

      <!-- Hypertension -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal text-sm w-1/3">Hypertension</div>

          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="hypertension" class="w-4 h-4" />
            </label>
          </div>
          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="hypertension" class="w-4 h-4" />
            </label>
          </div>
        </div>
      </div>

      <!-- Hyperlipidemia -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal text-sm w-1/3">Hyperlipidemia</div>

          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="hyperlipidemia" class="w-4 h-4" />
            </label>
          </div>
          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="hyperlipidemia" class="w-4 h-4" />
            </label>
          </div>
        </div>
      </div>

      <!-- Chronic Joint Pains -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal text-sm w-1/3">Chronic Joint Pains</div>

          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="chronic-joint-pains" class="w-4 h-4" />
            </label>
          </div>
          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="chronic-joint-pains" class="w-4 h-4" />
            </label>
          </div>
        </div>
      </div>

      <!-- Chronic Muscle Aches -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal text-sm w-1/3">Chronic Muscle Aches</div>

          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="chronic-muscle-aches" class="w-4 h-4" />
            </label>
          </div>
          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="chronic-muscle-aches" class="w-4 h-4" />
            </label>
          </div>
        </div>
      </div>

      <!-- STD -->
      <div class="flex flex-col mt-4">
        <div class="flex flex-row">
          <div class="font-normal text-sm w-1/3">Sexually Transmitted Disease (STD)</div>

          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="std" class="w-4 h-4" />
            </label>
          </div>
          <div class="flex items-center w-1/6">
            <label class="inline-flex items-center">
              <input type="radio" name="std" class="w-4 h-4" />
            </label>
          </div>
        </div>
      </div>

      <!-- Remarks -->
      <div class="mt-4">
        <label for="" class="mb-2 block text-sm font-normal text-dark"
          >If Y to STD, specify:
        </label>
        <textarea
          rows="2"
          placeholder="Remarks"
          class="w-full bg-transparent rounded-md border border-stroke p-3 font-normal text-sm text-dark-4 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
        ></textarea>
      </div>

      <!-- Others -->
      <div class="mt-2">
        <label for="" class="mb-2 block text-sm font-normal text-dark">Others: </label>
        <textarea
          rows="2"
          placeholder="Remarks"
          class="w-full bg-transparent rounded-md border border-stroke p-3 font-normal text-sm text-dark-4 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
        ></textarea>
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

<style scoped>
h1 {
  font-size: 1.25rem;
  font-weight: 500;
}
</style>
