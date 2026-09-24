// =========================
// Dark / Light Mode
// =========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


// =========================
// Contact Button
// =========================

const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function () {

    alert(
        "مرحباً بك في Code Nest Company 👋\n\n" +
        "يمكنك التواصل معنا عبر البريد الإلكتروني:\n" +
        "info@codenest.com"
    );

});


// =========================
// Welcome Message
// =========================

window.addEventListener("load", function () {

    console.log(
        "Welcome to Code Nest Company!"
    );

});
