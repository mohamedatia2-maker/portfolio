/**
 * Mohamed Mohamed Atia Mohamed - Portfolio ZNUE Style Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    initThemeToggle();
    initCanvasBackground();
    initCADVisualizer();
    initRoadmapProgress();
    initTechnicalSkillsAnimation();
    initProjectSchematics();
    initMobileNav();
    initScrollSpy();
    initCertModals();
    initCarousels();
    initWhatsAppWidget();
    initHeroActions();
});

/* ==========================================
   1. LIGHT / DARK THEME SWITCH LOGIC
   ========================================== */
function initThemeToggle() {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (!themeBtn) return;

    // Check saved preference or system default
    const savedTheme = localStorage.getItem('portfolio-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    themeBtn.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        setTheme(isDark ? 'light' : 'dark');
    });

    function setTheme(mode) {
        if (mode === 'dark') {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('portfolio-theme', 'dark');
            // Swap to Sun SVG
            themeBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
            `;
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('portfolio-theme', 'light');
            // Swap to Moon SVG
            themeBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            `;
        }
    }
}

/* ==========================================
   1B. TRANSLATION & LANGUAGE TOGGLE LOGIC
   ========================================== */
function initLanguageToggle() {
    const langBtn = document.getElementById('langToggleBtn');
    if (!langBtn) return;

    const translations = {
        en: {
            "title": "Mohamed Atia // Portfolio",
            "header-name": "Mohamed",
            "menu-header": "Navigation",
            "nav-home": "Home",
            "nav-about": "About",
            "nav-skills": "Skills",
            "nav-experience": "Experience",
            "nav-projects": "Projects",
            "nav-certs": "Certifications",
            
            "hero-tag": "Mechatronics Engineering • Software • Automation",
            "hero-title": "Where Code Meets <span class=\"accent-color\">Machines.</span>",
            "hero-desc": "I’m Mohamed Atia, a Mechatronics Engineering student at Zagazig National University building real-world software systems, automation workflows, and operational solutions. I combine engineering, backend development, data, and process optimization to turn complex workflows into practical systems.",
            "hero-btn": "View Projects",
            "hero-btn-contact": "Contact Me",
            
            "cad-title": "Engineering Systems Simulator",
            "cad-telemetry": "Rotation Angles: X:<span id=\"cad-x\">0°</span> Y:<span id=\"cad-y\">0°</span> Z:<span id=\"cad-z\">0°</span>",
            
            "about-title": "Engineering Systems. Building Solutions.",
            "about-p1": "I’m a Mechatronics Engineering student at Zagazig National University with hands-on experience building software systems, digital platforms, and operational solutions.",
            "about-p2": "My work combines engineering thinking with full-stack development, backend systems, databases, automation workflows, and process optimization. I’m particularly interested in systems that connect software with real-world operations — making complex processes simpler, faster, and more reliable.",
            "about-p3": "Alongside my engineering studies, I work on real projects involving logistics, shipping platforms, university systems, business workflows, and automation.",
            "about-build-1": "Full-Stack Web Platforms",
            "about-build-2": "Backend & Database Systems",
            "about-build-3": "Workflow Automation",
            "about-build-4": "Engineering & Operational Solutions",
            
            "skills-title": "Technical Skills",
            "skills-cat-programming": "Programming",
            "skills-cat-web": "Web Development",
            "skills-cat-engineering": "Engineering & CAD",
            "skills-cat-office": "Office Productivity",
            "skill-excel": "Microsoft Excel (Advanced)",
            "skill-word": "Microsoft Word",
            "skill-ppt": "Microsoft PowerPoint",
            "skill-cpp": "C++",
            "skill-python": "Python",
            "skill-web-dev": "Full Stack Python Developer",
            "skill-django": "Django & Flask Frameworks",
            "skill-frontend": "HTML5 / CSS3 / JavaScript",
            "skill-solidworks": "SolidWorks (3D CAD)",
            "skill-matlab": "MATLAB & Simulink",
            "skill-iot": "IoT & Automation (MQTT, ESP32)",
            "skill-databases": "PostgreSQL & Databases",
            
            "experience-title": "Operational & Technical Expertise",
            "skills-role-badge": "Current Position",
            "skills-role-title": "Operations & Performance Coordinator",
            "skills-role-company": "Happy Touch Establishment & Ideal World Establishment (Saudi Arabia)",
            "skills-role-desc": "Supporting logistics operations across 6 Aramex branches.",
            
            "skills-s1-title": "Logistics & Shipment Operations",
            "skills-s1-desc": "Monitoring and tracking domestic and international logistics channels.",
            "skills-s1-li1": "<strong>Multi-Branch Monitoring:</strong> Tracking shipments across multiple operational branches.",
            "skills-s1-li2": "<strong>International Tracking:</strong> Overseeing shipments from dispatch to final delivery.",
            "skills-s1-li3": "<strong>Risk Mitigation:</strong> Identifying operational risks to reduce returns and losses.",
            
            "skills-s2-title": "Performance Analytics & KPIs",
            "skills-s2-desc": "Creating reporting pipelines and operational dashboards for management.",
            "skills-s2-li1": "<strong>KPI Dashboards:</strong> Building monthly branch performance metrics and KPIs.",
            "skills-s2-li2": "<strong>Overdue Reporting:</strong> Generating daily lists of overdue shipments (6+ & 10+ days).",
            "skills-s2-li3": "<strong>Operational Insights:</strong> Presenting process improvement recommendations.",
            
            "skills-s3-title": "Audit & Compliance",
            "skills-s3-desc": "Ensuring data accuracy, financial reconciliation, and contract compliance.",
            "skills-s3-li1": "<strong>Cash Reconciliation:</strong> Verifying cash collections against branch records.",
            "skills-s3-li2": "<strong>Shipment Audits:</strong> Auditing branch reports to ensure accuracy and compliance.",
            "skills-s3-li3": "<strong>Contract Compliance:</strong> Monitoring leases, relations, and deadlines.",
            
            "roadmap-title": "Current Focus & Roadmap",
            "roadmap-label": "Mastering Advanced Automation & Hardware Bridges",
            "roadmap-summary": "Currently building automated pipeline workflows and connecting full-stack web environments with IoT microcontroller modules during this vacation.",
            "roadmap-step1-title": "Core Web & Backend Bridges",
            "roadmap-step1-desc": "Created API endpoints and webhook integrations inside Django.",
            "roadmap-step2-title": "Advanced Automation Workflows",
            "roadmap-step2-desc": "Mapping data schemas and building workflow integrations in Make.",
            "roadmap-step3-title": "Hardware Loop & Sensory Data",
            "roadmap-step3-desc": "Interfacing physical sensors to the dashboard via MQTT protocols.",
            
            "projects-title": "Featured Projects",
            "projects-p1-tag": "Educational Platforms",
            "projects-p1-title": "Comprehensive Academic Portal",
            "projects-p1-link": "Visit Website",
            
            "projects-p2-tag": "Student Services",
            "projects-p2-title": "Student Support & Assistance Website",
            "projects-p2-link": "Visit Website",
            
            "projects-p3-tag": "Corporate Websites",
            "projects-p3-title": "HR Company Website",
            "projects-p3-link": "Visit Website",
            
            "projects-p4-tag": "Educational Platforms",
            "projects-p4-title": "Learning Platform for Teachers",
            "projects-p4-link": "Visit Website",
            
            "projects-p5-tag": "Event Invitations",
            "projects-p5-title": "Digital Wedding Invitation",
            "projects-p5-link": "Visit Website",
            
            "certs-title": "Certifications & Qualifications",
            "certs-btn-view": "View Details",
            "certs-modal-hours": "Hours",
            "certs-modal-date": "Date",
            "certs-modal-topics": "Syllabus / Focus Areas",
            "certs-modal-open-doc": "Open Original Document",
            "certs-c1-title": "Full Stack Web Development",
            "certs-c2-title": "Solidworks Course (Completion)",
            "certs-c4-title": "Solidworks Course (Attendance)",
            "certs-c3-title": "Advanced Excel",
            
            "footer-copyright": "© 2026 Mohamed Mohamed Atia Mohamed",
            "footer-subtitle": "Zagazig National University // Mechatronics Engineering",
            
            "wa-chat-name": "Mohamed Atia",
            "wa-chat-status": "Typically replies in minutes",
            "wa-chat-status-typing": "typing...",
            "wa-chat-msg": "Hello",
            "wa-chat-input-placeholder": "Type a message..."
        },
        ar: {
            "title": "محمد عطية // معرض الأعمال",
            "header-name": "محمد",
            "menu-header": "التنقل",
            "nav-home": "الرئيسية",
            "nav-about": "من أنا",
            "nav-skills": "المهارات",
            "nav-experience": "الخبرة العمليّة",
            "nav-projects": "المشاريع",
            "nav-certs": "الشهادات",
            
            "hero-tag": "هندسة ميكاترونكس • برمجيات • أتمتة",
            "hero-title": "حيث يلتقي <span class=\"accent-color\">الكود بالآلات.</span>",
            "hero-desc": "أنا محمد عطية، طالب هندسة ميكاترونكس بجامعة الزقازيق الأهلية، أعمل على بناء أنظمة برمجية وحلول أتمتة وأنظمة تشغيلية لمشكلات واقعية. أجمع بين الهندسة وتطوير الـBackend والبيانات وتحسين العمليات لتحويل سير العمل المعقد إلى أنظمة عملية وأكثر كفاءة.",
            "hero-btn": "عرض المشاريع",
            "hero-btn-contact": "تواصل معي",
            
            "cad-title": "محاكي الأنظمة الهندسية",
            "cad-telemetry": "زوايا الدوران: X:<span id=\"cad-x\">0°</span> Y:<span id=\"cad-y\">0°</span> Z:<span id=\"cad-z\">0°</span>",
            
            "about-title": "هندسة الأنظمة. وبناء الحلول.",
            "about-p1": "أنا طالب هندسة ميكاترونكس بجامعة الزقازيق الأهلية، ولدي خبرة عملية في بناء الأنظمة البرمجية والمنصات الرقمية والحلول التشغيلية.",
            "about-p2": "أجمع في عملي بين التفكير الهندسي وتطوير الـFull-Stack والـBackend وقواعد البيانات وسير عمل الأتمتة وتحسين العمليات. أهتم بشكل خاص بالأنظمة التي تربط البرمجيات بالعمليات الواقعية، بهدف جعل الإجراءات المعقدة أبسط وأسرع وأكثر اعتمادية.",
            "about-p3": "وبجانب دراستي الهندسية، أعمل على مشاريع حقيقية في مجالات الشحن واللوجستيات والمنصات الجامعية وأنظمة الأعمال والأتمتة.",
            "about-build-1": "منصات ويب متكاملة",
            "about-build-2": "أنظمة Backend وقواعد بيانات",
            "about-build-3": "أتمتة سير العمل",
            "about-build-4": "حلول هندسية وتشغيلية",
            
            "skills-title": "المهارات التقنية",
            "skills-cat-programming": "لغات البرمجة",
            "skills-cat-web": "تطوير الويب",
            "skills-cat-engineering": "الهندسة والتصميم (CAD)",
            "skills-cat-office": "الإنتاجية المكتبية",
            "skill-excel": "مايكروسوفت إكسيل (متقدم)",
            "skill-word": "مايكروسوفت وورد",
            "skill-ppt": "مايكروسوفت باوربوينت",
            "skill-cpp": "سي بلس بلس (C++)",
            "skill-python": "بايثون (Python)",
            "skill-web-dev": "مطور ويب متكامل (Python Developer)",
            "skill-django": "إطارات عمل (Django & Flask)",
            "skill-frontend": "تطوير الواجهات (HTML/CSS/JS)",
            "skill-solidworks": "سوليدووركس (SolidWorks)",
            "skill-matlab": "ماتلاب (MATLAB & Simulink)",
            "skill-iot": "أتمتة وإنترنت الأشياء (MQTT, ESP32)",
            "skill-databases": "قواعد البيانات (PostgreSQL)",
            
            "experience-title": "الخبرات التشغيلية والفنية",
            "skills-role-badge": "المنصب الحالي",
            "skills-role-title": "منسق العمليات والأداء",
            "skills-role-company": "مؤسسة لمسة السعادة ومؤسسة عالم المثالية (المملكة العربية السعودية)",
            "skills-role-desc": "دعم العمليات اللوجستية عبر 6 فروع لشركة أرامكس.",
            
            "skills-s1-title": "إدارة العمليات والشحنات",
            "skills-s1-desc": "مراقبة وتتبع قنوات العمليات اللوجستية المحلية والدولية.",
            "skills-s1-li1": "<strong>مراقبة الفروع المتعددة:</strong> تتبع الشحنات المحلية والدولية عبر الفروع التشغيلية المتعددة.",
            "skills-s1-li2": "<strong>التتبع الدولي:</strong> متابعة الشحنات الدولية حتى التسليم النهائي وحل المشكلات التشغيلية.",
            "skills-s1-li3": "<strong>الحد من المخاطر:</strong> تحديد المخاطر التشغيلية وتنبيه الفروع لتقليل المرتجعات والخسائر.",
            
            "skills-s2-title": "تحليلات الأداء ومؤشرات القياس",
            "skills-s2-desc": "إنشاء قنوات إعداد التقارير ولوحات المتابعة التشغيلية للإدارة.",
            "skills-s2-li1": "<strong>لوحات مؤشرات الأداء:</strong> بناء مؤشرات قياس أداء الفروع الشهرية ولوحات المتابعة التشغيلية.",
            "skills-s2-li2": "<strong>تقارير الشحنات المتأخرة:</strong> إعداد تقارير يومية للشحنات المتأخرة (6+ و 10+ أيام) ومتابعة الإجراءات.",
            "skills-s2-li3": "<strong>رؤى تشغيلية:</strong> دعم الإدارة برؤى الأداء وتوصيات تحسين وتبسيط العمليات.",
            
            "skills-s3-title": "التدقيق المالي والامتثال",
            "skills-s3-desc": "ضمان دقة البيانات، والتسويات المالية، والامتثال للعقود والالتزامات.",
            "skills-s3-li1": "<strong>التسوية النقدية:</strong> مطابقة التحصيلات النقدية اليومية مع سجلات الفروع والتقارير التشغيلية.",
            "skills-s3-li2": "<strong>تدقيق الشحنات:</strong> تدقيق بيانات الشحنات وتقارير الفروع لضمان الدقة والامتثال للسياسات.",
            "skills-s3-li3": "<strong>إدارة الامتثال والتعاقدات:</strong> متابعة تجديد الإيجارات، العقود، متطلبات العلاقات الدولية، والمواعيد النهائية.",
            
            "roadmap-title": "التركيز الحالي وخطة العمل",
            "roadmap-label": "إتقان الأتمتة المتقدمة وجسور العتاد (Hardware)",
            "roadmap-summary": "أقوم حالياً ببناء مسارات عمل مؤتمتة وتوصيل بيئات الويب بالحساسات والمتحكمات الدقيقة (IoT) خلال هذه الإجازة.",
            "roadmap-step1-title": "أساسيات الويب وجسور الـ Backend",
            "roadmap-step1-desc": "إنشاء نقاط نهاية للـ APIs وتكاملات الويب هوكس داخل دجانغو.",
            "roadmap-step2-title": "مسارات عمل الأتمتة المتقدمة",
            "roadmap-step2-desc": "تخطيط مخططات البيانات وبناء تكاملات سير العمل في Make.",
            "roadmap-step3-title": "حلقة العتاد وبيانات الحساسات",
            "roadmap-step3-desc": "ربط الحساسات المادية بلوحة التحكم باستخدام بروتوكولات MQTT.",
            
            "projects-title": "المشاريع المميزة",
            "projects-p1-tag": "منصات تعليمية",
            "projects-p1-title": "منصة جامعية شاملة",
            "projects-p1-link": "زيارة الموقع",
            
            "projects-p2-tag": "خدمات طلابية",
            "projects-p2-title": "موقع دعم الطلاب والمساعدة",
            "projects-p2-link": "زيارة الموقع",
            
            "projects-p3-tag": "مواقع شركات",
            "projects-p3-title": "موقع شركة موارد بشرية",
            "projects-p3-link": "زيارة الموقع",
            
            "projects-p4-tag": "منصات تعليمية",
            "projects-p4-title": "منصة تعليمية للمعلمين",
            "projects-p4-link": "زيارة الموقع",
            
            "projects-p5-tag": "دعوات المناسبات",
            "projects-p5-title": "دعوة زفاف إلكترونية (عبدالله ودينا)",
            "projects-p5-link": "زيارة الموقع",
            
            "certs-title": "الشهادات والمؤهلات",
            "certs-btn-view": "عرض التفاصيل",
            "certs-modal-hours": "الساعات",
            "certs-modal-date": "الفترة",
            "certs-modal-topics": "المحاور الرئيسية",
            "certs-modal-open-doc": "فتح المستند الأصلي",
            "certs-c1-title": "تطوير الويب المتكامل",
            "certs-c2-title": "دورة سوليدووركس (إتمام)",
            "certs-c4-title": "دورة سوليدووركس (حضور)",
            "certs-c3-title": "مساق إكسيل المتقدم",
            
            "footer-copyright": "© 2026 محمد محمد عطية محمد",
            "footer-subtitle": "جامعة الزقازيق الأهلية // هندسة الميكاترونكس",
            
            "wa-chat-name": "محمد عطية",
            "wa-chat-status": "يرد عادةً خلال دقائق",
            "wa-chat-status-typing": "يكتب الآن...",
            "wa-chat-msg": "مرحباً",
            "wa-chat-input-placeholder": "اكتب رسالة..."
        }
    };

    let currentLang = localStorage.getItem('portfolio-lang') || 'en';
    applyLanguage(currentLang);

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        localStorage.setItem('portfolio-lang', currentLang);
        applyLanguage(currentLang);
    });

    function applyLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        // Update language toggle button label
        langBtn.innerText = lang === 'ar' ? 'EN' : 'ع';

        // Translate document titles
        document.title = translations[lang]["title"];

        // Select elements by data-translate attribute
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
    }
}

