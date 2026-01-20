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

  const el = document.getElementById("product-flipbook");
  if (!el) return;

  const imgs = document.querySelectorAll("#product-flipbook-images img");
  if (!imgs.length) return;

  let pages = [];
  imgs.forEach(img => {
    if (img.src && img.src.startsWith("http")) {
      pages.push(img.src);
    }
  });

  console.log("Flipbook pages:", pages);

  if (!pages.length) return;

  // HARD KILL old instance
  try { $(el).flipBook("destroy"); } catch(e){}

  // CRITICAL CONFIG
  $(el).flipBook({
    source: pages,
    type: "image",

    // 3D settings
    viewMode: "3d",
    pageMode: "double",
    webgl: true,

    // IMPORTANT: tell DearFlip to NOT load its own libs
    threejs: window.THREE,
    pdfjs: false,
    soundEnable: false,

    // Prevent internal asset loading
    assets: {
      js: "",
      sound: ""
    },

    btnNext: true,
    btnPrev: true,
    btnZoomIn: true,
    btnZoomOut: true,
    btnFullscreen: true,

    height: 600
  });

});











