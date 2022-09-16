// References

//* Nav
const aboutBtn = document.querySelector("#about-btn");
const skillsetBtn = document.querySelector("#skillset-btn");
const contactBtn = document.querySelector("#contact-btn");
const togglerBtn = document.querySelector("#toggler");
const proyectsBtn = document.querySelector("#proyects-btn");

//* Toggler
const darkElements = document.querySelectorAll(".dark");
const darkBgElements = document.querySelectorAll(".dark-bg");

//* Divs
const about = document.querySelector("#about");
const skillset = document.querySelector("#skillset");
const contact = document.querySelector("#contact");
const dark = document.querySelector("#dark");
const bright = document.querySelector("#bright");
const contactMail = document.querySelector("#contact-mail");
const footer = document.querySelector("footer");
const wave = document.querySelector("#wave");
const proyects = document.querySelector("#proyects");

// Listeners
aboutBtn.addEventListener("click", function (e) {
  window.scrollTo({
    top: about.offsetTop,
    behavior: "smooth"
  });
});

skillsetBtn.addEventListener("click", function (e) {
  window.scrollTo({
    top: skillset.offsetTop,
    behavior: "smooth"
  });
});

contactBtn.addEventListener("click", function (e) {
  window.scrollTo({
    top: contact.offsetTop,
    behavior: "smooth"
  });
});

proyectsBtn.addEventListener("click", function (e) {
  window.scrollTo({
    top: proyects.offsetTop,
    behavior: "smooth"
  });
});

togglerBtn.addEventListener("click", () => {
  dark.classList.toggle("hide");
  bright.classList.toggle("hide");

  //! BRIGHT MODE
  if (!dark.classList.contains("hide")) {
    //* BG
    document.body.style.background = "#1c1c1c";
    darkBgElements.forEach((el) => {
      el.classList.add("dark-bg");
      el.classList.remove("bright-bg");
    });
    
    //* Hover
    darkElements.forEach((el) => {
      el.classList.add("dark");
      el.classList.remove("bright");
    });
    return;
  }
  //! DARK MODE
  //* BG
  document.body.style.background = "#f2f2f2";
  darkBgElements.forEach((el) => {
    el.classList.add("bright-bg");
    el.classList.remove("dark-bg");
  });

  //* Hover
  darkElements.forEach((el) => {
    el.classList.add("bright");
    el.classList.remove("dark");
  });
  
});