/* ==========================================
   1C. HERO ACTIONS INTERACTION
   ========================================== */
function initHeroActions() {
    const contactBtn = document.getElementById('heroContactBtn');
    if (!contactBtn) return;
    contactBtn.addEventListener('click', (e) => {
        const target = document.querySelector('.page-footer') || document.querySelector('footer');
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

/* ==========================================
   2. AMBIENT BACKGROUND PARTICLES
   ========================================== */
function initCanvasBackground() {
    const canvas = document.getElementById('cyberCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const mouse = { x: null, y: null, targetX: null, targetY: null };
    
    // Smooth mouse coordinates for parallax tilt
    window.addEventListener('mousemove', (e) => {
        mouse.targetX = e.clientX;
        mouse.targetY = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
        mouse.targetX = null;
        mouse.targetY = null;
    });

    // Spawn ripples on click
    const clicks = [];
    window.addEventListener('click', (e) => {
        clicks.push({
            x: e.clientX,
            y: e.clientY,
            time: 0,
            maxRadius: 300,
            amplitude: 150
        });
        // Limit active click waves
        if (clicks.length > 5) clicks.shift();
    });

    // Grid configuration
    const cols = 36;
    const rows = 26;
    const spacingX = 72;
    const spacingZ = 72;
    const gridWidth = (cols - 1) * spacingX;
    const gridDepth = (rows - 1) * spacingZ;

    // View settings
    const fov = 900; // perspective focal length
    const cameraDistance = 1100;
    const basePitch = 1.15; // pitch rotation angle (view from top)
    const baseYaw = 0.35; // yaw rotation angle

    let tick = 0;

    // Floating technical glyphs (brackets, math, gears)
    const glyphs = ['{ }', '∫', 'd/dt', 'θ', '∑', 'λ', 'F=ma', '101', '010', 'ZNU', '⚙'];
    const floatingGlyphs = [];
    const glyphCount = 8;
    for (let i = 0; i < glyphCount; i++) {
        floatingGlyphs.push({
            x: Math.random() * width,
            y: Math.random() * height,
            text: glyphs[Math.floor(Math.random() * glyphs.length)],
            speed: Math.random() * 0.15 + 0.05,
            size: Math.floor(Math.random() * 8) + 10,
            opacity: Math.random() * 0.15 + 0.05
        });
    }

    function animate() {
        tick += 1.2;
        ctx.clearRect(0, 0, width, height);

        const isDark = document.body.classList.contains('dark-mode');
        
        // Draw floating mechatronic glyphs first
        ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(27, 131, 84, 0.04)';
        floatingGlyphs.forEach(g => {
            ctx.font = `${g.size}px "Fira Code", monospace`;
            ctx.fillText(g.text, g.x, g.y);
            g.y -= g.speed;
            if (g.y < -30) {
                g.y = height + 30;
                g.x = Math.random() * width;
                g.text = glyphs[Math.floor(Math.random() * glyphs.length)];
            }
        });

        // Dynamic camera orientation responsive to mouse position
        let currentPitch = basePitch;
        let currentYaw = baseYaw;
        
        if (mouse.targetX !== null && mouse.targetY !== null) {
            if (mouse.x === null) mouse.x = mouse.targetX;
            if (mouse.y === null) mouse.y = mouse.targetY;
            
            // Smooth cursor interpolation
            mouse.x += (mouse.targetX - mouse.x) * 0.05;
            mouse.y += (mouse.targetY - mouse.y) * 0.05;
            
            const mousePercentX = (mouse.x / width) - 0.5;
            const mousePercentY = (mouse.y / height) - 0.5;
            currentYaw = baseYaw + mousePercentX * 0.22;
            currentPitch = basePitch + mousePercentY * 0.12;
        } else {
            if (mouse.x !== null) {
                mouse.x += (width / 2 - mouse.x) * 0.05;
                mouse.y += (height / 2 - mouse.y) * 0.05;
                const mousePercentX = (mouse.x / width) - 0.5;
                const mousePercentY = (mouse.y / height) - 0.5;
                currentYaw = baseYaw + mousePercentX * 0.22;
                currentPitch = basePitch + mousePercentY * 0.12;
                if (Math.abs(mouse.x - width / 2) < 1 && Math.abs(mouse.y - height / 2) < 1) {
                    mouse.x = null;
                    mouse.y = null;
                }
            }
        }

        // Generate base terrain grid height
        const projectedGrid = [];
        for (let c = 0; c < cols; c++) {
            projectedGrid[c] = [];
            for (let r = 0; r < rows; r++) {
                let x = c * spacingX - gridWidth / 2;
                let z = r * spacingZ - gridDepth / 2;
                
                const distFromCenter = Math.sqrt(x * x + z * z);
                
                // Beautiful organic multi-sine waves
                const wave1 = Math.sin(distFromCenter * 0.003 - tick * 0.012) * 55;
                const wave2 = Math.cos((x + z) * 0.002 - tick * 0.008) * 30;
                
                projectedGrid[c][r] = { x, y: wave1 + wave2, z };
            }
        }

        // Setup 3D trig variables
        const cosYaw = Math.cos(currentYaw);
        const sinYaw = Math.sin(currentYaw);
        const cosPitch = Math.cos(currentPitch);
        const sinPitch = Math.sin(currentPitch);

        const centerX = width / 2;
        const centerY = height / 2 + 120; // lower center to fit layout

        const screenGrid = [];
        for (let c = 0; c < cols; c++) {
            screenGrid[c] = [];
            for (let r = 0; r < rows; r++) {
                const node = projectedGrid[c][r];
                
                // Rotations: Y-yaw, then X-pitch
                let x1 = node.x * cosYaw - node.z * sinYaw;
                let z1 = node.x * sinYaw + node.z * cosYaw;
                let y2 = node.y * cosPitch - z1 * sinPitch;
                let z2 = node.y * sinPitch + z1 * cosPitch;
                
                const scale = fov / (fov + z2 + cameraDistance);
                const sx = centerX + x1 * scale;
                const sy = centerY + y2 * scale;
                
                screenGrid[c][r] = { sx, sy, sz: z2, heightY: node.y };
            }
        }

        // Apply mouse interaction ripples to 3D grid height based on screen coordinate distance
        if (mouse.x !== null && mouse.y !== null) {
            const influenceRadius = 240;
            for (let c = 0; c < cols; c++) {
                for (let r = 0; r < rows; r++) {
                    const cell = screenGrid[c][r];
                    const dx = cell.sx - mouse.x;
                    const dy = cell.sy - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < influenceRadius) {
                        const factor = 1 - dist / influenceRadius;
                        const smoothFactor = factor * factor * (3 - 2 * factor);
                        
                        // Push mesh down/up based on cursor distance
                        projectedGrid[c][r].y += -110 * smoothFactor;
                    }
                }
            }
        }

        // Apply dynamic click ripples
        clicks.forEach((click, clickIdx) => {
            click.time += 2.5;
            const currentRadius = click.time * 4.5;
            
            if (currentRadius > click.maxRadius) {
                clicks.splice(clickIdx, 1);
                return;
            }

            const waveWidth = 80;
            const opacity = 1 - (currentRadius / click.maxRadius);

            for (let c = 0; c < cols; c++) {
                for (let r = 0; r < rows; r++) {
                    const cell = screenGrid[c][r];
                    const dx = cell.sx - click.x;
                    const dy = cell.sy - click.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    // If cell is inside the wave front
                    const distToWave = Math.abs(dist - currentRadius);
                    if (distToWave < waveWidth) {
                        const force = 1 - (distToWave / waveWidth);
                        const waveFactor = Math.sin((distToWave / waveWidth) * Math.PI) * force;
                        // Add ripple deflection to node height
                        projectedGrid[c][r].y += Math.sin(tick * 0.15 - dist * 0.05) * click.amplitude * waveFactor * opacity;
                    }
                }
            }
        });

        // Re-project screenGrid if height coordinates changed from mouse/click ripples
        if ((mouse.x !== null && mouse.y !== null) || clicks.length > 0) {
            for (let c = 0; c < cols; c++) {
                for (let r = 0; r < rows; r++) {
                    const node = projectedGrid[c][r];
                    let x1 = node.x * cosYaw - node.z * sinYaw;
                    let z1 = node.x * sinYaw + node.z * cosYaw;
                    let y2 = node.y * cosPitch - z1 * sinPitch;
                    let z2 = node.y * sinPitch + z1 * cosPitch;
                    const scale = fov / (fov + z2 + cameraDistance);
                    screenGrid[c][r] = {
                        sx: centerX + x1 * scale,
                        sy: centerY + y2 * scale,
                        sz: z2,
                        heightY: node.y
                    };
                }
            }
        }

        // Draw mesh grid lines
        const hueBase = isDark ? 160 : 153;      // 160 = Emerald Green, 153 = ZNUE Green
        const satBase = isDark ? 84 : 51;
        const lightBase = isDark ? 45 : 34;
        
        const hueHighlight = isDark ? 190 : 210; // 190 = Cyan, 210 = Deep Blue
        const satHighlight = isDark ? 92 : 75;
        const lightHighlight = isDark ? 55 : 45;

        // Depth bounds for depth fading
        const maxDepth = gridDepth * 0.75;
        const minDepth = -gridDepth * 0.75;

        ctx.lineWidth = isDark ? 0.95 : 1.15;

        for (let c = 0; c < cols; c++) {
            for (let r = 0; r < rows; r++) {
                const p = screenGrid[c][r];
                
                // Draw horizontal line to the right
                if (c < cols - 1) {
                    const pRight = screenGrid[c + 1][r];
                    drawLine(p, pRight);
                }
                
                // Draw vertical line to the bottom
                if (r < rows - 1) {
                    const pBottom = screenGrid[c][r + 1];
                    drawLine(p, pBottom);
                }
            }
        }

        function drawLine(p1, p2) {
            // Clip line if completely off screen bounds
            if (p1.sx < -80 || p1.sx > width + 80 || p1.sy < -80 || p1.sy > height + 80) return;
            if (p2.sx < -80 || p2.sx > width + 80 || p2.sy < -80 || p2.sy > height + 80) return;

            // Interpolate color values based on height
            const avgHeight = (p1.heightY + p2.heightY) / 2;
            const heightRatio = Math.max(0, Math.min(1, (avgHeight + 90) / 180));

            const h = hueBase + (hueHighlight - hueBase) * heightRatio;
            const s = satBase + (satHighlight - satBase) * heightRatio;
            const l = lightBase + (lightHighlight - lightBase) * heightRatio;

            // Fog depth fading factor
            const avgDepth = (p1.sz + p2.sz) / 2;
            let depthRatio = (avgDepth - minDepth) / (maxDepth - minDepth);
            depthRatio = Math.max(0, Math.min(1, depthRatio));
            
            // Farthest is faint, closest is bright
            const opacity = (1 - depthRatio) * (isDark ? 0.45 : 0.35);

            ctx.strokeStyle = `hsla(${h}, ${s}%, ${l}%, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p1.sx, p1.sy);
            ctx.lineTo(p2.sx, p2.sy);
            ctx.stroke();
        }

        requestAnimationFrame(animate);
    }

    animate();
}

/* ==========================================
   3. 3D INTERACTIVE CAD ROTATING GEAR
   ========================================== */
function initCADVisualizer() {
    const canvas = document.getElementById('cadCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.clientWidth;
    let height = canvas.height = canvas.clientHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = canvas.clientWidth;
        height = canvas.height = canvas.clientHeight;
    });

    const vertices = [];
    const edges = [];

    const numPoints = 12;
    const innerRadius = 35;
    const outerRadius = 60;
    const thickness = 30;

    // Generate Vertices (Front & Back)
    for (let f = 0; f < 2; f++) {
        const zVal = f === 0 ? -thickness / 2 : thickness / 2;
        
        for (let i = 0; i < numPoints; i++) {
            const angle = (i / numPoints) * Math.PI * 2;
            
            const ix = Math.cos(angle) * innerRadius;
            const iy = Math.sin(angle) * innerRadius;
            vertices.push({ x: ix, y: iy, z: zVal });

            const radius = (i % 2 === 0) ? outerRadius : outerRadius - 15;
            const ox = Math.cos(angle) * radius;
            const oy = Math.sin(angle) * radius;
            vertices.push({ x: ox, y: oy, z: zVal });
        }
    }

    const faceOffset = numPoints * 2;

    // Generate Edges
    for (let i = 0; i < faceOffset; i += 2) {
        const next = (i + 2) % faceOffset;
        const nextOuter = (i + 3) % faceOffset;

        edges.push([i, next]);
        edges.push([i + 1, nextOuter]);
        edges.push([i, i + 1]);

        edges.push([i + faceOffset, next + faceOffset]);
        edges.push([i + 1 + faceOffset, nextOuter + faceOffset]);
        edges.push([i + faceOffset, i + 1 + faceOffset]);

        edges.push([i, i + faceOffset]);
        edges.push([i + 1, i + 1 + faceOffset]);
    }

    let angleX = -0.6;
    let angleY = 0.5;
    let angleZ = 0.2;
    let isAutoRotating = true;
    let currentView = 'iso';

    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        isAutoRotating = false;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;

        angleY += deltaX * 0.007;
        angleX += deltaY * 0.007;

        prevMouseX = e.clientX;
        prevMouseY = e.clientY;

        if (currentView !== 'iso') {
            setViewMode('iso');
        }
    });

    const viewButtons = document.querySelectorAll('.cad-btn');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.getAttribute('data-view');
            setViewMode(view);
        });
    });

    function setViewMode(view) {
        currentView = view;
        isAutoRotating = (view === 'iso');

        viewButtons.forEach(b => b.classList.remove('active'));
        document.querySelector(`.cad-btn[data-view="${view}"]`).classList.add('active');

        if (view === 'front') {
            angleX = 0; angleY = 0; angleZ = 0;
        } else if (view === 'top') {
            angleX = Math.PI / 2; angleY = 0; angleZ = 0;
        } else if (view === 'side') {
            angleX = 0; angleY = Math.PI / 2; angleZ = 0;
        } else if (view === 'iso') {
            angleX = -0.6; angleY = 0.5; angleZ = 0.2;
        }
    }

    function renderCADPart() {
        ctx.clearRect(0, 0, width, height);

        const centerX = width / 2;
        const centerY = height / 2;

        const isDark = document.body.classList.contains('dark-mode');
        
        // Draw axes lines (faint)
        ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, centerY); ctx.lineTo(width, centerY);
        ctx.moveTo(centerX, 0); ctx.lineTo(centerX, height);
        ctx.stroke();

        // Project rotated vertices
        const rotated = vertices.map(v => {
            // X-rotation
            let y1 = v.y * Math.cos(angleX) - v.z * Math.sin(angleX);
            let z1 = v.y * Math.sin(angleX) + v.z * Math.cos(angleX);
            
            // Y-rotation
            let x2 = v.x * Math.cos(angleY) + z1 * Math.sin(angleY);
            let z2 = -v.x * Math.sin(angleY) + z1 * Math.cos(angleY);
            
            // Z-rotation
            let x3 = x2 * Math.cos(angleZ) - y1 * Math.sin(angleZ);
            let y3 = x2 * Math.sin(angleZ) + y1 * Math.cos(angleZ);

            return { x: x3, y: y3, z: z2 };
        });

        const projected = rotated.map(r => {
            const scale = 1.35;
            return {
                x: centerX + r.x * scale,
                y: centerY + r.y * scale
            };
        });

        // Draw Edges
        ctx.strokeStyle = isDark ? '#10b981' : '#1b8354';
        ctx.lineWidth = 1.2;

        edges.forEach(edge => {
            const p1 = projected[edge[0]];
            const p2 = projected[edge[1]];
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
        });

        // Extra Dimension lines
        if (currentView === 'front') {
            ctx.strokeStyle = isDark ? '#60a5fa' : '#0d6efd';
            ctx.fillStyle = isDark ? '#60a5fa' : '#0d6efd';
            ctx.lineWidth = 1;
            ctx.font = '9px "Fira Code", monospace';
            
            const dimY = centerY + outerRadius + 15;
            ctx.beginPath();
            ctx.moveTo(centerX - outerRadius, dimY);
            ctx.lineTo(centerX + outerRadius, dimY);
            ctx.moveTo(centerX - outerRadius, dimY - 4); ctx.lineTo(centerX - outerRadius, dimY + 4);
            ctx.moveTo(centerX + outerRadius, dimY - 4); ctx.lineTo(centerX + outerRadius, dimY + 4);
            ctx.stroke();
            ctx.fillText('Ø 120.00 mm', centerX - 28, dimY - 4);
        }

        // Update telemetry numbers
        document.getElementById('cad-x').innerText = `${Math.round(angleX * 180 / Math.PI)}°`;
        document.getElementById('cad-y').innerText = `${Math.round(angleY * 180 / Math.PI)}°`;
        document.getElementById('cad-z').innerText = `${Math.round(angleZ * 180 / Math.PI)}°`;
    }

    function animate() {
        if (isAutoRotating) {
            angleY += 0.005;
            angleX += 0.003;
        }
        renderCADPart();
        requestAnimationFrame(animate);
    }

    animate();
}

/* ==========================================
   4. ROADMAP PROGRESS BAR LOADER
   ========================================== */
function initRoadmapProgress() {
    const section = document.getElementById('roadmap');
    const fill = document.getElementById('progressBarFill');
    const text = document.getElementById('progressPercentText');

    if (!section || !fill) return;

    let hasLoaded = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasLoaded) {
                hasLoaded = true;
                runProgressBar();
            }
        });
    }, { threshold: 0.25 });

    observer.observe(section);

    function runProgressBar() {
        const targetPercent = 50; // Phase 1 complete, phase 2 active -> ~50%
        let cur = 0;

        const duration = 2000;
        const step = Math.floor(duration / targetPercent);

        const progressInterval = setInterval(() => {
            cur++;
            fill.style.width = `${cur}%`;
            text.innerText = `${cur}%`;

            if (cur >= targetPercent) {
                clearInterval(progressInterval);
            }
        }, step);
    }
}

/* ==========================================
   4B. TECHNICAL SKILLS PROGRESS BAR ANIMATION
   ========================================== */
function initTechnicalSkillsAnimation() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    if (skillBars.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percent = bar.getAttribute('data-percent');
                bar.style.width = `${percent}%`;
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.15 });

    skillBars.forEach(bar => observer.observe(bar));
}

/* ==========================================
   5. PROJECT SCHEMATIC TOGGLES
   ========================================== */
function initProjectSchematics() {
    const btns = document.querySelectorAll('.view-schematic-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const panel = document.getElementById(targetId);

            if (!panel) return;

            const btnText = btn.querySelector('.btn-text');
            const isAr = document.documentElement.getAttribute('lang') === 'ar';

            if (panel.classList.contains('active')) {
                panel.classList.remove('active');
                if (btnText) {
                    if (targetId.includes('znue')) {
                        btnText.innerText = isAr ? 'عرض مخطط الهيكل البرمجي' : 'View Architecture Diagram';
                    } else {
                        btnText.innerText = isAr ? 'عرض مخطط خط تدفق البيانات' : 'View Data Pipeline Diagram';
                    }
                }
            } else {
                // Close other open ones
                document.querySelectorAll('.project-schematic-panel.active').forEach(openPanel => {
                    openPanel.classList.remove('active');
                    const parent = openPanel.closest('.project-card');
                    const otherBtnText = parent.querySelector('.view-schematic-btn .btn-text');
                    if (otherBtnText) {
                        if (openPanel.id.includes('znue')) {
                            otherBtnText.innerText = isAr ? 'عرض مخطط الهيكل البرمجي' : 'View Architecture Diagram';
                        } else {
                            otherBtnText.innerText = isAr ? 'عرض مخطط خط تدفق البيانات' : 'View Data Pipeline Diagram';
                        }
                    }
                });

                panel.classList.add('active');
                if (btnText) btnText.innerText = isAr ? 'إخفاء المخطط' : 'Hide Diagram';

                setTimeout(() => {
                    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    });

    const closeBtns = document.querySelectorAll('.close-sch');
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const panel = btn.closest('.project-schematic-panel');
            panel.classList.remove('active');

            const parentCard = btn.closest('.project-card');
            const toggleBtn = parentCard.querySelector('.view-schematic-btn');
            const btnText = toggleBtn.querySelector('.btn-text');
            const isAr = document.documentElement.getAttribute('lang') === 'ar';
            if (btnText) {
                if (panel.id.includes('znue')) {
                    btnText.innerText = isAr ? 'عرض مخطط الهيكل البرمجي' : 'View Architecture Diagram';
                } else {
                    btnText.innerText = isAr ? 'عرض مخطط خط تدفق البيانات' : 'View Data Pipeline Diagram';
                }
            }
        });
    });
}

/* ==========================================
   6. MOBILE NAVIGATION DRAWER
   ========================================== */
function initMobileNav() {
    const toggle = document.querySelector('.nav-mobile-toggle');
    const drawer = document.querySelector('.mobile-nav-drawer');
    const closeBtn = document.getElementById('closeNavDrawer');
    if (!toggle || !drawer) return;

    const links = drawer.querySelectorAll('.nav-pill-link');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        drawer.classList.toggle('nav-open');
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            toggle.classList.remove('open');
            drawer.classList.remove('nav-open');
        });
    }

    links.forEach(l => {
        l.addEventListener('click', () => {
            toggle.classList.remove('open');
            drawer.classList.remove('nav-open');
        });
    });
}

/* ==========================================
   7. SCROLL-SPY ACTIVE LINK HIGHLIGHT
   ========================================== */
function initScrollSpy() {
    const sections = document.querySelectorAll('.page-section');
    const links = document.querySelectorAll('.nav-pill-link');

    if (sections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active-section');
                
                const id = entry.target.getAttribute('id');
                links.forEach(l => {
                    l.classList.remove('active');
                    if (l.getAttribute('href') === `#${id}`) {
                        l.classList.add('active');
                    }
                });
            }
        });
    }, {
        root: null,
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0.1
    });

    sections.forEach(s => observer.observe(s));
}

