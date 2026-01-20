// window.addEventListener("load", function() {
//     const preloader = document.getElementById("site-preloader");
//     setTimeout(() => {
//         preloader.classList.add("preloader-exit");
//         preloader.addEventListener("animationend", () => {
//         preloader.style.display = "none";
//         });
//     }, 2000);
// });



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



document.addEventListener("DOMContentLoaded", function() {

  function initFlipbook() {

    if (typeof jQuery === "undefined" || typeof jQuery.fn.flipBook === "undefined") {
      setTimeout(initFlipbook, 200);
      return;
    }

    const pages = [];

    document.querySelectorAll(".flipbook-page").forEach(el => {
      pages.push(el.getAttribute("href"));
    });

    if (!pages.length) return;

    $("#product-flipbook").flipBook({
      pages: pages,

      // Size
      width: 500,
      height: 600,

      // Enable 3D
      webgl: true,

      // ✅ CDN Three.js
      threejs: "https://cdn.jsdelivr.net/npm/three@0.124.0/build/three.min.js",

      // ❌ Disable sound (because CDN does not exist)
      enableSound: false,

      // UI
      lightBox: false,
      showPageNumber: true,
      zoomRatio: 1.2,
      showDownloadControl: false,
      showPrintControl: false,
      showBookmarkControl: false,
      showShareControl: false
    });

  }

  initFlipbook();
});













