const root = document.documentElement;
const languageButtons = document.querySelectorAll("[data-language]");

function setLanguage(language) {
  root.dataset.lang = language;
  root.lang = language === "zh" ? "zh-CN" : "en";
  languageButtons.forEach((button) => button.classList.toggle("active", button.dataset.language === language));
  localStorage.setItem("preferred-language", language);
}

languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
setLanguage(localStorage.getItem("preferred-language") || "en");
document.querySelector("#year").textContent = new Date().getFullYear();
