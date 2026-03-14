<template>
    <nav class="grid grid-cols-2 md:grid-cols-3 relative z-30 items-center mt-6">
        <div class="flex justify-start">
            <NuxtLink to="/" class="relative z-50 text-xl font-bold">
                <NuxtImg src="/logoIcon.png" alt="logo" width="35px" />
            </NuxtLink>
        </div>

        <ul 
            :class="isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
            class="fixed z-40 bg-primary/80 backdrop-blur-md md:bg-inherit md:backdrop-blur-none inset-0 flex flex-col items-center justify-center gap-16 text-2xl transition-opacity duration-500 ease-in-out 
                    md:relative md:inset-auto md:flex-row md:gap-24 md:opacity-100 md:pointer-events-auto md:flex md:justify-center"
        >
            <li v-for="link in navLinks"
            :key="link.name"
            @click="isMenuOpen = false"
            class="font-semibold text-[48px] md:text-[18px]"
            >
                <NuxtLink
                    :to="link.path"
                    class="relative group inline-block"
                >
                    {{ link.name }}

                    <span class="hidden md:block absolute left-0 -bottom-1 w-full h-[2px] overflow-hidden">
                    <span
                        class="block h-full w-full bg-white
                            -translate-x-full
                            transition-transform duration-300 ease-out
                            group-hover:translate-x-0"
                    ></span>
                    </span>

                </NuxtLink>
            </li>
            <li class="absolute bottom-24 md:hidden"><BaseButton text="My Resume"/></li>
        </ul>

        <div class="flex justify-end items-center">
            <div class="hidden md:block">
                <BaseButton text="My Resume"/>
            </div>

            <button @click="toggleMenu" class="fixed top-6 right-6 z-50 md:hidden flex flex-col justify-center items-center 
           w-12 h-12 rounded-xl bg-primary/60 backdrop-blur-md">
                <span :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''" class="block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out mb-1.5"></span>
                <span :class="isMenuOpen ? 'opacity-0' : ''" class="block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out mb-1.5"></span>
                <span :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''" class="block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"></span>
            </button>
        </div>
    </nav>
</template>

<script setup lang="ts">
    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/about' },
        { name: 'Contact', path: '/about' }
    ]

    const isMenuOpen = ref<boolean>(false);

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    }

    // Scroll lock
    watch(isMenuOpen, (open) => {
        document.body.classList.toggle("overflow-hidden", open)
    })
</script>