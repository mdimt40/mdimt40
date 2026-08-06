/* ==========================================================================
   Projects Module - Md Imtiaz Portfolio
   Data Store, Filtering, Case Study Modals, Live Demos & GitHub Links
   ========================================================================== */

const projectsData = [
  {
    id: "univ-result-web",
    title: "University Result Checker Website",
    category: "web",
    categoryLabel: "Web App",
    image: "projects/resultcheckerweb.png",
    liveUrl: "https://mdimt40.github.io/DIUinsider/",
    githubUrl: "https://github.com/mdimt40/DIUinsider",
    tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "DOM API"],
    summary: "A centralized, responsive web platform enabling university students to instantly search and view academic GPA results.",
    caseStudy: {
      problem: "Students faced server timeouts and confusing portals when trying to check university semester GPA results during peak release hours.",
      solution: "Engineered a lightweight, client-indexed GPA lookup engine with instant search filtering, responsive grade breakdown cards, and zero latency.",
      architecture: "Single-Page HTML5/ES6 application with client-side JSON indexing, asynchronous data filtering, and CSS glassmorphism UI.",
      metrics: "Over 1,250+ student GPA result queries served during peak exam releases with 100% uptime."
    }
  },
  {
    id: "univ-result-bot",
    title: "University Result Checker Telegram Bot",
    category: "bot",
    categoryLabel: "Python & Bot",
    image: "projects/resultcheckerbot.png",
    liveUrl: "https://t.me/mdimt40",
    githubUrl: "https://github.com/mdimt40/mdimt40",
    tech: ["Python", "Telegram Bot API", "Asyncio", "Data Scraping"],
    summary: "Automated messaging bot delivering instant student academic results directly inside Telegram.",
    caseStudy: {
      problem: "Mobile users wanted instantaneous push notifications for exam results without opening browser portals.",
      solution: "Developed an asynchronous Telegram Bot in Python that parses university database entries and responds to student ID queries in <500ms.",
      architecture: "Python 3.12, Asyncio event loops, Telegram Bot API webhook handlers, and custom HTTP data scrapers.",
      metrics: "Delivered 800+ automated result report cards directly into student Telegram chats."
    }
  },
  {
    id: "voice-patuakhali",
    title: "Voice of Patuakhali News Portal",
    category: "wordpress",
    categoryLabel: "WordPress",
    image: "projects/vop.png",
    liveUrl: "https://mdimt40.github.io/vop-photoframe/",
    githubUrl: "https://github.com/mdimt40/mdimt40",
    tech: ["WordPress", "PHP", "CSS3", "SEO Engine"],
    summary: "A lightweight, high-performance regional newspaper portal designed for fast local news distribution.",
    caseStudy: {
      problem: "Local regional news outlets required a fast-loading media website optimized for low-bandwidth mobile readers in Patuakhali.",
      solution: "Customized a responsive WordPress news engine with breaking news tickers, automated category feeds, schema markup, and fast image compression.",
      architecture: "Custom WordPress PHP child theme, MySQL database optimization, and Schema.org NewsArticle structured data.",
      metrics: "Achieved >90 Mobile Performance score and fast regional article indexing."
    }
  },
  {
    id: "dumki-students-portal",
    title: "Dumki Upazila Students Association Website",
    category: "web",
    categoryLabel: "Web App",
    image: "projects/dusa-bd.png",
    liveUrl: "https://dusa-bd.web.app",
    githubUrl: "https://github.com/mdimt40/mdimt40",
    tech: ["HTML5", "CSS3", "JavaScript", "Flexbox/Grid"],
    summary: "Community portal offering student resources, announcements, executive committees, and event updates.",
    caseStudy: {
      problem: "Student union members lacked a single central platform for executive roster lists, scholarship notices, and event registration.",
      solution: "Designed an accessible digital community hub featuring searchable member directories, event countdowns, and resource links.",
      architecture: "Modular Vanilla JavaScript, CSS Grid architecture, and responsive glassmorphism component cards.",
      metrics: "Serves as the official digital homepage for Dumki Upazila student union members."
    }
  },
  {
    id: "profile-framer",
    title: "Automatic Profile Photo Framer Tool",
    category: "web",
    categoryLabel: "Web Tool",
    image: "projects/profileframe.png",
    liveUrl: "https://mdimt40.github.io/vop-photoframe/",
    githubUrl: "https://github.com/mdimt40/vop-photoframe",
    tech: ["HTML5 Canvas API", "JavaScript", "CSS3"],
    summary: "Custom client-side tool allowing users to overlay thematic frames onto profile photos seamlessly.",
    details: "Built during a public fire service tribute initiative. Utilizes HTML5 Canvas API for instant image rendering, rotation, scaling, and high-quality PNG download with zero server latency.",
    caseStudy: {
      problem: "Social media campaign supporters struggled to manually edit campaign frame borders onto their profile pictures.",
      solution: "Created an in-browser HTML5 Canvas image compositor allowing users to upload, drag, scale, and download framed profile photos in 5 seconds.",
      architecture: "HTML5 Canvas 2D Context, Client-Side Blob PNG Generation, and touch drag/scale gesture handlers.",
      metrics: "Generated 500+ customized campaign profile pictures with 0 server processing load."
    }
  },
  {
    id: "moviemart-bd",
    title: "MovieMartBD Portal",
    category: "web",
    categoryLabel: "Web App",
    image: "projects/mmbd.png",
    liveUrl: "https://moviemartbd.blogspot.com",
    githubUrl: "https://github.com/mdimt40/mdimt40",
    tech: ["HTML5", "CSS3", "JavaScript", "IMDb API"],
    summary: "A sleek, responsive media catalog and streaming reference platform for movie enthusiasts.",
    caseStudy: {
      problem: "Movie fans needed a streamlined dark-mode catalog to browse trailers, ratings, and media download links without heavy clutter.",
      solution: "Engineered a high-speed media reference portal with IMDb rating badges, category filter pills, video trailer modals, and direct downloads.",
      architecture: "Custom CSS Dark System, JavaScript media catalog filter, and embedded responsive video frames.",
      metrics: "Active media portal with hundreds of monthly movie enthusiasts."
    }
  },
  {
    id: "imtiaz-portfolio",
    title: "Personal Developer Portfolio",
    category: "web",
    categoryLabel: "Web App",
    image: "projects/portfolio.png",
    liveUrl: "https://mdimtiaz.pages.dev",
    githubUrl: "https://github.com/mdimt40/mdimt40",
    tech: ["HTML5", "Vanilla CSS", "Modern ES6 JS", "JSON-LD Schema"],
    summary: "Custom-crafted portfolio site featuring dual career paths, skill meters, project showcase, and certificate gallery.",
    caseStudy: {
      problem: "Needed a world-class personal website that functions as a SaaS product showcasing frontend skills, WordPress expertise, and data science goals.",
      solution: "Built a mobile-first glassmorphic web application with smart floating navbar, animated statistics counters, interactive project case study modals, and Rank #1 SEO schema.",
      architecture: "Vanilla ES6 JavaScript, CSS Grid/Flexbox design system, WebSite & Person JSON-LD Graph Schema, and FormSubmit AJAX email service.",
      metrics: "100% Lighthouse Mobile Performance & SEO score, deployed on Cloudflare Pages and GitHub Pages."
    }
  }
];

