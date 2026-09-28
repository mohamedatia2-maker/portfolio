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
    initSkillCardsExpand();
    initProjectSchematics();
    initMobileNav();
    initScrollSpy();
    initCertModals();
    initProjectModal();
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
            "cad-model-arm": "Robotic Arm",
            "cad-model-gear": "Gear Train",
            "cad-telemetry": "Rotation Angles: X:<span id=\"cad-x\">0°</span> Y:<span id=\"cad-y\">0°</span> Z:<span id=\"cad-z\">0°</span>",
            
            "about-title": "Engineering Systems. Building Solutions.",
            "about-p1": "I’m a <strong>4th-year Mechatronics Engineering student at Zagazig National University</strong>, with a <strong>(Excellent)</strong> and hands-on experience building software systems, digital platforms, and operational solutions.",
            "about-p2": "My work combines engineering thinking with full-stack development, backend systems, databases, automation workflows, and process optimization. I’m particularly interested in systems that connect software with real-world operations — making complex processes simpler, faster, and more reliable.",
            "about-p3": "Alongside my engineering studies, I work on real projects involving logistics, shipping platforms, university systems, business workflows, and automation, combining technical development with practical problem-solving.",
            "about-build-1": "Full-Stack Web Platforms",
            "about-build-2": "Backend & Database Systems",
            "about-build-3": "Workflow Automation",
            "about-build-4": "Engineering & Operational Solutions",
            
            "skills-title": "Technical Skills",
            "skills-intro": "My technical background combines software development, backend systems, databases, engineering tools, automation, and digital platforms.",
            "skills-cat-programming": "Programming & Engineering Languages",
            "skills-cat-fullstack": "Full-Stack Development",
            "skills-cat-backend-db": "Backend, Databases & APIs",
            "skills-cat-cloud-services": "Cloud & Backend Services",
            "skills-cat-cloud-security": "Cloud, Infrastructure & Security",
            "skills-cat-seo-perf": "SEO & Web Performance",
            "skills-cat-deployment": "Deployment & Hosting",
            "skills-cat-dev-tools": "Development Tools",
            "skills-cat-automation-bots": "Automation & Bots",
            "skills-cat-engineering-control": "Engineering & Control",
            "skills-cat-renewable-energy": "Renewable Energy",
            "skills-cat-business-data-accounting": "Business, Data & Accounting",
            "skills-show-more": "Show More",
            "skills-show-less": "Show Less",
            
            // 1. Programming & Engineering Languages
            "skill-python": "Python",
            "skill-cpp": "C++",
            "skill-js": "JavaScript",
            "skill-ts": "TypeScript",
            "skill-html": "HTML5",
            "skill-css": "CSS3",
            
            // 2. Full-Stack Development
            "skill-django": "Django",
            "skill-flask": "Flask",
            "skill-react": "React",
            "skill-nodejs": "Node.js",
            "skill-express": "Express.js",
            "skill-rest-apis": "REST APIs",
            "skill-frontend-dev": "Frontend Development",
            "skill-backend-dev": "Backend Development",
            "skill-responsive-web": "Responsive Web Development",
            
            // 3. Backend, Databases & APIs
            "skill-py-backend": "Python Backend",
            "skill-node-backend": "Node.js Backend",
            "skill-postgres": "PostgreSQL",
            "skill-mysql": "MySQL",
            "skill-sqlite": "SQLite",
            "skill-prisma": "Prisma ORM",
            "skill-db-design": "Database Design",
            "skill-db-mgmt": "Database Management",
            "skill-sql": "SQL",
            "skill-api-dev": "API Development",
            "skill-api-integration": "API Integration",
            "skill-auth": "Authentication",
            "skill-authorization": "Authorization",
            
            // 4. Cloud & Backend Services
            "skill-firebase": "Firebase",
            "skill-firebase-auth": "Firebase Authentication",
            "skill-firebase-admin": "Firebase Admin SDK",
            "skill-firebase-storage": "Firebase Storage",
            "skill-webhooks": "Webhooks",
            "skill-third-party-api": "Third-Party API Integration",
            "skill-file-storage": "File Storage",
            "skill-notifications": "Notifications",
            "skill-backend-services": "Backend Services",
            
            // 5. Cloud, Infrastructure & Security
            "skill-cloudflare": "Cloudflare",
            "skill-cdn": "CDN",
            "skill-dns-mgmt": "DNS Management",
            "skill-caching": "Caching",
            "skill-web-infra": "Web Infrastructure",
            "skill-perf-opt": "Performance Optimization",
            "skill-web-security": "Web Security",
            "skill-security-hardening": "Security Hardening",
            "skill-rbac": "Role-Based Access Control",
            "skill-csrf-protection": "CSRF Protection",
            "skill-rate-limiting": "Rate Limiting",
            "skill-secure-file-access": "Secure File Access",
            "skill-api-security": "API Security",
            
            // 6. SEO & Web Performance
            "skill-tech-seo": "Technical SEO",
            "skill-onpage-seo": "On-Page SEO",
            "skill-metadata-opt": "Metadata Optimization",
            "skill-seo": "Search Engine Optimization",
            "skill-image-opt": "Image Optimization",
            "skill-cdn-opt": "CDN Optimization",
            "skill-browser-caching": "Browser Caching",
            "skill-pagespeed-opt": "Page Speed Optimization",
            "skill-lazy-loading": "Lazy Loading",
            "skill-seo-architecture": "SEO-Friendly Web Architecture",
            
            // 7. Deployment & Hosting
            "skill-hostinger": "Hostinger",
            "skill-vercel": "Vercel",
            "skill-netlify": "Netlify",
            "skill-railway": "Railway",
            "skill-render": "Render",
            "skill-deployment-hosting": "Deployment & Hosting",
            "skill-web-deployment": "Web Deployment",
            "skill-hosting-mgmt": "Hosting Management",
            
            // 8. Development Tools
            "skill-git": "Git",
            "skill-github": "GitHub",
            "skill-vscode": "VS Code",
            "skill-powershell": "PowerShell",
            "skill-postman": "Postman",
            "skill-chrome-devtools": "Chrome DevTools",
            "skill-npm": "npm",
            "skill-api-testing": "REST API Testing",
            "skill-debugging": "Debugging",
            "skill-version-control": "Version Control",
            
            // 9. Automation & Bots
            "skill-workflow-auto": "Workflow Automation",
            "skill-process-auto": "Process Automation",
            "skill-api-auto": "API Automation",
            "skill-wa-bots": "WhatsApp Bots",
            "skill-tg-bots": "Telegram Bots",
            "skill-wa-auto": "WhatsApp Automation",
            "skill-tg-auto": "Telegram Automation",
            "skill-auto-notifications": "Automated Notifications",
            "skill-auto-messaging": "Automated Messaging",
            "skill-bpa": "Business Process Automation",
            
            // 10. Engineering & Control
            "skill-mechatronics-eng": "Mechatronics Engineering",
            "skill-control-systems": "Control Systems",
            "skill-classical-control": "Classical Control",
            "skill-control-modeling": "Control System Modeling",
            "skill-matlab": "MATLAB",
            "skill-simulink": "Simulink",
            "skill-solidworks": "SolidWorks",
            "skill-cad": "CAD",
            "skill-eng-analysis": "Engineering Analysis",
            "skill-system-modeling": "System Modeling",
            
            // 11. Renewable Energy
            "skill-solar-energy": "Solar Energy",
            "skill-solar-pv": "Solar PV Systems",
            "skill-solar-fundamentals": "Solar Energy Fundamentals",
            "skill-renewable-systems": "Renewable Energy Systems",
            "skill-basic-energy-analysis": "Basic Energy Analysis",
            
            // 12. Business, Data & Accounting
            "skill-excel": "Microsoft Excel",
            "skill-word": "Microsoft Word",
            "skill-ppt": "Microsoft PowerPoint",
            "skill-data-analysis": "Data Analysis",
            "skill-data-processing": "Data Processing",
            "skill-reporting": "Reporting",
            "skill-dashboard-dev": "Dashboard Development",
            "skill-business-reporting": "Business Reporting",
            "skill-financial-data": "Financial Data Processing",
            "skill-accounting-systems": "Accounting Systems",
            "skill-data-reconciliation": "Data Reconciliation",
            
            "experience-title": "Experience",
            "skills-role-badge": "Current Position",
            "skills-role-title": "Operations & Performance Coordinator",
            "skills-role-company": "HappyTouch Establishment & Ideal World Establishment — Saudi Arabia",
            "skills-role-scope": "Technical Responsibility • Performance & Workflow Supervision",
            "skills-role-desc": "I take on technical and operational responsibility across the two organizations, supervising performance and workflows while improving systems, processes, and working methods. My role involves solving technical and operational problems, analyzing data and performance indicators, and turning day-to-day operational needs into practical solutions that make branch operations more efficient and organized.",
            
            "exp-c1-title": "Operations & Workflow",
            "exp-c1-desc": "Supervise daily branch workflows, simplify operational procedures, organize shipment processes, and develop practical working methods that make execution faster and more organized.",
            
            "exp-c2-title": "Performance & Data",
            "exp-c2-desc": "Supervise performance indicators, analyze branch results, compare internal records with carrier data, and prepare reports to identify discrepancies and improvement opportunities.",
            
            "exp-c3-title": "Technical & Process Improvement",
            "exp-c3-desc": "Take responsibility for technical solutions and workflow improvements, solve operational and technical problems, improve systems and reporting methods, and connect technology with real operational needs.",
            
            "exp-c4-title": "Finance & Reconciliation",
            "exp-c4-desc": "Review invoices and accounts, perform financial reconciliations, review payments and cash records, and track discrepancies related to operations.",
            
            "exp-highlight": "Focus: Turning complex operational processes into simpler, measurable, and easier-to-manage workflows.",
            
            "roadmap-title": "Current Focus & Roadmap",
            "roadmap-label": "Building My Automation & Control Engineering Foundation",
            "roadmap-progress-label": "Roadmap Progress",
            "roadmap-summary": "Currently strengthening my foundations in industrial automation and control engineering, with a focus on classical control, PLC programming, and practical automation systems. I am also connecting these engineering concepts with my software and backend experience to build better digital and operational solutions.",
            "roadmap-step1-title": "Classical Control Fundamentals",
            "roadmap-step1-desc": "Strengthening the fundamentals of control systems, including system modeling, feedback, stability, response analysis, and PID control.",
            "roadmap-step2-title": "PLC & Industrial Automation",
            "roadmap-step2-desc": "Learning PLC fundamentals, ladder logic, industrial control concepts, I/O systems, and practical automation workflows.",
            "roadmap-step3-title": "Automation Systems Integration",
            "roadmap-step3-desc": "Connecting control systems, software, sensors, and industrial communication concepts to build integrated automation solutions.",
            "roadmap-supporting": "Supporting Skills: Python • Backend Systems • APIs • Workflow Automation • IoT",
            
            "projects-title": "Featured Projects",
            "badge-web-platform": "WEB PLATFORM",
            "badge-desktop-app": "DESKTOP APPLICATION",
            "badge-academic-platform": "ACADEMIC PLATFORM",
            "badge-interactive-exp": "INTERACTIVE WEB EXPERIENCE",
            "proj-action-visit": "Visit Project",
            "proj-action-details": "View Details",
            "project-modal-close": "Close",
            "project-modal-tech-heading": "Technologies & Stack",
            "project-modal-features-heading": "Key Capabilities & Features",
            
            "proj-1-title": "ZNUE Portal",
            "proj-1-desc": "A full-stack university management platform designed to connect students, doctors, administrators, student affairs, and student union workflows in one system.",
            
            "proj-2-title": "Ship-Gate",
            "proj-2-desc": "A real-world shipping platform that connects merchants with multiple shipping carriers through one unified system for shipment creation, rate comparison, tracking, wallets, invoices, and shipping labels.",
            
            "proj-3-title": "CRM & Branch Automation System",
            "proj-3-desc": "A desktop CRM and branch automation system built to centralize customer data, generate tax invoices, track shipments, and automatically send shipping labels and customer updates through WhatsApp.",
            
            "proj-4-title": "TaskFlow",
            "proj-4-desc": "A task and project management platform that allows companies to manage employees, project managers, tasks, deadlines, and automated WhatsApp communication from one system.",
            
            "proj-5-title": "Integrated Data Analysis & Accounting System",
            "proj-5-desc": "A desktop business system that combines data analysis, accounting workflows, financial records, reconciliation, reporting, and operational data management in one application.",
            
            "proj-6-title": "ZNU Assistant",
            "proj-6-desc": "A digital assistant and information platform for the Mechatronics Engineering department, designed to organize academic information and make university resources easier to access.",
            
            "proj-7-title": "Motivera HR Website",
            "proj-7-desc": "A professional HR and recruitment company website designed to present the company, its services, capabilities, and digital presence through a modern responsive web experience.",
            
            "proj-8-title": "Wedding Invitation Website",
            "proj-8-desc": "A modern and interactive digital wedding invitation designed as a complete web experience, combining elegant visual design, animations, event information, and a personalized invitation journey.",
            
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
            "certs-c5-title": "Solar Energy Course (Completion)",
            "certs-c6-title": "Solar Energy Course (Attendance)",
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
            "nav-experience": "الخبرة",
            "nav-projects": "المشاريع",
            "nav-certs": "الشهادات",
            
            "hero-tag": "هندسة ميكاترونكس • برمجيات • أتمتة",
            "hero-title": "حيث يلتقي <span class=\"accent-color\">الكود بالآلات.</span>",
            "hero-desc": "أنا محمد عطية، طالب هندسة ميكاترونكس بجامعة الزقازيق الأهلية، أعمل على بناء أنظمة برمجية وحلول أتمتة وأنظمة تشغيلية لمشكلات واقعية. أجمع بين الهندسة وتطوير الـBackend والبيانات وتحسين العمليات لتحويل سير العمل المعقد إلى أنظمة عملية وأكثر كفاءة.",
            "hero-btn": "عرض المشاريع",
            "hero-btn-contact": "تواصل معي",
            
            "cad-title": "محاكي الأنظمة الهندسية",
            "cad-model-arm": "ذراع روبوتية",
            "cad-model-gear": "ترس ميكانيكي",
            "cad-telemetry": "زوايا الدوران: X:<span id=\"cad-x\">0°</span> Y:<span id=\"cad-y\">0°</span> Z:<span id=\"cad-z\">0°</span>",
            
            "about-title": "هندسة الأنظمة. وبناء الحلول.",
            "about-p1": "أنا <strong>طالب في الفرقة الرابعة بكلية هندسة الميكاترونكس في جامعة الزقازيق الأهلية</strong>، <strong>بتقدير (امتياز)</strong>، ولدي خبرة عملية في بناء أنظمة برمجية ومنصات رقمية وحلول تشغيلية حقيقية.",
            "about-p2": "أجمع في عملي بين التفكير الهندسي وتطوير أنظمة Full-Stack، وأنظمة Backend، وقواعد البيانات، وأتمتة سير العمل، وتحسين العمليات. وأهتم بشكل خاص بالأنظمة التي تربط البرمجيات بالعمليات الواقعية، بهدف جعل الإجراءات المعقدة أبسط وأسرع وأكثر اعتمادية.",
            "about-p3": "وبجانب دراستي الهندسية، أعمل على مشاريع حقيقية في مجالات الخدمات اللوجستية، ومنصات الشحن، والأنظمة الجامعية، وسير العمل في الشركات، والأتمتة، مع الجمع بين التطوير التقني وحل المشكلات العملية.",
            "about-build-1": "منصات ويب متكاملة",
            "about-build-2": "أنظمة Backend وقواعد بيانات",
            "about-build-3": "أتمتة سير العمل",
            "about-build-4": "حلول هندسية وتشغيلية",
            
            "skills-title": "المهارات التقنية",
            "skills-intro": "يجمع خلفيتي التقنية بين تطوير البرمجيات وأنظمة الـBackend وقواعد البيانات والأدوات الهندسية والأتمتة والمنصات الرقمية.",
            "skills-cat-programming": "البرمجة ولغات الهندسة",
            "skills-cat-fullstack": "تطوير Full-Stack",
            "skills-cat-backend-db": "Backend وقواعد البيانات وواجهات API",
            "skills-cat-cloud-services": "الخدمات السحابية وخدمات Backend",
            "skills-cat-cloud-security": "السحابة والبنية التحتية والأمان",
            "skills-cat-seo-perf": "SEO وأداء المواقع",
            "skills-cat-deployment": "النشر والاستضافة",
            "skills-cat-dev-tools": "أدوات التطوير",
            "skills-cat-automation-bots": "الأتمتة والـ Bots",
            "skills-cat-engineering-control": "الهندسة والتحكم",
            "skills-cat-renewable-energy": "الطاقة المتجددة",
            "skills-cat-business-data-accounting": "الأعمال والبيانات والمحاسبة",
            "skills-show-more": "عرض المزيد",
            "skills-show-less": "عرض أقل",
            
            // 1. Programming & Engineering Languages
            "skill-python": "Python",
            "skill-cpp": "C++",
            "skill-js": "JavaScript",
            "skill-ts": "TypeScript",
            "skill-html": "HTML5",
            "skill-css": "CSS3",
            
            // 2. Full-Stack Development
            "skill-django": "Django",
            "skill-flask": "Flask",
            "skill-react": "React",
            "skill-nodejs": "Node.js",
            "skill-express": "Express.js",
            "skill-rest-apis": "REST APIs",
            "skill-frontend-dev": "تطوير Frontend",
            "skill-backend-dev": "تطوير Backend",
            "skill-responsive-web": "تطوير مواقع متجاوبة",
            
            // 3. Backend, Databases & APIs
            "skill-py-backend": "Python Backend",
            "skill-node-backend": "Node.js Backend",
            "skill-postgres": "PostgreSQL",
            "skill-mysql": "MySQL",
            "skill-sqlite": "SQLite",
            "skill-prisma": "Prisma ORM",
            "skill-db-design": "تصميم قواعد البيانات",
            "skill-db-mgmt": "إدارة قواعد البيانات",
            "skill-sql": "SQL",
            "skill-api-dev": "تطوير واجهات API",
            "skill-api-integration": "تكامل واجهات API",
            "skill-auth": "المصادقة (Authentication)",
            "skill-authorization": "الصلاحيات (Authorization)",
            
            // 4. Cloud & Backend Services
            "skill-firebase": "Firebase",
            "skill-firebase-auth": "Firebase Authentication",
            "skill-firebase-admin": "Firebase Admin SDK",
            "skill-firebase-storage": "Firebase Storage",
            "skill-webhooks": "Webhooks",
            "skill-third-party-api": "تكامل واجهات خارجية",
            "skill-file-storage": "تخزين الملفات",
            "skill-notifications": "الإشعارات",
            "skill-backend-services": "خدمات Backend",
            
            // 5. Cloud, Infrastructure & Security
            "skill-cloudflare": "Cloudflare",
            "skill-cdn": "CDN",
            "skill-dns-mgmt": "إدارة DNS",
            "skill-caching": "التخزين المؤقت (Caching)",
            "skill-web-infra": "البنية التحتية للويب",
            "skill-perf-opt": "تحسين الأداء",
            "skill-web-security": "أمان الويب",
            "skill-security-hardening": "تعزيز الأمان والتأمين",
            "skill-rbac": "التحكم بالوصول حسب الأدوار (RBAC)",
            "skill-csrf-protection": "الحماية من هجمات CSRF",
            "skill-rate-limiting": "تحديد معدل الطلبات (Rate Limiting)",
            "skill-secure-file-access": "الوصول الآمن للملفات",
            "skill-api-security": "أمان واجهات API",
            
            // 6. SEO & Web Performance
            "skill-tech-seo": "SEO تقني",
            "skill-onpage-seo": "SEO داخلي للصفحات (On-Page)",
            "skill-metadata-opt": "تحسين البيانات الوصفية (Metadata)",
            "skill-seo": "تحسين محركات البحث (SEO)",
            "skill-image-opt": "تحسين وضغط الصور",
            "skill-cdn-opt": "تحسين التوزيع عبر CDN",
            "skill-browser-caching": "التخزين المؤقت بالمتصفح",
            "skill-pagespeed-opt": "تحسين سرعة الصفحات",
            "skill-lazy-loading": "التحميل الكسول (Lazy Loading)",
            "skill-seo-architecture": "بنية معمارية صديقة لمحركات البحث",
            
            // 7. Deployment & Hosting
            "skill-hostinger": "Hostinger",
            "skill-vercel": "Vercel",
            "skill-netlify": "Netlify",
            "skill-railway": "Railway",
            "skill-render": "Render",
            "skill-deployment-hosting": "النشر والاستضافة",
            "skill-web-deployment": "نشر تطبيقات الويب",
            "skill-hosting-mgmt": "إدارة الاستضافة",
            
            // 8. Development Tools
            "skill-git": "Git",
            "skill-github": "GitHub",
            "skill-vscode": "VS Code",
            "skill-powershell": "PowerShell",
            "skill-postman": "Postman",
            "skill-chrome-devtools": "Chrome DevTools",
            "skill-npm": "npm",
            "skill-api-testing": "اختبار واجهات API",
            "skill-debugging": "تصحيح الأخطاء (Debugging)",
            "skill-version-control": "إدارة الإصدارات",
            
            // 9. Automation & Bots
            "skill-workflow-auto": "أتمتة سير العمل",
            "skill-process-auto": "أتمتة العمليات",
            "skill-api-auto": "أتمتة واجهات API",
            "skill-wa-bots": "بوتات واتساب",
            "skill-tg-bots": "بوتات تيليجرام",
            "skill-wa-auto": "أتمتة واتساب",
            "skill-tg-auto": "أتمتة تيليجرام",
            "skill-auto-notifications": "إشعارات مؤتمتة",
            "skill-auto-messaging": "مراسلات مؤتمتة",
            "skill-bpa": "أتمتة العمليات التجارية",
            
            // 10. Engineering & Control
            "skill-mechatronics-eng": "هندسة الميكاترونكس",
            "skill-control-systems": "أنظمة التحكم",
            "skill-classical-control": "التحكم الكلاسيكي",
            "skill-control-modeling": "نمذجة أنظمة التحكم",
            "skill-matlab": "MATLAB",
            "skill-simulink": "Simulink",
            "skill-solidworks": "SolidWorks",
            "skill-cad": "التصميم الهندسي CAD",
            "skill-eng-analysis": "التحليل الهندسي",
            "skill-system-modeling": "نمذجة الأنظمة",
            
            // 11. Renewable Energy
            "skill-solar-energy": "الطاقة الشمسية",
            "skill-solar-pv": "الأنظمة الكهروضوئية (PV)",
            "skill-solar-fundamentals": "أساسيات الطاقة الشمسية",
            "skill-renewable-systems": "أنظمة الطاقة المتجددة",
            "skill-basic-energy-analysis": "التحليل الأساسي للطاقة",
            
            // 12. Business, Data & Accounting
            "skill-excel": "Microsoft Excel",
            "skill-word": "Microsoft Word",
            "skill-ppt": "Microsoft PowerPoint",
            "skill-data-analysis": "تحليل البيانات",
            "skill-data-processing": "معالجة البيانات",
            "skill-reporting": "إعداد التقارير",
            "skill-dashboard-dev": "تطوير لوحات التحكم",
            "skill-business-reporting": "تقارير الأعمال",
            "skill-financial-data": "معالجة البيانات المالية",
            "skill-accounting-systems": "الأنظمة المحاسبية",
            "skill-data-reconciliation": "تسوية ومطابقة البيانات",
            
            "experience-title": "الخبرة",
            "skills-role-badge": "المنصب الحالي",
            "skills-role-title": "منسق العمليات والأداء",
            "skills-role-company": "مؤسسة لمسة سعادة ومؤسسة عالم المثالية — السعودية",
            "skills-role-scope": "المسؤول التقني والمشرف على الأداء وسير العمل",
            "skills-role-desc": "أتولى مسؤولية تقنية وتشغيلية ضمن عمليات المؤسستين، مع الإشراف على الأداء وسير العمل وتطوير طرق العمل وتحسين الأنظمة والإجراءات. أعمل على حل المشكلات التقنية والتشغيلية، وتحليل البيانات ومؤشرات الأداء، وتحويل الاحتياجات اليومية إلى حلول عملية تجعل العمل داخل الفروع أكثر كفاءة وتنظيمًا.",
            
            "exp-c1-title": "العمليات وسير العمل",
            "exp-c1-desc": "الإشراف على سير العمل اليومي داخل الفروع، وتبسيط الإجراءات التشغيلية، وتنظيم عمليات الشحن، وتطوير طرق عمل عملية تجعل التنفيذ أسرع وأسهل وأكثر تنظيمًا.",
            
            "exp-c2-title": "الأداء والبيانات",
            "exp-c2-desc": "الإشراف على مؤشرات الأداء وتحليل نتائج الفروع، ومقارنة السجلات الداخلية ببيانات شركة الشحن، وإعداد التقارير لاكتشاف الفروقات وفرص التحسين.",
            
            "exp-c3-title": "التطوير التقني وتحسين العمليات",
            "exp-c3-desc": "تحمل مسؤولية تطوير طرق العمل والحلول التقنية، وحل المشكلات التشغيلية والتقنية، وتحسين الأنظمة والتقارير، وربط التكنولوجيا بالاحتياجات التشغيلية الفعلية.",
            
            "exp-c4-title": "الحسابات والمطابقة المالية",
            "exp-c4-desc": "مراجعة الفواتير والحسابات، وإجراء المطابقات المالية، ومراجعة المدفوعات والسجلات النقدية، ومتابعة الفروقات المرتبطة بالعمليات.",
            
            "exp-highlight": "التركيز: تحويل العمليات التشغيلية المعقدة إلى إجراءات أبسط وأسهل في القياس والإدارة.",
            
            "roadmap-title": "التركيز الحالي وخطة التطور",
            "roadmap-label": "بناء أساس قوي في الأتمتة وهندسة التحكم",
            "roadmap-progress-label": "تقدم خطة التطور",
            "roadmap-summary": "أعمل حاليًا على تقوية أساسي في الأتمتة الصناعية وهندسة التحكم، مع التركيز على أنظمة التحكم الكلاسيكية وبرمجة الـPLC وتطبيقات الأتمتة العملية. كما أعمل على ربط هذه المفاهيم الهندسية بخبرتي في البرمجيات والـBackend لبناء حلول رقمية وتشغيلية أكثر تكاملًا.",
            "roadmap-step1-title": "أساسيات التحكم الكلاسيكي",
            "roadmap-step1-desc": "تقوية أساسيات أنظمة التحكم، بما يشمل نمذجة الأنظمة والتغذية الراجعة والاستقرار وتحليل الاستجابة والتحكم PID.",
            "roadmap-step2-title": "الـPLC والأتمتة الصناعية",
            "roadmap-step2-desc": "تعلم أساسيات الـPLC ولغة Ladder Logic ومفاهيم التحكم الصناعي وأنظمة الإدخال والإخراج وتطبيقات الأتمتة العملية.",
            "roadmap-step3-title": "تكامل أنظمة الأتمتة",
            "roadmap-step3-desc": "ربط أنظمة التحكم والبرمجيات والحساسات ومفاهيم الاتصال الصناعي لبناء حلول أتمتة متكاملة.",
            "roadmap-supporting": "مهارات داعمة: Python • أنظمة Backend • APIs • أتمتة سير العمل • IoT",
            
            "projects-title": "المشاريع المميزة",
            "badge-web-platform": "منصة ويب",
            "badge-desktop-app": "تطبيق مكتبي",
            "badge-academic-platform": "منصة أكاديمية",
            "badge-interactive-exp": "تجربة ويب تفاعلية",
            "proj-action-visit": "زيارة المشروع",
            "proj-action-details": "عرض التفاصيل",
            "project-modal-close": "إغلاق",
            "project-modal-tech-heading": "التقنيات المستخدمة",
            "project-modal-features-heading": "القدرات الرئيسية والمميزات",
            
            "proj-1-title": "بوابة جامعة الزقازيق الأهلية (ZNUE Portal)",
            "proj-1-desc": "منصة جامعية متكاملة لإدارة العمليات الأكاديمية والطلابية، تربط بين الطلاب وأعضاء هيئة التدريس والإدارات وشؤون الطلاب واتحاد الطلاب في نظام واحد.",
            
            "proj-2-title": "منصة Ship-Gate اللوجستية",
            "proj-2-desc": "منصة شحن متكاملة تربط التجار بشركات الشحن المتعددة عبر نظام موحد لإنشاء الشحنات ومقارنة الأسعار والتتبع وإدارة المحافظ والفواتير وبوالص الشحن.",
            
            "proj-3-title": "نظام الـCRM وأتمتة الفروع",
            "proj-3-desc": "نظام مكتبي متكامل لإدارة علاقات العملاء وأتمتة الفروع، يقوم بمركزية بيانات العملاء وإصدار الفواتير الضريبية وتتبع الشحنات وإرسال البوالص والتحديثات تلقائياً عبر واتساب.",
            
            "proj-4-title": "منصة TaskFlow لإدارة المهام",
            "proj-4-desc": "منصة لإدارة المهام والمشاريع تتيح للشركات إدارة الموظفين ومدراء المشاريع والمواعيد النهائية وتكامل التواصل المؤتمت عبر واتساب من نظام واحد.",
            
            "proj-5-title": "نظام تحليل البيانات والمحاسبة المتكامل",
            "proj-5-desc": "نظام أعمال مكتبي يجمع بين تحليل البيانات والمعاملات المحاسبية والتسويات المالية والتقارير وإدارة البيانات التشغيلية في تطبيق واحد.",
            
            "proj-6-title": "مساعد ZNU الأكاديمي",
            "proj-6-desc": "مساعد رقمي ومنصة معلومات لقسم هندسة الميكاترونكس، مصممة لتنظيم المعلومات الأكاديمية وتسهيل الوصول إلى الموارد الجامعية.",
            
            "proj-7-title": "موقع شركة Motivera للموارد البشرية",
            "proj-7-desc": "موقع تعريفي احترافي لشركة توظيف وموارد بشرية، صُمم لعرض خدمات الشركة وقدراتها وهويتها الرقمية من خلال تجربة ويب عصرية وتفاعلية متجاوبة.",
            
            "proj-8-title": "موقع دعوة الزفاف التفاعلية (Wedding Invitation)",
            "proj-8-desc": "دعوة زفاف رقمية تفاعلية مصممة كتجربة ويب متكاملة، تجمع بين التصميم الجمالي الأنيق والمؤثرات الحركية ومعلومات الحفل وتجربة دعوة شخصية فريدة.",
            
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
            "certs-c5-title": "دورة الطاقة الشمسية (إتمام)",
            "certs-c6-title": "دورة الطاقة الشمسية (حضور)",
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
   3. 3D INTERACTIVE MECHATRONICS CAD SIMULATOR
   ========================================== */
