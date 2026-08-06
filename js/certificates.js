/* ==========================================================================
   Certificates Lightbox Gallery - Md Imtiaz Portfolio
   ========================================================================== */

const certificateItems = [
  { 
    file: "certificates/certificate0.jpg", 
    title: "CS202: Discrete Structures",
    issuer: "Saylor Academy"
  },
  { 
    file: "certificates/certificate1.jpg", 
    title: "CS301: Computer Architecture",
    issuer: "Saylor Academy"
  },
  { 
    file: "certificates/certificate2.jpg", 
    title: "Positivity - How To Build Positive Mentality",
    issuer: "GoEdu.ac"
  },
  { 
    file: "certificates/certificate3.jpg", 
    title: "Soft Skill and Hard Skill",
    issuer: "GoEdu.ac"
  },
  { 
    file: "certificates/certificate4.jpg", 
    title: "Become & Make A Leader: With Examples",
    issuer: "GoEdu.ac"
  },
  { 
    file: "certificates/certificate5.jpg", 
    title: "Leadership Qualities - Boss VS Leader",
    issuer: "GoEdu.ac"
  },
  { 
    file: "certificates/certificate6.jpg", 
    title: "Setting and Achieving Focus, Goals and Targets",
    issuer: "GoEdu.ac"
  }
];

let currentCertIndex = 0;

function renderCertificates() {
  const container = document.getElementById("certGrid");
  if (!container) return;

  container.innerHTML = certificateItems.map((cert, index) => `
    <div class="cert-card" onclick="openLightbox(${index})">
      <div class="cert-thumb-wrapper">
        <img src="${cert.file}" alt="${cert.title}" class="cert-thumb" loading="lazy">
        <div class="cert-overlay">
          <div class="cert-zoom-icon">
            <i class="fas fa-search-plus"></i>
          </div>
        </div>
      </div>
      <div class="cert-caption">
        <div style="font-weight: 700; color: var(--text-main); line-height: 1.3;">${cert.title}</div>
        <div style="font-size: 0.8rem; color: var(--accent-cyan); margin-top: 0.3rem; font-family: var(--font-mono);">${cert.issuer}</div>
      </div>
    </div>
  `).join('');
}

function openLightbox(index) {
  currentCertIndex = index;
  const modal = document.getElementById("certLightbox");
  const img = document.getElementById("lightboxImg");
  const title = document.getElementById("lightboxTitle");
  if (!modal || !img || !title) return;

  const item = certificateItems[currentCertIndex];
  img.src = item.file;
  title.innerHTML = `<span style="color: var(--accent-cyan); font-family: var(--font-mono); font-size: 0.9rem;">[${item.issuer}]</span> ${item.title}`;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("certLightbox");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function navigateLightbox(direction) {
  currentCertIndex = (currentCertIndex + direction + certificateItems.length) % certificateItems.length;
  openLightbox(currentCertIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  renderCertificates();

  // Keyboard navigation for lightbox
  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("certLightbox");
    if (!modal || !modal.classList.contains("active")) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
});
