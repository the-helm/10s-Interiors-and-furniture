// ========== DOM READY ==========
document.addEventListener('DOMContentLoaded', function () {
    initNavbar();
    initHeroSlideshow();
    initBeforeAfterSlider();
    initFurnitureCollection();
    initPortfolioFilters();
    initTestimonialsCarousel();
    initWhatsAppLinks();
    initMobileMenu();
    initSmoothScroll();
    initNewsletterForm();
});

// ========== NAVBAR SCROLL EFFECT ==========
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ========== HERO SLIDESHOW ==========
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;

    function goToSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        indicators.forEach(i => i.classList.remove('active'));
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % totalSlides);
    }

    indicators.forEach(ind => {
        ind.addEventListener('click', () => {
            const index = parseInt(ind.getAttribute('data-slide'));
            goToSlide(index);
            resetInterval();
        });
    });

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    slideInterval = setInterval(nextSlide, 5000);
}

// ========== BEFORE/AFTER SLIDER ==========
function initBeforeAfterSlider() {
    const slider = document.getElementById('baSlider');
    const handle = document.getElementById('baHandle');
    const beforeImg = slider?.querySelector('.ba-before');
    if (!slider || !handle || !beforeImg) return;

    let isDragging = false;

    function updateClip(clientX) {
        const rect = slider.getBoundingClientRect();
        let x = clientX - rect.left;
        x = Math.max(0, Math.min(x, rect.width));
        const percent = (x / rect.width) * 100;
        beforeImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
        handle.style.left = percent + '%';
    }

    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateClip(e.clientX);
    });
    slider.addEventListener('touchstart', (e) => {
        isDragging = true;
        updateClip(e.touches[0].clientX);
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging) updateClip(e.clientX);
    });
    window.addEventListener('touchmove', (e) => {
        if (isDragging) updateClip(e.touches[0].clientX);
    });

    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('touchend', () => { isDragging = false; });

    // Initialize at 50%
    beforeImg.style.clipPath = 'inset(0 50% 0 0)';
    handle.style.left = '50%';
}