/* ==========================================
   8. CERTIFICATIONS LIGHTBOX MODALS
   ========================================== */
const certificationDetails = {
    en: {
        c1: {
            title: "Full Stack Web Development Using Python",
            inst: "Information Technology Institute (ITI)",
            hours: "145 Hours",
            date: "July 1st – August 15th, 2025",
            desc: "Intensive professional training program focusing on software architecture, backend databases, and web engineering. Highly structured curriculum covering:",
            image: "img/WhatsApp Image 2025-09-28 at 21.15.50_6680e132.jpg",
            topics: [
                "Object Oriented Programming Using Python (24 hrs.)",
                "Python Web Frameworks (Flask, Django) (30 hrs.)",
                "Client-Side Web Technologies (HTML5, CSS3, JS) (48 hrs.)",
                "Introduction to PostgreSQL Database (18 hrs.)",
                "Final Graduation Project (25 hrs.)"
            ]
        },
        c2: {
            title: "Solidworks Training Course (Completion)",
            inst: "Engovation (Certified by Egyptian Engineers Syndicate)",
            hours: "30 Hours",
            date: "April 1st – May 1st, 2025",
            desc: "Comprehensive course in mechanical computer-aided design (CAD). Certified by the Egyptian Engineers Syndicate. Earned with a grade of Excellent.",
            image: "img/1759502983617.jpg",
            topics: [
                "3D Part Modeling & Sketching (10 hrs.)",
                "Mechanical Assemblies & Mates (8 hrs.)",
                "2D Technical Drafts & Engineering Drawings (6 hrs.)",
                "Design Animation & Motion Simulation (6 hrs.)"
            ]
        },
        c4: {
            title: "Solidworks Training Course (Attendance)",
            inst: "Engovation (Certified by Egyptian Engineers Syndicate)",
            hours: "30 Hours",
            date: "April 1st – May 1st, 2025",
            desc: "Official attendance certificate for the 30-hour Solidworks training program, verifying participation and standard coursework completion.",
            image: "img/1759502983418.jpg",
            topics: [
                "3D Part Modeling & Sketching (10 hrs.)",
                "Mechanical Assemblies & Mates (8 hrs.)",
                "2D Technical Drafts & Engineering Drawings (6 hrs.)",
                "Design Animation & Motion Simulation (6 hrs.)"
            ]
        },
        c3: {
            title: "Advanced Excel",
            inst: "Edraak Platform (إدراك)",
            hours: "3 Hours",
            date: "June 21st, 2025",
            desc: "Interactive training course covering high-level spreadsheet modeling and reporting tools:",
            image: "img/1750573365989.jpg",
            topics: [
                "Specialized and Conditional Cell Formatting",
                "Advanced Logic, Math, and Text Functions",
                "Pivot Tables & Dynamic Reporting Dashboards",
                "Advanced Data Visualization & Interactive Charts"
            ]
        }
    },
    ar: {
        c1: {
            title: "تطوير الويب المتكامل باستخدام بايثون",
            inst: "معهد تكنولوجيا المعلومات (ITI)",
            hours: "145 ساعة تدريبية",
            date: "1 يوليو – 15 أغسطس 2025",
            desc: "برنامج تدريبي مكثف يركز على بنية البرمجيات، قواعد البيانات، وتطوير الويب المتكامل. منهج منظم للغاية يغطي المواضيع التالية:",
            image: "img/WhatsApp Image 2025-09-28 at 21.15.50_6680e132.jpg",
            topics: [
                "البرمجة كائنية التوجه بلغة بايثون (24 ساعة)",
                "إطارات عمل ويب بايثون (فلاسك، دجانغو) (30 ساعة)",
                "تقنيات الويب للمستعرض (HTML5, CSS3, JS) (48 ساعة)",
                "مقدمة في قواعد بيانات PostgreSQL (18 ساعة)",
                "مشروع التخرج النهائي (25 ساعة)"
            ]
        },
        c2: {
            title: "دورة سوليدووركس (شهادة إتمام)",
            inst: "إنجوفيشين (معتمد من نقابة المهندسين المصرية)",
            hours: "30 ساعة تدريبية",
            date: "1 أبريل – 1 مايو 2025",
            desc: "دورة شاملة في التصميم الميكانيكي بمساعدة الحاسوب (CAD)، معتمدة من نقابة المهندسين المصرية وحصلت على تقدير عام ممتاز.",
            image: "img/1759502983617.jpg",
            topics: [
                "النمذجة ثلاثية الأبعاد والرسم الهندسي (10 ساعات)",
                "التجميعات الميكانيكية والعلاقات (8 ساعات)",
                "المساقط الهندسية والرسومات الفنية ثنائية الأبعاد (6 ساعات)",
                "أتمتة التصميم ومحاكاة الحركة (6 ساعات)"
            ]
        },
        c4: {
            title: "دورة سوليدووركس (شهادة حضور)",
            inst: "إنجوفيشين (معتمد من نقابة المهندسين المصرية)",
            hours: "30 ساعة تدريبية",
            date: "1 أبريل – 1 مايو 2025",
            desc: "شهادة حضور رسمية لإتمام 30 ساعة تدريبية في برنامج سوليدووركس (Solidworks)، تؤكد المشاركة الكاملة وإكمال الدورة.",
            image: "img/1759502983418.jpg",
            topics: [
                "النمذجة ثلاثية الأبعاد والرسم الهندسي (10 ساعات)",
                "التجميعات الميكانيكية والعلاقات (8 ساعات)",
                "المساقط الهندسية والرسومات الفنية ثنائية الأبعاد (6 ساعات)",
                "أتمتة التصميم ومحاكاة الحركة (6 ساعات)"
            ]
        },
        c3: {
            title: "مساق إكسيل المتقدم (Advanced Excel)",
            inst: "منصة إدراك (Edraak)",
            hours: "3 ساعات تدريبية",
            date: "21 يونيو 2025",
            desc: "دورة تدريبية تفاعلية تغطي النمذجة المتقدمة لجداول البيانات وأدوات التقارير:",
            image: "img/1750573365989.jpg",
            topics: [
                "التنسيق الشرطي والمخصص للبرمجة",
                "الدوال المنطقية والرياضية والنصية المتقدمة",
                "الجداول المحورية والتقارير التفاعلية (Dashboards)",
                "تمثيل البيانات المتقدم والرسومات البيانية التفاعلية"
            ]
        }
    }
};

