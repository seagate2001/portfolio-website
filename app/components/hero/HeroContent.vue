<template>
  <div class="relative z-10 max-w-6xl mx-auto min-h-screen flex flex-col justify-center pb-10">

    <div class="w-full">
      <div class="flex flex-col mb-10">
        <h1 class="text-[48pt] 2xl:text-[150px] font-bold text-secondary leading-none">
          Front-end
        </h1>
        <h1 class="text-[48pt] 2xl:text-[150px] text-right font-bold text-secondary leading-none">
          Developer
        </h1>
      </div>

      <h1 class="font-secondary text-[18px] md:text-[36px] text-center">
        Hi, I'm Tom and I love creating.
      </h1>

      <div class="flex justify-between mx-auto w-4/5 md:w-1/2 mt-10">
        <BaseGhostButton href="https://github.com/seagate2001" text="GitHub" img="/icons/github-white.png"/>
        <BaseGhostButton href="https://www.linkedin.com/in/tom-kellens-920950294/" text="LinkedIn" img="/icons/linkedin-white.png"/>
      </div>
    </div>

    <div class="md:hidden mt-32 flex justify-center">
      <NuxtLink to="/about">
        <BaseButton text="Get to know me" :f-button="false" padding-x="px-16" />
      </NuxtLink>
    </div>

    <div
      class="hidden pointer-events-none md:flex fixed bottom-20 left-10
      items-center space-x-4 rotate-90 origin-right
      uppercase tracking-[0.2em] text-xs font-bold text-secondary/60"
    >
      <span>Scroll Down</span>
      <div class="w-12 h-[1px] bg-secondary/60"></div>
    </div>

  </div>
</template>