<template>
    <div class="flex flex-col lg:flex-row gap-12 items-end">
        
        <div class="lg:w-3/5">
            <BaseTitle title="About"/>
            <h2 class="font-secondary text-[20px] lg:text-[36px]">I'm Tom Kellens. <span class="whitespace-nowrap">A {Problem solver}</span></h2>
            
            <div class="mt-10 lg:hidden">
                <NuxtImg class="z-10 w-3/4 md:w-1/2 shadow-[15px_15px_0px_0px_rgba(217,217,217,0.5)]" src="/TomKellensProfielFotoCV.png" alt="Profile Picture" />
            </div>

            <p class="text-[20px] my-16">A Developer fueled by curiosity and fresh ideas. Recently graduated and ready to transform my love for code into responsive, user-friendly digital solutions.</p>
            
            <h3 class="font-secondary font-bold text-[26px] md:text-[30px]">What drives me?</h3>
            <p class="text-[20px] my-12">My passion lies in continuous growth and collaborative innovation. I love diving into new technologies and teaming up with others to refine ideas into high-quality solutions that put the user experience first.</p>
            
            <h3 class="font-secondary font-bold text-[26px] md:text-[30px]">Skills</h3>
        </div>

        <div class="hidden lg:w-2/5 lg:flex lg:flex-col lg:items-end">
            <div class="max-w-[400px] flex flex-col gap-20">
                <NuxtImg 
                    class="z-10 w-[calc(100%-20px)] shadow-[20px_20px_0px_0px_rgba(217,217,217,0.5)]" 
                    src="/TomKellensProfielFotoCV.png" 
                    alt="Profile Picture" 
                />
                
                <BaseButton @click="downloadFile('TomKellensCV2026English.pdf', 'TomKellensCV.pdf')" text="My Resume" width="w-full" padding-x="px-0"/>
            </div>
        </div>
    </div>
    <div class="mt-12 mb-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <SkillGroup title="Frontend" :skills="frontendSkills" />
        <SkillGroup title="Backend" :skills="backendSkills" />
        <SkillGroup title="Design & Tools" :skills="designSkills" />
    </div>
    <BaseButton @click="downloadFile('TomKellensCV2026English.pdf', 'TomKellensCV.pdf')" class="lg:hidden mb-16" text="My Resume" width="w-full" padding-x="px-0" />
</template>

<script setup lang="ts">
    const { downloadFile } = useDownload();

    const frontendSkills = [
        { name: 'HTML', icon: 'html5-white.png' },
        { name: 'CSS', icon: 'css3-white.png' },
        { name: 'JavaScript', icon: 'js-white.png' },
        { name: 'TypeScript', icon: 'typescript-white.png' },
        { name: 'Vue.js', icon: 'vuejs-white.png' },
        { name: 'React.js', icon: 'react-white.png' },
        { name: 'Tailwind CSS', icon: 'tailwind-white.png' },
    ];

    const backendSkills = [
        { name: 'php', icon: 'php-white.png' },
        { name: 'Laravel', icon: 'laravel-white.png' },
    ];

    const designSkills = [
        { name: 'Figma', icon: 'figma-white.png' },
        { name: 'Blender', icon: 'blender-white.png' },
        { name: 'Photoshop', icon: 'photoshop-white.png' },
        { name: 'Illustrator', icon: 'illustrator-white.png' },
        { name: 'GitHub', icon: 'github-white.png' },
        { name: 'Docker', icon: 'docker-white.png' },
    ];
</script>