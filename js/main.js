document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('.nav-link');
      
      // Toggle dropdown on click
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const isActive = dropdown.classList.contains('active');
        
        // Close all other dropdowns
        dropdowns.forEach(d => {
          if (d !== dropdown) {
            d.classList.remove('active');
          }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('active', !isActive);
      });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('active');
        });
      }
    });
    
    // For mobile: handle submenus separately
    if (window.innerWidth <= 768) {
      const dropdownLinks = document.querySelectorAll('.dropdown > .nav-link');
      
      dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const dropdown = this.parentNode;
          dropdown.classList.toggle('active');
        });
      });
    }
  });


const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => {
  observer.observe(section);
});