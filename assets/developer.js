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
  const toggleBtn = document.querySelector(".toggle-password");
  const passwordInput = document.getElementById("RegisterForm-password");

  if (!toggleBtn || !passwordInput) return;

  const eyeOpen = document.getElementById("icon-eye-open").innerHTML;
  const eyeClosed = document.getElementById("icon-eye-closed").innerHTML;

  // Default state = hidden password
  toggleBtn.innerHTML = eyeOpen;

  toggleBtn.addEventListener("click", function() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleBtn.innerHTML = eyeClosed;
    } else {
      passwordInput.type = "password";
      toggleBtn.innerHTML = eyeOpen;
    }
  });
});


