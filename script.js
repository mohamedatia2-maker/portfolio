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
            
            "hero-tag": "Mechatronics Engineering â€¢ Software â€¢ Automation",
            "hero-title": "Where Code Meets <span class=\"accent-color\">Machines.</span>",
            "hero-desc": "Iâ€™m Mohamed Atia, a Mechatronics Engineering student at Zagazig National University building real-world software systems, automation workflows, and operational solutions. I combine engineering, backend development, data, and process optimization to turn complex workflows into practical systems.",
            "hero-btn": "View Projects",
            "hero-btn-contact": "Contact Me",
            
            "cad-title": "Engineering Systems Simulator",
            "cad-telemetry": "Rotation Angles: X:<span id=\"cad-x\">0Â°</span> Y:<span id=\"cad-y\">0Â°</span> Z:<span id=\"cad-z\">0Â°</span>",
            
            "about-title": "Engineering Systems. Building Solutions.",
            "about-p1": "Iâ€™m a Mechatronics Engineering student at Zagazig National University with hands-on experience building software systems, digital platforms, and operational solutions.",
            "about-p2": "My work combines engineering thinking with full-stack development, backend systems, databases, automation workflows, and process optimization. Iâ€™m particularly interested in systems that connect software with real-world operations â€” making complex processes simpler, faster, and more reliable.",
            "about-p3": "Alongside my engineering studies, I work on real projects involving logistics, shipping platforms, university systems, business workflows, and automation.",
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
            "skills-role-company": "HappyTouch Establishment & Ideal World Establishment â€” Saudi Arabia",
            "skills-role-scope": "Technical Responsibility â€¢ Performance & Workflow Supervision",
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
            "roadmap-supporting": "Supporting Skills: Python â€¢ Backend Systems â€¢ APIs â€¢ Workflow Automation â€¢ IoT",
            
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
            
            "footer-copyright": "Â© 2026 Mohamed Mohamed Atia Mohamed",
            "footer-subtitle": "Zagazig National University // Mechatronics Engineering",
            
            "wa-chat-name": "Mohamed Atia",
            "wa-chat-status": "Typically replies in minutes",
            "wa-chat-status-typing": "typing...",
            "wa-chat-msg": "Hello",
            "wa-chat-input-placeholder": "Type a message..."
        },
        ar: {
            "title": "Ù…Ø­Ù…Ø¯ Ø¹Ø·ÙŠØ© // Ù…Ø¹Ø±Ø¶ Ø§Ù„Ø£Ø¹Ù…Ø§Ù„",
            "header-name": "Ù…Ø­Ù…Ø¯",
            "menu-header": "Ø§Ù„ØªÙ†Ù‚Ù„",
            "nav-home": "Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
            "nav-about": "Ù…Ù† Ø£Ù†Ø§",
            "nav-skills": "Ø§Ù„Ù…Ù‡Ø§Ø±Ø§Øª",
            "nav-experience": "Ø§Ù„Ø®Ø¨Ø±Ø©",
            "nav-projects": "Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹",
            "nav-certs": "Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª",
            
            "hero-tag": "Ù‡Ù†Ø¯Ø³Ø© Ù…ÙŠÙƒØ§ØªØ±ÙˆÙ†ÙƒØ³ â€¢ Ø¨Ø±Ù…Ø¬ÙŠØ§Øª â€¢ Ø£ØªÙ…ØªØ©",
            "hero-title": "Ø­ÙŠØ« ÙŠÙ„ØªÙ‚ÙŠ <span class=\"accent-color\">Ø§Ù„ÙƒÙˆØ¯ Ø¨Ø§Ù„Ø¢Ù„Ø§Øª.</span>",
            "hero-desc": "Ø£Ù†Ø§ Ù…Ø­Ù…Ø¯ Ø¹Ø·ÙŠØ©ØŒ Ø·Ø§Ù„Ø¨ Ù‡Ù†Ø¯Ø³Ø© Ù…ÙŠÙƒØ§ØªØ±ÙˆÙ†ÙƒØ³ Ø¨Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø²Ù‚Ø§Ø²ÙŠÙ‚ Ø§Ù„Ø£Ù‡Ù„ÙŠØ©ØŒ Ø£Ø¹Ù…Ù„ Ø¹Ù„Ù‰ Ø¨Ù†Ø§Ø¡ Ø£Ù†Ø¸Ù…Ø© Ø¨Ø±Ù…Ø¬ÙŠØ© ÙˆØ­Ù„ÙˆÙ„ Ø£ØªÙ…ØªØ© ÙˆØ£Ù†Ø¸Ù…Ø© ØªØ´ØºÙŠÙ„ÙŠØ© Ù„Ù…Ø´ÙƒÙ„Ø§Øª ÙˆØ§Ù‚Ø¹ÙŠØ©. Ø£Ø¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„Ù‡Ù†Ø¯Ø³Ø© ÙˆØªØ·ÙˆÙŠØ± Ø§Ù„Ù€Backend ÙˆØ§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØªØ­Ø³ÙŠÙ† Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ù„ØªØ­ÙˆÙŠÙ„ Ø³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„ Ø§Ù„Ù…Ø¹Ù‚Ø¯ Ø¥Ù„Ù‰ Ø£Ù†Ø¸Ù…Ø© Ø¹Ù…Ù„ÙŠØ© ÙˆØ£ÙƒØ«Ø± ÙƒÙØ§Ø¡Ø©.",
            "hero-btn": "Ø¹Ø±Ø¶ Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹",
            "hero-btn-contact": "ØªÙˆØ§ØµÙ„ Ù…Ø¹ÙŠ",
            
            "cad-title": "Ù…Ø­Ø§ÙƒÙŠ Ø§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠØ©",
            "cad-telemetry": "Ø²ÙˆØ§ÙŠØ§ Ø§Ù„Ø¯ÙˆØ±Ø§Ù†: X:<span id=\"cad-x\">0Â°</span> Y:<span id=\"cad-y\">0Â°</span> Z:<span id=\"cad-z\">0Â°</span>",
            
            "about-title": "Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ø£Ù†Ø¸Ù…Ø©. ÙˆØ¨Ù†Ø§Ø¡ Ø§Ù„Ø­Ù„ÙˆÙ„.",
            "about-p1": "Ø£Ù†Ø§ Ø·Ø§Ù„Ø¨ Ù‡Ù†Ø¯Ø³Ø© Ù…ÙŠÙƒØ§ØªØ±ÙˆÙ†ÙƒØ³ Ø¨Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø²Ù‚Ø§Ø²ÙŠÙ‚ Ø§Ù„Ø£Ù‡Ù„ÙŠØ©ØŒ ÙˆÙ„Ø¯ÙŠ Ø®Ø¨Ø±Ø© Ø¹Ù…Ù„ÙŠØ© ÙÙŠ Ø¨Ù†Ø§Ø¡ Ø§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ© ÙˆØ§Ù„Ù…Ù†ØµØ§Øª Ø§Ù„Ø±Ù‚Ù…ÙŠØ© ÙˆØ§Ù„Ø­Ù„ÙˆÙ„ Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ©.",
            "about-p2": "Ø£Ø¬Ù…Ø¹ ÙÙŠ Ø¹Ù…Ù„ÙŠ Ø¨ÙŠÙ† Ø§Ù„ØªÙÙƒÙŠØ± Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠ ÙˆØªØ·ÙˆÙŠØ± Ø§Ù„Ù€Full-Stack ÙˆØ§Ù„Ù€Backend ÙˆÙ‚ÙˆØ§Ø¹Ø¯ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ³ÙŠØ± Ø¹Ù…Ù„ Ø§Ù„Ø£ØªÙ…ØªØ© ÙˆØªØ­Ø³ÙŠÙ† Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª. Ø£Ù‡ØªÙ… Ø¨Ø´ÙƒÙ„ Ø®Ø§Øµ Ø¨Ø§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„ØªÙŠ ØªØ±Ø¨Ø· Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§Øª Ø¨Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„ÙˆØ§Ù‚Ø¹ÙŠØ©ØŒ Ø¨Ù‡Ø¯Ù Ø¬Ø¹Ù„ Ø§Ù„Ø¥Ø¬Ø±Ø§Ø¡Ø§Øª Ø§Ù„Ù…Ø¹Ù‚Ø¯Ø© Ø£Ø¨Ø³Ø· ÙˆØ£Ø³Ø±Ø¹ ÙˆØ£ÙƒØ«Ø± Ø§Ø¹ØªÙ…Ø§Ø¯ÙŠØ©.",
            "about-p3": "ÙˆØ¨Ø¬Ø§Ù†Ø¨ Ø¯Ø±Ø§Ø³ØªÙŠ Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠØ©ØŒ Ø£Ø¹Ù…Ù„ Ø¹Ù„Ù‰ Ù…Ø´Ø§Ø±ÙŠØ¹ Ø­Ù‚ÙŠÙ‚ÙŠØ© ÙÙŠ Ù…Ø¬Ø§Ù„Ø§Øª Ø§Ù„Ø´Ø­Ù† ÙˆØ§Ù„Ù„ÙˆØ¬Ø³ØªÙŠØ§Øª ÙˆØ§Ù„Ù…Ù†ØµØ§Øª Ø§Ù„Ø¬Ø§Ù…Ø¹ÙŠØ© ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„Ø£Ø¹Ù…Ø§Ù„ ÙˆØ§Ù„Ø£ØªÙ…ØªØ©.",
            "about-build-1": "Ù…Ù†ØµØ§Øª ÙˆÙŠØ¨ Ù…ØªÙƒØ§Ù…Ù„Ø©",
            "about-build-2": "Ø£Ù†Ø¸Ù…Ø© Backend ÙˆÙ‚ÙˆØ§Ø¹Ø¯ Ø¨ÙŠØ§Ù†Ø§Øª",
            "about-build-3": "Ø£ØªÙ…ØªØ© Ø³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„",
            "about-build-4": "Ø­Ù„ÙˆÙ„ Ù‡Ù†Ø¯Ø³ÙŠØ© ÙˆØªØ´ØºÙŠÙ„ÙŠØ©",
            
            "skills-title": "Ø§Ù„Ù…Ù‡Ø§Ø±Ø§Øª Ø§Ù„ØªÙ‚Ù†ÙŠØ©",
            "skills-intro": "ÙŠØ¬Ù…Ø¹ Ø®Ù„ÙÙŠØªÙŠ Ø§Ù„ØªÙ‚Ù†ÙŠØ© Ø¨ÙŠÙ† ØªØ·ÙˆÙŠØ± Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§Øª ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„Ù€Backend ÙˆÙ‚ÙˆØ§Ø¹Ø¯ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„Ø£Ø¯ÙˆØ§Øª Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠØ© ÙˆØ§Ù„Ø£ØªÙ…ØªØ© ÙˆØ§Ù„Ù…Ù†ØµØ§Øª Ø§Ù„Ø±Ù‚Ù…ÙŠØ©.",
            "skills-cat-programming": "Ø§Ù„Ø¨Ø±Ù…Ø¬Ø© ÙˆÙ„ØºØ§Øª Ø§Ù„Ù‡Ù†Ø¯Ø³Ø©",
            "skills-cat-fullstack": "ØªØ·ÙˆÙŠØ± Full-Stack",
            "skills-cat-backend-db": "Backend ÙˆÙ‚ÙˆØ§Ø¹Ø¯ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆÙˆØ§Ø¬Ù‡Ø§Øª API",
            "skills-cat-cloud-services": "Ø§Ù„Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ø³Ø­Ø§Ø¨ÙŠØ© ÙˆØ®Ø¯Ù…Ø§Øª Backend",
            "skills-cat-cloud-security": "Ø§Ù„Ø³Ø­Ø§Ø¨Ø© ÙˆØ§Ù„Ø¨Ù†ÙŠØ© Ø§Ù„ØªØ­ØªÙŠØ© ÙˆØ§Ù„Ø£Ù…Ø§Ù†",
            "skills-cat-seo-perf": "SEO ÙˆØ£Ø¯Ø§Ø¡ Ø§Ù„Ù…ÙˆØ§Ù‚Ø¹",
            "skills-cat-deployment": "Ø§Ù„Ù†Ø´Ø± ÙˆØ§Ù„Ø§Ø³ØªØ¶Ø§ÙØ©",
            "skills-cat-dev-tools": "Ø£Ø¯ÙˆØ§Øª Ø§Ù„ØªØ·ÙˆÙŠØ±",
            "skills-cat-automation-bots": "Ø§Ù„Ø£ØªÙ…ØªØ© ÙˆØ§Ù„Ù€ Bots",
            "skills-cat-engineering-control": "Ø§Ù„Ù‡Ù†Ø¯Ø³Ø© ÙˆØ§Ù„ØªØ­ÙƒÙ…",
            "skills-cat-renewable-energy": "Ø§Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ù…ØªØ¬Ø¯Ø¯Ø©",
            "skills-cat-business-data-accounting": "Ø§Ù„Ø£Ø¹Ù…Ø§Ù„ ÙˆØ§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„Ù…Ø­Ø§Ø³Ø¨Ø©",
            "skills-show-more": "Ø¹Ø±Ø¶ Ø§Ù„Ù…Ø²ÙŠØ¯",
            "skills-show-less": "Ø¹Ø±Ø¶ Ø£Ù‚Ù„",
            
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
            "skill-frontend-dev": "ØªØ·ÙˆÙŠØ± Frontend",
            "skill-backend-dev": "ØªØ·ÙˆÙŠØ± Backend",
            "skill-responsive-web": "ØªØ·ÙˆÙŠØ± Ù…ÙˆØ§Ù‚Ø¹ Ù…ØªØ¬Ø§ÙˆØ¨Ø©",
            
            // 3. Backend, Databases & APIs
            "skill-py-backend": "Python Backend",
            "skill-node-backend": "Node.js Backend",
            "skill-postgres": "PostgreSQL",
            "skill-mysql": "MySQL",
            "skill-sqlite": "SQLite",
            "skill-prisma": "Prisma ORM",
            "skill-db-design": "ØªØµÙ…ÙŠÙ… Ù‚ÙˆØ§Ø¹Ø¯ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª",
            "skill-db-mgmt": "Ø¥Ø¯Ø§Ø±Ø© Ù‚ÙˆØ§Ø¹Ø¯ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª",
            "skill-sql": "SQL",
            "skill-api-dev": "ØªØ·ÙˆÙŠØ± ÙˆØ§Ø¬Ù‡Ø§Øª API",
            "skill-api-integration": "ØªÙƒØ§Ù…Ù„ ÙˆØ§Ø¬Ù‡Ø§Øª API",
            "skill-auth": "Ø§Ù„Ù…ØµØ§Ø¯Ù‚Ø© (Authentication)",
            "skill-authorization": "Ø§Ù„ØµÙ„Ø§Ø­ÙŠØ§Øª (Authorization)",
            
            // 4. Cloud & Backend Services
            "skill-firebase": "Firebase",
            "skill-firebase-auth": "Firebase Authentication",
            "skill-firebase-admin": "Firebase Admin SDK",
            "skill-firebase-storage": "Firebase Storage",
            "skill-webhooks": "Webhooks",
            "skill-third-party-api": "ØªÙƒØ§Ù…Ù„ ÙˆØ§Ø¬Ù‡Ø§Øª Ø®Ø§Ø±Ø¬ÙŠØ©",
            "skill-file-storage": "ØªØ®Ø²ÙŠÙ† Ø§Ù„Ù…Ù„ÙØ§Øª",
            "skill-notifications": "Ø§Ù„Ø¥Ø´Ø¹Ø§Ø±Ø§Øª",
            "skill-backend-services": "Ø®Ø¯Ù…Ø§Øª Backend",
            
            // 5. Cloud, Infrastructure & Security
            "skill-cloudflare": "Cloudflare",
            "skill-cdn": "CDN",
            "skill-dns-mgmt": "Ø¥Ø¯Ø§Ø±Ø© DNS",
            "skill-caching": "Ø§Ù„ØªØ®Ø²ÙŠÙ† Ø§Ù„Ù…Ø¤Ù‚Øª (Caching)",
            "skill-web-infra": "Ø§Ù„Ø¨Ù†ÙŠØ© Ø§Ù„ØªØ­ØªÙŠØ© Ù„Ù„ÙˆÙŠØ¨",
            "skill-perf-opt": "ØªØ­Ø³ÙŠÙ† Ø§Ù„Ø£Ø¯Ø§Ø¡",
            "skill-web-security": "Ø£Ù…Ø§Ù† Ø§Ù„ÙˆÙŠØ¨",
            "skill-security-hardening": "ØªØ¹Ø²ÙŠØ² Ø§Ù„Ø£Ù…Ø§Ù† ÙˆØ§Ù„ØªØ£Ù…ÙŠÙ†",
            "skill-rbac": "Ø§Ù„ØªØ­ÙƒÙ… Ø¨Ø§Ù„ÙˆØµÙˆÙ„ Ø­Ø³Ø¨ Ø§Ù„Ø£Ø¯ÙˆØ§Ø± (RBAC)",
            "skill-csrf-protection": "Ø§Ù„Ø­Ù…Ø§ÙŠØ© Ù…Ù† Ù‡Ø¬Ù…Ø§Øª CSRF",
            "skill-rate-limiting": "ØªØ­Ø¯ÙŠØ¯ Ù…Ø¹Ø¯Ù„ Ø§Ù„Ø·Ù„Ø¨Ø§Øª (Rate Limiting)",
            "skill-secure-file-access": "Ø§Ù„ÙˆØµÙˆÙ„ Ø§Ù„Ø¢Ù…Ù† Ù„Ù„Ù…Ù„ÙØ§Øª",
            "skill-api-security": "Ø£Ù…Ø§Ù† ÙˆØ§Ø¬Ù‡Ø§Øª API",
            
            // 6. SEO & Web Performance
            "skill-tech-seo": "SEO ØªÙ‚Ù†ÙŠ",
            "skill-onpage-seo": "SEO Ø¯Ø§Ø®Ù„ÙŠ Ù„Ù„ØµÙØ­Ø§Øª (On-Page)",
            "skill-metadata-opt": "ØªØ­Ø³ÙŠÙ† Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„ÙˆØµÙÙŠØ© (Metadata)",
            "skill-seo": "ØªØ­Ø³ÙŠÙ† Ù…Ø­Ø±ÙƒØ§Øª Ø§Ù„Ø¨Ø­Ø« (SEO)",
            "skill-image-opt": "ØªØ­Ø³ÙŠÙ† ÙˆØ¶ØºØ· Ø§Ù„ØµÙˆØ±",
            "skill-cdn-opt": "ØªØ­Ø³ÙŠÙ† Ø§Ù„ØªÙˆØ²ÙŠØ¹ Ø¹Ø¨Ø± CDN",
            "skill-browser-caching": "Ø§Ù„ØªØ®Ø²ÙŠÙ† Ø§Ù„Ù…Ø¤Ù‚Øª Ø¨Ø§Ù„Ù…ØªØµÙØ­",
            "skill-pagespeed-opt": "ØªØ­Ø³ÙŠÙ† Ø³Ø±Ø¹Ø© Ø§Ù„ØµÙØ­Ø§Øª",
            "skill-lazy-loading": "Ø§Ù„ØªØ­Ù…ÙŠÙ„ Ø§Ù„ÙƒØ³ÙˆÙ„ (Lazy Loading)",
            "skill-seo-architecture": "Ø¨Ù†ÙŠØ© Ù…Ø¹Ù…Ø§Ø±ÙŠØ© ØµØ¯ÙŠÙ‚Ø© Ù„Ù…Ø­Ø±ÙƒØ§Øª Ø§Ù„Ø¨Ø­Ø«",
            
            // 7. Deployment & Hosting
            "skill-hostinger": "Hostinger",
            "skill-vercel": "Vercel",
            "skill-netlify": "Netlify",
            "skill-railway": "Railway",
            "skill-render": "Render",
            "skill-deployment-hosting": "Ø§Ù„Ù†Ø´Ø± ÙˆØ§Ù„Ø§Ø³ØªØ¶Ø§ÙØ©",
            "skill-web-deployment": "Ù†Ø´Ø± ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„ÙˆÙŠØ¨",
            "skill-hosting-mgmt": "Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø§Ø³ØªØ¶Ø§ÙØ©",
            
            // 8. Development Tools
            "skill-git": "Git",
            "skill-github": "GitHub",
            "skill-vscode": "VS Code",
            "skill-powershell": "PowerShell",
            "skill-postman": "Postman",
            "skill-chrome-devtools": "Chrome DevTools",
            "skill-npm": "npm",
            "skill-api-testing": "Ø§Ø®ØªØ¨Ø§Ø± ÙˆØ§Ø¬Ù‡Ø§Øª API",
            "skill-debugging": "ØªØµØ­ÙŠØ­ Ø§Ù„Ø£Ø®Ø·Ø§Ø¡ (Debugging)",
            "skill-version-control": "Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¥ØµØ¯Ø§Ø±Ø§Øª",
            
            // 9. Automation & Bots
            "skill-workflow-auto": "Ø£ØªÙ…ØªØ© Ø³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„",
            "skill-process-auto": "Ø£ØªÙ…ØªØ© Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª",
            "skill-api-auto": "Ø£ØªÙ…ØªØ© ÙˆØ§Ø¬Ù‡Ø§Øª API",
            "skill-wa-bots": "Ø¨ÙˆØªØ§Øª ÙˆØ§ØªØ³Ø§Ø¨",
            "skill-tg-bots": "Ø¨ÙˆØªØ§Øª ØªÙŠÙ„ÙŠØ¬Ø±Ø§Ù…",
            "skill-wa-auto": "Ø£ØªÙ…ØªØ© ÙˆØ§ØªØ³Ø§Ø¨",
            "skill-tg-auto": "Ø£ØªÙ…ØªØ© ØªÙŠÙ„ÙŠØ¬Ø±Ø§Ù…",
            "skill-auto-notifications": "Ø¥Ø´Ø¹Ø§Ø±Ø§Øª Ù…Ø¤ØªÙ…ØªØ©",
            "skill-auto-messaging": "Ù…Ø±Ø§Ø³Ù„Ø§Øª Ù…Ø¤ØªÙ…ØªØ©",
            "skill-bpa": "Ø£ØªÙ…ØªØ© Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ©",
            
            // 10. Engineering & Control
            "skill-mechatronics-eng": "Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ù…ÙŠÙƒØ§ØªØ±ÙˆÙ†ÙƒØ³",
            "skill-control-systems": "Ø£Ù†Ø¸Ù…Ø© Ø§Ù„ØªØ­ÙƒÙ…",
            "skill-classical-control": "Ø§Ù„ØªØ­ÙƒÙ… Ø§Ù„ÙƒÙ„Ø§Ø³ÙŠÙƒÙŠ",
            "skill-control-modeling": "Ù†Ù…Ø°Ø¬Ø© Ø£Ù†Ø¸Ù…Ø© Ø§Ù„ØªØ­ÙƒÙ…",
            "skill-matlab": "MATLAB",
            "skill-simulink": "Simulink",
            "skill-solidworks": "SolidWorks",
            "skill-cad": "Ø§Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠ CAD",
            "skill-eng-analysis": "Ø§Ù„ØªØ­Ù„ÙŠÙ„ Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠ",
            "skill-system-modeling": "Ù†Ù…Ø°Ø¬Ø© Ø§Ù„Ø£Ù†Ø¸Ù…Ø©",
            
            // 11. Renewable Energy
            "skill-solar-energy": "Ø§Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ø´Ù…Ø³ÙŠØ©",
            "skill-solar-pv": "Ø§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„ÙƒÙ‡Ø±ÙˆØ¶ÙˆØ¦ÙŠØ© (PV)",
            "skill-solar-fundamentals": "Ø£Ø³Ø§Ø³ÙŠØ§Øª Ø§Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ø´Ù…Ø³ÙŠØ©",
            "skill-renewable-systems": "Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø·Ø§Ù‚Ø© Ø§Ù„Ù…ØªØ¬Ø¯Ø¯Ø©",
            "skill-basic-energy-analysis": "Ø§Ù„ØªØ­Ù„ÙŠÙ„ Ø§Ù„Ø£Ø³Ø§Ø³ÙŠ Ù„Ù„Ø·Ø§Ù‚Ø©",
            
            // 12. Business, Data & Accounting
            "skill-excel": "Microsoft Excel",
            "skill-word": "Microsoft Word",
            "skill-ppt": "Microsoft PowerPoint",
            "skill-data-analysis": "ØªØ­Ù„ÙŠÙ„ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª",
            "skill-data-processing": "Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª",
            "skill-reporting": "Ø¥Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ±",
            "skill-dashboard-dev": "ØªØ·ÙˆÙŠØ± Ù„ÙˆØ­Ø§Øª Ø§Ù„ØªØ­ÙƒÙ…",
            "skill-business-reporting": "ØªÙ‚Ø§Ø±ÙŠØ± Ø§Ù„Ø£Ø¹Ù…Ø§Ù„",
            "skill-financial-data": "Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ù…Ø§Ù„ÙŠØ©",
            "skill-accounting-systems": "Ø§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ù…Ø­Ø§Ø³Ø¨ÙŠØ©",
            "skill-data-reconciliation": "ØªØ³ÙˆÙŠØ© ÙˆÙ…Ø·Ø§Ø¨Ù‚Ø© Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª",
            
            "experience-title": "Ø§Ù„Ø®Ø¨Ø±Ø©",
            "skills-role-badge": "Ø§Ù„Ù…Ù†ØµØ¨ Ø§Ù„Ø­Ø§Ù„ÙŠ",
            "skills-role-title": "Ù…Ù†Ø³Ù‚ Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª ÙˆØ§Ù„Ø£Ø¯Ø§Ø¡",
            "skills-role-company": "Ù…Ø¤Ø³Ø³Ø© Ù„Ù…Ø³Ø© Ø³Ø¹Ø§Ø¯Ø© ÙˆÙ…Ø¤Ø³Ø³Ø© Ø¹Ø§Ù„Ù… Ø§Ù„Ù…Ø«Ø§Ù„ÙŠØ© â€” Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©",
            "skills-role-scope": "Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ Ø§Ù„ØªÙ‚Ù†ÙŠ ÙˆØ§Ù„Ù…Ø´Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø¯Ø§Ø¡ ÙˆØ³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„",
            "skills-role-desc": "Ø£ØªÙˆÙ„Ù‰ Ù…Ø³Ø¤ÙˆÙ„ÙŠØ© ØªÙ‚Ù†ÙŠØ© ÙˆØªØ´ØºÙŠÙ„ÙŠØ© Ø¶Ù…Ù† Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ù…Ø¤Ø³Ø³ØªÙŠÙ†ØŒ Ù…Ø¹ Ø§Ù„Ø¥Ø´Ø±Ø§Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø¯Ø§Ø¡ ÙˆØ³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„ ÙˆØªØ·ÙˆÙŠØ± Ø·Ø±Ù‚ Ø§Ù„Ø¹Ù…Ù„ ÙˆØªØ­Ø³ÙŠÙ† Ø§Ù„Ø£Ù†Ø¸Ù…Ø© ÙˆØ§Ù„Ø¥Ø¬Ø±Ø§Ø¡Ø§Øª. Ø£Ø¹Ù…Ù„ Ø¹Ù„Ù‰ Ø­Ù„ Ø§Ù„Ù…Ø´ÙƒÙ„Ø§Øª Ø§Ù„ØªÙ‚Ù†ÙŠØ© ÙˆØ§Ù„ØªØ´ØºÙŠÙ„ÙŠØ©ØŒ ÙˆØªØ­Ù„ÙŠÙ„ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆÙ…Ø¤Ø´Ø±Ø§Øª Ø§Ù„Ø£Ø¯Ø§Ø¡ØŒ ÙˆØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø§Ø­ØªÙŠØ§Ø¬Ø§Øª Ø§Ù„ÙŠÙˆÙ…ÙŠØ© Ø¥Ù„Ù‰ Ø­Ù„ÙˆÙ„ Ø¹Ù…Ù„ÙŠØ© ØªØ¬Ø¹Ù„ Ø§Ù„Ø¹Ù…Ù„ Ø¯Ø§Ø®Ù„ Ø§Ù„ÙØ±ÙˆØ¹ Ø£ÙƒØ«Ø± ÙƒÙØ§Ø¡Ø© ÙˆØªÙ†Ø¸ÙŠÙ…Ù‹Ø§.",
            
            "exp-c1-title": "Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª ÙˆØ³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„",
            "exp-c1-desc": "Ø§Ù„Ø¥Ø´Ø±Ø§Ù Ø¹Ù„Ù‰ Ø³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„ Ø§Ù„ÙŠÙˆÙ…ÙŠ Ø¯Ø§Ø®Ù„ Ø§Ù„ÙØ±ÙˆØ¹ØŒ ÙˆØªØ¨Ø³ÙŠØ· Ø§Ù„Ø¥Ø¬Ø±Ø§Ø¡Ø§Øª Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ©ØŒ ÙˆØªÙ†Ø¸ÙŠÙ… Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ø´Ø­Ù†ØŒ ÙˆØªØ·ÙˆÙŠØ± Ø·Ø±Ù‚ Ø¹Ù…Ù„ Ø¹Ù…Ù„ÙŠØ© ØªØ¬Ø¹Ù„ Ø§Ù„ØªÙ†ÙÙŠØ° Ø£Ø³Ø±Ø¹ ÙˆØ£Ø³Ù‡Ù„ ÙˆØ£ÙƒØ«Ø± ØªÙ†Ø¸ÙŠÙ…Ù‹Ø§.",
            
            "exp-c2-title": "Ø§Ù„Ø£Ø¯Ø§Ø¡ ÙˆØ§Ù„Ø¨ÙŠØ§Ù†Ø§Øª",
            "exp-c2-desc": "Ø§Ù„Ø¥Ø´Ø±Ø§Ù Ø¹Ù„Ù‰ Ù…Ø¤Ø´Ø±Ø§Øª Ø§Ù„Ø£Ø¯Ø§Ø¡ ÙˆØªØ­Ù„ÙŠÙ„ Ù†ØªØ§Ø¦Ø¬ Ø§Ù„ÙØ±ÙˆØ¹ØŒ ÙˆÙ…Ù‚Ø§Ø±Ù†Ø© Ø§Ù„Ø³Ø¬Ù„Ø§Øª Ø§Ù„Ø¯Ø§Ø®Ù„ÙŠØ© Ø¨Ø¨ÙŠØ§Ù†Ø§Øª Ø´Ø±ÙƒØ© Ø§Ù„Ø´Ø­Ù†ØŒ ÙˆØ¥Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ± Ù„Ø§ÙƒØªØ´Ø§Ù Ø§Ù„ÙØ±ÙˆÙ‚Ø§Øª ÙˆÙØ±Øµ Ø§Ù„ØªØ­Ø³ÙŠÙ†.",
            
            "exp-c3-title": "Ø§Ù„ØªØ·ÙˆÙŠØ± Ø§Ù„ØªÙ‚Ù†ÙŠ ÙˆØªØ­Ø³ÙŠÙ† Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª",
            "exp-c3-desc": "ØªØ­Ù…Ù„ Ù…Ø³Ø¤ÙˆÙ„ÙŠØ© ØªØ·ÙˆÙŠØ± Ø·Ø±Ù‚ Ø§Ù„Ø¹Ù…Ù„ ÙˆØ§Ù„Ø­Ù„ÙˆÙ„ Ø§Ù„ØªÙ‚Ù†ÙŠØ©ØŒ ÙˆØ­Ù„ Ø§Ù„Ù…Ø´ÙƒÙ„Ø§Øª Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© ÙˆØ§Ù„ØªÙ‚Ù†ÙŠØ©ØŒ ÙˆØªØ­Ø³ÙŠÙ† Ø§Ù„Ø£Ù†Ø¸Ù…Ø© ÙˆØ§Ù„ØªÙ‚Ø§Ø±ÙŠØ±ØŒ ÙˆØ±Ø¨Ø· Ø§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§ Ø¨Ø§Ù„Ø§Ø­ØªÙŠØ§Ø¬Ø§Øª Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© Ø§Ù„ÙØ¹Ù„ÙŠØ©.",
            
            "exp-c4-title": "Ø§Ù„Ø­Ø³Ø§Ø¨Ø§Øª ÙˆØ§Ù„Ù…Ø·Ø§Ø¨Ù‚Ø© Ø§Ù„Ù…Ø§Ù„ÙŠØ©",
            "exp-c4-desc": "Ù…Ø±Ø§Ø¬Ø¹Ø© Ø§Ù„ÙÙˆØ§ØªÙŠØ± ÙˆØ§Ù„Ø­Ø³Ø§Ø¨Ø§ØªØŒ ÙˆØ¥Ø¬Ø±Ø§Ø¡ Ø§Ù„Ù…Ø·Ø§Ø¨Ù‚Ø§Øª Ø§Ù„Ù…Ø§Ù„ÙŠØ©ØŒ ÙˆÙ…Ø±Ø§Ø¬Ø¹Ø© Ø§Ù„Ù…Ø¯ÙÙˆØ¹Ø§Øª ÙˆØ§Ù„Ø³Ø¬Ù„Ø§Øª Ø§Ù„Ù†Ù‚Ø¯ÙŠØ©ØŒ ÙˆÙ…ØªØ§Ø¨Ø¹Ø© Ø§Ù„ÙØ±ÙˆÙ‚Ø§Øª Ø§Ù„Ù…Ø±ØªØ¨Ø·Ø© Ø¨Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª.",
            
            "exp-highlight": "Ø§Ù„ØªØ±ÙƒÙŠØ²: ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© Ø§Ù„Ù…Ø¹Ù‚Ø¯Ø© Ø¥Ù„Ù‰ Ø¥Ø¬Ø±Ø§Ø¡Ø§Øª Ø£Ø¨Ø³Ø· ÙˆØ£Ø³Ù‡Ù„ ÙÙŠ Ø§Ù„Ù‚ÙŠØ§Ø³ ÙˆØ§Ù„Ø¥Ø¯Ø§Ø±Ø©.",
            
            "roadmap-title": "Ø§Ù„ØªØ±ÙƒÙŠØ² Ø§Ù„Ø­Ø§Ù„ÙŠ ÙˆØ®Ø·Ø© Ø§Ù„ØªØ·ÙˆØ±",
            "roadmap-label": "Ø¨Ù†Ø§Ø¡ Ø£Ø³Ø§Ø³ Ù‚ÙˆÙŠ ÙÙŠ Ø§Ù„Ø£ØªÙ…ØªØ© ÙˆÙ‡Ù†Ø¯Ø³Ø© Ø§Ù„ØªØ­ÙƒÙ…",
            "roadmap-progress-label": "ØªÙ‚Ø¯Ù… Ø®Ø·Ø© Ø§Ù„ØªØ·ÙˆØ±",
            "roadmap-summary": "Ø£Ø¹Ù…Ù„ Ø­Ø§Ù„ÙŠÙ‹Ø§ Ø¹Ù„Ù‰ ØªÙ‚ÙˆÙŠØ© Ø£Ø³Ø§Ø³ÙŠ ÙÙŠ Ø§Ù„Ø£ØªÙ…ØªØ© Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ© ÙˆÙ‡Ù†Ø¯Ø³Ø© Ø§Ù„ØªØ­ÙƒÙ…ØŒ Ù…Ø¹ Ø§Ù„ØªØ±ÙƒÙŠØ² Ø¹Ù„Ù‰ Ø£Ù†Ø¸Ù…Ø© Ø§Ù„ØªØ­ÙƒÙ… Ø§Ù„ÙƒÙ„Ø§Ø³ÙŠÙƒÙŠØ© ÙˆØ¨Ø±Ù…Ø¬Ø© Ø§Ù„Ù€PLC ÙˆØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø£ØªÙ…ØªØ© Ø§Ù„Ø¹Ù…Ù„ÙŠØ©. ÙƒÙ…Ø§ Ø£Ø¹Ù…Ù„ Ø¹Ù„Ù‰ Ø±Ø¨Ø· Ù‡Ø°Ù‡ Ø§Ù„Ù…ÙØ§Ù‡ÙŠÙ… Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠØ© Ø¨Ø®Ø¨Ø±ØªÙŠ ÙÙŠ Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§Øª ÙˆØ§Ù„Ù€Backend Ù„Ø¨Ù†Ø§Ø¡ Ø­Ù„ÙˆÙ„ Ø±Ù‚Ù…ÙŠØ© ÙˆØªØ´ØºÙŠÙ„ÙŠØ© Ø£ÙƒØ«Ø± ØªÙƒØ§Ù…Ù„Ù‹Ø§.",
            "roadmap-step1-title": "Ø£Ø³Ø§Ø³ÙŠØ§Øª Ø§Ù„ØªØ­ÙƒÙ… Ø§Ù„ÙƒÙ„Ø§Ø³ÙŠÙƒÙŠ",
            "roadmap-step1-desc": "ØªÙ‚ÙˆÙŠØ© Ø£Ø³Ø§Ø³ÙŠØ§Øª Ø£Ù†Ø¸Ù…Ø© Ø§Ù„ØªØ­ÙƒÙ…ØŒ Ø¨Ù…Ø§ ÙŠØ´Ù…Ù„ Ù†Ù…Ø°Ø¬Ø© Ø§Ù„Ø£Ù†Ø¸Ù…Ø© ÙˆØ§Ù„ØªØºØ°ÙŠØ© Ø§Ù„Ø±Ø§Ø¬Ø¹Ø© ÙˆØ§Ù„Ø§Ø³ØªÙ‚Ø±Ø§Ø± ÙˆØªØ­Ù„ÙŠÙ„ Ø§Ù„Ø§Ø³ØªØ¬Ø§Ø¨Ø© ÙˆØ§Ù„ØªØ­ÙƒÙ… PID.",
            "roadmap-step2-title": "Ø§Ù„Ù€PLC ÙˆØ§Ù„Ø£ØªÙ…ØªØ© Ø§Ù„ØµÙ†Ø§Ø¹ÙŠØ©",
            "roadmap-step2-desc": "ØªØ¹Ù„Ù… Ø£Ø³Ø§Ø³ÙŠØ§Øª Ø§Ù„Ù€PLC ÙˆÙ„ØºØ© Ladder Logic ÙˆÙ…ÙØ§Ù‡ÙŠÙ… Ø§Ù„ØªØ­ÙƒÙ… Ø§Ù„ØµÙ†Ø§Ø¹ÙŠ ÙˆØ£Ù†Ø¸Ù…Ø© Ø§Ù„Ø¥Ø¯Ø®Ø§Ù„ ÙˆØ§Ù„Ø¥Ø®Ø±Ø§Ø¬ ÙˆØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø£ØªÙ…ØªØ© Ø§Ù„Ø¹Ù…Ù„ÙŠØ©.",
            "roadmap-step3-title": "ØªÙƒØ§Ù…Ù„ Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ø£ØªÙ…ØªØ©",
            "roadmap-step3-desc": "Ø±Ø¨Ø· Ø£Ù†Ø¸Ù…Ø© Ø§Ù„ØªØ­ÙƒÙ… ÙˆØ§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§Øª ÙˆØ§Ù„Ø­Ø³Ø§Ø³Ø§Øª ÙˆÙ…ÙØ§Ù‡ÙŠÙ… Ø§Ù„Ø§ØªØµØ§Ù„ Ø§Ù„ØµÙ†Ø§Ø¹ÙŠ Ù„Ø¨Ù†Ø§Ø¡ Ø­Ù„ÙˆÙ„ Ø£ØªÙ…ØªØ© Ù…ØªÙƒØ§Ù…Ù„Ø©.",
            "roadmap-supporting": "Ù…Ù‡Ø§Ø±Ø§Øª Ø¯Ø§Ø¹Ù…Ø©: Python â€¢ Ø£Ù†Ø¸Ù…Ø© Backend â€¢ APIs â€¢ Ø£ØªÙ…ØªØ© Ø³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„ â€¢ IoT",
            
            "projects-title": "Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ Ø§Ù„Ù…Ù…ÙŠØ²Ø©",
            "badge-web-platform": "Ù…Ù†ØµØ© ÙˆÙŠØ¨",
            "badge-desktop-app": "ØªØ·Ø¨ÙŠÙ‚ Ù…ÙƒØªØ¨ÙŠ",
            "badge-academic-platform": "Ù…Ù†ØµØ© Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ©",
            "badge-interactive-exp": "ØªØ¬Ø±Ø¨Ø© ÙˆÙŠØ¨ ØªÙØ§Ø¹Ù„ÙŠØ©",
            "proj-action-visit": "Ø²ÙŠØ§Ø±Ø© Ø§Ù„Ù…Ø´Ø±ÙˆØ¹",
            "proj-action-details": "Ø¹Ø±Ø¶ Ø§Ù„ØªÙØ§ØµÙŠÙ„",
            "project-modal-close": "Ø¥ØºÙ„Ø§Ù‚",
            "project-modal-tech-heading": "Ø§Ù„ØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…Ø©",
            "project-modal-features-heading": "Ø§Ù„Ù‚Ø¯Ø±Ø§Øª Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ© ÙˆØ§Ù„Ù…Ù…ÙŠØ²Ø§Øª",
            
            "proj-1-title": "Ø¨ÙˆØ§Ø¨Ø© Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø²Ù‚Ø§Ø²ÙŠÙ‚ Ø§Ù„Ø£Ù‡Ù„ÙŠØ© (ZNUE Portal)",
            "proj-1-desc": "Ù…Ù†ØµØ© Ø¬Ø§Ù…Ø¹ÙŠØ© Ù…ØªÙƒØ§Ù…Ù„Ø© Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© ÙˆØ§Ù„Ø·Ù„Ø§Ø¨ÙŠØ©ØŒ ØªØ±Ø¨Ø· Ø¨ÙŠÙ† Ø§Ù„Ø·Ù„Ø§Ø¨ ÙˆØ£Ø¹Ø¶Ø§Ø¡ Ù‡ÙŠØ¦Ø© Ø§Ù„ØªØ¯Ø±ÙŠØ³ ÙˆØ§Ù„Ø¥Ø¯Ø§Ø±Ø§Øª ÙˆØ´Ø¤ÙˆÙ† Ø§Ù„Ø·Ù„Ø§Ø¨ ÙˆØ§ØªØ­Ø§Ø¯ Ø§Ù„Ø·Ù„Ø§Ø¨ ÙÙŠ Ù†Ø¸Ø§Ù… ÙˆØ§Ø­Ø¯.",
            
            "proj-2-title": "Ù…Ù†ØµØ© Ship-Gate Ø§Ù„Ù„ÙˆØ¬Ø³ØªÙŠØ©",
            "proj-2-desc": "Ù…Ù†ØµØ© Ø´Ø­Ù† Ù…ØªÙƒØ§Ù…Ù„Ø© ØªØ±Ø¨Ø· Ø§Ù„ØªØ¬Ø§Ø± Ø¨Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø´Ø­Ù† Ø§Ù„Ù…ØªØ¹Ø¯Ø¯Ø© Ø¹Ø¨Ø± Ù†Ø¸Ø§Ù… Ù…ÙˆØ­Ø¯ Ù„Ø¥Ù†Ø´Ø§Ø¡ Ø§Ù„Ø´Ø­Ù†Ø§Øª ÙˆÙ…Ù‚Ø§Ø±Ù†Ø© Ø§Ù„Ø£Ø³Ø¹Ø§Ø± ÙˆØ§Ù„ØªØªØ¨Ø¹ ÙˆØ¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù…Ø­Ø§ÙØ¸ ÙˆØ§Ù„ÙÙˆØ§ØªÙŠØ± ÙˆØ¨ÙˆØ§Ù„Øµ Ø§Ù„Ø´Ø­Ù†.",
            
            "proj-3-title": "Ù†Ø¸Ø§Ù… Ø§Ù„Ù€CRM ÙˆØ£ØªÙ…ØªØ© Ø§Ù„ÙØ±ÙˆØ¹",
            "proj-3-desc": "Ù†Ø¸Ø§Ù… Ù…ÙƒØªØ¨ÙŠ Ù…ØªÙƒØ§Ù…Ù„ Ù„Ø¥Ø¯Ø§Ø±Ø© Ø¹Ù„Ø§Ù‚Ø§Øª Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ ÙˆØ£ØªÙ…ØªØ© Ø§Ù„ÙØ±ÙˆØ¹ØŒ ÙŠÙ‚ÙˆÙ… Ø¨Ù…Ø±ÙƒØ²ÙŠØ© Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ ÙˆØ¥ØµØ¯Ø§Ø± Ø§Ù„ÙÙˆØ§ØªÙŠØ± Ø§Ù„Ø¶Ø±ÙŠØ¨ÙŠØ© ÙˆØªØªØ¨Ø¹ Ø§Ù„Ø´Ø­Ù†Ø§Øª ÙˆØ¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø¨ÙˆØ§Ù„Øµ ÙˆØ§Ù„ØªØ­Ø¯ÙŠØ«Ø§Øª ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨.",
            
            "proj-4-title": "Ù…Ù†ØµØ© TaskFlow Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù…Ù‡Ø§Ù…",
            "proj-4-desc": "Ù…Ù†ØµØ© Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù…Ù‡Ø§Ù… ÙˆØ§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ ØªØªÙŠØ­ Ù„Ù„Ø´Ø±ÙƒØ§Øª Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù…ÙˆØ¸ÙÙŠÙ† ÙˆÙ…Ø¯Ø±Ø§Ø¡ Ø§Ù„Ù…Ø´Ø§Ø±ÙŠØ¹ ÙˆØ§Ù„Ù…ÙˆØ§Ø¹ÙŠØ¯ Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠØ© ÙˆØªÙƒØ§Ù…Ù„ Ø§Ù„ØªÙˆØ§ØµÙ„ Ø§Ù„Ù…Ø¤ØªÙ…Øª Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨ Ù…Ù† Ù†Ø¸Ø§Ù… ÙˆØ§Ø­Ø¯.",
            
            "proj-5-title": "Ù†Ø¸Ø§Ù… ØªØ­Ù„ÙŠÙ„ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„Ù…Ø­Ø§Ø³Ø¨Ø© Ø§Ù„Ù…ØªÙƒØ§Ù…Ù„",
            "proj-5-desc": "Ù†Ø¸Ø§Ù… Ø£Ø¹Ù…Ø§Ù„ Ù…ÙƒØªØ¨ÙŠ ÙŠØ¬Ù…Ø¹ Ø¨ÙŠÙ† ØªØ­Ù„ÙŠÙ„ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„Ù…Ø¹Ø§Ù…Ù„Ø§Øª Ø§Ù„Ù…Ø­Ø§Ø³Ø¨ÙŠØ© ÙˆØ§Ù„ØªØ³ÙˆÙŠØ§Øª Ø§Ù„Ù…Ø§Ù„ÙŠØ© ÙˆØ§Ù„ØªÙ‚Ø§Ø±ÙŠØ± ÙˆØ¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© ÙÙŠ ØªØ·Ø¨ÙŠÙ‚ ÙˆØ§Ø­Ø¯.",
            
            "proj-6-title": "Ù…Ø³Ø§Ø¹Ø¯ ZNU Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠ",
            "proj-6-desc": "Ù…Ø³Ø§Ø¹Ø¯ Ø±Ù‚Ù…ÙŠ ÙˆÙ…Ù†ØµØ© Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ù„Ù‚Ø³Ù… Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ù…ÙŠÙƒØ§ØªØ±ÙˆÙ†ÙƒØ³ØŒ Ù…ØµÙ…Ù…Ø© Ù„ØªÙ†Ø¸ÙŠÙ… Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© ÙˆØªØ³Ù‡ÙŠÙ„ Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„Ø¬Ø§Ù…Ø¹ÙŠØ©.",
            
            "proj-7-title": "Ù…ÙˆÙ‚Ø¹ Ø´Ø±ÙƒØ© Motivera Ù„Ù„Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„Ø¨Ø´Ø±ÙŠØ©",
            "proj-7-desc": "Ù…ÙˆÙ‚Ø¹ ØªØ¹Ø±ÙŠÙÙŠ Ø§Ø­ØªØ±Ø§ÙÙŠ Ù„Ø´Ø±ÙƒØ© ØªÙˆØ¸ÙŠÙ ÙˆÙ…ÙˆØ§Ø±Ø¯ Ø¨Ø´Ø±ÙŠØ©ØŒ ØµÙÙ…Ù… Ù„Ø¹Ø±Ø¶ Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ø´Ø±ÙƒØ© ÙˆÙ‚Ø¯Ø±Ø§ØªÙ‡Ø§ ÙˆÙ‡ÙˆÙŠØªÙ‡Ø§ Ø§Ù„Ø±Ù‚Ù…ÙŠØ© Ù…Ù† Ø®Ù„Ø§Ù„ ØªØ¬Ø±Ø¨Ø© ÙˆÙŠØ¨ Ø¹ØµØ±ÙŠØ© ÙˆØªÙØ§Ø¹Ù„ÙŠØ© Ù…ØªØ¬Ø§ÙˆØ¨Ø©.",
            
            "proj-8-title": "Ù…ÙˆÙ‚Ø¹ Ø¯Ø¹ÙˆØ© Ø§Ù„Ø²ÙØ§Ù Ø§Ù„ØªÙØ§Ø¹Ù„ÙŠØ© (Wedding Invitation)",
            "proj-8-desc": "Ø¯Ø¹ÙˆØ© Ø²ÙØ§Ù Ø±Ù‚Ù…ÙŠØ© ØªÙØ§Ø¹Ù„ÙŠØ© Ù…ØµÙ…Ù…Ø© ÙƒØªØ¬Ø±Ø¨Ø© ÙˆÙŠØ¨ Ù…ØªÙƒØ§Ù…Ù„Ø©ØŒ ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„Ø£Ù†ÙŠÙ‚ ÙˆØ§Ù„Ù…Ø¤Ø«Ø±Ø§Øª Ø§Ù„Ø­Ø±ÙƒÙŠØ© ÙˆÙ…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø­ÙÙ„ ÙˆØªØ¬Ø±Ø¨Ø© Ø¯Ø¹ÙˆØ© Ø´Ø®ØµÙŠØ© ÙØ±ÙŠØ¯Ø©.",
            
            "projects-p1-tag": "Ù…Ù†ØµØ§Øª ØªØ¹Ù„ÙŠÙ…ÙŠØ©",
            "projects-p1-title": "Ù…Ù†ØµØ© Ø¬Ø§Ù…Ø¹ÙŠØ© Ø´Ø§Ù…Ù„Ø©",
            "projects-p1-link": "Ø²ÙŠØ§Ø±Ø© Ø§Ù„Ù…ÙˆÙ‚Ø¹",
            
            "projects-p2-tag": "Ø®Ø¯Ù…Ø§Øª Ø·Ù„Ø§Ø¨ÙŠØ©",
            "projects-p2-title": "Ù…ÙˆÙ‚Ø¹ Ø¯Ø¹Ù… Ø§Ù„Ø·Ù„Ø§Ø¨ ÙˆØ§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©",
            "projects-p2-link": "Ø²ÙŠØ§Ø±Ø© Ø§Ù„Ù…ÙˆÙ‚Ø¹",
            
            "projects-p3-tag": "Ù…ÙˆØ§Ù‚Ø¹ Ø´Ø±ÙƒØ§Øª",
            "projects-p3-title": "Ù…ÙˆÙ‚Ø¹ Ø´Ø±ÙƒØ© Ù…ÙˆØ§Ø±Ø¯ Ø¨Ø´Ø±ÙŠØ©",
            "projects-p3-link": "Ø²ÙŠØ§Ø±Ø© Ø§Ù„Ù…ÙˆÙ‚Ø¹",
            
            "projects-p4-tag": "Ù…Ù†ØµØ§Øª ØªØ¹Ù„ÙŠÙ…ÙŠØ©",
            "projects-p4-title": "Ù…Ù†ØµØ© ØªØ¹Ù„ÙŠÙ…ÙŠØ© Ù„Ù„Ù…Ø¹Ù„Ù…ÙŠÙ†",
            "projects-p4-link": "Ø²ÙŠØ§Ø±Ø© Ø§Ù„Ù…ÙˆÙ‚Ø¹",
            
            "projects-p5-tag": "Ø¯Ø¹ÙˆØ§Øª Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø§Øª",
            "projects-p5-title": "Ø¯Ø¹ÙˆØ© Ø²ÙØ§Ù Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ© (Ø¹Ø¨Ø¯Ø§Ù„Ù„Ù‡ ÙˆØ¯ÙŠÙ†Ø§)",
            "projects-p5-link": "Ø²ÙŠØ§Ø±Ø© Ø§Ù„Ù…ÙˆÙ‚Ø¹",
            
            "certs-title": "Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª ÙˆØ§Ù„Ù…Ø¤Ù‡Ù„Ø§Øª",
            "certs-btn-view": "Ø¹Ø±Ø¶ Ø§Ù„ØªÙØ§ØµÙŠÙ„",
            "certs-modal-hours": "Ø§Ù„Ø³Ø§Ø¹Ø§Øª",
            "certs-modal-date": "Ø§Ù„ÙØªØ±Ø©",
            "certs-modal-topics": "Ø§Ù„Ù…Ø­Ø§ÙˆØ± Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
            "certs-modal-open-doc": "ÙØªØ­ Ø§Ù„Ù…Ø³ØªÙ†Ø¯ Ø§Ù„Ø£ØµÙ„ÙŠ",
            "certs-c1-title": "ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨ Ø§Ù„Ù…ØªÙƒØ§Ù…Ù„",
            "certs-c2-title": "Ø¯ÙˆØ±Ø© Ø³ÙˆÙ„ÙŠØ¯ÙˆÙˆØ±ÙƒØ³ (Ø¥ØªÙ…Ø§Ù…)",
            "certs-c4-title": "Ø¯ÙˆØ±Ø© Ø³ÙˆÙ„ÙŠØ¯ÙˆÙˆØ±ÙƒØ³ (Ø­Ø¶ÙˆØ±)",
            "certs-c5-title": "دورة الطاقة الشمسية (إتمام)",
            "certs-c6-title": "دورة الطاقة الشمسية (حضور)",
            "certs-c3-title": "Ù…Ø³Ø§Ù‚ Ø¥ÙƒØ³ÙŠÙ„ Ø§Ù„Ù…ØªÙ‚Ø¯Ù…",
            
            "footer-copyright": "Â© 2026 Ù…Ø­Ù…Ø¯ Ù…Ø­Ù…Ø¯ Ø¹Ø·ÙŠØ© Ù…Ø­Ù…Ø¯",
            "footer-subtitle": "Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø²Ù‚Ø§Ø²ÙŠÙ‚ Ø§Ù„Ø£Ù‡Ù„ÙŠØ© // Ù‡Ù†Ø¯Ø³Ø© Ø§Ù„Ù…ÙŠÙƒØ§ØªØ±ÙˆÙ†ÙƒØ³",
            
            "wa-chat-name": "Ù…Ø­Ù…Ø¯ Ø¹Ø·ÙŠØ©",
            "wa-chat-status": "ÙŠØ±Ø¯ Ø¹Ø§Ø¯Ø©Ù‹ Ø®Ù„Ø§Ù„ Ø¯Ù‚Ø§Ø¦Ù‚",
            "wa-chat-status-typing": "ÙŠÙƒØªØ¨ Ø§Ù„Ø¢Ù†...",
            "wa-chat-msg": "Ù…Ø±Ø­Ø¨Ø§Ù‹",
            "wa-chat-input-placeholder": "Ø§ÙƒØªØ¨ Ø±Ø³Ø§Ù„Ø©..."
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
        langBtn.innerText = lang === 'ar' ? 'EN' : 'Ø¹';

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
    const glyphs = ['{ }', 'âˆ«', 'd/dt', 'Î¸', 'âˆ‘', 'Î»', 'F=ma', '101', '010', 'ZNU', 'âš™'];
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
            ctx.fillText('Ã˜ 120.00 mm', centerX - 28, dimY - 4);
        }

        // Update telemetry numbers
        document.getElementById('cad-x').innerText = `${Math.round(angleX * 180 / Math.PI)}Â°`;
        document.getElementById('cad-y').innerText = `${Math.round(angleY * 180 / Math.PI)}Â°`;
        document.getElementById('cad-z').innerText = `${Math.round(angleZ * 180 / Math.PI)}Â°`;
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
   4C. TECHNICAL SKILLS SHOW MORE / SHOW LESS
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
                    if (!card) return;
                    var textSpan = btn.querySelector('.skill-toggle-text');
                    var isExpanded = card.classList.contains('is-expanded');
                    setLabel(textSpan, isExpanded);
                });
            }, 0);
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
                        btnText.innerText = isAr ? 'Ø¹Ø±Ø¶ Ù…Ø®Ø·Ø· Ø§Ù„Ù‡ÙŠÙƒÙ„ Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠ' : 'View Architecture Diagram';
                    } else {
                        btnText.innerText = isAr ? 'Ø¹Ø±Ø¶ Ù…Ø®Ø·Ø· Ø®Ø· ØªØ¯ÙÙ‚ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª' : 'View Data Pipeline Diagram';
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
                            otherBtnText.innerText = isAr ? 'Ø¹Ø±Ø¶ Ù…Ø®Ø·Ø· Ø§Ù„Ù‡ÙŠÙƒÙ„ Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠ' : 'View Architecture Diagram';
                        } else {
                            otherBtnText.innerText = isAr ? 'Ø¹Ø±Ø¶ Ù…Ø®Ø·Ø· Ø®Ø· ØªØ¯ÙÙ‚ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª' : 'View Data Pipeline Diagram';
                        }
                    }
                });

                panel.classList.add('active');
                if (btnText) btnText.innerText = isAr ? 'Ø¥Ø®ÙØ§Ø¡ Ø§Ù„Ù…Ø®Ø·Ø·' : 'Hide Diagram';

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
                    btnText.innerText = isAr ? 'Ø¹Ø±Ø¶ Ù…Ø®Ø·Ø· Ø§Ù„Ù‡ÙŠÙƒÙ„ Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠ' : 'View Architecture Diagram';
                } else {
                    btnText.innerText = isAr ? 'Ø¹Ø±Ø¶ Ù…Ø®Ø·Ø· Ø®Ø· ØªØ¯ÙÙ‚ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª' : 'View Data Pipeline Diagram';
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
            date: "July 1st â€“ August 15th, 2025",
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
            date: "April 1st â€“ May 1st, 2025",
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
            date: "April 1st â€“ May 1st, 2025",
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
            inst: "Edraak Platform (Ø¥Ø¯Ø±Ø§Ùƒ)",
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
            title: "ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨ Ø§Ù„Ù…ØªÙƒØ§Ù…Ù„ Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø¨Ø§ÙŠØ«ÙˆÙ†",
            inst: "Ù…Ø¹Ù‡Ø¯ ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§ Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª (ITI)",
            hours: "145 Ø³Ø§Ø¹Ø© ØªØ¯Ø±ÙŠØ¨ÙŠØ©",
            date: "1 ÙŠÙˆÙ„ÙŠÙˆ â€“ 15 Ø£ØºØ³Ø·Ø³ 2025",
            desc: "Ø¨Ø±Ù†Ø§Ù…Ø¬ ØªØ¯Ø±ÙŠØ¨ÙŠ Ù…ÙƒØ«Ù ÙŠØ±ÙƒØ² Ø¹Ù„Ù‰ Ø¨Ù†ÙŠØ© Ø§Ù„Ø¨Ø±Ù…Ø¬ÙŠØ§ØªØŒ Ù‚ÙˆØ§Ø¹Ø¯ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§ØªØŒ ÙˆØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨ Ø§Ù„Ù…ØªÙƒØ§Ù…Ù„. Ù…Ù†Ù‡Ø¬ Ù…Ù†Ø¸Ù… Ù„Ù„ØºØ§ÙŠØ© ÙŠØºØ·ÙŠ Ø§Ù„Ù…ÙˆØ§Ø¶ÙŠØ¹ Ø§Ù„ØªØ§Ù„ÙŠØ©:",
            image: "img/WhatsApp Image 2025-09-28 at 21.15.50_6680e132.jpg",
            topics: [
                "Ø§Ù„Ø¨Ø±Ù…Ø¬Ø© ÙƒØ§Ø¦Ù†ÙŠØ© Ø§Ù„ØªÙˆØ¬Ù‡ Ø¨Ù„ØºØ© Ø¨Ø§ÙŠØ«ÙˆÙ† (24 Ø³Ø§Ø¹Ø©)",
                "Ø¥Ø·Ø§Ø±Ø§Øª Ø¹Ù…Ù„ ÙˆÙŠØ¨ Ø¨Ø§ÙŠØ«ÙˆÙ† (ÙÙ„Ø§Ø³ÙƒØŒ Ø¯Ø¬Ø§Ù†ØºÙˆ) (30 Ø³Ø§Ø¹Ø©)",
                "ØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„ÙˆÙŠØ¨ Ù„Ù„Ù…Ø³ØªØ¹Ø±Ø¶ (HTML5, CSS3, JS) (48 Ø³Ø§Ø¹Ø©)",
                "Ù…Ù‚Ø¯Ù…Ø© ÙÙŠ Ù‚ÙˆØ§Ø¹Ø¯ Ø¨ÙŠØ§Ù†Ø§Øª PostgreSQL (18 Ø³Ø§Ø¹Ø©)",
                "Ù…Ø´Ø±ÙˆØ¹ Ø§Ù„ØªØ®Ø±Ø¬ Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠ (25 Ø³Ø§Ø¹Ø©)"
            ]
        },
        c2: {
            title: "Ø¯ÙˆØ±Ø© Ø³ÙˆÙ„ÙŠØ¯ÙˆÙˆØ±ÙƒØ³ (Ø´Ù‡Ø§Ø¯Ø© Ø¥ØªÙ…Ø§Ù…)",
            inst: "Ø¥Ù†Ø¬ÙˆÙÙŠØ´ÙŠÙ† (Ù…Ø¹ØªÙ…Ø¯ Ù…Ù† Ù†Ù‚Ø§Ø¨Ø© Ø§Ù„Ù…Ù‡Ù†Ø¯Ø³ÙŠÙ† Ø§Ù„Ù…ØµØ±ÙŠØ©)",
            hours: "30 Ø³Ø§Ø¹Ø© ØªØ¯Ø±ÙŠØ¨ÙŠØ©",
            date: "1 Ø£Ø¨Ø±ÙŠÙ„ â€“ 1 Ù…Ø§ÙŠÙˆ 2025",
            desc: "Ø¯ÙˆØ±Ø© Ø´Ø§Ù…Ù„Ø© ÙÙŠ Ø§Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„Ù…ÙŠÙƒØ§Ù†ÙŠÙƒÙŠ Ø¨Ù…Ø³Ø§Ø¹Ø¯Ø© Ø§Ù„Ø­Ø§Ø³ÙˆØ¨ (CAD)ØŒ Ù…Ø¹ØªÙ…Ø¯Ø© Ù…Ù† Ù†Ù‚Ø§Ø¨Ø© Ø§Ù„Ù…Ù‡Ù†Ø¯Ø³ÙŠÙ† Ø§Ù„Ù…ØµØ±ÙŠØ© ÙˆØ­ØµÙ„Øª Ø¹Ù„Ù‰ ØªÙ‚Ø¯ÙŠØ± Ø¹Ø§Ù… Ù…Ù…ØªØ§Ø².",
            image: "img/1759502983617.jpg",
            topics: [
                "Ø§Ù„Ù†Ù…Ø°Ø¬Ø© Ø«Ù„Ø§Ø«ÙŠØ© Ø§Ù„Ø£Ø¨Ø¹Ø§Ø¯ ÙˆØ§Ù„Ø±Ø³Ù… Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠ (10 Ø³Ø§Ø¹Ø§Øª)",
                "Ø§Ù„ØªØ¬Ù…ÙŠØ¹Ø§Øª Ø§Ù„Ù…ÙŠÙƒØ§Ù†ÙŠÙƒÙŠØ© ÙˆØ§Ù„Ø¹Ù„Ø§Ù‚Ø§Øª (8 Ø³Ø§Ø¹Ø§Øª)",
                "Ø§Ù„Ù…Ø³Ø§Ù‚Ø· Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠØ© ÙˆØ§Ù„Ø±Ø³ÙˆÙ…Ø§Øª Ø§Ù„ÙÙ†ÙŠØ© Ø«Ù†Ø§Ø¦ÙŠØ© Ø§Ù„Ø£Ø¨Ø¹Ø§Ø¯ (6 Ø³Ø§Ø¹Ø§Øª)",
                "Ø£ØªÙ…ØªØ© Ø§Ù„ØªØµÙ…ÙŠÙ… ÙˆÙ…Ø­Ø§ÙƒØ§Ø© Ø§Ù„Ø­Ø±ÙƒØ© (6 Ø³Ø§Ø¹Ø§Øª)"
            ]
        },
        c4: {
            title: "Ø¯ÙˆØ±Ø© Ø³ÙˆÙ„ÙŠØ¯ÙˆÙˆØ±ÙƒØ³ (Ø´Ù‡Ø§Ø¯Ø© Ø­Ø¶ÙˆØ±)",
            inst: "Ø¥Ù†Ø¬ÙˆÙÙŠØ´ÙŠÙ† (Ù…Ø¹ØªÙ…Ø¯ Ù…Ù† Ù†Ù‚Ø§Ø¨Ø© Ø§Ù„Ù…Ù‡Ù†Ø¯Ø³ÙŠÙ† Ø§Ù„Ù…ØµØ±ÙŠØ©)",
            hours: "30 Ø³Ø§Ø¹Ø© ØªØ¯Ø±ÙŠØ¨ÙŠØ©",
            date: "1 Ø£Ø¨Ø±ÙŠÙ„ â€“ 1 Ù…Ø§ÙŠÙˆ 2025",
            desc: "Ø´Ù‡Ø§Ø¯Ø© Ø­Ø¶ÙˆØ± Ø±Ø³Ù…ÙŠØ© Ù„Ø¥ØªÙ…Ø§Ù… 30 Ø³Ø§Ø¹Ø© ØªØ¯Ø±ÙŠØ¨ÙŠØ© ÙÙŠ Ø¨Ø±Ù†Ø§Ù…Ø¬ Ø³ÙˆÙ„ÙŠØ¯ÙˆÙˆØ±ÙƒØ³ (Solidworks)ØŒ ØªØ¤ÙƒØ¯ Ø§Ù„Ù…Ø´Ø§Ø±ÙƒØ© Ø§Ù„ÙƒØ§Ù…Ù„Ø© ÙˆØ¥ÙƒÙ…Ø§Ù„ Ø§Ù„Ø¯ÙˆØ±Ø©.",
            image: "img/1759502983418.jpg",
            topics: [
                "Ø§Ù„Ù†Ù…Ø°Ø¬Ø© Ø«Ù„Ø§Ø«ÙŠØ© Ø§Ù„Ø£Ø¨Ø¹Ø§Ø¯ ÙˆØ§Ù„Ø±Ø³Ù… Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠ (10 Ø³Ø§Ø¹Ø§Øª)",
                "Ø§Ù„ØªØ¬Ù…ÙŠØ¹Ø§Øª Ø§Ù„Ù…ÙŠÙƒØ§Ù†ÙŠÙƒÙŠØ© ÙˆØ§Ù„Ø¹Ù„Ø§Ù‚Ø§Øª (8 Ø³Ø§Ø¹Ø§Øª)",
                "Ø§Ù„Ù…Ø³Ø§Ù‚Ø· Ø§Ù„Ù‡Ù†Ø¯Ø³ÙŠØ© ÙˆØ§Ù„Ø±Ø³ÙˆÙ…Ø§Øª Ø§Ù„ÙÙ†ÙŠØ© Ø«Ù†Ø§Ø¦ÙŠØ© Ø§Ù„Ø£Ø¨Ø¹Ø§Ø¯ (6 Ø³Ø§Ø¹Ø§Øª)",
                "Ø£ØªÙ…ØªØ© Ø§Ù„ØªØµÙ…ÙŠÙ… ÙˆÙ…Ø­Ø§ÙƒØ§Ø© Ø§Ù„Ø­Ø±ÙƒØ© (6 Ø³Ø§Ø¹Ø§Øª)"
            ]
        },
        c3: {
            title: "Ù…Ø³Ø§Ù‚ Ø¥ÙƒØ³ÙŠÙ„ Ø§Ù„Ù…ØªÙ‚Ø¯Ù… (Advanced Excel)",
            inst: "Ù…Ù†ØµØ© Ø¥Ø¯Ø±Ø§Ùƒ (Edraak)",
            hours: "3 Ø³Ø§Ø¹Ø§Øª ØªØ¯Ø±ÙŠØ¨ÙŠØ©",
            date: "21 ÙŠÙˆÙ†ÙŠÙˆ 2025",
            desc: "Ø¯ÙˆØ±Ø© ØªØ¯Ø±ÙŠØ¨ÙŠØ© ØªÙØ§Ø¹Ù„ÙŠØ© ØªØºØ·ÙŠ Ø§Ù„Ù†Ù…Ø°Ø¬Ø© Ø§Ù„Ù…ØªÙ‚Ø¯Ù…Ø© Ù„Ø¬Ø¯Ø§ÙˆÙ„ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ£Ø¯ÙˆØ§Øª Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ±:",
            image: "img/1750573365989.jpg",
            topics: [
                "Ø§Ù„ØªÙ†Ø³ÙŠÙ‚ Ø§Ù„Ø´Ø±Ø·ÙŠ ÙˆØ§Ù„Ù…Ø®ØµØµ Ù„Ù„Ø¨Ø±Ù…Ø¬Ø©",
                "Ø§Ù„Ø¯ÙˆØ§Ù„ Ø§Ù„Ù…Ù†Ø·Ù‚ÙŠØ© ÙˆØ§Ù„Ø±ÙŠØ§Ø¶ÙŠØ© ÙˆØ§Ù„Ù†ØµÙŠØ© Ø§Ù„Ù…ØªÙ‚Ø¯Ù…Ø©",
                "Ø§Ù„Ø¬Ø¯Ø§ÙˆÙ„ Ø§Ù„Ù…Ø­ÙˆØ±ÙŠØ© ÙˆØ§Ù„ØªÙ‚Ø§Ø±ÙŠØ± Ø§Ù„ØªÙØ§Ø¹Ù„ÙŠØ© (Dashboards)",
                "ØªÙ…Ø«ÙŠÙ„ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ù…ØªÙ‚Ø¯Ù… ÙˆØ§Ù„Ø±Ø³ÙˆÙ…Ø§Øª Ø§Ù„Ø¨ÙŠØ§Ù†ÙŠØ© Ø§Ù„ØªÙØ§Ø¹Ù„ÙŠØ©"
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
        technologies: "Web Development â€¢ Responsive UI â€¢ Frontend Development â€¢ Modern Web Design",
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
        technologies: "HTML/CSS/JavaScript â€¢ Responsive Web Design â€¢ Interactive UI â€¢ Animations",
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
            title: "Ù†Ø¸Ø§Ù… Ø§Ù„Ù€CRM ÙˆØ£ØªÙ…ØªØ© Ø§Ù„ÙØ±ÙˆØ¹",
            type: "ØªØ·Ø¨ÙŠÙ‚ Ù…ÙƒØªØ¨ÙŠ",
            image: "img/crm-branch-automation.png",
            desc: "Ù†Ø¸Ø§Ù… Ù…ÙƒØªØ¨ÙŠ Ù…ØªÙƒØ§Ù…Ù„ Ù„Ø¥Ø¯Ø§Ø±Ø© Ø¹Ù„Ø§Ù‚Ø§Øª Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ ÙˆØ£ØªÙ…ØªØ© Ø§Ù„ÙØ±ÙˆØ¹ØŒ ÙŠÙ‚ÙˆÙ… Ø¨Ù…Ø±ÙƒØ²ÙŠØ© Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ ÙˆØ¥ØµØ¯Ø§Ø± Ø§Ù„ÙÙˆØ§ØªÙŠØ± Ø§Ù„Ø¶Ø±ÙŠØ¨ÙŠØ© ÙˆØªØªØ¨Ø¹ Ø§Ù„Ø´Ø­Ù†Ø§Øª ÙˆØ¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø¨ÙˆØ§Ù„Øµ ÙˆØ§Ù„ØªØ­Ø¯ÙŠØ«Ø§Øª ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨.",
            technologies: ["Python", "ØªØ·Ø¨ÙŠÙ‚ Ù…ÙƒØªØ¨ÙŠ", "Ù‚ÙˆØ§Ø¹Ø¯ Ø¨ÙŠØ§Ù†Ø§Øª", "CRM", "Ø£ØªÙ…ØªØ© ÙˆØ§ØªØ³Ø§Ø¨", "Ø£ØªÙ…ØªØ© Ø§Ù„ÙÙˆØ§ØªÙŠØ±", "ØªÙƒØ§Ù…Ù„ Ø§Ù„Ø´Ø­Ù†"],
            features: [
                { title: "Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡", desc: "ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ ÙˆØ¥Ø¯Ø§Ø±Ø© Ø¨ÙŠØ§Ù†Ø§ØªÙ‡Ù… Ù…Ø±ÙƒØ²ÙŠÙ‹Ø§ ÙˆØ¨Ø³Ù‡ÙˆÙ„Ø©." },
                { title: "Ø§Ù„ÙÙˆØ§ØªÙŠØ± Ø§Ù„Ø¶Ø±ÙŠØ¨ÙŠØ©", desc: "Ø¥Ù†Ø´Ø§Ø¡ ÙˆØ¥Ø¯Ø§Ø±Ø© Ø§Ù„ÙÙˆØ§ØªÙŠØ± Ø§Ù„Ø¶Ø±ÙŠØ¨ÙŠØ© Ø§Ù„Ù…Ø¹ØªÙ…Ø¯Ø©." },
                { title: "ØªØªØ¨Ø¹ Ø§Ù„Ø´Ø­Ù†Ø§Øª", desc: "ØªØªØ¨Ø¹ Ø§Ù„Ø´Ø­Ù†Ø§Øª ÙˆÙ…ØªØ§Ø¨Ø¹Ø© Ø­Ø§Ù„ØªÙ‡Ø§ Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© Ø£ÙˆÙ„Ø§Ù‹ Ø¨Ø£ÙˆÙ„." },
                { title: "Ø¨ÙˆØ§Ù„Øµ Ø§Ù„Ø´Ø­Ù†", desc: "Ø¥Ø¯Ø§Ø±Ø© ÙˆØªØ¬Ù‡ÙŠØ² ÙˆØ·Ø¨Ø§Ø¹Ø© Ø¨ÙˆØ§Ù„Øµ Ø§Ù„Ø´Ø­Ù†." },
                { title: "Ø£ØªÙ…ØªØ© ÙˆØ§ØªØ³Ø§Ø¨", desc: "Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø¨ÙˆØ§Ù„Øµ ÙˆØ±Ø³Ø§Ø¦Ù„ Ø§Ù„ØªØ­Ø¯ÙŠØ« Ù„Ù„Ø¹Ù…Ù„Ø§Ø¡ ØªÙ„Ù‚Ø§Ø¦ÙŠÙ‹Ø§ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨." },
                { title: "Ø³ÙŠØ± Ø¹Ù…Ù„ Ø¨Ù†Ù‚Ø±Ø© ÙˆØ§Ø­Ø¯Ø©", desc: "ØªÙ†ÙÙŠØ° Ø§Ù„Ù…Ù‡Ø§Ù… Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© Ø§Ù„Ù…ØªÙƒØ±Ø±Ø© Ø¨Ù†Ù‚Ø±Ø© ÙˆØ§Ø­Ø¯Ø© Ù„ØªØ³Ø±ÙŠØ¹ Ø§Ù„Ø¹Ù…Ù„." }
            ]
        },
        accounting: {
            title: "Ù†Ø¸Ø§Ù… ØªØ­Ù„ÙŠÙ„ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„Ù…Ø­Ø§Ø³Ø¨Ø© Ø§Ù„Ù…ØªÙƒØ§Ù…Ù„",
            type: "ØªØ·Ø¨ÙŠÙ‚ Ù…ÙƒØªØ¨ÙŠ",
            image: "img/data-accounting-system.png",
            desc: "Ù†Ø¸Ø§Ù… Ø£Ø¹Ù…Ø§Ù„ Ù…ÙƒØªØ¨ÙŠ ÙŠØ¬Ù…Ø¹ Ø¨ÙŠÙ† ØªØ­Ù„ÙŠÙ„ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„Ù…Ø¹Ø§Ù…Ù„Ø§Øª Ø§Ù„Ù…Ø­Ø§Ø³Ø¨ÙŠØ© ÙˆØ§Ù„ØªØ³ÙˆÙŠØ§Øª Ø§Ù„Ù…Ø§Ù„ÙŠØ© ÙˆØ§Ù„ØªÙ‚Ø§Ø±ÙŠØ± ÙˆØ¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© ÙÙŠ ØªØ·Ø¨ÙŠÙ‚ ÙˆØ§Ø­Ø¯.",
            technologies: ["Python", "ØªØ·Ø¨ÙŠÙ‚ Ù…ÙƒØªØ¨ÙŠ", "ØªØ­Ù„ÙŠÙ„ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª", "Ù…Ø­Ø§Ø³Ø¨Ø© Ù…Ø§Ù„ÙŠØ©", "Excel", "Ù‚ÙˆØ§Ø¹Ø¯ Ø¨ÙŠØ§Ù†Ø§Øª", "ØªÙ‚Ø§Ø±ÙŠØ±"],
            features: [
                { title: "ØªØ­Ù„ÙŠÙ„ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª", desc: "ØªØ­Ù„ÙŠÙ„ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© ÙˆØ§Ù„Ù…Ø§Ù„ÙŠØ© ÙˆØ§Ø³ØªØ®Ø±Ø§Ø¬ Ø§Ù„Ù…Ø¤Ø´Ø±Ø§Øª." },
                { title: "Ø§Ù„Ù…Ø­Ø§Ø³Ø¨Ø© Ø§Ù„Ù…Ø§Ù„ÙŠØ©", desc: "Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„Ù…Ø­Ø§Ø³Ø¨ÙŠØ© ÙˆØ§Ù„Ø³Ø¬Ù„Ø§Øª Ø§Ù„Ù…Ø§Ù„ÙŠØ© Ø¨Ø¯Ù‚Ø©." },
                { title: "Ø§Ù„Ù…Ø·Ø§Ø¨Ù‚Ø© ÙˆØ§Ù„ØªØ³ÙˆÙŠØ©", desc: "Ù…Ø·Ø§Ø¨Ù‚Ø© Ø§Ù„Ø³Ø¬Ù„Ø§Øª Ø§Ù„Ù…Ø§Ù„ÙŠØ© ÙˆØ§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© ÙˆØ§ÙƒØªØ´Ø§Ù Ø§Ù„ÙØ±ÙˆÙ‚Ø§Øª." },
                { title: "Ø¥Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ±", desc: "Ø¥Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØªÙ‚Ø§Ø±ÙŠØ± Ø§Ù„Ù…Ø§Ù„ÙŠØ© ÙˆØ§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© Ø§Ù„ØªÙØµÙŠÙ„ÙŠØ© Ù„Ù„Ø¥Ø¯Ø§Ø±Ø©." },
                { title: "Ù…Ø¹Ø§Ù„Ø¬Ø© Ù…Ù„ÙØ§Øª Excel", desc: "Ù…Ø¹Ø§Ù„Ø¬Ø© ÙˆØ¥Ø¯Ø§Ø±Ø© ÙˆØ§Ø³ØªÙŠØ±Ø§Ø¯/ØªØµØ¯ÙŠØ± Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ù…Ø¹ØªÙ…Ø¯Ø© Ø¹Ù„Ù‰ Ø¥ÙƒØ³ÙŠÙ„." },
                { title: "Ø³ÙŠØ± Ø¹Ù…Ù„ Ù…ØªÙƒØ§Ù…Ù„", desc: "Ø±Ø¨Ø· Ø§Ù„ØªØ­Ù„ÙŠÙ„ ÙˆØ§Ù„Ù…Ø­Ø§Ø³Ø¨Ø© ÙˆØ§Ù„Ù…Ø¹Ø§Ù„Ø¬Ø© ÙˆØ§Ù„ØªÙ‚Ø§Ø±ÙŠØ± Ø¯Ø§Ø®Ù„ Ù†Ø¸Ø§Ù… ÙˆØ§Ø­Ø¯ Ù…ØªÙƒØ§Ù…Ù„." }
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
}; }
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
            statusText.innerText = currentLang === 'ar' ? 'ÙŠÙƒØªØ¨ Ø§Ù„Ø¢Ù†...' : 'typing...';
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
                statusText.innerText = currentLang === 'ar' ? 'ÙŠØ±Ø¯ Ø¹Ø§Ø¯Ø©Ù‹ Ø®Ù„Ø§Ù„ Ø¯Ù‚Ø§Ø¦Ù‚' : 'Typically replies in minutes';
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


