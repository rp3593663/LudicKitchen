window.addEventListener("load", function() {
    const preloader = document.getElementById("site-preloader");
    setTimeout(() => {
        preloader.classList.add("preloader-exit");
        preloader.addEventListener("animationend", () => {
        preloader.style.display = "none";
        });
    }, 2000);
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



document.addEventListener("DOMContentLoaded", function () {
  const $flipbook = $('#product-flipbook');

  if (!$flipbook.length) return;

  $flipbook.turn({
    display: 'single',     
    autoCenter: true,
    acceleration: false,         
  });

  document.querySelector('.flip-btn.next')
    .addEventListener('click', () => $flipbook.turn('next'));

  document.querySelector('.flip-btn.prev')
    .addEventListener('click', () => $flipbook.turn('previous'));
});







