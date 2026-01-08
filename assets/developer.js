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

  if (toggleBtn && passwordInput) {
    toggleBtn.addEventListener("click", function() {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);

      this.textContent = type === "password" ? "👁" : "🙈";
    });
  }
});

