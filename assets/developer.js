// window.addEventListener("load", function() {
//     const preloader = document.getElementById("site-preloader");
//     setTimeout(() => {
//         preloader.classList.add("preloader-exit");
//         preloader.addEventListener("animationend", () => {
//         preloader.style.display = "none";
//         });
//     }, 2000);
// });



document.querySelectorAll(".days-gauge").forEach((gauge) => {

  const TOTAL_DAYS = parseInt(gauge.dataset.totalDays || 60);

  const daysLeftEl = gauge.querySelector(".daysLeftNumber");
  const DAYS_LEFT = parseInt(daysLeftEl.textContent, 10);

  const DAYS_PASSED = TOTAL_DAYS - DAYS_LEFT;
  const progressPercent = (DAYS_PASSED / TOTAL_DAYS) * 100;

  const progressArc = gauge.querySelector(".progressArc");
  progressArc.setAttribute("stroke-dasharray", `${progressPercent} 100`);

  const ticksGroup = gauge.querySelector(".gaugeTicks");

  const TICK_COUNT = 35;
  const cx = 100;
  const cy = 100;
  const outerRadius = 98;
  const innerMinor = 80;
  const innerMajor = 80;

  ticksGroup.innerHTML = ""; // Clear old ticks

  for (let i = 0; i <= TICK_COUNT; i++) {
    const angle = Math.PI * (i / TICK_COUNT);
    const cos = Math.cos(Math.PI - angle);
    const sin = Math.sin(Math.PI - angle);

    const isMajor = i % 5 === 0;

    const x1 = cx + outerRadius * cos;
    const y1 = cy - outerRadius * sin;
    const x2 = cx + (isMajor ? innerMajor : innerMinor) * cos;
    const y2 = cy - (isMajor ? innerMajor : innerMinor) * sin;

    const tick = document.createElementNS("http://www.w3.org/2000/svg", "line");

    tick.setAttribute("x1", x1);
    tick.setAttribute("y1", y1);
    tick.setAttribute("x2", x2);
    tick.setAttribute("y2", y2);
    tick.setAttribute("stroke", isMajor ? "#214ECF" : "#000");
    tick.setAttribute("stroke-width", isMajor ? "2" : "1");
    tick.setAttribute("stroke-linecap", "round");

    ticksGroup.appendChild(tick);
  }

});



document.addEventListener("DOMContentLoaded", function() {
  const eyeOpen = document.getElementById("icon-eye-open")?.innerHTML;
  const eyeClosed = document.getElementById("icon-eye-closed")?.innerHTML;

  document.querySelectorAll(".toggle-password").forEach(function(btn) {
    const targetId = btn.getAttribute("data-target");
    const input = document.getElementById(targetId);

    if (!input) return;

    // default state
    btn.innerHTML = eyeOpen;

    btn.addEventListener("click", function() {
      if (input.type === "password") {
        input.type = "text";
        btn.innerHTML = eyeClosed;
      } else {
        input.type = "password";
        btn.innerHTML = eyeOpen;
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const verifyBox = document.querySelector(".sotp-widget .olWrapper .ol");
  if (!verifyBox) return;

  if (!verifyBox.querySelector(".help-support-box")) {
    verifyBox.insertAdjacentHTML(
      "beforeend",
      `<div class="help-support-box">
        Facing any problem? <a href="/contact" target="_blank">Contact us</a>
      </div>`
    );
  }
});


document.addEventListener('DOMContentLoaded', function () {
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);

    const scrollToSection = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        return true;
      }
      return false;
    };

    // Try immediately
    if (!scrollToSection()) {
      // Retry because Shopify sections load late
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (scrollToSection() || attempts > 20) {
          clearInterval(interval);
        }
      }, 150);
    }
  }
});


document.querySelectorAll('.js-indian-number').forEach(el => {
  const value = parseInt(el.dataset.value, 10);
  if (isNaN(value)) return;

  const formatted = value.toLocaleString('en-IN');
  el.innerHTML += ' ' + formatted;
});

document.addEventListener("DOMContentLoaded", function () {

  function animateCounter(el, duration = 1500) {
    const finalValue = parseFloat(el.dataset.value || 0);
    const isMoney = el.classList.contains("js-indian-number");

    let start = 0;
    let startTime = null;

    function formatIndian(num) {
      return Math.round(num).toLocaleString("en-IN");
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const current = start + (finalValue - start) * progress;

      if (isMoney) {
        el.textContent = "₹" + formatIndian(current);
      } else {
        el.textContent = Math.round(current);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Ensure final exact value
        if (isMoney) {
          el.textContent = "₹" + formatIndian(finalValue);
        } else {
          el.textContent = finalValue;
        }
      }
    }

    requestAnimationFrame(step);
  }

  // Animate all counters
  document.querySelectorAll(".js-counter").forEach(el => {
    animateCounter(el, 1800);
  });

});


