<template>
  <section class="overflow-x-hidden">
    <BaseTitle title="Projects" />
    <h3 class="text-[20px] text-secondary w-full lg:w-1/2 my-16">Driven by a passion for learning and a love for clean code. This is a look into my digital journey, furthering my skills one project at a time.</h3>
    <div class="flex flex-col w-full">
      <BaseProjectCard 
        v-for="(project, index) in projects" 
        :key="index" 
        :title="project.title"
        :image="project.image"
        :description="project.description" 
        :technologies="project.technologies"
        :index="index" 
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  { 
    title: 'Movie List App', 
    image: 'PortfolioWebsite.png', 
    description: "My first mobile development project built with <strong>React Native</strong> and <strong>Expo</strong>. This app allows users to <strong>create and manage a personal watchlist</strong> of movies and series, helping them <strong>keep track</strong> of what they've watched through a <strong>clean and intuitive interface</strong>.", 
    technologies: [
      { name: 'React Native', 
        icon: 'react-white.png', 
        alt: 'react-white-icon'
      }, 
      { name: 'TypeScript', 
        icon: 'typescript-white.png', 
        alt: 'typescript-white-icon'
      }
    ]
  },
  { 
    title: 'Portfolio Website', 
    image: 'PortfolioWebsite.png', 
    description: "This is my portfolio website, built to <strong>push the boundaries</strong> of what I've learned so far. It allowed me to explore new technologies such as <strong>GSAP</strong> for <strong>dynamic animations</strong> and <strong>Nuxt.js</strong> to gain experience with <strong>server-side rendering</strong> and <strong>performance optimizations</strong>, all while working within the <strong>Vue.js ecosystem</strong>.", 
    technologies: [
      { 
        name: 'Nuxt.js', 
        icon: 'nuxt-white.png', 
        alt: 'nuxt-white-icon'
      }, 
      {
        name: 'TypeScript', 
        icon: 'typescript-white.png', 
        alt: 'typescript-white-icon'
      },
      {
        name: 'Tailwind', 
        icon: 'tailwind-white.png', 
        alt: 'tailwind-white-icon'
      }
    ]
  },
];
</script>