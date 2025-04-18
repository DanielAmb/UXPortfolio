document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('.nav');
    
    mobileNavToggle.addEventListener('click', function() {
        const visibility = nav.getAttribute('data-visible');
        
        if (visibility === 'false') {
            nav.setAttribute('data-visible', 'true');
            mobileNavToggle.setAttribute('aria-expanded', 'true');
            mobileNavToggle.innerHTML = '<i class="fas fa-times"></i><span class="sr-only">Close menu</span>';
        } else {
            nav.setAttribute('data-visible', 'false');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i><span class="sr-only">Menu</span>';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (nav.getAttribute('data-visible') === 'true') {
                    nav.setAttribute('data-visible', 'false');
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                    mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i><span class="sr-only">Menu</span>';
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add shadow to header on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});