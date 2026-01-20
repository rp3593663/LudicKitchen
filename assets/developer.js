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



jQuery(function ($) {

  $("#df_manual_book").flipBook({
    source: "https://cdn.jsdelivr.net/npm/@dearhive/dearflip-jquery-flipbook@1.7.3/examples/example-assets/books/intro.pdf",

    // 🔥 SINGLE PAGE MODE
    singlePageMode: true,
    pageMode: "single",

    // 🔥 UI SETTINGS
    backgroundColor: "teal",
    height: 500,

    // 🔥 SHOW ONLY ARROWS
    controlsPosition: "inside",
    showControls: true,

    // ❌ HIDE EVERYTHING ELSE
    showThumbs: false,
    showSearchControl: false,
    showPrintControl: false,
    showDownloadControl: false,
    showZoomControl: false,
    showShareControl: false,
    showBookmarkControl: false,
    showPageModeControl: false,
    showFullscreenControl: false,

    // 🔥 SMOOTH FLIP
    duration: 700,
    autoEnableOutline: false
  });

});










