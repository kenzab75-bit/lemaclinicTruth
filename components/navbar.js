
class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
<style>
                nav {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 50;
                    background: rgba(0,0,0,0.8);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
                }
                .nav-link {
                    color: rgba(255,255,255,0.8);
                    transition: all 0.3s ease;
                }
                .nav-link:hover {
                    color: var(--primary-red);
                }
            </style>
            <nav>
<div class="container mx-auto px-6 py-4">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.698-.833-3.468 0L3.342 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            <a href="/" class="text-xl font-bold text-white">LemaClinic Truth</a>
</div>
                        <div class="hidden md:flex space-x-8">
                            <a href="#whistleblow" class="nav-link">Whistleblow</a>
                            <a href="#stories" class="nav-link">Stories</a>
                            <a href="#faq" class="nav-link">FAQ</a>
                            <a href="#contact" class="nav-link">Contact</a>
                        </div>
                        <button class="md:hidden focus:outline-none" id="mobile-menu-button">
                            <i data-feather="menu"></i>
                        </button>
                    </div>
                    <div class="md:hidden hidden mt-4" id="mobile-menu">
                        <a href="#whistleblow" class="block py-2 nav-link">Whistleblow</a>
                        <a href="#stories" class="block py-2 nav-link">Stories</a>
                        <a href="#faq" class="block py-2 nav-link">FAQ</a>
                        <a href="#contact" class="block py-2 nav-link">Contact</a>
                    </div>
                </div>
            </nav>
            <style>
                .nav-link {
                    @apply text-gray-700 hover:text-red-600 transition duration-300;
                }
                #mobile-menu {
                    transition: all 0.3s ease;
                }
            </style>
        `;

        // Mobile menu toggle
        const menuButton = this.querySelector('#mobile-menu-button');
        const mobileMenu = this.querySelector('#mobile-menu');
        
        menuButton.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                feather.replace();
            } else {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);