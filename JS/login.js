"use strict"

let loginForm = document.getElementById("loginForm")
let email = document.getElementById("email")
let passwordInput = document.getElementById("password")

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const emailRegex = /^[a-z]+\.[a-z](\d{2})?+@e-uvt\.ro$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;
    if (!emailRegex.test(email)) {
        alert("Adresa de email nu este e-uvt.");
        return;
    }
    if (!passwordRegex.test(password)) {
        alert("Parola nu corespunde cerintelor");
        return;
    }
    alert("Login reușit!");
    window.location.href = "../HTML/home.html"
})