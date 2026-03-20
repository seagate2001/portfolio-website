<template>
  <nav class="grid grid-cols-2 md:grid-cols-3 relative z-30 items-center mt-6">
    <div class="flex justify-start">
      <NuxtLink to="/" class="relative z-50 text-xl font-bold">
        <NuxtImg src="/logoIcon.png" alt="logo" width="35px" />
      </NuxtLink>
    </div>

    <ul 
      ref="menuOverlay"
      :class="isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      class="fixed z-40 bg-primary/80 backdrop-blur-md md:bg-inherit md:backdrop-blur-none inset-0 flex flex-col items-center justify-center gap-16 text-2xl transition-opacity duration-500 ease-in-out 
             md:relative md:inset-auto md:flex-row md:gap-24 md:opacity-100 md:pointer-events-auto md:flex md:justify-center"
    >
      <li v-for="link in navLinks"
          :key="link.name"
          ref="navLinkRefs" 
          class="font-semibold text-[48px] md:text-[18px]"
      >
        <button @click="handleNavigate(link.id)"
                class="relative group inline-block text-white"
        >
          {{ link.name }}

          <span class="hidden md:block absolute -bottom-1 w-full border-t-[3px] border-white 
                        transition-transform duration-300 ease-out origin-left
                        scale-x-0 group-hover:scale-x-100">
          </span>
        </button>
      </li>
      <li class="absolute bottom-24 md:hidden"><BaseButton text="My Resume"/></li>
    </ul>

    <div class="flex justify-end items-center">
      <div class="hidden md:block">
        <BaseButton text="My Resume"/>
      </div>

      <button @click="toggleMenu" class="fixed top-6 right-6 z-50 md:hidden flex flex-col justify-center items-center w-12 h-12 rounded-xl bg-primary/60 backdrop-blur-md">
        <span :class="isMenuOpen ? 'rotate-45 translate-y-[8px] h-[1.5px]' : 'h-[2px]'" 
              class="block w-6 bg-white transition-all duration-300 ease-in-out"></span>
        
        <span :class="isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'" 
              class="block w-6 h-[2px] bg-white transition-all duration-300 ease-in-out my-1.5"></span>
        
        <span :class="isMenuOpen ? '-rotate-45 -translate-y-[8px] h-[1.5px]' : 'h-[2px]'" 
              class="block w-6 bg-white transition-all duration-300 ease-in-out"></span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const gsap = useGSAP();
const { scrollToSection } = useScroll();

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' }
]

const isMenuOpen = ref<boolean>(false);
const navLinkRefs = ref<HTMLElement[]>([]);
const menuOverlay = ref<HTMLElement | null>(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

const handleNavigate = (id: string) => {
  isMenuOpen.value = false;
  scrollToSection(id);
}

// Watcher for GSAP Stagger
watch(isMenuOpen, (isOpen) => {
  // Scroll lock
  document.body.classList.toggle("overflow-hidden", isOpen);

  // Hamburger menu items stagger animation
  if (isOpen) {
    gsap.fromTo(navLinkRefs.value, 
      { opacity: 0, y: 30, scale: 0.9 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)", delay: 0.2 }
    );
  } else {
    gsap.to(navLinkRefs.value, { opacity: 0, y: 20, duration: 0.3, stagger: 0.05, ease: "power2.in", clearProps: "all" });
  }
});
</script>