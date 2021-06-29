const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const sign_home_btn = document.querySelector("#sign-home-btn");
const container = document.querySelector(".container");
const sulod = document.querySelectorAll(".loggedin");
const guwa = document.querySelectorAll(".loggedout");

const bago = (user) => {
  if (user) {
    //toggle ui elements
    sulod.forEach(item => item.style.display = 'block');
    guwa.forEach(item => item.style.display = 'none');
  } else {
    sulod.forEach(item => item.style.display = 'none');
    guwa.forEach(item => item.style.display = 'block');
  }
}

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.getElementById("sign-home-btn").onclick = function () {
  location.href = "index.html";
};

document.getElementById("#login").onclick = function () {
  location.href = "index.html";
};

