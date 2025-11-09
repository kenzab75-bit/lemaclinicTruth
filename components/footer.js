class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        const currentYear = new Date().getFullYear();
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: linear-gradient(160deg, rgba(2, 6, 23, 0.95), rgba(15, 23, 42, 0.9));
                    border-top: 1px solid rgba(148, 163, 184, 0.12);
                    margin-top: clamp(3rem, 6vw, 5rem);
                }

                footer {
                    width: min(1180px, 92vw);
                    margin: 0 auto;
                    padding: clamp(3rem, 6vw, 4.5rem) 0;
                    display: grid;
                    gap: 2rem;
                }

                .footer-top {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    gap: 1.75rem;
                    align-items: flex-start;
                }

                .brand {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: #f8fafc;
                }

                .brand span {
                    color: #f43f5e;
                }

                .footer-links {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                    gap: 0.75rem 1.5rem;
                }

                a {
                    color: rgba(226, 232, 240, 0.75);
                    font-size: 0.95rem;
                    transition: color 0.3s ease;
                }

                a:hover {
                    color: #f43f5e;
                }

                .footer-bottom {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    justify-content: space-between;
                    align-items: center;
                    color: rgba(148, 163, 184, 0.75);
                    font-size: 0.9rem;
                }

                @media (max-width: 640px) {
                    .footer-top {
                        flex-direction: column;
                    }

                    .footer-links {
                        width: 100%;
                    }
                }
            </style>
            <footer>
                <div class="footer-top">
                    <div class="brand">LemaClinic <span>Truth</span></div>
                    <nav class="footer-links" aria-label="Navigation secondaire">
                        <a href="#accueil">Accueil</a>
                        <a href="#enquetes">Enquête</a>
                        <a href="#parcours">Comprendre</a>
                        <a href="#temoignages">Témoignages</a>
                        <a href="#faq">FAQ</a>
                        <a href="#temoigner">Agir</a>
                    </nav>
                </div>
                <div class="footer-bottom">
                    <span>&copy; ${currentYear} LemaClinic Truth. Tous droits réservés.</span>
                    <span>Plateforme indépendante de protection des patients.</span>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
