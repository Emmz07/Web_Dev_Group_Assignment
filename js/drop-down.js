document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const body = document.body;
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        body.classList.toggle('mobile-menu-open');
      });
    }
    
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (themeToggle) {
      themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        
        // Update icon based on theme
        const currentTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
        
        if (currentTheme === 'dark') {
          this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
        } else {
          this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
        }
      });
    }
  
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (body.classList.contains('mobile-menu-open') && 
          !event.target.closest('.main-nav') && 
          !event.target.closest('.mobile-menu-btn')) {
        body.classList.remove('mobile-menu-open');
      }
    });
  
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.hero-content, .hero-image');
    
    revealElements.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = `all 0.6s ease ${index * 0.2}s`;
      
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 100);
    });
  });