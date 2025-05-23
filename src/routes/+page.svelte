<script lang="ts">
  import { onMount } from 'svelte';
  import emailjs from '@emailjs/browser';
  
  let mounted = false;
  let isSubmitting = false;
  let submitStatus: 'idle' | 'success' | 'error' = 'idle';
  
  onMount(() => {
    mounted = true;
  });
  
  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    isSubmitting = true;
    submitStatus = 'idle';
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      submitStatus = 'success';
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      submitStatus = 'error';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<div class="fade-in {mounted ? 'visible' : ''}">
  <header class="flex justify-between items-center py-8 mb-16 md:mb-32 px-4 md:px-8">
    <div class="font-medium text-xl relative group">
      <span class="text-sm align-super">®</span>LF—24
      <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
    </div>
    <a href="#contact" class="border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition-all duration-300 relative overflow-hidden">
      <span class="relative z-10">CONTACT</span>
    </a>
  </header>

  <main class="max-w-6xl mx-auto px-4 md:px-8">
    <section class="mb-32 md:mb-48">
      <h1 class="text-6xl md:text-7xl lg:text-8xl font-medium mb-8 leading-tight slide-up">
        Technician 
        <span class="inline-block border border-black rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rotate-in">&</span>
        <span class="slide-up-delay">IT Enthusiast</span>
      </h1>
      
      <p class="max-w-2xl text-xl leading-relaxed fade-in-delay">
        I'm Ľubomír Foľta — a technician with a passion for technology. I have hands-on experience with phone repairs and diagnostics, building and servicing computers, basic system administration, and foundational web development. I'm always eager to learn and take on new challenges — my goal is to combine technical skills with practical solutions that make a real impact.      </p>
    </section>

    <section id="contact" class="py-16 border-t border-gray-200 slide-up-delay-2">
      <h2 class="text-4xl font-medium mb-12">Get in Touch</h2>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <p class="mb-8 text-xl">
            Interested in working together? I'm currently available for new projects.
            Feel free to reach out using the contact form.
          </p>
          
          <div class="flex flex-col space-y-4">
            <a href="mailto:lubomir.folta@gmail.com" class="text-xl hover:underline group flex items-center">
              <span>lubomir.folta@gmail.com</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/%C4%BEubom%C3%ADr-fo%C4%BEta-7080aa278/" target="_blank" rel="noopener" class="text-xl hover:underline group flex items-center">
              <span>LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="https://github.com/FreeZidev" target="_blank" rel="noopener" class="text-xl hover:underline group flex items-center">
              <span>GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        
        <form class="flex flex-col space-y-6" on:submit={handleSubmit}>
          <div>
            <label for="name" class="block text-sm mb-1 font-medium">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm mb-1 font-medium">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm mb-1 font-medium">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            class="self-start bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 transition-colors flex items-center group disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {#if isSubmitting}
              <span>Sending...</span>
            {:else if submitStatus === 'success'}
              <span>Message Sent!</span>
            {:else if submitStatus === 'error'}
              <span>Failed to Send</span>
            {:else}
              <span>Send Message</span>
            {/if}
            {#if !isSubmitting && submitStatus !== 'success' && submitStatus !== 'error'}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            {/if}
          </button>
        </form>
      </div>
    </section>
  </main>

  <footer class="mt-32 py-8 border-t border-gray-200 text-center text-gray-500">
    <p>&copy; {new Date().getFullYear()} Lubomir Folta. All rights reserved.</p>
  </footer>
</div>

<style>
  .fade-in {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .fade-in-delay {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
  }
  
  .visible .fade-in-delay {
    opacity: 1;
    transform: translateY(0);
  }
  
  .slide-up {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .visible .slide-up {
    opacity: 1;
    transform: translateY(0);
  }
  
  .slide-up-delay {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
  }
  
  .visible .slide-up-delay {
    opacity: 1;
    transform: translateY(0);
  }
  
  .slide-up-delay-2 {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s;
  }
  
  .visible .slide-up-delay-2 {
    opacity: 1;
    transform: translateY(0);
  }
  
  .rotate-in {
    opacity: 0;
    transform: rotate(-10deg) scale(0.9);
    transition: opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;
  }
  
  .visible .rotate-in {
    opacity: 1;
    transform: rotate(0) scale(1);
  }
</style>