// ========== FURNITURE COLLECTION DATA ==========
const furnitureProducts = [
    {
        name: 'Modern Living Room Sofa',
        price: 'KES 62,000',
        desc: 'This is a multi-seater sectional sofa featuring a textured brown fabric upholstery.',
        tags: ['Modern', 'Living Room'],
        image: 'images/WhatsApp Image 2026-04-30 at 16.44.49.jpeg'
    },
    {
        name: 'Classic Folding Dining Set',
        price: 'KES 26,000',
        desc: 'A wooden dining set consisting of a rectangular table and matching benches.',
        tags: ['Classic', 'Dining'],
        image: 'images/sd.jpeg'
    },
    {
        name: 'Custom Office Armchair',
        price: 'KES 35,000',
        desc: 'A sturdy armchair with a dark-polished wooden frame and light green cushioned upholstery.',
        tags: ['Office', 'Custom'],
        image: 'images/WhatsApp Image 2026-04-30 at 16.44.46.jpeg'
    },
    {
        name: 'Modern Living Room Sofa',
        price: 'KES 48,000',
        desc: 'This is a two-seater sofa featuring a natural wood frame with a geometric open-arm design.',
        tags: ['Modern', 'Living Room'],
        image: 'images/WhatsApp Image 2026-04-30 atf16.44.24.jpeg'
    },
    {
        name: 'Modern Leaf-Shaped Coffee Table',
        price: 'KES 35,000',
        desc: 'A unique living room center table crafted with a top that mimics the shape and veining of a large leaf.',
        tags: ['Modern', 'Living Room'],
        image: 'images/WhatsApp Image 2026-05-04 at 13.04.17.jpeg'
    },
    {
        name: ' Classic Custom Console',
        price: 'KES 48,000',
        desc: 'A long, rectangular wooden tv console with a polished finish and intricate carved details on the front panels.',
        tags: ['Classic', 'Custom'],
        image: 'images/WhatsApp Image 2026-05-04 at 13.19.25 (1).jpeg'
    },
    {
        name: ' Modern Custom Bed Frame',
        price: 'KES 53,000',
        desc: 'A modern bed frame with a sleek, minimalist design. The headboard features a geometric pattern carved into the wood, adding a touch of sophistication to the bedroom.',
        tags: ['Modern', 'Custom'],
        image: 'images/WhatsApp Image 2026-05-04 at 13.19.26.jpeg'
    },
    {
        name: 'Modern Custom Dining Set',
        price: 'KES 125,000',
        desc: 'A minimalist wooden dining set that includes a long rectangular table and matching armchairs.',
        tags: ['Modern', 'Custom'],
        image: 'images/WhatsApp Image 2026-05-04 at 13.19.26 (4).jpeg'
    },
    {
        name: ' Modern Custom Entertainment Unit',
        price: 'KES 48,000',
        desc: 'A sleek, modern tv console with a minimalist design. The unit features a combination of open shelves and closed cabinets, providing ample storage space for media devices and accessories.',
        tags: ['Modern', 'Custom'],
        image: 'images/WhatsApp Image 2026-05-04 at 13.19.26 (3).jpeg'
    },
    {
        name: ' Modern Custom Bunk Bed',
        price: 'KES 62,000',
        desc: 'A sturdy, double-decker bunk bed crafted from polished natural wood',
        tags: ['Modern', 'Custom'],
        image: 'images/WhatsApp Image 2026-05-04 at 13.19.26 (2).jpeg'
    },
    {
        name: ' Classic TV Console',
        price: 'KES 26,000',
        desc: 'A multi-functional wooden storage unit or sideboard with a light natural finish.',
        tags: ['Classic', 'Custom'],
        image: 'images/WhatsApp Image 2026-05-04 at 13.19.25.jpeg'
    },
    {
        name: ' Classic Custom Bed Set',
        price: 'KES 150,000',
        desc: 'A luxurious bed set featuring a classic wooden frame and premium upholstery.',
        tags: ['Classic', 'Custom'],
        image: 'images/WhatsApp Image 2026-05-04 at 13.19.26 (5).jpeg'
    },
    {
        name: 'Modern Custom Bed Set',
        price: 'KES 53,000',
        desc: 'This is an ornate, dark-stained wooden bed frame accompanied by matching bedside nightstands.',
        tags: ['Modern', 'Custom'],
        image: 'images/WhatsApp Image 2026-05-04 at 13.19.26 (1).jpeg'
    },


];

function initFurnitureCollection() {
    const grid = document.getElementById('collectionGrid');
    if (!grid) return;

    grid.innerHTML = furnitureProducts.map(product => `
        <div class="product-card">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-tags">
                    ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <p class="product-price">${product.price}</p>
                <div class="product-actions">
                    <button class="btn-sm btn-sm-outline view-detail-btn" data-product="${product.name}">View Details</button>
                    <button class="btn-sm btn-sm-gold whatsapp-order-btn" data-product="${product.name}">💬 Order on WhatsApp</button>
                </div>
            </div>
        </div>
    `).join('');

    // Attach WhatsApp event listeners to all order buttons
    document.querySelectorAll('.whatsapp-order-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const productName = this.getAttribute('data-product');
            openWhatsApp(productName);
        });
    });

    // View details also opens WhatsApp for now (can be extended)
    document.querySelectorAll('.view-detail-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const productName = this.getAttribute('data-product');
            openWhatsApp(productName);
        });
    });
}

// ========== PORTFOLIO DATA & FILTERS ==========
const portfolioItems = [
    { category: 'office', title: 'Mayfair Wall Art Deco', img: 'images/WhatsApp Image 2026-04-30 at 16.44.25.jpeg' },
    { category: 'outdoor', title: 'Appartment Entrance', img: 'images/WhatsApp Image 2026-05-04 at 14.54.00 (3).jpeg' },
    { category: 'kitchen', title: 'Appartment Kitchen', img: 'images/WhatsApp Image 2026-05-04 at 14.53.59 (1).jpeg' },
    { category: 'living-room', title: 'Gypsum works', img: 'images/WhatsApp Image 2026-05-04 at 14.54.01 (2).jpeg' },
    { category: 'living-room', title: 'Tv wall unit', img: 'images/WhatsApp Image 2026-05-04 at 14.54.01 (1).jpeg' },
    { category: 'commercial', title: 'Custom Optical Display Units', img: 'images/WhatsApp Image 2026-05-04 at 14.54.00.jpeg' },
    { category: 'office', title: 'Storage Compartment', img: 'images/WhatsApp Image 2026-05-04 at 14.53.58.jpeg' },
    { category: 'office', title: 'Custom Office Storage & Media Unit', img: 'images/WhatsApp Image 2026-05-04 at 16.20.47.jpeg' }
];

