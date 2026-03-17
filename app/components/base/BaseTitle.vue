<template>
    <div class="flex flex-col w-fit mb-10">
        <h1 class="text-[48pt] lg:text-[150px] font-semibold inline-block">{{ title }}</h1>
        <span class="block w-3/4 h-[2px] bg-white"></span>
        <span class="block mt-2 w-1/2 h-[2px] bg-white"></span>
    </div>
</template>

<script setup lang="ts">
    const props = withDefaults(defineProps<{
        title?: string

    }>(),{
        title: "Title"
    }
    )
</script>