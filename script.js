document.addEventListener("DOMContentLoaded", function () {
    const phoneBtn = document.getElementById("phone-btn");
    const emailBtn = document.getElementById("email-btn");
    const phoneInput = document.getElementById("phone-input");
    const emailInput = document.getElementById("email-input");
    const eyeIcon = document.querySelector(".eye-icon i");
    const passwordInput = document.getElementById("password");

    phoneBtn.addEventListener("click", function () {
        phoneInput.classList.remove("hidden");
        emailInput.classList.add("hidden");
        phoneBtn.classList.add("active");
        emailBtn.classList.remove("active");
    });

    emailBtn.addEventListener("click", function () {
        emailInput.classList.remove("hidden");
        phoneInput.classList.add("hidden");
        emailBtn.classList.add("active");
        phoneBtn.classList.remove("active");
    });

    eyeIcon.addEventListener("click", function () {
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        eyeIcon.classList.toggle("fa-eye-slash");
        eyeIcon.classList.toggle("fa-eye");
    });
});