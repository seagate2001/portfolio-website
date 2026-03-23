<template>
  <div 
    class="w-full flex mb-16 md:mb-24"
    :class="index % 2 !== 0 ? 'justify-end' : 'justify-start'"
  >
    <div 
      class="relative w-full md:w-[48%] aspect-[4/3] lg:aspect-[3/2] border border-zinc-800 overflow-hidden cursor-pointer group"
      @click="toggleCard"
    >
      <div 
        class="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        :style="{ backgroundImage: `url(/projects/${image})` }"
      ></div>

      <div class="absolute inset-0 z-10 bg-primary/70"></div>

      <div 
        class="absolute inset-0 z-30 flex flex-col items-start p-5 md:p-8 text-black transition-opacity duration-1000"
        :class="isOpen ? 'opacity-100 delay-1000' : 'opacity-0 pointer-events-none'"
      >
        <h4 class="w-full text-2xl md:text-3xl font-bold mb-2 md:mb-4 leading-tight">
          {{ title }}
        </h4>

        <div 
          class="w-full flex-1 overflow-y-auto pr-2 custom-scrollbar" 
          
        >
          <p v-html="description" class="md:text-xl" @click.stop></p>
        </div>

        <div class="flex flex-wrap gap-2 md:gap-4 mt-4">
          <div 
            v-for="tech in technologies" 
            :key="tech.name" 
            class="flex items-center gap-1.5 md:gap-2 bg-[#1D1D1D] px-3 py-1.5 md:px-4 md:py-2 rounded-full origin-left"
          >
            <img :src="`/icons/${tech.icon}`" :alt="tech.alt" class="w-4 h-4 md:w-6 md:h-6" />
            <span class="text-sm font-medium text-secondary">{{ tech.name }}</span>
          </div>
        </div>
      </div>

      <svg class="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path :d="pathData" fill="white" />
      </svg>

      <div 
        class="absolute inset-0 z-30 flex flex-col items-end h-full justify-end p-6 md:p-8 text-white transition-opacity duration-1000" 
        :class="isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-1000'"
      >
        <h4 class="text-2xl md:text-3xl font-bold mb-2 md:mb-4">{{ title }}</h4>
        <button class="mt-2 md:mt-6 px-4 py-2 md:px-6 md:py-2 border-2 border-white text-xs md:text-base font-bold uppercase hover:bg-white hover:text-black transition-colors">
          See more
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Technology {
  name: string;
  icon: string;
  alt: string;
}

const props = defineProps<{
  title: string,
  description: string,
  index: number,
  image?: string,
  technologies: Technology[],
}>();

const isOpen = ref(false);
const numPoints = 8;
const points = ref(Array(numPoints).fill(100));

const pathData = computed(() => {
  let d = `M 0 ${points.value[0]} C`;
  for (let i = 0; i < numPoints - 1; i++) {
    const p = ((i + 1) / (numPoints - 1)) * 100;
    const cp = p - (1 / (numPoints - 1) * 100) / 2;
    d += ` ${cp} ${points.value[i]} ${cp} ${points.value[i + 1]} ${p} ${points.value[i + 1]}`;
  }
  d += ` V 100 H 0 Z`;
  return d;
});

const toggleCard = () => {
  isOpen.value = !isOpen.value;
  
  points.value.forEach((_, i) => {
    useGSAP().to(points.value, {
      [i]: isOpen.value ? 0 : 100,
      duration: 1.2,
      ease: "power4.inOut",
      delay: i * 0.05 + Math.random() * 0.1
    });
  });
};
</script>

<style scoped>
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  :deep(strong) {
    font-weight: 700;
  }
</style>