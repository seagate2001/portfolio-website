<template>
    <div class="flex items-center">
        <NuxtLink :href="href" target="_blank" class="text-[18px] bg-transparent hover:bg-black transition-all duration-500 ease-in-out rounded-full h-12 px-3 flex items-center"><NuxtImg class="mr-2" :src="`/icons/${img}`" alt="social-button" width="32"/>{{ text }}</NuxtLink>
    </div>
</template>

<script setup lang="ts">
    const props = withDefaults(defineProps<{
        text?: string,
        img?: string,
        href?: string,
    }>(),{
        text: 'Default text',
        img: 'github-white.png',
    }
    );
</script>