<template>
  <div class="absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none">
    <span
      v-for="(char, index) in characters"
      :key="index"
      ref="charRefs"
      class="floating-char absolute text-6xl md:text-8xl font-mono opacity-40 select-none"
      :class="[char.position, char.color]"
    >
      {{ char.symbol }}
    </span>
  </div>
</template>

<script setup lang="ts">
    const gsap = useGSAP();
    const charRefs = ref<HTMLElement[]>([]);

    const characters = [
        { symbol: '{', position: 'top-[10%] left-[10%] -rotate-12', color: 'text-pink-500' },
        { symbol: ']', position: 'top-[20%] lg:top-[25%] right-[10%] rotate-12', color: 'text-orange-400' },
        { symbol: '<', position: 'bottom-[35%] left-[5%] -rotate-45', color: 'text-green-400' },
        { symbol: ';', position: 'bottom-[20%] lg:bottom-[15%] right-[5%] rotate-6', color: 'text-purple-400' }
    ];

    onMounted(() => {
        charRefs.value.forEach((el, i) => {

            // Floating characters
            gsap.to(el, {
            yPercent: -20,
            rotation: i % 2 === 0 ? "+=10" : "-=10",
            duration: 3 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.2
            });

            // Parallax effect with mouse movement
            const moveChar = (e: MouseEvent) => {
            const { clientX, clientY } = e;

            const xPos = (clientX / window.innerWidth - 0.5) * (40 + i * 20);
            const yPos = (clientY / window.innerHeight - 0.5) * (40 + i * 20);

            gsap.to(el, {
                x: xPos,
                y: yPos,
                duration: 1.2,
                ease: "power2.out",
                overwrite: "auto"
            });
            };

            window.addEventListener("mousemove", moveChar);

            onUnmounted(() => {
            window.removeEventListener("mousemove", moveChar);
            });
        });
    });
</script>