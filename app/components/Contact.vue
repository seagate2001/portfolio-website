<template>
    <Transition name="fade">
        <div v-if="showSuccess" class="fixed top-10 left-1/2 -translate-x-1/2 z-50">
            <div class="bg-secondary text-primary px-6 py-4 rounded-lg shadow-2xl flex items-center gap-4 min-w-[300px] justify-between border border-gray-100">
                <p class="text-sm font-medium">Message succesfully sent!</p>
                <button @click="showSuccess = false" class="hover:text-gray-500 transition-colors text-xl leading-none font-bold">
                    &times;
                </button>
            </div>
        </div>
    </Transition>

    <BaseTitle title="Contact" />
    <div class="flex justify-end items-start mt-16">
        <div class="w-full lg:w-[60%]"> 
            <h3 class="text-[18px] text-secondary w-full mb-16">
                Ready to kickstart my professional journey and bring some innovative ideas to life. If you're looking for a driven front-end developer with an eye for detail, you've come to the right place. Send me a message and let's get to know each other!
            </h3>
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                @submit.prevent="handleSubmit"
                class="border-dashed relative border-secondary border p-8 md:p-10 w-full"
            >
                <input type="hidden" name="form-name" value="contact" />
                <div class="flex flex-col gap-10 md:max-w-[480px] lg:max-w-[580px]">
                    <div class="flex flex-col md:flex-row gap-10 md:gap-20 w-full">
                        <BaseInput id="name" name="name" label="Name" class="flex-1" required />
                        <BaseInput id="email" name="email" type="email" label="Email" class="flex-1" required />
                    </div>
                    <BaseInput id="subject" name="subject" label="Subject" class="w-full" required />
                    <BaseInput id="message" name="message" label="Message" type="textarea" class="w-full" required />
                    <div class="pt-4">
                        <BaseButton type="submit" text="Send Message" width="w-full lg:w-3/4" icon="arrow-right-black.png" />
                    </div>
                </div>
            </form>

            <a href="mailto:kellens.tom@hotmail.com" class="flex items-center gap-2 my-10 w-fit">
                <NuxtImg class="pointer-events-none" src="/icons/envelope-white.png" width="30px" alt="email-icon" />
                <h2 class="font-secondary text-xl">kellens.tom@hotmail.com</h2>
            </a>
        </div>

        <NuxtImg class="hidden lg:block" src="/contact-illustration.png" width="600px" alt="contact-illustaration" />
    </div>
</template>

<script setup lang="ts">
const showSuccess = ref(false);

const handleSubmit = async (event: Event) => {
    const formElement = event.target as HTMLFormElement;
    const fd = new FormData(formElement);

    try {
        await $fetch("/form-check", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(fd as any).toString(),
        });
        
        formElement.reset();

        // show popup and hide after 4 seconds
        showSuccess.value = true;
        setTimeout(() => {
            showSuccess.value = false;
        }, 4000);

    } catch (error) {
        console.error("Submission error:", error);
    }
};
</script>

<style scoped>
    /* Popup message animation */
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
    transform: translate(-50%, -20px);
    }
</style>