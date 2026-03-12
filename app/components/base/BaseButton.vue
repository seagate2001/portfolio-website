<template>
    <div class="flex items-center">
        <button :class="[
            'bg-secondary text-primary rounded-full flex items-center transition-all',
            fontType,
            fontSize,
            paddingX,
            height,
            { 'mr-3': fButton }
        ]">
            {{ text }}
        </button>

        <button 
            v-if="fButton" 
            :class="['bg-secondary rounded-full w-10 h-10 flex items-center justify-center',
                height
            ]"
        >
            <NuxtImg :src="`/icons/${icon}`" alt="flavor-button-icon" :width="imgSize"></NuxtImg>
        </button>
    </div>
</template>

<script setup lang="ts">
    const props = withDefaults(defineProps<{
        text?: string,
        fButton?: boolean,
        icon?: string,
        fontType?: string,
        fontSize?: string,
        paddingX?: string,
        height?: string,
        imgSize?: string,
    }>(), {
        text: 'Default text',
        fButton: true,
        icon: 'download-button-black.png',
        fontType: 'font-medium',
        fontSize: 'text-[18px]',
        paddingX: 'px-4',
        height: 'h-10',
        imgSize: '18',
    });
</script>