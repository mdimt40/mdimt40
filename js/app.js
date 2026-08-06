/* ==========================================================================
   Main Application Script - Md Imtiaz Portfolio
   Typing Effect, Scroll Animations, Navigation & Interactive Controls
   ========================================================================== */

// 1. Typing Animation Roles
const roles = [
  "Software Engineering Student",
  "WordPress Developer (95%)",
  "UI/UX & Graphic Designer",
  "React.js & Next.js Explorer",
  "Data Science & Python Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 70;
const deletingSpeed = 40;
const pauseDelay = 1800;

function typeRoles() {
  const target = document.getElementById("typingTarget");
  if (!target) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    target.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    target.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? deletingSpeed : typingSpeed;

  if (!isDeleting && charIndex === currentRole.length) {
    delay = pauseDelay;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(typeRoles, delay);
}

// 2. Header Scroll & Active Section Highlight
function initHeaderScroll() {
  const header = document.getElementById("siteHeader");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Active Section Tracking
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// 3. Mobile Navigation Drawer
function initMobileNav() {
  const toggle = document.getElementById("mobileToggle");
  const nav = document.getElementById("navLinks");
  if (!toggle || !nav) return;

  function toggleMenu(open) {
    const isActive = open !== undefined ? open : !nav.classList.contains("active");
    nav.classList.toggle("active", isActive);
    document.body.classList.toggle("menu-open", isActive);

    const icon = toggle.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars", !isActive);
      icon.classList.toggle("fa-times", isActive);
    }
  }

  toggle.addEventListener("click", () => toggleMenu());

  // Close nav on click link
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  // Close nav on backdrop click
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("active") && !nav.contains(e.target) && !toggle.contains(e.target)) {
      toggleMenu(false);
    }
  });
}

// 4. Dual Career Path Switcher
function initPathSwitcher() {
  const pathBtns = document.querySelectorAll(".path-tab-btn");
  const pathCards = document.querySelectorAll(".path-card");

  pathBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetPath = btn.dataset.path;
      pathBtns.forEach(b => b.classList.remove("active"));
      pathCards.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      const activeCard = document.getElementById(`path-${targetPath}`);
      if (activeCard) activeCard.classList.add("active");
    });
  });
}

// 5. Skill Bar Scroll Triggered Fill
function initSkillBars() {
  const skillFills = document.querySelectorAll(".skill-progress-fill");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const targetPercent = fill.dataset.percent;
        fill.style.width = targetPercent;
      }
    });
  }, { threshold: 0.2 });

  skillFills.forEach(fill => observer.observe(fill));
}

// 6. Skill Category Filter
function initSkillFilter() {
  const skillCatBtns = document.querySelectorAll(".skill-cat-btn");
  const skillCards = document.querySelectorAll(".skill-card");

  skillCatBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      skillCatBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const cat = btn.dataset.skillCat;
      skillCards.forEach(card => {
        if (cat === "all" || card.dataset.category === cat) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// 7. Toast Notification Utility & Form Submit Simulation
function showToast(message) {
  const toast = document.getElementById("toastMsg");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

function copyEmail() {
  navigator.clipboard.writeText("mdimt40@gmail.com").then(() => {
    showToast("Email (mdimt40@gmail.com) copied to clipboard!");
  }).catch(() => {
    showToast("Direct Email: mdimt40@gmail.com");
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Thank you! Your message has been sent successfully.");
    form.reset();
  });
}

// Initialization on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  typeRoles();
  initHeaderScroll();
  initMobileNav();
  initPathSwitcher();
  initSkillBars();
  initSkillFilter();
  initContactForm();
});
