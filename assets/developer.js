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

document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".flip-page");
  const nextBtn = document.querySelector(".flip-nav.next");
  const prevBtn = document.querySelector(".flip-nav.prev");

  if (!pages.length) return;

  let current = 0;

  function showPage(newIndex, direction) {
    if (newIndex === current) return;

    const currentPage = pages[current];
    const nextPage = pages[newIndex];

    // Flip out current
    currentPage.classList.remove("active");
    currentPage.classList.add("flip-out");

    // Prepare next
    nextPage.classList.remove("flip-out");
    nextPage.classList.add("active");

    current = newIndex;
  }

  nextBtn.addEventListener("click", () => {
    const newIndex = (current + 1) % pages.length;
    showPage(newIndex, "next");
  });

  prevBtn.addEventListener("click", () => {
    const newIndex = (current - 1 + pages.length) % pages.length;
    showPage(newIndex, "prev");
  });
});