function initCertModals() {
    const certCards = document.querySelectorAll('.new-cert-card');
    const modal = document.getElementById('certModal');
    const closeBtn = document.getElementById('closeCertModal');
    
    if (!modal || !closeBtn) return;
    
    const mImg = document.getElementById('modalCertImg');
    const mTitle = document.getElementById('modalCertTitle');
    const mIssuer = document.getElementById('modalCertIssuer');
    const mHours = document.getElementById('modalCertHours');
    const mDate = document.getElementById('modalCertDate');
    const mDesc = document.getElementById('modalCertDesc');
    const mTopicsList = document.getElementById('modalCertTopicsList');
    const mLink = document.getElementById('modalCertLink');
    
    let activeCertId = null;

    certCards.forEach(card => {
        card.addEventListener('click', () => {
            const certId = card.getAttribute('data-cert-id');
            activeCertId = certId;
            populateModal(certId);
            openModal();
        });
    });

    mImg.addEventListener('click', () => {
        if (mLink && mLink.href) {
            window.open(mLink.href, '_blank');
        }
    });

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Close on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Handle updating modal contents dynamically when language changes
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            if (modal.classList.contains('active') && activeCertId) {
                // Wait briefly for document lang attribute to be updated by main script
                setTimeout(() => {
                    populateModal(activeCertId);
                }, 50);
            }
        });
    }

    function populateModal(certId) {
        const currentLang = document.documentElement.getAttribute('lang') || 'en';
        const data = certificationDetails[currentLang][certId];
        
        if (!data) return;
        
        mImg.src = data.image;
        mImg.alt = data.title;
        mTitle.innerText = data.title;
        mIssuer.innerText = data.inst;
        mHours.innerText = data.hours;
        mDate.innerText = data.date;
        mDesc.innerText = data.desc;
        
        if (mLink) {
            mLink.href = data.image;
        }
        
        // Populate bullet points
        mTopicsList.innerHTML = '';
        data.topics.forEach(topic => {
            const li = document.createElement('li');
            li.innerText = topic;
            mTopicsList.appendChild(li);
        });
    }

    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent main page scrolling
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore page scrolling
        activeCertId = null;
    }
}