function renderProjects(filter = "all") {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  const filtered = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => `
    <div class="project-card" data-id="${p.id}">
      <div class="project-banner">
        <img src="${p.image}" alt="${p.title}" class="project-banner-img" loading="lazy">
        <span class="project-category-tag">${p.categoryLabel}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.summary}</p>
        
        <div class="project-tech-stack">
          ${p.tech.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
        </div>

        <div class="project-actions-row">
          <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="proj-action-btn live-btn" title="Live Demo">
            <i class="fas fa-globe"></i> Live Demo
          </a>
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="proj-action-btn github-btn" title="GitHub Repository">
            <i class="fab fa-github"></i> GitHub
          </a>
          <button class="proj-action-btn case-btn" onclick="openProjectModal('${p.id}')" title="Read Case Study">
            <i class="fas fa-file-alt"></i> Case Study
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("projectModalBody");
  if (!modal || !modalBody) return;

  const cs = project.caseStudy || {};

  modalBody.innerHTML = `
    <div class="case-study-wrapper">
      <div class="case-study-header">
        <div class="case-study-img-box">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <span class="section-tag" style="margin-top: 1rem;">${project.categoryLabel} Case Study</span>
        <h2 class="case-study-title">${project.title}</h2>
      </div>

      <div class="case-study-grid">
        <div class="case-study-block">
          <h4><i class="fas fa-exclamation-triangle" style="color: #f59e0b;"></i> Problem Statement</h4>
          <p>${cs.problem || project.summary}</p>
        </div>

        <div class="case-study-block">
          <h4><i class="fas fa-check-circle" style="color: #10b981;"></i> Solution & Features</h4>
          <p>${cs.solution || project.summary}</p>
        </div>

        <div class="case-study-block">
          <h4><i class="fas fa-cogs" style="color: #06b6d4;"></i> System Architecture</h4>
          <p>${cs.architecture || "Built with modern responsive frontend principles and optimized assets."}</p>
        </div>

        <div class="case-study-block">
          <h4><i class="fas fa-chart-line" style="color: #8b5cf6;"></i> Impact & Metrics</h4>
          <p>${cs.metrics || "Delivered high user satisfaction and fast performance."}</p>
        </div>
      </div>

      <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--accent-cyan); margin: 1.5rem 0 0.8rem 0; text-transform: uppercase;">
        Tech Stack
      </h4>
      <div class="project-tech-stack" style="margin-bottom: 2rem;">
        ${project.tech.map(t => `<span class="project-tech-tag" style="font-size: 0.85rem; padding: 0.35rem 0.85rem;">${t}</span>`).join('')}
      </div>

      <div class="case-study-actions">
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i class="fas fa-globe"></i> Live Demo
        </a>
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
          <i class="fab fa-github"></i> GitHub Repo
        </a>
        <button class="btn btn-outline btn-sm" onclick="closeProjectModal()">Close</button>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  if (modal) modal.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");

  const filterBtns = document.querySelectorAll(".project-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });
});
