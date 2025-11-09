
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1200,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }

    // Initialize GSAP only if available and not mobile
    if (typeof gsap !== 'undefined' && window.innerWidth >= 768) {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

        // Hero parallax effect
        const heroBg = document.querySelector('.hero-bg');
        if (heroBg) {
            gsap.to(heroBg, {
                backgroundPosition: "50% 100%",
                ease: "none",
                scrollTrigger: {
                    trigger: heroBg,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                
                if (target) {
                    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    gsap.to(window, {
                        duration: 1.2,
                        scrollTo: {
                            y: targetPosition,
                            autoKill: false
                        },
                        ease: "power2.inOut"
                    });
                }
            });
        });

        // Typewriter effect (if element exists)
        const typewriterText = document.querySelector('.typewriter');
        if (typewriterText) {
            const text = typewriterText.textContent;
            typewriterText.textContent = '';
            
            gsap.to(typewriterText, {
                duration: 3,
                text: text,
                ease: "none",
                delay: 2
            });
        }
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('hidden');
            if (!nav.classList.contains('hidden') && typeof gsap !== 'undefined') {
                gsap.fromTo(nav, 
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
                );
            }
        });
    }

    // Form submission handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your anonymous submission. We will review it carefully.');
            form.reset();
        });
    }
});
{
            quote: "After my surgery, I suffered complications that were never properly addressed. I was left with permanent damage.",
            name: "Anonymous Patient",
            location: "Germany"
        },
        {
            quote: "They promised world-class treatment but delivered substandard care. My medical documents were falsified.",
            name: "John D.",
            location: "USA"
        },
        {
            quote: "The clinic lied about my diagnosis to justify unnecessary procedures that left me in worse condition.",
            name: "Maria S.",
            location: "Spain"
        }
    ];

    const slider = document.querySelector('.testimonial-slider');
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'fact-card bg-white p-8 rounded-xl shadow-md';
        card.innerHTML = `
            <p class="text-gray-600 italic mb-4">"${testimonial.quote}"</p>
            <div class="border-t pt-4">
                <p class="font-bold">${testimonial.name}</p>
                <p class="text-sm text-gray-500">${testimonial.location}</p>
            </div>
        `;
        slider.appendChild(card);
    });
        // Enhanced smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
// Form submission handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your anonymous submission. We will review it carefully.');
            form.reset();
        });
    }
});