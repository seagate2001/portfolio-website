<template>
    <BaseTitle title="Contact" />
        <div class="flex justify-end items-start">
                <div class="mt-16 w-full lg:w-[60%]"> <h3 class="text-[18px] text-secondary w-full mb-16">
                Ready to kickstart my professional journey and bring some innovative ideas to life. If you're looking for a driven front-end developer with an eye for detail, you've come to the right place. Send me a message and let's get to know each other!
            </h3>
                    <form
                name="contact"
                method="POST"
                data-netlify="true"
                class="border-dashed relative border-secondary border p-8 md:p-10 w-full"
            >
                <div class="flex flex-col gap-10 md:max-w-[480px] lg:max-w-[580px]">
        
                    <div class="flex flex-col md:flex-row gap-10 md:gap-20 w-full">
                        <BaseInput
                            id="name"
                            name="name"
                            label="Name"
                            class="flex-1"
                            required
                        />
                        <BaseInput
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            class="flex-1"
                            required
                        />
                    </div>
                    <BaseInput
                        id="subject"
                        name="subject"
                        label="Subject"
                        class="w-full"
                        required
                    />
                    <BaseInput
                        id="message"
                        name="message"
                        label="Message"
                        type="textarea"
                        class="w-full"
                        required
                    />
                    <div class="pt-4">
                        <BaseButton
                            type="submit"
                            text="Send Message"
                            width="w-full lg:w-3/4"
                            icon="arrow-right-black.png"
                        />
                    </div>
                </div>
            </form>

            <a href="mailto:kellens.tom@hotmail.com" class="flex items-center gap-2 my-10 w-fit">
                <NuxtImg src="/icons/envelope-white.png" width="30px" />
                <h2 class="font-secondary text-xl">kellens.tom@hotmail.com</h2>
            </a>
        </div>

        <NuxtImg 
            class="hidden lg:block" 
            src="/contact-illustration.png" 
            width="600px" 
        />
    </div>
</template>