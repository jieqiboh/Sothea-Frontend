<template>
  <div>
    <div :class="currVisit ? 'bg-[#3F51B5] text-white rounded-md' : 'bg-[#c3ccff] text-[#3F51B5] rounded-md'">
      <button class="flex items-center align-center justify-between w-full rounded-md px-4 py-2 font-normal text-sm mb-2
        mt-2" @click="handleClick">
        <span>{{ formattedDate }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// Record Section takes vid, id and date as props, date is just used for displaying
export default defineComponent({
  name: 'RecordSection',
  props: {
    id: String,
    vid: String,
    currVisit: Boolean,
    date: String
  },
  data() {
    return {
      dropdownOpen: false
    }
  },
  computed: {
    formattedDate(): string | null {
      if (!this.date) return null;
      const date = new Date(this.date);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns month index starting from 0
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    },
    handleClick() {
      this.$router.push({ name: 'patient', params: { id: this.id, vid: this.vid } });
      this.$emit('close')
    }
  }
})
</script>