const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

const input = document.getElementById("passwordInput");
const show = document.getElementById("showPassword");
const bar = document.getElementById("strengthBar");
const label = document.getElementById("strengthLabel");
const scoreText = document.getElementById("strengthScore");
const checkItems = [...document.querySelectorAll("#checks li")];

show.addEventListener("click", () => {
  const visible = input.type === "password";
  input.type = visible ? "text" : "password";
  show.textContent = visible ? "HIDE" : "SHOW";
});

function assessPassword(value) {
  const checks = [
    value.length >= 12,
    /[a-z]/.test(value) && /[A-Z]/.test(value),
    /\d/.test(value),
    /[^A-Za-z0-9]/.test(value),
    value.length > 0 && !/(1234|password|qwerty|admin|letmein)/i.test(value)
  ];
  const score = checks.filter(Boolean).length;
  return {checks, score};
}
input.addEventListener("input", () => {
  const {checks, score} = assessPassword(input.value);
  checkItems.forEach((item, i) => item.classList.toggle("pass", checks[i]));
  bar.style.width = `${score * 20}%`;
  scoreText.textContent = `${score} / 5`;
  const labels = ["VERY WEAK", "WEAK", "FAIR", "GOOD", "STRONG", "STRONGER"];
  label.textContent = input.value ? labels[score] : "WAITING FOR INPUT";
  bar.style.background = score <= 1 ? "#ff6464" : score <= 3 ? "#e5c45b" : "var(--green)";
});
window.addEventListener("pagehide", () => { input.value = ""; });