document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("policyModal");
  if (!modal) return;

  /* ===== EXISTING CODE (UNCHANGED) ===== */
  document.querySelectorAll("[data-open-policy]").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.add("active");
    });
  });

  modal.querySelector(".policy_modal_close").onclick = () => modal.classList.remove("active");
  modal.querySelector(".policy_modal_overlay").onclick = () => modal.classList.remove("active");

  modal.querySelectorAll(".policy_tabs li").forEach(tab => {
    tab.addEventListener("click", function () {
      const id = this.dataset.tab;

      modal.querySelectorAll(".policy_tabs li").forEach(t => t.classList.remove("active"));
      modal.querySelectorAll(".policy_tab").forEach(c => c.classList.remove("active"));

      this.classList.add("active");
      modal.querySelector("#" + id).classList.add("active");
    });
  });

  document.querySelectorAll(".consent-link").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.add("active");

      const href = this.getAttribute("href") || "";
      let tabId = null;

      if (href.includes("privacy")) {
        tabId = "tab-privacy";
      } else if (href.includes("terms")) {
        tabId = "tab-terms";
      }

      // RESET tabs
      modal.querySelectorAll(".policy_tabs li").forEach(t => t.classList.remove("active"));
      modal.querySelectorAll(".policy_tab").forEach(c => c.classList.remove("active"));

      // ✅ If tab matched → open it
      if (tabId && modal.querySelector(`#${tabId}`)) {
        modal.querySelector(`.policy_tabs li[data-tab="${tabId}"]`)?.classList.add("active");
        modal.querySelector(`#${tabId}`)?.classList.add("active");
      } 
      // ✅ FALLBACK → open FIRST tab
      else {
        const firstTab = modal.querySelector(".policy_tabs li");
        const firstContent = modal.querySelector(".policy_tab");

        if (firstTab && firstContent) {
          firstTab.classList.add("active");
          firstContent.classList.add("active");
        }
      }
    });
  });

});


document.addEventListener("DOMContentLoaded", () => {

  const sticky = document.getElementById("stickyVideoPreview");
  const stickyThumb = document.getElementById("stickyThumb");
  const stickyTitle = document.getElementById("stickyTitle");
  const stickyText = document.getElementById("stickyText");

  const popup = document.getElementById("videoPopup");
  const popupVideo = document.getElementById("popupVideo");

  const sections = document.querySelectorAll(".video-trigger-section");

  if (!sticky || !popup || sections.length === 0) return;

  let activeSrc = null;

  // 🧠 Store only closed videos for THIS PAGE SESSION
  const closedVideos = new Set();

  function updateSticky(data) {
    // ❌ If this video was closed by user → do not show
    if (closedVideos.has(data.src)) return;

    // ❌ If already showing this video → do nothing
    if (activeSrc === data.src) return;

    activeSrc = data.src;

    stickyThumb.src = data.thumb || "";
    stickyTitle.textContent = data.title || "";
    stickyText.textContent = data.text || "";
    sticky.dataset.video = data.src || "";

    sticky.classList.remove("hidden");
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;

      updateSticky({
        src: el.dataset.videoSrc,
        title: el.dataset.title,
        thumb: el.dataset.thumb
      });
    });
  }, { threshold: 0.4 });

  sections.forEach(sec => observer.observe(sec));

  // ▶ Click sticky → open popup
  sticky.querySelector(".sticky-content").addEventListener("click", () => {
    const src = sticky.dataset.video;
    if (!src) return;

    popupVideo.src = src;
    popupVideo.currentTime = 0;
    popupVideo.play();
    popup.classList.remove("hidden");
  });

  // ❌ Close popup
  popup.querySelector(".video-popup-close").addEventListener("click", () => {
    popupVideo.pause();
    popupVideo.src = "";
    popup.classList.add("hidden");
  });

  // ❌ Close CURRENT sticky only
  sticky.querySelector(".sticky-close").addEventListener("click", () => {
    const currentSrc = sticky.dataset.video;

    if (currentSrc) {
      closedVideos.add(currentSrc); // 🧠 remember only this one
    }

    sticky.classList.add("hidden");
    activeSrc = null; // allow next section to trigger
  });

});








// document.addEventListener("DOMContentLoaded", function () {
//   const $flipbook = $('#product-flipbook');
//   if (!$flipbook.length) return;
//   $flipbook.turn({
//     display: 'single',
//     page: 1,
//     autoCenter: true,
//     acceleration: true,
//     gradients: true,
//     elevation: 120,      
//     duration: 900,
//     turnCorners: 'tl,tr',
//     when: {
//       turning: function () {
//         $(this).addClass('turning');
//       },
//       turned: function () {
//         $(this).removeClass('turning');
//       }
//     }
//   });
//   document.querySelector('.flip-btn.next')
//     .addEventListener('click', () => $flipbook.turn('next'));
//   document.querySelector('.flip-btn.prev')
//     .addEventListener('click', () => $flipbook.turn('previous'));
// });





document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     INIT PAGE FLIP
  =============================== */

  const flipContainer = document.getElementById("flip-book");

  if (!flipContainer) return;

  const pageFlip = new St.PageFlip(flipContainer, {
    width: 850,
    height: 475,
    size: "fixed",

    // REAL PAGE FLIP SETTINGS
    drawShadow: true,
    maxShadowOpacity: 0.5,
    showCover: false,
    mobileScrollSupport: false,
    useMouseEvents: true
  });

  pageFlip.loadFromHTML(
    document.querySelectorAll("#flip-book .page")
  );

  /* ===============================
     PREV / NEXT BUTTONS
  =============================== */

  const prevBtn = document.getElementById("flipPrev");
  const nextBtn = document.getElementById("flipNext");

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      pageFlip.flipPrev();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      pageFlip.flipNext();
    });
  }

  /* ===============================
     DISABLE BUTTONS AT EDGES
  =============================== */

  function updateButtons() {
    const current = pageFlip.getCurrentPageIndex();
    const total = pageFlip.getPageCount();

    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === total - 1;
  }

  pageFlip.on("flip", updateButtons);
  updateButtons();

  /* ===============================
     KEYBOARD SUPPORT (OPTIONAL)
  =============================== */

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") pageFlip.flipPrev();
    if (e.key === "ArrowRight") pageFlip.flipNext();
  });

});












