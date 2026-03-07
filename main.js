/**
 * CodeXa Infotech - Mobile-Optimized Vanilla JS
 */

document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------------------------------
    // 1. Loading Screen
    //    - Shows on: browser refresh, new visit, external link
    //    - Skips on: internal page navigation (clicking site links)
    // ----------------------------------------------------
    const loader = document.getElementById('loader');
    const progressBar = document.getElementById('loader-progress');
    const isInternalNav = sessionStorage.getItem('codexa_navigating');

    // Clear the flag immediately
    sessionStorage.removeItem('codexa_navigating');

    function initAOS() {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            disable: false
        });
    }

    if (isInternalNav) {
        // Came from an internal link — skip splash
        if (loader) {
            loader.style.display = 'none';
        }
        initAOS();
    } else {
        // Fresh visit or browser refresh — show splash
        if (loader) {
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.floor(Math.random() * 20) + 10;
                if (progress > 100) progress = 100;

                if (progressBar) progressBar.style.width = `${progress}%`;

                if (progress === 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        loader.style.opacity = '0';
                        loader.style.visibility = 'hidden';
                        initAOS();
                    }, 600);
                }
            }, 100);
        } else {
            initAOS();
        }
    }

    // Mark all internal links so navigating between pages skips splash
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
            link.addEventListener('click', () => {
                sessionStorage.setItem('codexa_navigating', 'true');
            });
        }
    });

    // ----------------------------------------------------
    // 2. Navbar Scroll Effect & Mobile Menu
    // ----------------------------------------------------
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                isScrolling = false;
            });
            isScrolling = true;
        }
    }, { passive: true });

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ----------------------------------------------------
    // 3. Counter Animation (Using Intersection Observer)
    // ----------------------------------------------------
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target + "+";
                    }
                };
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });



    // ----------------------------------------------------
    // 5. Hero Slider Logic
    // ----------------------------------------------------
    const heroSlider = document.getElementById('heroSlider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    const dots = document.querySelectorAll('.slider-dot');

    if (heroSlider && slides.length > 0) {
        let currentSlide = 0;
        const totalSlides = slides.length;

        function updateSlider() {
            heroSlider.style.transform = `translateX(-${currentSlide * 100}vw)`;
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[currentSlide]) dots[currentSlide].classList.add('active');
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateSlider();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlider();
            });
        });

        // Auto slide
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }, 5000);
    }
    // ----------------------------------------------------
    // 7. Mobile Performance: Completely Kill Videos
    // ----------------------------------------------------
    if (window.innerWidth <= 768) {
        const allVideos = document.querySelectorAll('video');
        allVideos.forEach(vid => {
            vid.pause();
            vid.removeAttribute('src');
            vid.load();
            vid.remove();
        });
    }

    // ----------------------------------------------------
    // 8. Portfolio Projects — Data & Modal
    // ----------------------------------------------------
    const PROJECTS = [
        {
            company: 'Authentix',
            service: 'Blockchain + AI Web Application',
            description: 'Authentix is a decentralized skill verification platform developed for the Government of Kerala to enable secure, transparent, and tamper-proof certification of user skills using blockchain technology and AI-powered assessments. Users complete AI-based skill tests and earn Soulbound Tokens (SBTs) — non-transferable NFT badges stored on the BNB Smart Chain — serving as permanent, unforgeable proof of verified skills. The system integrates MetaMask wallet authentication, decentralized storage via BNB Greenfield, and Solidity smart contracts to ensure trust, authenticity, and ownership of digital credentials.',
            techStack: ['Next.js', 'Node.js', 'MongoDB', 'Solidity', 'Web3', 'BNB Smart Chain', 'AI Integration'],
            features: [
                'AI-powered automated skill assessment system',
                'Blockchain-based Soulbound Token (SBT) certification',
                'MetaMask wallet login and authentication',
                'Smart contracts built using Solidity on BNB Smart Chain',
                'Decentralized certificate storage using BNB Greenfield',
                'Real-time skill badge tracking dashboard',
                'Secure backend with Node.js and MongoDB',
                'Modern responsive UI built with Next.js and Tailwind CSS'
            ],
            website: '#',
            image: 'assets/Authentix.jpeg',
            gradient: 'none',
            icon: 'bx bx-link-alt'
        },
        {
            company: 'GS Gold',
            service: 'Business Website',
            description: 'Designed and developed a premium business website for GS Gold, a gold jewellery shop, to showcase their products, gold rates, and shop information with a modern luxury user interface. The website features a light luxury theme with gold color accents, smooth scroll animations, and interactive product sections — creating a clean, elegant, and trust-building online presence that reflects the premium nature of the gold business.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'AI Integration'],
            features: [
                'Luxury hero section with gold theme design',
                'Jewellery collection showcase with interactive sections',
                'Live gold rate display section',
                'Wastage details information panel',
                'About and contact sections for shop information',
                'Mobile responsive design with smooth scroll animations',
                'Modern UI/UX with premium luxury aesthetics'
            ],
            website: 'https://www.gsgold.in',
            image: 'assets/gsgold.png',
            gradient: 'none', // Removed gradient overlay so image is fully visible
            icon: 'bx bx-diamond'
        },
        {
            company: 'Satvika Organic',
            service: 'Full Web Application',
            description: 'Built a modern, scalable multi-language e-commerce web application using React.js and Vite. The platform features dynamic product and category management with a modular architecture, clean state management via Context API, and internationalization (i18n) supporting English and Marathi for a diverse audience.',
            techStack: ['React.js', 'Vite', 'JavaScript', 'CSS', 'Context API', 'i18n'],
            features: [
                'Component-based scalable architecture',
                'Multi-language support using i18n (English & Marathi)',
                'Dynamic product and category management',
                'Interactive homepage with hero sliders and banners',
                'Clean state management using Context API',
                'Fully responsive and optimized performance using Vite'
            ],
            website: 'https://satvikaaorganic.com/',
            image: 'assets/satvika.png',
            gradient: 'none',
            icon: 'bx bx-leaf'
        },
        {
            company: 'CodeX Blocks',
            service: 'Educational Web Application',
            description: 'Built a Scratch-inspired, bilingual block-based visual programming platform using React and Google Blockly. The platform enables kids and beginners to learn programming by creating interactive stories, animations, and games using drag-and-drop coding blocks. Features a fully interactive coding environment with sprites, stage backdrops, sound engine, and a real-time execution engine.',
            techStack: ['React.js', 'Google Blockly', 'Vite', 'JavaScript', 'Web Audio API', 'CSS'],
            features: [
                'Block-based visual programming editor using Google Blockly',
                'Interactive stage with sprites and backdrops',
                'Real-time code execution engine',
                'Built-in sound engine using Web Audio API',
                'Multi-language support (English and Marathi)',
                'Project save, load, import, and export functionality'
            ],
            website: '#',
            image: 'assets/codexblock.jpeg',
            gradient: 'none',
            icon: 'bx bx-code-block'
        },
        {
            company: 'Python Notebook',
            service: 'Offline Jupyter Clone',
            description: 'A fully offline Jupyter Notebook-style web application developed using Python (Flask) and JavaScript. It supports code execution, markdown documentation, syntax highlighting, and provides a complete interactive coding environment with bilingual support for English and Marathi.',
            techStack: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS'],
            features: [
                'Execute Python code cells with real-time output',
                'Offline functionality without internet requirement',
                'Syntax highlighting and markdown editor with live preview',
                'Built-in package manager for installing Python libraries',
                'Multi-language support (English and Marathi)'
            ],
            website: '#',
            image: 'assets/Jupiter.jpeg',
            gradient: 'none',
            icon: 'bx bx-code-alt'
        },
        {
            company: 'CRM Platform',
            service: 'Full Stack Web Application',
            description: 'Developed a modern web-based Customer Relationship Management (CRM) platform that enables businesses to efficiently manage customers, leads, sales, and daily activities through a centralized dashboard. The system provides a complete solution for tracking customer interactions, managing sales pipelines, assigning tasks, and monitoring business performance in real time. Designed with a scalable architecture and responsive interface, making it suitable for startups, small businesses, and enterprise use.',
            techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT Auth', 'CSS'],
            features: [
                'Secure user authentication and login system',
                'Interactive business dashboard with real-time analytics',
                'Customer management — add, edit, delete, and view profiles',
                'Lead tracking and sales pipeline management',
                'Task and activity management system',
                'Advanced search and filter functionality',
                'Responsive design for mobile and desktop',
                'REST API based scalable backend architecture'
            ],
            website: 'crm/index.html',
            image: 'assets/crm.png',
            gradient: 'none',
            icon: 'bx bx-bar-chart-alt-2'
        }
    ];

    // Render cards
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (portfolioGrid) {
        PROJECTS.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'portfolio-item glass-panel';
            card.setAttribute('data-aos', 'drop-down-3d');
            card.setAttribute('data-aos-delay', String((index + 1) * 100));

            // If image exists, make the gradient slightly transparent so image shows through,
            // or we can just show the image with no background gradient on the image itself.
            const bgStyle = project.image
                ? `background: ${project.gradient === 'none' ? `url('${project.image}') center/cover no-repeat` : `${project.gradient}, url('${project.image}') center/cover no-repeat`};`
                : `background: ${project.gradient};`;

            card.innerHTML = `
                <div class="portfolio-img" style="${bgStyle}">
                    <i class="${project.icon} portfolio-icon" style="${project.image ? 'opacity: 0;' : ''}"></i>
                    <div class="portfolio-overlay">
                        <span class="btn btn-primary btn-sm">View Project</span>
                    </div>
                </div>
                <div class="portfolio-info">
                    <span class="portfolio-service-badge">${project.service}</span>
                    <h3>${project.company}</h3>
                    <p class="tech-stack">${project.techStack.join(' • ')}</p>
                </div>
            `;
            card.addEventListener('click', () => openProjectModal(project));
            portfolioGrid.appendChild(card);
        });
    }

    // Modal logic
    const modalOverlay = document.getElementById('projectModalOverlay');
    const modalClose = document.getElementById('projectModalClose');

    function openProjectModal(project) {
        document.getElementById('projectModalHeader').style.background = project.image
            ? `url('${project.image}') center/cover no-repeat`
            : project.gradient;
        document.getElementById('projectModalHeader').style.position = 'relative';

        const serviceEl = document.getElementById('projectModalService');
        const companyEl = document.getElementById('projectModalCompany');

        if (serviceEl) serviceEl.textContent = project.service;
        if (companyEl) companyEl.textContent = project.company;

        // Dark overlay is now handled by CSS ::after on .project-modal-header

        document.getElementById('projectModalDesc').textContent = project.description;

        const techContainer = document.getElementById('projectModalTech');
        techContainer.innerHTML = project.techStack.map(t => `<span>${t}</span>`).join('');

        const featuresList = document.getElementById('projectModalFeatures');
        featuresList.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');

        const link = document.getElementById('projectModalLink');
        if (project.website === '#' || !project.website) {
            link.innerHTML = `<i class='bx bx-desktop'></i> Offline Project`;
            link.href = 'javascript:void(0)';
            link.removeAttribute('target');
        } else {
            link.innerHTML = `<i class='bx bx-link-external'></i> Visit Website`;
            link.href = project.website;
            link.setAttribute('target', '_blank');
        }

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeProjectModal();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            closeProjectModal();
        }
    });

});
