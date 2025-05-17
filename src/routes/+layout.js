export const prerender = true;
export const ssr = false;

// Handle client-side navigation to anchor links
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href') || '';
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
          
          // Update URL without causing page navigation
          history.pushState(null, '', `#${targetId}`);
        }
      });
    });
  });
} 