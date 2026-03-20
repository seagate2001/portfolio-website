<template>
  <section class="mb-12">
    <div class="flex items-baseline gap-4 mb-6">
      <h2 class="text-2xl font-bold text-white">{{ title }}</h2>
      <div class="border-t-[3px] flex-1 bg-secondary"></div>
    </div>

    <div class="flex flex-wrap gap-4">
      <div 
      v-for="skill in skills" 
      :key="skill.name"
      class="flex items-center gap-3 bg-[#1D1D1D] px-4 py-2 rounded-md"
      >
        <img :src="`/icons/${skill.icon}`" :alt="skill.name" class="w-5 h-5" />
        <span class="font-medium">{{ skill.name }}</span>
      </div>
    </div>
  </section>

</template>
      <script setup lang="ts">
      interface Skill {
        name: string;
        icon: string;
      }
      
      const props = defineProps<{
        title: string;
        skills: Skill[];
      }>();
      </script>