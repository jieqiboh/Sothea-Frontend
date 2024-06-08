<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  router.push('/signin')
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
