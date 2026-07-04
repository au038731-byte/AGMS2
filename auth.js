// ===============================
// AGMS v2.0 Authentication System
// ===============================

// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let savedEmail = localStorage.getItem("adminEmail");
        let savedPassword = localStorage.getItem("adminPassword");

        if (email === savedEmail && password === savedPassword) {

            localStorage.setItem("isLoggedIn", "true");

            alert("Welcome Admin!");

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid Email or Password!");

        }

    });

}


// SIGNUP
const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        localStorage.setItem("adminName", name);
        localStorage.setItem("adminEmail", email);
        localStorage.setItem("adminPassword", password);

        alert("Account Created Successfully!");

        window.location.href = "index.html";

    });

}


// LOGOUT
function logout() {

    localStorage.removeItem("isLoggedIn");

    window.location.href = "index.html";

}


// CHECK LOGIN
if (window.location.pathname.includes("dashboard.html")) {

    if (localStorage.getItem("isLoggedIn") !== "true") {

        window.location.href = "index.html";

    }

}