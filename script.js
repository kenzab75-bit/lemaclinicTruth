document.addEventListener('DOMContentLoaded', () => {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
    });

    document.querySelectorAll('[data-reveal]').forEach((element) => {
        if (!element.classList.contains('is-visible')) {
            revealObserver.observe(element);
        }
    });

    document.addEventListener('click', (event) => {
        const trigger = event.target.closest('a[href^="#"]');
        if (!trigger) return;

        const href = trigger.getAttribute('href');
        if (href.length <= 1) return;

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();
        const headerOffset = document.querySelector('custom-navbar')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset - 16;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    });

    const testimonials = [
        {
            quote: 'On m’a garanti une bouche parfaite en quatre jours. Trois mois plus tard, je souffrais d’infections répétées et aucune réponse de la clinique.',
            name: 'Catherine',
            location: 'France',
        },
        {
            quote: 'Ils ont refusé de me transmettre mon dossier médical. Mes implants se sont desserrés en deux semaines et j’ai dû tout refaire en Allemagne.',
            name: 'Murat',
            location: 'Allemagne',
        },
        {
            quote: 'Le chirurgien a taillé des dents saines sans mon consentement. Aujourd’hui je vis avec des douleurs quotidiennes.',
            name: 'Ana',
            location: 'Espagne',
        },
        {
            quote: 'On m’a menacé de poursuites parce que j’ai voulu témoigner. Leur service juridique est plus réactif que leur service médical.',
            name: 'Luca',
            location: 'Italie',
        },
    ];

    const track = document.querySelector('.testimonial-track');
    const prevBtn = document.querySelector('[data-slider-prev]');
    const nextBtn = document.querySelector('[data-slider-next]');

    if (track) {
        track.innerHTML = testimonials.map((item) => `
            <article class="testimonial-card">
                <p class="testimonial-quote">“${item.quote}”</p>
                <div class="testimonial-meta">
                    <span>${item.name}</span>
                    <span>•</span>
                    <span>${item.location}</span>
                </div>
            </article>
        `).join('');

        let index = 0;
        const maxIndex = testimonials.length - 1;
        let autoSlideId;

        const updateSlider = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        const startAutoSlide = () => {
            stopAutoSlide();
            autoSlideId = window.setInterval(() => {
                index = index >= maxIndex ? 0 : index + 1;
                updateSlider();
            }, 7000);
        };

        const stopAutoSlide = () => {
            if (autoSlideId) {
                window.clearInterval(autoSlideId);
                autoSlideId = undefined;
            }
        };

        prevBtn?.addEventListener('click', () => {
            stopAutoSlide();
            index = index <= 0 ? maxIndex : index - 1;
            updateSlider();
            startAutoSlide();
        });

        nextBtn?.addEventListener('click', () => {
            stopAutoSlide();
            index = index >= maxIndex ? 0 : index + 1;
            updateSlider();
            startAutoSlide();
        });

        startAutoSlide();
    }

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const button = form.querySelector('button[type="submit"]');
            if (button) {
                button.disabled = true;
                button.textContent = 'Message envoyé';
            }
            form.reset();
            window.setTimeout(() => {
                if (button) {
                    button.disabled = false;
                    button.textContent = 'Envoyer mon témoignage';
                }
            }, 4000);
        });
    }
});
