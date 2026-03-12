<template>
  <div class="absolute top-0 left-0 w-full h-screen pointer-events-none">
    <span
      v-for="(char, index) in characters"
      :key="index"
      class="floating-char"
      :class="[char.position, char.color]"
      :style="{ animationDelay: char.delay }"
    >
      {{ char.symbol }}
    </span>
  </div>
</template>

<script setup lang="ts">
    const characters = [
    {
        symbol: '{',
        position: 'top-[10%] md:top-[5%] left-[10%] -rotate-12',
        color: 'text-pink-500',
        delay: '0s'
    },
    {
        symbol: ']',
        position: 'top-[20%] md:top-[25%] right-[10%] rotate-12',
        color: 'text-orange-400',
        delay: '-2s'
    },
    {
        symbol: '<',
        position: 'bottom-[35%] md:bottom-[35%] left-[5%] -rotate-45',
        color: 'text-green-400',
        delay: '-4s'
    },
    {
        symbol: ';',
        position: 'bottom-[30%] md:bottom-[15%] right-[5%] rotate-6',
        color: 'text-purple-400',
        delay: '-6s'
    }
    ];
</script>

<style scoped>
    .floating-char {
        @apply absolute text-6xl md:text-8xl font-mono opacity-40 pointer-events-none select-none;
        animation: float 6s ease-in-out infinite;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
        50% { transform: translateY(-20px) rotate(calc(var(--tw-rotate) + 5deg)); }
    }
</style>