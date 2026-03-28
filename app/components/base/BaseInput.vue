<template>
  <div class="relative w-full group">
    <component 
      :is="type === 'textarea' ? 'textarea' : 'input'"
      :id="id"
      :type="type"
      placeholder=" "
      :required="required"
      class="peer border-b w-full border-gray-300 py-1 focus:border-b-2 transition-colors focus:outline-none bg-inherit"
      :class="type === 'textarea' ? 'h-20' : ''"
    />
    <label 
      :for="id" 
      class="absolute left-0 top-1 cursor-text transition-all text-secondary 
             peer-placeholder-shown:top-1 peer-placeholder-shown:text-base 
             peer-focus:-top-4 peer-focus:text-xs 
             peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string,
  label: string,
  type?: string,
  required?: boolean
}>();
</script>