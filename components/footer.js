
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
background: linear-gradient(to right, #111, #222);
                    color: white;
                    padding: 3rem 1rem;
                    border-top: 1px solid rgba(255,255,255,0.1);
                }
                .footer-links a {
                    color: rgba(255,255,255,0.7);
                    transition: color 0.3s;
                }
                .footer-links a:hover {
                    color: var(--primary-red);
                }
            </style>
            <footer>
                <div class="max-w-6xl mx-auto text-center">
                    <div class="flex justify-center space-x-6 mb-6">
                        <a href="#accueil" class="footer-links">Accueil</a>
                        <a href="#mon-histoire" class="footer-links">Mon histoire</a>
                        <a href="#enquetes" class="footer-links">Enquêtes</a>
                        <a href="#contact" class="footer-links">Contact</a>
                    </div>
                    <p class="text-sm text-gray-400">
                        &copy; ${new Date().getFullYear()} LemaClinic Truth. Tous droits réservés.
                    </p>
                </div>
            </footer>
        `;
    }
}
<script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/feather-icons"></script>
    <link rel="stylesheet" href="style.css">
    <style>
        :root {
            --primary: #e63946;
            --secondary: #1d3557;
            --accent: #a8dadc;
            --dark: #0a0a0a;
            --light: #f1faee;
        }
    </style>
</head>
<body class="bg-gray-100 font-sans">
    <!-- Navbar Component -->
    <custom-navbar></custom-navbar>

    <!-- Hero Section -->
    <section class="hero bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32">
        <div class="container mx-auto px-6 text-center">
            <h1 class="text-5xl md:text-7xl font-bold mb-6 font-serif">Exposing <span class="text-red-500">LemaClinic</span> Truth</h1>
            <p class="text-xl md:text-2xl max-w-3xl mx-auto mb-10">Uncovering the medical malpractice and fighting for justice</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#whistleblow" class="btn-primary">Whistleblow Safely</a>
                <a href="#stories" class="btn-secondary">Victim Stories</a>
            </div>
        </div>
    </section>

    <!-- Facts Section -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-16 font-serif">The Shocking Truth</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="fact-card">
                    <div class="fact-icon bg-red-100 text-red-600">
                        <i data-feather="alert-triangle"></i>
                    </div>
                    <h3>500+ Cases</h3>
                    <p>Documented cases of malpractice from former patients</p>
                </div>
                <div class="fact-card">
                    <div class="fact-icon bg-blue-100 text-blue-600">
                        <i data-feather="dollar-sign"></i>
                    </div>
                    <h3>$10M+</h3>
                    <p>Estimated financial damages to victims</p>
                </div>
                <div class="fact-card">
                    <div class="fact-icon bg-green-100 text-green-600">
                        <i data-feather="shield"></i>
                    </div>
                    <h3>27 Countries</h3>
                    <p>International patients affected by these practices</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Victim Stories -->
    <section id="stories" class="py-20 bg-gray-100">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-16 font-serif">Victim Testimonials</h2>
            <div class="testimonial-slider">
                <!-- Testimonial cards will be injected here by JS -->
            </div>
        </div>
    </section>

    <!-- Whistleblower Section -->
    <section id="whistleblow" class="py-20 bg-gray-900 text-white">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl font-bold mb-6 font-serif">Safe Whistleblowing</h2>
            <p class="max-w-2xl mx-auto mb-10">We protect your identity while helping expose the truth. Your information is encrypted and anonymous.</p>
            <form class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-gray-800">
                <div class="form-group">
                    <label>Your Message</label>
                    <textarea class="form-input" rows="5" placeholder="Share what you know..."></textarea>
                </div>
                <button type="submit" class="btn-primary w-full">Submit Anonymously</button>
            </form>
        </div>
    </section>

    <!-- Footer Component -->
    <custom-footer></custom-footer>

    <!-- Components -->
    <script src="components/navbar.js"></script>
    <script src="components/footer.js"></script>
    
    <!-- Scripts -->
    <script src="script.js"></script>
    <script>
        feather.replace();
    </script>
</body>
</html>