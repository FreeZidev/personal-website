<script lang="ts">
  import { onMount } from 'svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
  
  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    alert(`Thanks for your message, ${name}! I'll get back to you soon.`);
    
    (e.target as HTMLFormElement).reset();
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
        Digital Designer 
        <span class="inline-block border border-black rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rotate-in">&</span>
        <span class="slide-up-delay">Webflow Developer</span>
      </h1>
      
      <p class="max-w-2xl text-xl leading-relaxed fade-in-delay">
        I'm Lubomir Folta, a digital designer and creative Webflow developer — I collaborate with brands globally to design impactful, mission-focused websites that drive results and achieve business goals
      </p>
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
            <a href="mailto:hello@lubomirfolta.com" class="text-xl hover:underline group flex items-center">
              <span>hello@lubomirfolta.com</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/lubomirfolta" target="_blank" rel="noopener" class="text-xl hover:underline group flex items-center">
              <span>LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="https://github.com/lubomirfolta" target="_blank" rel="noopener" class="text-xl hover:underline group flex items-center">
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
            on:click={handleSubmit}
            type="submit" 
            class="self-start bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 transition-colors flex items-center group"
          >
            <span>Send Message</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
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