function initCADVisualizer() {
    const canvas = document.getElementById('cadCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.clientWidth || 460;
    let height = canvas.height = canvas.clientHeight || 440;

    function resize() {
        const rect = canvas.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
            width = canvas.width = rect.width;
            height = canvas.height = rect.height;
        }
    }

    window.addEventListener('resize', resize);

    // ==========================================
    // 3D GEOMETRY GENERATORS (MECHATRONICS)
    // ==========================================
    function generateRobotArm() {
        const vertices = [];
        const edges = [];
        const joints = [];

        function v(x, y, z) {
            const idx = vertices.length;
            vertices.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10, z: Math.round(z * 10) / 10 });
            return idx;
        }

        function e(i, j) {
            edges.push([i, j]);
        }

        function ring(radius, yLevel, count, zScale = 1.0) {
            const rIndices = [];
            for (let i = 0; i < count; i++) {
                const ang = (i / count) * Math.PI * 2;
                const rx = Math.cos(ang) * radius;
                const rz = Math.sin(ang) * radius * zScale;
                rIndices.push(v(rx, yLevel, rz));
            }
            for (let i = 0; i < count; i++) {
                e(rIndices[i], rIndices[(i + 1) % count]);
            }
            return rIndices;
        }

        // 1. Heavy Industrial Base Mounting Flange (Bottom Y = 115)
        const r1 = ring(60, 115, 8);
        const r2 = ring(50, 95, 8);
        for (let i = 0; i < 8; i++) {
            e(r1[i], r2[i]);
        }

        // 2. Turntable Swivel Base (J1 Joint)
        const r3 = ring(36, 95, 8);
        const r4 = ring(36, 75, 8);
        for (let i = 0; i < 8; i++) {
            e(r2[i], r3[i]);
            e(r3[i], r4[i]);
        }
        const ttCenter = v(0, 75, 0);
        joints.push(ttCenter);
        for (let i = 0; i < 8; i += 2) {
            e(ttCenter, r4[i]);
        }

        // 3. Shoulder Pivot Joint (J2 Joint - horizontal cylinder along Z)
        const shY = 50;
        const shZW = 24;
        const shR = 18;
        const shL = [];
        const shR_ring = [];
        for (let i = 0; i < 8; i++) {
            const ang = (i / 8) * Math.PI * 2;
            shL.push(v(Math.cos(ang) * shR, shY + Math.sin(ang) * shR, -shZW));
            shR_ring.push(v(Math.cos(ang) * shR, shY + Math.sin(ang) * shR, shZW));
        }
        for (let i = 0; i < 8; i++) {
            const nxt = (i + 1) % 8;
            e(shL[i], shL[nxt]);
            e(shR_ring[i], shR_ring[nxt]);
            e(shL[i], shR_ring[i]);
        }
        e(r4[0], shL[2]);
        e(r4[4], shL[6]);
        e(r4[2], shR_ring[2]);
        e(r4[6], shR_ring[6]);
        joints.push(v(0, shY, 0));

        // 4. Primary Boom Link (Dual-spar truss reaching up & backward to J3 elbow)
        const elbX = -35;
        const elbY = -30;
        const elbZW = 16;
        const elbR = 14;
        const elbL = [];
        const elbR_ring = [];
        for (let i = 0; i < 8; i++) {
            const ang = (i / 8) * Math.PI * 2;
            elbL.push(v(elbX + Math.cos(ang) * elbR, elbY + Math.sin(ang) * elbR, -elbZW));
            elbR_ring.push(v(elbX + Math.cos(ang) * elbR, elbY + Math.sin(ang) * elbR, elbZW));
        }
        for (let i = 0; i < 8; i++) {
            const nxt = (i + 1) % 8;
            e(elbL[i], elbL[nxt]);
            e(elbR_ring[i], elbR_ring[nxt]);
            e(elbL[i], elbR_ring[i]);
        }

        e(shL[0], elbL[0]); e(shL[2], elbL[2]); e(shL[4], elbL[4]); e(shL[6], elbL[6]);
        e(shR_ring[0], elbR_ring[0]); e(shR_ring[2], elbR_ring[2]); e(shR_ring[4], elbR_ring[4]); e(shR_ring[6], elbR_ring[6]);
        e(shL[1], elbL[5]); e(shR_ring[1], elbR_ring[5]);
        joints.push(v(elbX, elbY, 0));

        // Hydraulic piston actuator
        const pBase = v(15, 52, 0);
        const pRod = v(elbX + 10, elbY + 16, 0);
        e(pBase, pRod);
        e(shL[0], pBase);
        e(shR_ring[0], pBase);

        // 5. Forearm Link extending up & forward from elbow towards wrist
        const wrX = 35;
        const wrY = -85;
        const wrZW = 10;
        const wrR = 10;
        const wrL = [];
        const wrR_ring = [];
        for (let i = 0; i < 6; i++) {
            const ang = (i / 6) * Math.PI * 2;
            wrL.push(v(wrX + Math.cos(ang) * wrR, wrY + Math.sin(ang) * wrR, -wrZW));
            wrR_ring.push(v(wrX + Math.cos(ang) * wrR, wrY + Math.sin(ang) * wrR, wrZW));
        }
        for (let i = 0; i < 6; i++) {
            const nxt = (i + 1) % 6;
            e(wrL[i], wrL[nxt]);
            e(wrR_ring[i], wrR_ring[nxt]);
            e(wrL[i], wrR_ring[i]);
        }
        e(elbL[2], wrL[1]); e(elbL[4], wrL[3]); e(elbL[6], wrL[5]);
        e(elbR_ring[2], wrR_ring[1]); e(elbR_ring[4], wrR_ring[3]); e(elbR_ring[6], wrR_ring[5]);
        joints.push(v(wrX, wrY, 0));

        // 6. Articulated Robotic Gripper (End-Effector)
        const gBase = v(wrX + 15, wrY - 5, 0);
        const gL = v(wrX + 15, wrY - 5, -12);
        const gR = v(wrX + 15, wrY - 5, 12);
        e(gL, gR);
        e(gBase, gL);
        e(gBase, gR);
        e(wrL[0], gL);
        e(wrR_ring[0], gR);

        // Left & Right fingers
        const f1A = v(wrX + 28, wrY - 14, -12);
        const f1Tip = v(wrX + 38, wrY - 18, -4);
        e(gL, f1A);
        e(f1A, f1Tip);

        const f2A = v(wrX + 28, wrY - 14, 12);
        const f2Tip = v(wrX + 38, wrY - 18, 4);
        e(gR, f2A);
        e(f2A, f2Tip);

        // Proximity sensor line
        e(gBase, f1A);
        e(gBase, f2A);
        joints.push(f1Tip);
        joints.push(f2Tip);

        // Center vertically so it's perfectly balanced inside the viewport
        let minY = Infinity, maxY = -Infinity;
        for (const pt of vertices) {
            if (pt.y < minY) minY = pt.y;
            if (pt.y > maxY) maxY = pt.y;
        }
        const midY = (minY + maxY) / 2;
        for (const pt of vertices) {
            pt.y = Math.round((pt.y - midY) * 10) / 10;
        }

        return {
            vertices,
            edges,
            joints,
            baseScale: 1.45,
            name: 'Robotic Arm'
        };
    }

    function generateSpurGear() {
        const vertices = [];
        const edges = [];
        const joints = [];

        function v(x, y, z) {
            const idx = vertices.length;
            vertices.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10, z: Math.round(z * 10) / 10 });
            return idx;
        }

        function e(i, j) {
            edges.push([i, j]);
        }

        const numTeeth = 16;
        const rRoot = 54;
        const rTip = 75;
        const rBore = 20;
        const thickness = 26;

        for (const zSide of [-thickness / 2, thickness / 2]) {
            const toothPts = [];
            for (let t = 0; t < numTeeth; t++) {
                const baseAngle = (t / numTeeth) * Math.PI * 2;
                const step = (Math.PI * 2) / (numTeeth * 4);

                const a1 = baseAngle;
                toothPts.push(v(Math.cos(a1) * rRoot, Math.sin(a1) * rRoot, zSide));

                const a2 = baseAngle + step * 1.2;
                toothPts.push(v(Math.cos(a2) * rTip, Math.sin(a2) * rTip, zSide));

                const a3 = baseAngle + step * 2.2;
                toothPts.push(v(Math.cos(a3) * rTip, Math.sin(a3) * rTip, zSide));

                const a4 = baseAngle + step * 3.4;
                toothPts.push(v(Math.cos(a4) * rRoot, Math.sin(a4) * rRoot, zSide));
            }

            const totalTeethPts = toothPts.length;
            for (let i = 0; i < totalTeethPts; i++) {
                e(toothPts[i], toothPts[(i + 1) % totalTeethPts]);
            }

            // Bore with Keyway
            const borePts = [];
            const boreSegs = 12;
            for (let i = 0; i < boreSegs; i++) {
                const a = (i / boreSegs) * Math.PI * 2;
                if (Math.abs(a - (3 * Math.PI / 2)) < 0.35) {
                    borePts.push(v(Math.cos(a) * (rBore + 7), Math.sin(a) * (rBore + 7), zSide));
                } else {
                    borePts.push(v(Math.cos(a) * rBore, Math.sin(a) * rBore, zSide));
                }
            }
            for (let i = 0; i < boreSegs; i++) {
                e(borePts[i], borePts[(i + 1) % boreSegs]);
            }

            // 4 Spoke Cutouts
            for (let s = 0; s < 4; s++) {
                const spokeAngle = (s / 4) * Math.PI * 2 + (Math.PI / 4);
                const spokeCx = Math.cos(spokeAngle) * 36;
                const spokeCy = Math.sin(spokeAngle) * 36;
                const spokePts = [];
                for (let sp = 0; sp < 6; sp++) {
                    const spa = (sp / 6) * Math.PI * 2;
                    spokePts.push(v(spokeCx + Math.cos(spa) * 8, spokeCy + Math.sin(spa) * 8, zSide));
                }
                for (let sp = 0; sp < 6; sp++) {
                    e(spokePts[sp], spokePts[(sp + 1) % 6]);
                }
            }
        }

        const half = vertices.length / 2;
        for (let i = 0; i < numTeeth * 4; i++) {
            e(i, i + half);
        }
        const boreStart = numTeeth * 4;
        for (let i = 0; i < 12; i++) {
            e(boreStart + i, boreStart + i + half);
        }

        joints.push(v(0, 0, 0));

        return {
            vertices,
            edges,
            joints,
            baseScale: 1.65,
            name: 'Gear Train'
        };
    }

    const models = {
        arm: generateRobotArm(),
        gear: generateSpurGear()
    };

    let currentModelKey = 'arm';
    let currentModel = models[currentModelKey];

    let angleX = 0.35;
    let angleY = -0.65;
    let angleZ = 0;
    let isAutoRotating = true;
    let currentView = 'iso';

    // Interactive Dragging (Mouse & Touch)
    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;

    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        isAutoRotating = false;
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - prevPointerX;
        const deltaY = e.clientY - prevPointerY;
        angleY += deltaX * 0.007;
        angleX += deltaY * 0.007;
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;
        if (currentView !== 'iso') {
            setViewMode('iso');
        }
    });

    // Touch support for mobile devices
    canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            isDragging = true;
            isAutoRotating = false;
            prevPointerX = e.touches[0].clientX;
            prevPointerY = e.touches[0].clientY;
        }
    }, { passive: true });

    window.addEventListener('touchend', () => {
        isDragging = false;
    });

    canvas.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        const deltaX = e.touches[0].clientX - prevPointerX;
        const deltaY = e.touches[0].clientY - prevPointerY;
        angleY += deltaX * 0.007;
        angleX += deltaY * 0.007;
        prevPointerX = e.touches[0].clientX;
        prevPointerY = e.touches[0].clientY;
        if (currentView !== 'iso') {
            setViewMode('iso');
        }
    }, { passive: true });

    // View Control Buttons
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

        viewButtons.forEach(b => {
            if (b.classList) {
                b.classList.toggle('active', b.getAttribute('data-view') === view);
            }
        });

        if (view === 'front') {
            angleX = 0; angleY = 0; angleZ = 0;
        } else if (view === 'top') {
            angleX = currentModelKey === 'arm' ? -Math.PI / 2 : Math.PI / 2;
            angleY = 0; angleZ = 0;
        } else if (view === 'side') {
            angleX = 0; angleY = Math.PI / 2; angleZ = 0;
        } else if (view === 'iso') {
            angleX = currentModelKey === 'arm' ? 0.35 : -0.55;
            angleY = currentModelKey === 'arm' ? -0.65 : 0.5;
            angleZ = currentModelKey === 'arm' ? 0 : 0.15;
        }
    }

    // Model Selector Buttons (Robot Arm / Gear Train)
    const modelButtons = document.querySelectorAll('.cad-model-btn');
    modelButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modKey = btn.getAttribute('data-model');
            if (models[modKey]) {
                currentModelKey = modKey;
                currentModel = models[modKey];
                modelButtons.forEach(b => {
                    if (b.classList) {
                        b.classList.toggle('active', b.getAttribute('data-model') === modKey);
                    }
                });
                if (currentView === 'iso') {
                    setViewMode('iso');
                }
            }
        });
    });

    function renderCADPart() {
        ctx.clearRect(0, 0, width, height);

        const centerX = width / 2;
        const centerY = height / 2;
        const isDark = document.body.classList.contains('dark-mode');

        // Engineering Coordinate Grid / Blueprint lines
        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)';
        ctx.lineWidth = 1;
        const gridSize = 30;
        ctx.beginPath();
        for (let x = centerX % gridSize; x < width; x += gridSize) {
            ctx.moveTo(x, 0); ctx.lineTo(x, height);
        }
        for (let y = centerY % gridSize; y < height; y += gridSize) {
            ctx.moveTo(0, y); ctx.lineTo(width, y);
        }
        ctx.stroke();

        // Origin Crosshairs
        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)';
        ctx.beginPath();
        ctx.moveTo(0, centerY); ctx.lineTo(width, centerY);
        ctx.moveTo(centerX, 0); ctx.lineTo(centerX, height);
        ctx.stroke();

        // Responsive Scaling to gracefully adapt to viewport size
        const minDim = Math.min(width, height);
        const responsiveScale = currentModel.baseScale * Math.min(1.15, Math.max(0.72, minDim / 420));

        // 3D Projection Matrix (Euler Angles)
        const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
        const cosY = Math.cos(angleY), sinY = Math.sin(angleY);
        const cosZ = Math.cos(angleZ), sinZ = Math.sin(angleZ);

        const projected = currentModel.vertices.map(v => {
            // X-rotation
            const y1 = v.y * cosX - v.z * sinX;
            const z1 = v.y * sinX + v.z * cosX;
            // Y-rotation
            const x2 = v.x * cosY + z1 * sinY;
            const z2 = -v.x * sinY + z1 * cosY;
            // Z-rotation
            const x3 = x2 * cosZ - y1 * sinZ;
            const y3 = x2 * sinZ + y1 * cosZ;

            return {
                x: centerX + x3 * responsiveScale,
                y: centerY + y3 * responsiveScale,
                z: z2
            };
        });

        // Draw Wireframe Edges
        const primaryColor = isDark ? '#10b981' : '#1b8354';
        const accentBlue = isDark ? '#60a5fa' : '#0d6efd';

        ctx.strokeStyle = primaryColor;
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        currentModel.edges.forEach(edge => {
            const p1 = projected[edge[0]];
            const p2 = projected[edge[1]];
            if (p1 && p2) {
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
            }
        });
        ctx.stroke();

        // Kinematic Nodes / Joint Pivots
        if (currentModel.joints && currentModel.joints.length > 0) {
            ctx.fillStyle = accentBlue;
            currentModel.joints.forEach(jIdx => {
                const pj = projected[jIdx];
                if (pj) {
                    ctx.beginPath();
                    ctx.arc(pj.x, pj.y, 2.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            });
        }

        // CAD Blueprint Dimension Lines & Annotations (Front / Top / Side Views)
        if (currentView === 'front') {
            ctx.strokeStyle = accentBlue;
            ctx.fillStyle = accentBlue;
            ctx.lineWidth = 1;
            ctx.font = '10px "Fira Code", monospace';

            if (currentModelKey === 'arm') {
                const rightX = Math.min(width - 24, centerX + 115 * (responsiveScale / 1.35));
                const topY = centerY - 145 * (responsiveScale / 1.35);
                const botY = centerY + 145 * (responsiveScale / 1.35);

                ctx.beginPath();
                ctx.moveTo(rightX, topY); ctx.lineTo(rightX, botY);
                ctx.moveTo(rightX - 5, topY); ctx.lineTo(rightX + 5, topY);
                ctx.moveTo(rightX - 5, botY); ctx.lineTo(rightX + 5, botY);
                ctx.stroke();

                ctx.save();
                ctx.translate(rightX + 13, (topY + botY) / 2);
                ctx.rotate(Math.PI / 2);
                ctx.textAlign = 'center';
                ctx.fillText('REACH: 480 mm', 0, 0);
                ctx.restore();

                const baseDimY = centerY + 155 * (responsiveScale / 1.35);
                const bR = 64 * responsiveScale;
                ctx.beginPath();
                ctx.moveTo(centerX - bR, baseDimY); ctx.lineTo(centerX + bR, baseDimY);
                ctx.moveTo(centerX - bR, baseDimY - 4); ctx.lineTo(centerX - bR, baseDimY + 4);
                ctx.moveTo(centerX + bR, baseDimY - 4); ctx.lineTo(centerX + bR, baseDimY + 4);
                ctx.stroke();

                ctx.textAlign = 'center';
                ctx.fillText('BASE Ø: 128 mm', centerX, baseDimY + 13);

                ctx.textAlign = 'left';
                ctx.fillText('• 6-DOF ARTICULATED ROBOT ARM', 14, height - 14);
            } else {
                const rOuter = 75 * responsiveScale;
                const dimY = centerY + rOuter + 14;

                ctx.beginPath();
                ctx.moveTo(centerX - rOuter, dimY); ctx.lineTo(centerX + rOuter, dimY);
                ctx.moveTo(centerX - rOuter, dimY - 4); ctx.lineTo(centerX - rOuter, dimY + 4);
                ctx.moveTo(centerX + rOuter, dimY - 4); ctx.lineTo(centerX + rOuter, dimY + 4);
                ctx.stroke();

                ctx.textAlign = 'center';
                ctx.fillText('TIP Ø: 150.00 mm', centerX, dimY + 13);

                ctx.textAlign = 'left';
                ctx.fillText('• INVOLUTE SPUR GEAR (m=8, z=16)', 14, height - 14);
            }
        } else if (currentView === 'top') {
            ctx.fillStyle = accentBlue;
            ctx.font = '10px "Fira Code", monospace';
            ctx.textAlign = 'left';
            ctx.fillText(currentModelKey === 'arm' ? '• PLAN VIEW / ENVELOPE' : '• AXIAL VIEW (BORE Ø: 40 mm)', 14, height - 14);
        } else if (currentView === 'side') {
            ctx.fillStyle = accentBlue;
            ctx.font = '10px "Fira Code", monospace';
            ctx.textAlign = 'left';
            ctx.fillText(currentModelKey === 'arm' ? '• LATERAL PROFILE' : '• FACE WIDTH: 26 mm', 14, height - 14);
        }

        // Telemetry readout
        const elX = document.getElementById('cad-x');
        const elY = document.getElementById('cad-y');
        const elZ = document.getElementById('cad-z');
        if (elX) elX.innerText = `${Math.round(angleX * 180 / Math.PI)}°`;
        if (elY) elY.innerText = `${Math.round(angleY * 180 / Math.PI)}°`;
        if (elZ) elZ.innerText = `${Math.round(angleZ * 180 / Math.PI)}°`;
    }

    function animate() {
        if (isAutoRotating) {
            angleY += 0.005;
            if (currentModelKey === 'gear') {
                angleX += 0.001;
            }
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
        const targetPercent = 40; // Step 1 complete, step 2 active -> 40% roadmap progress
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
    // Percentage bars removed in favor of compact skill chips
}

/* ==========================================
   4B. SKILL CARDS EXPAND / COLLAPSE
   ========================================== */
function initSkillCardsExpand() {
    var LABELS = {
        en: { more: 'Show More', less: 'Show Less' },
        ar: { more: 'عرض المزيد', less: 'عرض أقل' }
    };
    function getLang() {
        return document.documentElement.getAttribute('lang') || 'en';
    }
    function setLabel(textSpan, isExpanded) {
        var lang = getLang();
        var l = LABELS[lang] || LABELS.en;
        if (textSpan) {
            textSpan.textContent = isExpanded ? l.less : l.more;
            textSpan.setAttribute('data-translate', isExpanded ? 'skills-show-less' : 'skills-show-more');
        }
    }
    var toggleBtns = document.querySelectorAll('.skill-toggle-btn');
    toggleBtns.forEach(function(btn) {
        var card = btn.closest('.technical-skill-card');
        if (!card) return;
        var extraChips = card.querySelectorAll('.skill-chip-extra');
        if (extraChips.length === 0) {
            btn.style.display = 'none';
            return;
        }
        var textSpan = btn.querySelector('.skill-toggle-text');
        setLabel(textSpan, false);
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            var isExpanded = card.classList.toggle('is-expanded');
            btn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
            setLabel(textSpan, isExpanded);
        });
    });
    var langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            setTimeout(function() {
                toggleBtns.forEach(function(btn) {
                    if (btn.style.display === 'none') return;
                    var card = btn.closest('.technical-skill-card');
                    var isExpanded = card && card.classList.contains('is-expanded');
                    var textSpan = btn.querySelector('.skill-toggle-text');
                    setLabel(textSpan, isExpanded);
                });
            }, 50);
        });
    }
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
        rootMargin: '-10% 0px -40% 0px',
        threshold: 0
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
        },
        c5: {
            title: "Solar Energy Training Course (Completion)",
            inst: "Engovation (Certified by Egyptian Engineers Syndicate)",
            hours: "30 Hours",
            date: "January 15th - February 15th, 2026",
            desc: "Comprehensive solar energy training course certified by the Egyptian Engineers Syndicate. Completed with a grade of Excellent.",
            image: "img/solar-energy-1.jpg",
            topics: [
                "Solar Energy Fundamentals & Photovoltaic Principles",
                "Solar PV System Design & Sizing",
                "Solar Panel Installation & Wiring",
                "Grid-Connected & Off-Grid Systems",
                "Solar Energy Economics & Feasibility"
            ]
        },
        c6: {
            title: "Solar Energy Training Course (Attendance)",
            inst: "Engovation (Certified by Egyptian Engineers Syndicate)",
            hours: "30 Hours",
            date: "January 15th - February 15th, 2026",
            desc: "Official attendance certificate for the 30-hour Solar Energy training program by Engovation, verifying participation and coursework completion.",
            image: "img/solar-energy-2.jpg",
            topics: [
                "Solar Energy Fundamentals & Photovoltaic Principles",
                "Solar PV System Design & Sizing",
                "Solar Panel Installation & Wiring",
                "Grid-Connected & Off-Grid Systems",
                "Solar Energy Economics & Feasibility"
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
        },
        c5: {
            title: "دورة الطاقة الشمسية (شهادة إتمام)",
            inst: "إنجوفيشين (معتمد من نقابة المهندسين المصرية)",
            hours: "30 ساعة تدريبية",
            date: "15 يناير – 15 فبراير 2026",
            desc: "دورة تدريبية شاملة في الطاقة الشمسية، معتمدة من نقابة المهندسين المصرية، حصلت على تقدير عام ممتاز.",
            image: "img/solar-energy-1.jpg",
            topics: [
                "Solar Energy Fundamentals & Photovoltaic Principles",
                "Solar PV System Design & Sizing",
                "Solar Panel Installation & Wiring",
                "Grid-Connected & Off-Grid Systems",
                "Solar Energy Economics & Feasibility"
            ]
        },
        c6: {
            title: "دورة الطاقة الشمسية (شهادة حضور)",
            inst: "إنجوفيشين (معتمد من نقابة المهندسين المصرية)",
            hours: "30 ساعة تدريبية",
            date: "15 يناير – 15 فبراير 2026",
            desc: "شهادة حضور رسمية لإتمام 30 ساعة تدريبية في برنامج الطاقة الشمسية، تؤكد المشاركة الكاملة وإكمال الدورة.",
            image: "img/solar-energy-2.jpg",
            topics: [
                "Solar Energy Fundamentals & Photovoltaic Principles",
                "Solar PV System Design & Sizing",
                "Solar Panel Installation & Wiring",
                "Grid-Connected & Off-Grid Systems",
                "Solar Energy Economics & Feasibility"
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
   8B. DESKTOP APPLICATION DETAILS MODAL LOGIC
   ========================================== */

// Preserved archive of previous projects metadata
const archivedProjects = [
    { id: 'archived-portal', name: 'Comprehensive Academic Portal', url: 'https://znue-portal.me/en/', img: 'img/project-portal.jpg', tag: 'Educational Platforms' },
    { id: 'archived-learning', name: 'Learning Platform for Teachers', url: 'https://wonderful-treacle-a97214.netlify.app/', img: 'img/project-learning.jpg', tag: 'Educational Platforms' },
    { id: 'archived-assistance', name: 'Student Support & Assistance Website', url: 'https://znuassistant.netlify.app/#home', img: 'img/project-assistance.jpg', tag: 'Student Support' },
    { id: 'archived-hr', name: 'HR Company Website', url: 'https://deft-cheesecake-4100df.netlify.app/', img: 'img/project-hr.jpg', tag: 'Corporate Websites' },
    { id: 'archived-wedding', name: 'Digital Wedding Invitation', url: 'https://abdullah-dina-wedding.netlify.app/', img: 'img/project-wedding.png', tag: 'Event Invitations' }
];

// Preserved specifications for active portfolio projects
const portfolioProjectsMetadata = [
    {
        id: "znue-portal",
        number: "01",
        name: "ZNUE Portal",
        type: "WEB PLATFORM",
        url: "https://znue-portal.me/en/",
        image: "img/znue-portal.png"
    },
    {
        id: "ship-gate",
        number: "02",
        name: "Ship-Gate",
        type: "WEB PLATFORM",
        url: "https://ship-gate.net/",
        image: "img/ship-gate.png"
    },
    {
        id: "crm-branch-automation",
        number: "03",
        name: "CRM & Branch Automation System",
        type: "DESKTOP APPLICATION",
        image: "img/crm-branch-automation.png"
    },
    {
        id: "taskflow",
        number: "04",
        name: "TaskFlow",
        type: "WEB PLATFORM",
        url: "https://lightskyblue-chough-519825.hostingersite.com",
        image: "img/taskflow.png"
    },
    {
        id: "data-accounting-system",
        number: "05",
        name: "Integrated Data Analysis & Accounting System",
        type: "DESKTOP APPLICATION",
        image: "img/data-accounting-system.png"
    },
    {
        id: "znu-assistant",
        number: "06",
        name: "ZNU Assistant",
        type: "ACADEMIC PLATFORM",
        url: "https://mechatronics-data.vercel.app/",
        image: "img/znu-assistant.png"
    },
    {
        id: "motivera-hr",
        number: "07",
        name: "Motivera HR Website",
        type: "WEB PLATFORM",
        url: "https://motivera-hr.vercel.app/",
        image: "img/motivera-hr.png",
        technologies: "Web Development • Responsive UI • Frontend Development • Modern Web Design",
        features: [
            "Professional Company Website",
            "HR / Recruitment Presentation",
            "Services Sections",
            "Responsive Design",
            "Modern UI",
            "Company Information",
            "Service Presentation",
            "Contact / Business Information"
        ]
    },
    {
        id: "wedding-invitation",
        number: "08",
        name: "Wedding Invitation Website",
        type: "INTERACTIVE WEB EXPERIENCE",
        url: "https://wedding-invitation-mohamed-atia.vercel.app/",
        image: "img/wedding-invitation.png",
        technologies: "HTML/CSS/JavaScript • Responsive Web Design • Interactive UI • Animations",
        features: [
            "Interactive Wedding Invitation",
            "Modern Visual Design",
            "Responsive Layout",
            "Animated Sections",
            "Event Information",
            "Wedding Details",
            "Personalized Experience",
            "Mobile-Friendly Design",
            "Interactive User Experience"
        ]
    }
];

const desktopProjectDetails = {
    en: {
        crm: {
            title: "CRM & Branch Automation System",
            type: "DESKTOP APPLICATION",
            image: "img/crm-branch-automation.png",
            desc: "A desktop CRM and branch automation system built to centralize customer data, generate tax invoices, track shipments, and automatically send shipping labels and customer updates through WhatsApp.",
            technologies: ["Python", "Desktop Application", "Database", "CRM", "WhatsApp Automation", "Invoice Automation", "Shipping Integration"],
            features: [
                { title: "Customer Management", desc: "Centralized customer registration and customer data management." },
                { title: "Tax Invoices", desc: "Creating and managing tax invoices." },
                { title: "Shipment Tracking", desc: "Tracking shipments and their current status." },
                { title: "Shipping Labels", desc: "Managing and preparing shipping labels." },
                { title: "WhatsApp Automation", desc: "Automatically sending shipping labels and customer messages through WhatsApp." },
                { title: "One-Click Workflow", desc: "Executing multiple repetitive operational actions through a simplified one-click workflow." }
            ]
        },
        accounting: {
            title: "Integrated Data Analysis & Accounting System",
            type: "DESKTOP APPLICATION",
            image: "img/data-accounting-system.png",
            desc: "A desktop business system that combines data analysis, accounting workflows, financial records, reconciliation, reporting, and operational data management in one application.",
            technologies: ["Python", "Desktop Application", "Data Analysis", "Accounting", "Excel", "Database", "Reporting"],
            features: [
                { title: "Data Analysis", desc: "Analyzing operational and financial data." },
                { title: "Accounting", desc: "Managing accounting operations and financial records." },
                { title: "Reconciliation", desc: "Matching financial and operational records and identifying differences." },
                { title: "Reporting", desc: "Generating financial and operational reports." },
                { title: "Excel & Data Processing", desc: "Processing and managing Excel-based data." },
                { title: "Integrated Workflow", desc: "Connecting analysis, accounting, data processing, and reporting inside one system." }
            ]
        }
    },
    ar: {
        crm: {
            title: "نظام الـCRM وأتمتة الفروع",
            type: "تطبيق مكتبي",
            image: "img/crm-branch-automation.png",
            desc: "نظام مكتبي متكامل لإدارة علاقات العملاء وأتمتة الفروع، يقوم بمركزية بيانات العملاء وإصدار الفواتير الضريبية وتتبع الشحنات وإرسال البوالص والتحديثات تلقائياً عبر واتساب.",
            technologies: ["Python", "تطبيق مكتبي", "قواعد بيانات", "CRM", "أتمتة واتساب", "أتمتة الفواتير", "تكامل الشحن"],
            features: [
                { title: "إدارة العملاء", desc: "تسجيل العملاء وإدارة بياناتهم مركزيًا وبسهولة." },
                { title: "الفواتير الضريبية", desc: "إنشاء وإدارة الفواتير الضريبية المعتمدة." },
                { title: "تتبع الشحنات", desc: "تتبع الشحنات ومتابعة حالتها التشغيلية أولاً بأول." },
                { title: "بوالص الشحن", desc: "إدارة وتجهيز وطباعة بوالص الشحن." },
                { title: "أتمتة واتساب", desc: "إرسال البوالص ورسائل التحديث للعملاء تلقائيًا عبر واتساب." },
                { title: "سير عمل بنقرة واحدة", desc: "تنفيذ المهام التشغيلية المتكررة بنقرة واحدة لتسريع العمل." }
            ]
        },
        accounting: {
            title: "نظام تحليل البيانات والمحاسبة المتكامل",
            type: "تطبيق مكتبي",
            image: "img/data-accounting-system.png",
            desc: "نظام أعمال مكتبي يجمع بين تحليل البيانات والمعاملات المحاسبية والتسويات المالية والتقارير وإدارة البيانات التشغيلية في تطبيق واحد.",
            technologies: ["Python", "تطبيق مكتبي", "تحليل البيانات", "محاسبة مالية", "Excel", "قواعد بيانات", "تقارير"],
            features: [
                { title: "تحليل البيانات", desc: "تحليل البيانات التشغيلية والمالية واستخراج المؤشرات." },
                { title: "المحاسبة المالية", desc: "إدارة العمليات المحاسبية والسجلات المالية بدقة." },
                { title: "المطابقة والتسوية", desc: "مطابقة السجلات المالية والتشغيلية واكتشاف الفروقات." },
                { title: "إعداد التقارير", desc: "إعداد التقارير المالية والتشغيلية التفصيلية للإدارة." },
                { title: "معالجة ملفات Excel", desc: "معالجة وإدارة واستيراد/تصدير البيانات المعتمدة على إكسيل." },
                { title: "سير عمل متكامل", desc: "ربط التحليل والمحاسبة والمعالجة والتقارير داخل نظام واحد متكامل." }
            ]
        }
    }
};

function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.getElementById('closeProjectModal');
    const closeActionBtn = document.getElementById('modalCloseActionBtn');
    
    if (!modal) return;
    
    const mImg = document.getElementById('modalProjectImg');
    const mType = document.getElementById('modalProjectType');
    const mTitle = document.getElementById('modalProjectTitle');
    const mDesc = document.getElementById('modalProjectDesc');
    const mTech = document.getElementById('modalProjectTech');
    const mFeatures = document.getElementById('modalProjectFeatures');
    
    let activeProjectId = null;
    
    // Attach click listeners to cards and trigger buttons with data-project-modal
    document.querySelectorAll('[data-project-modal]').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            // Avoid conflict if clicking inner links
            if (e.target.tagName.toLowerCase() === 'a') return;
            const projectId = trigger.getAttribute('data-project-modal');
            if (projectId) {
                openProjectModal(projectId);
            }
        });
    });
    
    function populateProjectModal(projectId) {
        const lang = document.documentElement.getAttribute('lang') || 'en';
        const data = (desktopProjectDetails[lang] && desktopProjectDetails[lang][projectId]) 
                     ? desktopProjectDetails[lang][projectId] 
                     : desktopProjectDetails['en'][projectId];
        if (!data) return;
        
        activeProjectId = projectId;
        mImg.src = data.image;
        mImg.alt = data.title;
        mType.innerText = data.type;
        mTitle.innerText = data.title;
        mDesc.innerText = data.desc;
        
        // Populate Technologies tags
        mTech.innerHTML = '';
        data.technologies.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'project-modal-tag-item';
            span.innerText = tech;
            mTech.appendChild(span);
        });
        
        // Populate Features grid
        mFeatures.innerHTML = '';
        data.features.forEach(f => {
            const item = document.createElement('div');
            item.className = 'project-modal-feature-item';
            
            const fTitle = document.createElement('div');
            fTitle.className = 'project-modal-feature-title';
            fTitle.innerText = f.title;
            
            const fDesc = document.createElement('div');
            fDesc.className = 'project-modal-feature-desc';
            fDesc.innerText = f.desc;
            
            item.appendChild(fTitle);
            item.appendChild(fDesc);
            mFeatures.appendChild(item);
        });
    }
    
    function openProjectModal(projectId) {
        populateProjectModal(projectId);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeProjectModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        activeProjectId = null;
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
    }
    
    if (closeActionBtn) {
        closeActionBtn.addEventListener('click', closeProjectModal);
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
    
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            if (modal.classList.contains('active') && activeProjectId) {
                setTimeout(() => {
                    populateProjectModal(activeProjectId);
                }, 50);
            }
        });
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
    
    function updateCarousel(withAnimation = true) {
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
        
        track.style.transition = withAnimation ? 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none';
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

    // ==========================================
    // TOUCH & MOBILE SWIPE GESTURE HANDLER
    // ==========================================
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let isDragging = false;
    let isHorizontal = null;
    let startTime = 0;
    let baseTranslate = 0;
    let wasSwiping = false;

    function onTouchStart(e) {
        if (!e.touches || e.touches.length !== 1) return;
        const touch = e.touches[0];
        startX = currentX = touch.clientX;
        startY = currentY = touch.clientY;
        startTime = Date.now();
        isDragging = true;
        isHorizontal = null;
        wasSwiping = false;

        const cards = track.children;
        if (cards.length === 0) return;
        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        const multiplier = isRtl ? 1 : -1;
        baseTranslate = multiplier * currentIndex * (cardWidth + gap);
    }

    function onTouchMove(e) {
        if (!isDragging || !e.touches || e.touches.length !== 1) return;
        const touch = e.touches[0];
        currentX = touch.clientX;
        currentY = touch.clientY;
        const diffX = currentX - startX;
        const diffY = currentY - startY;

        // Determine gesture direction on first significant movement
        if (isHorizontal === null) {
            const absX = Math.abs(diffX);
            const absY = Math.abs(diffY);
            if (absX > 8 || absY > 8) {
                isHorizontal = absX > absY;
            }
        }

        // If swiping horizontally, lock vertical scroll and drag the track smoothly
        if (isHorizontal === true) {
            if (e.cancelable) {
                e.preventDefault();
            }
            if (Math.abs(diffX) > 10) {
                wasSwiping = true;
            }
            track.style.transition = 'none';

            const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
            const cards = track.children;
            const cardWidth = cards[0].getBoundingClientRect().width;
            const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
            const viewportWidth = viewport.getBoundingClientRect().width;
            const visibleItems = Math.round((viewportWidth + gap) / (cardWidth + gap)) || 1;
            const maxIndex = Math.max(0, cards.length - visibleItems);

            let dragOffset = diffX;
            // Elastic boundary resistance when dragging past ends
            if ((currentIndex === 0 && (isRtl ? diffX < 0 : diffX > 0)) ||
                (currentIndex === maxIndex && (isRtl ? diffX > 0 : diffX < 0))) {
                dragOffset = diffX * 0.3;
            }

            track.style.transform = `translateX(${baseTranslate + dragOffset}px)`;
        }
    }

    function onTouchEnd() {
        if (!isDragging) return;
        isDragging = false;

        if (isHorizontal === true) {
            const diffX = currentX - startX;
            const elapsed = Date.now() - startTime;
            const velocity = Math.abs(diffX) / Math.max(1, elapsed); // px/ms
            const isRtl = document.documentElement.getAttribute('dir') === 'rtl';

            // Advance if moved past threshold (> 40px) or flicked with sufficient velocity
            const isFlick = velocity > 0.25 && Math.abs(diffX) > 20;
            const isFarEnough = Math.abs(diffX) > 40;

            if (isFlick || isFarEnough) {
                // In LTR: dragging left (diffX < 0) advances to next card
                // In RTL: dragging right (diffX > 0) advances to next card
                const forward = isRtl ? (diffX > 0) : (diffX < 0);
                if (forward) {
                    currentIndex++;
                } else {
                    currentIndex--;
                }
            }

            track.style.transition = 'transform 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            updateCarousel();
        }

        isHorizontal = null;

        // If user performed a swipe gesture, suppress accidental card/modal clicks
        if (wasSwiping) {
            const captureClick = (e) => {
                e.stopPropagation();
                e.preventDefault();
            };
            window.addEventListener('click', captureClick, { capture: true, once: true });
            setTimeout(() => {
                window.removeEventListener('click', captureClick, { capture: true });
            }, 100);
        }
    }

    viewport.addEventListener('touchstart', onTouchStart, { passive: true });
    viewport.addEventListener('touchmove', onTouchMove, { passive: false });
    viewport.addEventListener('touchend', onTouchEnd, { passive: true });
    viewport.addEventListener('touchcancel', onTouchEnd, { passive: true });

    // Desktop Mouse Drag Support
    let isMouseDown = false;

    viewport.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        if (e.target.closest('button') || e.target.closest('a')) return;
        
        startX = currentX = e.clientX;
        startY = currentY = e.clientY;
        startTime = Date.now();
        isMouseDown = true;
        wasSwiping = false;

        const cards = track.children;
        if (cards.length === 0) return;
        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        const multiplier = isRtl ? 1 : -1;
        baseTranslate = multiplier * currentIndex * (cardWidth + gap);
    });

    window.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        currentX = e.clientX;
        currentY = e.clientY;
        const diffX = currentX - startX;

        if (Math.abs(diffX) > 8) {
            wasSwiping = true;
            track.style.transition = 'none';

            const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
            const cards = track.children;
            const cardWidth = cards[0].getBoundingClientRect().width;
            const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
            const viewportWidth = viewport.getBoundingClientRect().width;
            const visibleItems = Math.round((viewportWidth + gap) / (cardWidth + gap)) || 1;
            const maxIndex = Math.max(0, cards.length - visibleItems);

            let dragOffset = diffX;
            if ((currentIndex === 0 && (isRtl ? diffX < 0 : diffX > 0)) ||
                (currentIndex === maxIndex && (isRtl ? diffX > 0 : diffX < 0))) {
                dragOffset = diffX * 0.3;
            }

            track.style.transform = `translateX(${baseTranslate + dragOffset}px)`;
        }
    });

    window.addEventListener('mouseup', () => {
        if (!isMouseDown) return;
        isMouseDown = false;

        const diffX = currentX - startX;
        const elapsed = Date.now() - startTime;
        const velocity = Math.abs(diffX) / Math.max(1, elapsed);
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';

        const isFlick = velocity > 0.25 && Math.abs(diffX) > 20;
        const isFarEnough = Math.abs(diffX) > 40;

        if (isFlick || isFarEnough) {
            const forward = isRtl ? (diffX > 0) : (diffX < 0);
            if (forward) {
                currentIndex++;
            } else {
                currentIndex--;
            }
        }

        track.style.transition = 'transform 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        updateCarousel();

        if (wasSwiping) {
            const captureClick = (e) => {
                e.stopPropagation();
                e.preventDefault();
            };
            window.addEventListener('click', captureClick, { capture: true, once: true });
            setTimeout(() => {
                window.removeEventListener('click', captureClick, { capture: true });
            }, 100);
        }
    });

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


