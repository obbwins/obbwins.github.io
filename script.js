// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real scenario, you would send this data to a server
            // For now, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
            
            // Clear form
            contactForm.reset();
        });
    }
    
    // Add active class to current section in navigation
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});

// Simple typing effect for hero section
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('#hero h2');
    
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        const splitText = originalText.split('');
        
        heroTitle.innerHTML = '';
        
        let charIndex = 0;
        function typeWriter() {
            if (charIndex < splitText.length) {
                heroTitle.innerHTML += splitText[charIndex];
                charIndex++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start the typing effect
        typeWriter();
    }
});