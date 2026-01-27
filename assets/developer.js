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

  const flipContainer = document.getElementById("flip-book");
  if (!flipContainer) return;

  const pageFlip = new St.PageFlip(flipContainer, {
    width: 420,
    height: 560,
    size: "fixed",
 display: 'single',
    page: 1,
    drawShadow: true,
    maxShadowOpacity: 0.5,
    showCover: false,
    mobileScrollSupport: false,
    useMouseEvents: true
  });

  pageFlip.loadFromHTML(
    document.querySelectorAll("#flip-book .page")
  );

  const prevBtn = document.getElementById("flipPrev");
  const nextBtn = document.getElementById("flipNext");

  /* ===============================
     FORCE SAME CURL DIRECTION
  =============================== */

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      pageFlip.flipNext("top-right"); // 👉 real curl
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      pageFlip.flipPrev("top-left"); // 👉 SAME curl feeling
    });
  }

  /* ===============================
     BUTTON STATE
  =============================== */

  function updateButtons() {
    const current = pageFlip.getCurrentPageIndex();
    const total = pageFlip.getPageCount();

    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === total - 1;
  }

  pageFlip.on("flip", updateButtons);
  updateButtons();

});














