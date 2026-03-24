<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
  import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'

  onBeforeMount(() => {
    useGSAP().registerPlugin(ScrambleTextPlugin)
  })
</script>
