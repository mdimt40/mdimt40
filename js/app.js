/* ==========================================================================
   Main Application Script - Md Imtiaz Portfolio
   SaaS Level UI: Typing Animation, Smart Hide/Show Navbar, Stats Counter, Real Contact Form
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
const typingSpeed = 60;
const deletingSpeed = 35;
const pauseDelay = 2000;

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

// 2. Smart Hide/Show Floating Navbar & Scroll Effects
let lastScrollY = window.scrollY;

function initHeaderScroll() {
  const header = document.getElementById("siteHeader");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Smart Hide on Scroll Down / Show on Scroll Up
    if (currentScrollY > 120) {
      if (currentScrollY > lastScrollY && !document.body.classList.contains("menu-open")) {
        header.classList.add("header-hidden");
      } else {
        header.classList.remove("header-hidden");
      }
      header.classList.add("scrolled");
    } else {
      header.classList.remove("header-hidden", "scrolled");
    }

    lastScrollY = currentScrollY;

    // Floating Back to Top Button
    if (scrollTopBtn) {
      if (currentScrollY > 400) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    }

    // Active Section Link Highlight
    let currentSection = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      if (currentScrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
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

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  document.addEventListener("click", (e) => {
    if (nav.classList.contains("active") && !nav.contains(e.target) && !toggle.contains(e.target)) {
      toggleMenu(false);
    }
  });
}

// 4. Statistics Counter Animation
function initStatCounters() {
  const statNumbers = document.querySelectorAll(".stat-number");
  if (statNumbers.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetVal = parseInt(el.dataset.target, 10);
        let startVal = 0;
        const duration = 2000;
        const increment = Math.ceil(targetVal / (duration / 20));

        const timer = setInterval(() => {
          startVal += increment;
          if (startVal >= targetVal) {
            el.textContent = targetVal > 1000 ? `${targetVal.toLocaleString()}+` : `${targetVal}+`;
            clearInterval(timer);
          } else {
            el.textContent = startVal > 1000 ? `${startVal.toLocaleString()}+` : `${startVal}+`;
          }
        }, 20);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  statNumbers.forEach(num => observer.observe(num));
}

// 5. Dual Career Path Switcher
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

// 6. Skill Bar Fill Animation
function initSkillBars() {
  const skillFills = document.querySelectorAll(".skill-progress-fill");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = fill.dataset.percent;
      }
    });
  }, { threshold: 0.2 });

  skillFills.forEach(fill => observer.observe(fill));
}

// 7. Skill Category Filter
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

// 8. Toast Feedback & Real Direct FormSubmit Email Service
function showToast(message) {
  const toast = document.getElementById("toastMsg");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
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

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMsg").value;

    try {
      const response = await fetch("https://formsubmit.co/ajax/mdimt40@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `New Portfolio Contact Message from ${name}`
        })
      });

      if (response.ok) {
        showToast("🚀 Message sent successfully! Md Imtiaz will reply soon.");
        form.reset();
      } else {
        window.location.href = `mailto:mdimt40@gmail.com?subject=Portfolio Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
        showToast("Redirecting to email client (mdimt40@gmail.com)...");
      }
    } catch (err) {
      window.location.href = `mailto:mdimt40@gmail.com?subject=Portfolio Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
      showToast("Redirecting to email client...");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

// Initialization on DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  typeRoles();
  initHeaderScroll();
  initMobileNav();
  initStatCounters();
  initPathSwitcher();
  initSkillBars();
  initSkillFilter();
  initContactForm();
});
