<template>
  <div ref="container" class="flex flex-col w-fit mb-10 overflow-hidden">
    <div class="mask-container overflow-hidden">
      <h1 ref="titleText" class="text-[48pt] lg:text-[150px] font-semibold inline-block translate-y-full">
        {{ title }}
      </h1>
    </div>

    <span ref="line1" class="block w-3/4 border-t-[3px] border-white scale-x-0 origin-left"></span>
    <span ref="line2" class="block mt-2 w-1/2 border-t-[3px] border-white scale-x-0 origin-left"></span>
  </div>
</template>

<script setup lang="ts">
    const props = withDefaults(defineProps<{
    title?: string
    }>(), {
    title: "Title"
    })

    const gsap = useGSAP();
    const container = ref(null);
    const titleText = ref(null);
    const line1 = ref(null);
    const line2 = ref(null);

    onMounted(() => {
        
        // Title and line animation
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: container.value,
            start: "top 85%",
            toggleActions: "play none none none",
            }
        });

        tl.to(titleText.value, {
            y: 0,
            duration: 1.2,
            ease: "power3.out",
        });

        tl.to([line1.value, line2.value], {
            scaleX: 1,
            duration: 1.0,
            ease: "expo.out",
            stagger: 0.2,
        }, "-=0.8");
    });
</script>