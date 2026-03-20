<template>
  <div class="relative z-10 max-w-6xl mx-auto min-h-screen flex flex-col justify-center pb-10">

    <div class="w-full">
      <div class="flex flex-col mb-10">
        <h1 ref="titleFront" class="hero-title text-[48pt] md:text-[100px] lg:text-[150px] font-bold text-secondary leading-none -translate-x-24 opacity-0">
          Front-end
        </h1>
        <h1 ref="titleDev" class="hero-title text-[48pt] md:text-[100px] lg:text-[150px] text-right font-bold text-secondary leading-none translate-x-24 opacity-0">
          Developer
        </h1>
      </div>

      <div class="flex justify-center items-baseline font-secondary text-[18px] md:text-[36px] text-center min-h-[2em]">
        <span ref="typeWriterText" id="typewriter-text"></span>
        <span id="cursor" class="select-none text-[22px] md:text-[60px] leading-none ml-1">_</span>
      </div>

      <div class="flex justify-between mx-auto w-4/5 md:w-1/2 mt-10">
        <BaseGhostButton href="https://github.com/seagate2001" text="GitHub" img="github-white.png"/>
        <BaseGhostButton href="https://www.linkedin.com/in/tom-kellens-920950294/" text="LinkedIn" img="linkedin-white.png"/>
      </div>
    </div>

    <BaseButton @click="scrollToSection('about')" class="lg:hidden mt-32 flex justify-center" text="Get to know me" :f-button="false" padding-x="px-16" />

    <div
      ref="scrollIndicator"
      class="hidden lg:flex fixed bottom-10 left-10 flex-col items-center gap-3 text-secondary/70"
    >
      <div class="w-6 h-10 border-2 border-secondary/70 rounded-full flex justify-center">
        <div class="scroll-dot w-1 h-2 bg-secondary/70  rounded-full mt-2"></div>
      </div>
      <span class="uppercase tracking-[0.2em] text-xs font-bold">Explore</span>
    </div>

  </div>
</template>

<script setup lang="ts">

  const { scrollToSection } = useScroll();

  const gsap = useGSAP();

  const titleFront = ref(null);
  const titleDev = ref(null);
  const typeWriterText = ref(null);
  const scrollIndicator = ref(null);


  onMounted(() => {

    // Front-end title from left
    gsap.to(titleFront.value, {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: "power4.out"
    });

    // Developer title from right (with delay)
    gsap.to(titleDev.value, {
      opacity: 1,
      x: 0,
      duration: 1.8,
      delay: 0.3,
      ease: "power4.out"
    });

    // Typewriter effect
    gsap.to('#cursor', {opacity: 0, repeat: -1, yoyo: true, duration: 0.5, ease: 'power2.inOut'});
    gsap.to(typeWriterText.value, {duration: 2.5, text: "Hi, I'm Tom and I love creating.", ease: "none", delay: 2});

    // Scroll Down text dissapear
    gsap.to(scrollIndicator.value, {
      opacity: 0,
      y:100,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "400px top",
        scrub: true,
      }
    });

  });

</script>

<style scoped>
  @keyframes scrollPulse {
    0%, 100% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
  }

  .scroll-dot {
    animation: scrollPulse 2s ease-in-out infinite;
  }
</style>