function initPortfolioFilters() {
    const grid = document.getElementById('portfolioGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!grid) return;

    function renderPortfolio(filter = 'all') {
        const filtered = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);
        grid.innerHTML = filtered.map(item => `
            <div class="portfolio-item" data-category="${item.category}">
                <img src="${item.img}" alt="${item.title}" loading="lazy">
                <div class="portfolio-overlay">
                    <h4>${item.title}</h4>
                    <span>${item.category.replace('-', ' ')}</span>
                </div>
            </div>
        `).join('');
    }

    renderPortfolio();

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            renderPortfolio(filter);
        });
    });
}

// ========== TESTIMONIALS CAROUSEL ==========
const testimonials = [
    {
        text: '"10s Interiors transformed our home into a breathtaking sanctuary. The attention to detail and quality of furniture exceeded every expectation."',
        author: 'Temi & Kemi Adebola',
        role: 'Homeowners, Lekki Phase 1',
        stars: 5
    },
    {
        text: '"From office desks to full floor planning — their team delivered a workspace that wows every client who walks through our doors. Truly world-class service."',
        author: 'David Okafor',
        role: 'CEO, TechBridge Kenya',
        stars: 5
    },
    {
        text: '"The custom velvet sofa set is the centerpiece of our living room. Everyone asks where we got it. Affordable luxury at its finest."',
        author: 'Aisha Bello',
        role: 'Interior Enthusiast, Nairobi',
        stars: 5
    },
    {
        text: '"On-time delivery and flawless installation. They handled our entire villa project with such professionalism. Highly recommended."',
        author: 'Patrick Mwangi',
        role: 'Property Developer',
        stars: 5
    }
];

function initTestimonialsCarousel() {
    const track = document.getElementById('testimonialTrack');
    const dotsContainer = document.getElementById('carouselDots');
    if (!track || !dotsContainer) return;

    track.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-stars">${'★'.repeat(t.stars)}</div>
            <p class="testimonial-text">${t.text}</p>
            <p class="testimonial-author">${t.author}</p>
            <p class="testimonial-role">${t.role}</p>
        </div>
    `).join('');

    dotsContainer.innerHTML = testimonials.map((_, i) =>
        `<span class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`
    ).join('');

    let currentTestimonial = 0;
    const totalTestimonials = testimonials.length;

    function goToTestimonial(index) {
        currentTestimonial = index;
        track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
        document.querySelectorAll('.carousel-dot').forEach((d, i) => {
            d.classList.toggle('active', i === currentTestimonial);
        });
    }

    dotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('carousel-dot')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            goToTestimonial(index);
            resetAutoScroll();
        }
    });

    let autoScrollInterval = setInterval(() => {
        goToTestimonial((currentTestimonial + 1) % totalTestimonials);
    }, 4500);

    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(() => {
            goToTestimonial((currentTestimonial + 1) % totalTestimonials);
        }, 4500);
    }
}

// ========== WHATSAPP INTEGRATION ==========
function openWhatsApp(productName) {
    const phoneNumber = '254711196073'; 
    const message = encodeURIComponent(
        `Hello 10s Interiors, I'm interested in the *${productName}*. Kindly share price, availability, and delivery details.`
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

function initWhatsAppLinks() {
    document.querySelectorAll('.whatsapp-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const product = this.getAttribute('data-product') || 'General Inquiry';
            openWhatsApp(product);
        });
    });
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ========== SMOOTH SCROLL FOR ALL ANCHOR LINKS ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = document.getElementById('navbar')?.offsetHeight || 70;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== NEWSLETTER FORM ==========
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const input = form.querySelector('input');
        if (input && input.value.trim()) {
            alert('✨ Thank you for subscribing! Stay tuned for exclusive design inspiration from 10s Interiors.');
            input.value = '';
        }
    });
}

// ========== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS ==========
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe section headers and cards for smooth entrance
document.querySelectorAll('.section-header, .product-card, .service-card, .portfolio-item, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
    fadeInObserver.observe(el);
});