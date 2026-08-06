/* ==========================================================================
   Projects Module - Md Imtiaz Portfolio
   Data Store, Filtering, & Modal Showcase
   ========================================================================== */

const projectsData = [
  {
    id: "univ-result-web",
    title: "University Result Checker Website",
    category: "web",
    categoryLabel: "Web App",
    image: "projects/resultcheckerweb.png",
    tech: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    summary: "A centralized, responsive web platform enabling university students to instantly search and view academic GPA results.",
    details: "Built to streamline student GPA lookups during exam season. Features instant search indexing, responsive data tables, dark mode display, and clean grade distribution summaries."
  },
  {
    id: "univ-result-bot",
    title: "University Result Checker Telegram Bot",
    category: "bot",
    categoryLabel: "Python & Bot",
    image: "projects/resultcheckerbot.png",
    tech: ["Python", "Telegram API", "Data Parsing", "Asyncio"],
    summary: "Automated messaging bot delivering instant student academic results directly inside Telegram.",
    details: "Leverages Telegram Bot API and custom Python web scrapers to parse university result databases asynchronously. Provides rapid queries, ID verification, and result PDF report generation."
  },
  {
    id: "voice-patuakhali",
    title: "Voice of Patuakhali News Website",
    category: "wordpress",
    categoryLabel: "WordPress",
    image: "projects/vop.png",
    tech: ["WordPress", "PHP", "CSS3", "Custom Plugins"],
    summary: "A lightweight, high-performance regional newspaper portal designed for fast news distribution.",
    details: "Engineered a custom responsive WordPress theme with SEO optimization, breaking news ticker, categorized article grids, and ad integration for local media readers in Patuakhali."
  },
  {
    id: "dumki-students-portal",
    title: "Dumki Upazila Students Association Website",
    category: "web",
    categoryLabel: "Web App",
    image: "projects/dusa-bd.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    summary: "Community portal offering student resources, announcements, executive committees, and event updates.",
    details: "Provides an intuitive digital directory for local students. Features event registration notices, scholarship news feeds, photo archives, and an interactive member roster."
  },
  {
    id: "profile-framer",
    title: "Automatic Profile Photo Framer Tool",
    category: "web",
    categoryLabel: "Web Tool",
    image: "projects/profileframe.png",
    tech: ["HTML5 Canvas", "CSS3", "JavaScript"],
    summary: "Custom client-side tool allowing users to overlay thematic frames onto profile photos seamlessly.",
    details: "Built during a public fire service tribute initiative. Utilizes HTML5 Canvas API for instant image rendering, rotation, scaling, and high-quality PNG download with zero server latency."
  },
  {
    id: "moviemart-bd",
    title: "MovieMartBD Portal",
    category: "web",
    categoryLabel: "Web App",
    image: "projects/mmbd.png",
    liveUrl: "https://moviemartbd.blogspot.com",
    tech: ["HTML5", "CSS3", "JavaScript"],
    summary: "A sleek, responsive media catalog and streaming reference platform for movie enthusiasts.",
    details: "Clean dark-themed frontend showcasing curated movie trailers, IMDb rating badges, category filters, and fast download links."
  },
  {
    id: "imtiaz-portfolio",
    title: "Personal Developer Portfolio",
    category: "web",
    categoryLabel: "Web App",
    image: "projects/portfolio.png",
    liveUrl: "https://mdimtiaz.pages.dev",
    tech: ["HTML5", "Vanilla CSS", "Modern ES6 JS"],
    summary: "Custom-crafted portfolio site featuring dual career paths, skill meters, project showcase, and certificate gallery.",
    details: "Designed with glassmorphism, responsive grid system, typing effects, project filter tabs, modal previews, and interactive certificate lightboxes."
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
        <div class="project-footer">
          <button class="project-details-btn" onclick="openProjectModal('${p.id}')">
            Details <i class="fas fa-arrow-right"></i>
          </button>
          ${p.liveUrl ? `
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="padding: 0.35rem 0.85rem; font-size: 0.8rem;">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
          ` : ''}
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

  modalBody.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div class="modal-project-img-wrapper" style="margin-bottom: 1.25rem; border-radius: 14px; overflow: hidden; border: 1px solid var(--border-glass);">
        <img src="${project.image}" alt="${project.title}" style="width: 100%; max-height: 250px; object-fit: cover;">
      </div>
      <span class="section-tag">${project.categoryLabel}</span>
      <h2 style="font-family: var(--font-heading); font-size: 1.8rem; margin-top: 0.5rem; color: var(--text-main);">
        ${project.title}
      </h2>
    </div>
    <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.5rem;">
      ${project.details}
    </p>
    <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 0.8rem; text-transform: uppercase;">
      Technologies Utilized
    </h4>
    <div class="project-tech-stack" style="margin-bottom: 2rem;">
      ${project.tech.map(t => `<span class="project-tech-tag" style="font-size: 0.85rem; padding: 0.3rem 0.8rem;">${t}</span>`).join('')}
    </div>
    <div style="display: flex; gap: 1rem; justify-content: flex-end; align-items: center;">
      ${project.liveUrl ? `
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i class="fas fa-external-link-alt"></i> Visit Live Site
        </a>
      ` : ''}
      <button class="btn btn-outline btn-sm" onclick="closeProjectModal()">Close</button>
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
