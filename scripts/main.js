// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });
        
        // Close navigation when clicking on a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });
        
        // Close navigation when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !mainNav.contains(e.target)) {
                navToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading animation
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to main content
    const main = document.querySelector('main');
    if (main) {
        main.style.opacity = '0';
        main.style.transform = 'translateY(20px)';
        main.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            main.style.opacity = '1';
            main.style.transform = 'translateY(0)';
        }, 100);
    }
});

// Add scroll to top functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

