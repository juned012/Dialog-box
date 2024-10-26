const overlay = document.getElementById("overlay");
const loginOverlay = document.getElementById("loginOverlay");
const signUpOverlay = document.getElementById("signUpOverlay");

function openOverlay() {
  overlay.style.display = "flex";
}

function closeOverlay() {
  overlay.style.display = "none";
}

function closeLogin() {
  loginOverlay.style.display = "none";
}

function openLogin() {
  loginOverlay.style.display = "flex";
}

function openSignUp() {
  signUpOverlay.style.display = "flex";
}

function closeSignUp() {
  signUpOverlay.style.display = "none";
}