/* ==========================================
   9. CAROUSEL / SLIDER INITIALIZATION & LOGIC
   ========================================== */
function initCarousels() {
    initCarousel('projects-carousel', 'projects-track', 'projects-prev-btn', 'projects-next-btn');
    initCarousel('certs-carousel', 'certs-track', 'certs-prev-btn', 'certs-next-btn');
}

function initCarousel(viewportId, trackId, prevBtnId, nextBtnId) {
    const viewport = document.getElementById(viewportId);
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    
    if (!viewport || !track || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    
    function updateCarousel() {
        const cards = track.children;
        if (cards.length === 0) return;
        
        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
        const viewportWidth = viewport.getBoundingClientRect().width;
        
        // Calculate visible items dynamically based on card sizing
        const visibleItems = Math.round((viewportWidth + gap) / (cardWidth + gap)) || 1;
        const maxIndex = Math.max(0, cards.length - visibleItems);
        
        // Bound indices
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        if (currentIndex < 0) currentIndex = 0;
        
        const translateOffset = currentIndex * (cardWidth + gap);
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        const multiplier = isRtl ? 1 : -1;
        
        track.style.transform = `translateX(${multiplier * translateOffset}px)`;
        
        // Update navigation states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === maxIndex;
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();
    });
    
    // Recalculate on window resize
    window.addEventListener('resize', () => {
        setTimeout(updateCarousel, 50);
    });
    
    // Listen for language toggles to adjust positions (RTL direction swaps signs)
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            setTimeout(updateCarousel, 100);
        });
    }
    
    // Initial calculation
    updateCarousel();
}

