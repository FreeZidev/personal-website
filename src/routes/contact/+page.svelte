<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  
  onMount(() => {
    // Redirect to the home page with #contact anchor
    goto('/#contact');
  });
</script>

<div class="flex items-center justify-center min-h-screen">
  <p>Redirecting to contact section...</p>
</div> 