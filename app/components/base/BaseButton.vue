<template>
    <div :class="['flex items-center', width]">
        <button 
            :type="type"
            @click="$emit('click')"
            :class="[
                'bg-secondary text-primary rounded-full flex items-center justify-center transition-all',
                fontType, fontSize, paddingX, height, width, 
                { 'mr-3': fButton }
            ]"
        >
            {{ text }}
        </button>

        <button 
            v-if="fButton"
            :type="type"
            @click="$emit('click')"
            :class="['bg-secondary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0',
                height
            ]"
        >
            <NuxtImg :src="`/icons/${icon}`" alt="flavor-button-icon" :width="imgSize"></NuxtImg>
        </button>
    </div>
</template>

<script setup lang="ts">
    const emits = defineEmits(['click']);

    const props = withDefaults(defineProps<{
        text?: string,
        fButton?: boolean,
        icon?: string,
        fontType?: string,
        fontSize?: string,
        paddingX?: string,
        width?: string,
        height?: string,
        imgSize?: string,
        type?: "button" | "submit" | "reset",
    }>(), {
        text: 'Default text',
        fButton: true,
        icon: 'download-button-black.png',
        fontType: 'font-medium',
        fontSize: 'text-[18px]',
        paddingX: 'px-4',
        width: 'auto',
        height: 'h-10',
        imgSize: '18',
        type: 'button',
    });
</script>