/* ==========================================
   10. PREMIUM FLOATING WHATSAPP CHAT WIDGET LOGIC
   ========================================== */
function initWhatsAppWidget() {
    const trigger = document.getElementById('waFloatBtn');
    const chatWindow = document.getElementById('waChatWindow');
    const closeBtn = document.getElementById('waCloseChat');
    const chatTime = document.getElementById('waChatTime');
    const statusText = document.getElementById('waChatStatus');
    const typingIndicator = document.getElementById('waChatTyping');
    const msgBubble = document.getElementById('waMsgBubble');
    const chatInput = document.getElementById('waChatInput');
    const sendBtn = document.getElementById('waSendBtn');
    
    if (!trigger || !chatWindow || !closeBtn) return;
    
    let typingTimeout = null;
    let showBubbleTimeout = null;
    
    // Toggle chat bubble active state
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = chatWindow.classList.contains('active');
        if (isActive) {
            closeChat();
        } else {
            openChat();
        }
    });
    
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeChat();
    });
    
    // Send message logic
    function sendMessage() {
        const text = chatInput.value.trim();
        const phoneNumber = "201030968825";
        let url = `https://wa.me/${phoneNumber}`;
        
        if (text) {
            url += `?text=${encodeURIComponent(text)}`;
        }
        
        window.open(url, '_blank', 'noopener,noreferrer');
        chatInput.value = ''; // clear input after send
        closeChat();
    }
    
    if (sendBtn) {
        sendBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sendMessage();
        });
    }
    
    if (chatInput) {
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });
        
        // Prevent closing window when clicking input
        chatInput.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    
    // Auto-close widget when clicking outside
    document.addEventListener('click', (e) => {
        if (!chatWindow.contains(e.target) && !trigger.contains(e.target)) {
            closeChat();
        }
    });
    
    // Close on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && chatWindow.classList.contains('active')) {
            closeChat();
        }
    });
    
    function openChat() {
        chatWindow.classList.add('active');
        trigger.classList.add('active');
        
        // Clear previous timeouts if rapidly toggled
        clearTimeout(typingTimeout);
        clearTimeout(showBubbleTimeout);
        
        // Reset states for dynamic typing sequence
        const currentLang = document.documentElement.getAttribute('lang') || 'en';
        if (statusText) {
            statusText.innerText = currentLang === 'ar' ? 'يكتب الآن...' : 'typing...';
        }
        
        if (typingIndicator) {
            typingIndicator.style.display = 'inline-block';
            typingIndicator.style.opacity = '1';
        }
        
        if (msgBubble) {
            msgBubble.style.display = 'none';
            msgBubble.style.opacity = '0';
        }
        
        // Dynamically compute current timestamp inside message bubble
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 hour converts to 12
        minutes = minutes < 10 ? '0' + minutes : minutes;
        if (chatTime) {
            chatTime.innerText = `${hours}:${minutes} ${ampm}`;
        }
        
        // Typing animation sequence: 1.2s delay
        typingTimeout = setTimeout(() => {
            if (typingIndicator) {
                typingIndicator.style.display = 'none';
            }
            if (statusText) {
                statusText.innerText = currentLang === 'ar' ? 'يرد عادةً خلال دقائق' : 'Typically replies in minutes';
            }
            if (msgBubble) {
                msgBubble.style.display = 'flex';
                // Trigger smooth slide-in
                setTimeout(() => {
                    msgBubble.style.opacity = '1';
                    msgBubble.style.transform = 'translateY(0)';
                }, 50);
            }
        }, 1200);
    }
    
    function closeChat() {
        chatWindow.classList.remove('active');
        trigger.classList.remove('active');
        
        clearTimeout(typingTimeout);
        clearTimeout(showBubbleTimeout);
        
        // Reset message bubble styling
        if (msgBubble) {
            msgBubble.style.display = 'none';
            msgBubble.style.opacity = '0';
            msgBubble.style.transform = 'translateY(10px)';
        }
    }
}


