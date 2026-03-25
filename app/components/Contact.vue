<template>
    <BaseTitle title="Contact" />
    <div>
        <h3 class="text-[18px] text-secondary w-full lg:w-1/2 my-16">
            Ready to kickstart my professional journey and bring some innovative ideas to life. If you're looking for a driven front-end developer with an eye for detail, you've come to the right place. Send me a message and let's get to know each other!
        </h3>
        
        <form name="contact" method="POST" data-netlify="true" class="border-dashed relative border-secondary border p-8 md:p-10 w-full md:w-[75%]">
            <div class="md:w-fit space-y-10">
                <div class="flex flex-col md:flex-row gap-10 md:gap-20 w-full">
                    
                    <div class="relative md:w-[200px] lg:w-[250px] w-full group">
                        <input 
                            required 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder=" " 
                            class="peer border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#5a6a88] transition-colors focus:outline-none bg-inherit"
                        >
                        <label 
                            for="name" 
                            class="absolute left-0 top-1 cursor-text transition-all text-secondary 
                                   peer-placeholder-shown:top-1 peer-placeholder-shown:text-base 
                                   peer-focus:-top-4 peer-focus:text-xs 
                                   peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                        >
                            Name
                        </label>
                    </div>

                    <div class="relative md:w-[200px] lg:w-[250px] w-full group">
                        <input 
                            required 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder=" " 
                            class="peer border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#5a6a88] transition-colors focus:outline-none bg-inherit"
                        >
                        <label 
                            for="email" 
                            class="absolute left-0 top-1 cursor-text transition-all text-secondary 
                                   peer-placeholder-shown:top-1 peer-placeholder-shown:text-base 
                                   peer-focus:-top-4 peer-focus:text-xs 
                                   peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                        >
                            Email
                        </label>
                    </div>
                </div>

                <div class="relative w-full group">
                    <input required type="text" id="subject" placeholder=" " class="peer border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#5a6a88] transition-colors focus:outline-none bg-inherit">
                    <label for="subject" class="absolute left-0 top-1 cursor-text transition-all text-secondary peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Subject</label>
                </div>

                <div class="relative w-full group">
                    <textarea required id="message" placeholder=" " class="peer border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#5a6a88] transition-colors focus:outline-none bg-inherit h-20"></textarea>
                    <label for="message" class="absolute left-0 top-1 cursor-text transition-all text-secondary peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Message</label>
                </div>
                <BaseButton text="Send Message" width="w-full md:w-3/4" icon="arrow-right-black.png"/>
            </div>
        </form>

        <div class="flex items-center gap-2 my-10 cursor-pointer"
        >
            <NuxtImg src="/icons/envelope-white.png" width="30px"/>
            <h2 class="font-secondary text-xl">kellens.tom@hotmail.com</h2>
        </div>
    </div>
</template>