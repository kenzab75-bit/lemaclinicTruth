class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this.handleToggle = this.handleToggle.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    position: fixed;
                    inset: 0 auto auto 0;
                    width: 100%;
                    z-index: 1000;
                }

                header {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    transition: background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease, transform 0.4s ease;
                    background: linear-gradient(120deg, rgba(2, 6, 23, 0.82), rgba(15, 23, 42, 0.78));
                    backdrop-filter: blur(22px);
                    border-bottom: 1px solid rgba(148, 163, 184, 0.14);
                }

                header.is-condensed {
                    background: linear-gradient(120deg, rgba(2, 6, 23, 0.92), rgba(15, 23, 42, 0.9));
                    border-bottom-color: rgba(148, 163, 184, 0.28);
                    transform: translateY(-2px);
                }

                .navbar-container {
                    width: min(1180px, 92vw);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1.1rem 0;
                    gap: 1.5rem;
                }

                .brand {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-family: 'Playfair Display', Georgia, serif;
                    font-size: 1.3rem;
                    font-weight: 600;
                    letter-spacing: 0.01em;
                    color: #f8fafc;
                    position: relative;
                    padding: 0.3rem 0.5rem;
                    border-radius: 999px;
                    overflow: hidden;
                }

                .brand span {
                    display: block;
                    line-height: 1;
                }

                .brand svg {
                    width: 34px;
                    height: 34px;
                    color: #f43f5e;
                    filter: drop-shadow(0 8px 18px rgba(244, 63, 94, 0.35));
                    transition: transform 0.6s ease;
                    animation: pulse 6s ease-in-out infinite;
                }

                .brand::after {
                    content: '';
                    position: absolute;
                    inset: -40% -60%;
                    background: radial-gradient(circle, rgba(244, 63, 94, 0.32), transparent 60%);
                    opacity: 0.75;
                    filter: blur(18px);
                    transition: opacity 0.4s ease;
                }

                .brand:hover svg {
                    transform: scale(1.08);
                }

                .brand:hover::after {
                    opacity: 0.95;
                }

                .sr-only {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border: 0;
                }

                nav {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .nav-link {
                    position: relative;
                    padding: 0.55rem 1.1rem;
                    border-radius: 999px;
                    font-weight: 500;
                    letter-spacing: 0.02em;
                    color: rgba(226, 232, 240, 0.9);
                    transition: color 0.3s ease, background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    background: radial-gradient(circle at 50% 50%, rgba(244, 63, 94, 0.24), rgba(244, 63, 94, 0));
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    z-index: -1;
                }

                .nav-link:hover {
                    color: #f43f5e;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(244, 63, 94, 0.18);
                }

                .nav-link:hover::after {
                    opacity: 1;
                }

                .nav-link:focus-visible {
                    outline: none;
                    box-shadow: 0 0 0 2px rgba(244, 63, 94, 0.25);
                }

                .menu-toggle {
                    display: none;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    border: 1px solid rgba(148, 163, 184, 0.24);
                    background: rgba(2, 6, 23, 0.75);
                    color: #e2e8f0;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: transform 0.3s ease, background 0.3s ease;
                }

                .menu-toggle:hover {
                    transform: translateY(-2px);
                    background: rgba(244, 63, 94, 0.22);
                }

                .menu-toggle span {
                    display: block;
                    width: 18px;
                    height: 2px;
                    background: currentColor;
                    position: relative;
                }

                .menu-toggle span::before,
                .menu-toggle span::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    width: 18px;
                    height: 2px;
                    background: currentColor;
                    transition: transform 0.3s ease;
                }

                .menu-toggle span::before {
                    transform: translateY(-6px);
                }

                .menu-toggle span::after {
                    transform: translateY(6px);
                }

                .menu-toggle[aria-expanded="true"] span {
                    background: transparent;
                }

                .menu-toggle[aria-expanded="true"] span::before {
                    transform: rotate(45deg);
                }

                .menu-toggle[aria-expanded="true"] span::after {
                    transform: rotate(-45deg);
                }

                .mobile-menu {
                    display: none;
                    flex-direction: column;
                    padding: 0 0 1rem;
                    gap: 0.35rem;
                }

                .mobile-menu.open {
                    display: flex;
                }

                @media (max-width: 860px) {
                    nav {
                        display: none;
                    }

                    .menu-toggle {
                        display: inline-flex;
                    }
                }

                @keyframes pulse {
                    0%,
                    100% {
                        transform: scale(1);
                        filter: drop-shadow(0 8px 18px rgba(244, 63, 94, 0.35));
                    }
                    50% {
                        transform: scale(1.05);
                        filter: drop-shadow(0 12px 22px rgba(244, 63, 94, 0.45));
                    }
                }
            </style>
            <header>
                <div class="navbar-container">
                    <a class="brand" href="#accueil">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M12 2L3 6v6c0 5.25 3.438 10.063 9 12 5.563-1.938 9-6.75 9-12V6l-9-4z" />
                            <path d="M9 12l2 2 4-4" />
                        </svg>
                        <span>LemaClinic Truth</span>
                    </a>
                    <nav>
                        <a class="nav-link" href="#histoire">Mon histoire</a>
                        <a class="nav-link" href="#enquetes">Enquête</a>
                        <a class="nav-link" href="#parcours">Comprendre</a>
                        <a class="nav-link" href="#temoignages">Témoignages</a>
                        <a class="nav-link" href="#faq">FAQ</a>
                    </nav>
                    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="menu-mobile">
                        <span></span>
                        <span class="sr-only">Ouvrir le menu</span>
                    </button>
                </div>
                <div class="navbar-container mobile-menu" id="menu-mobile">
                    <a class="nav-link" href="#histoire">Mon histoire</a>
                    <a class="nav-link" href="#enquetes">Enquête</a>
                    <a class="nav-link" href="#parcours">Comprendre</a>
                    <a class="nav-link" href="#temoignages">Témoignages</a>
                    <a class="nav-link" href="#faq">FAQ</a>
                </div>
            </header>
        `;

        this.toggleButton = this.shadowRoot.querySelector('.menu-toggle');
        this.mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
        this.header = this.shadowRoot.querySelector('header');
        this.navLinks = Array.from(this.shadowRoot.querySelectorAll('a[href^="#"]'));

        this.toggleButton?.addEventListener('click', this.handleToggle);
        this.navLinks.forEach((link) => link.addEventListener('click', this.handleLinkClick));

        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    disconnectedCallback() {
        this.toggleButton?.removeEventListener('click', this.handleToggle);
        this.navLinks?.forEach((link) => link.removeEventListener('click', this.handleLinkClick));
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleToggle() {
        if (!this.mobileMenu || !this.toggleButton) return;
        const isOpen = this.mobileMenu.classList.toggle('open');
        this.toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    handleLinkClick(event) {
        const link = event.currentTarget;
        if (!(link instanceof HTMLAnchorElement)) return;

        const href = link.getAttribute('href');
        if (!href || href.length <= 1) return;

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();

        if (this.mobileMenu && this.toggleButton) {
            this.mobileMenu.classList.remove('open');
            this.toggleButton.setAttribute('aria-expanded', 'false');
        }

        const headerHeight = this.header?.offsetHeight ?? 0;
        const extraSpacing = window.innerWidth < 860 ? 12 : 24;
        const targetOffset = target.getBoundingClientRect().top + window.scrollY - headerHeight - extraSpacing;

        window.scrollTo({
            top: Math.max(0, targetOffset),
            behavior: 'smooth',
        });
    }

    handleScroll() {
        if (!this.header) return;
        if (window.scrollY > 40) {
            this.header.classList.add('is-condensed');
        } else {
            this.header.classList.remove('is-condensed');
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);
