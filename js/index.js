// References
const aboutBtn = document.querySelector("#about-btn");
const skillsetBtn = document.querySelector("#skillset-btn");
const contactBtn = document.querySelector("#contact-btn");
const togglerBtn = document.querySelector("#toggler");

const about = document.querySelector("#about");
const skillset = document.querySelector("#skillset");
const contact = document.querySelector("#contact");

const dark = document.querySelector("#dark");
const bright = document.querySelector("#bright");
const contactMail = document.querySelector("#contact-mail");
const footer = document.querySelector("footer");
const wave = document.querySelector("#wave");

// Listener
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

togglerBtn.addEventListener("click", () => {
  dark.classList.toggle("hide");
  bright.classList.toggle("hide");
  if (!dark.classList.contains("hide")) {
    document.body.style.background = "#1c1c1c";
    contactMail.style.background = "#2c2c2c";
    footer.style.background = "#2c2c2c";
    wave.style.fill = "#2c2c2c";
    about.style.background = "#2c2c2c";
    return;
  }
  document.body.style.background = "#f2f2f2";
  footer.style.background = "#e8e8e8";
  wave.style.fill = "#e8e8e8";
  about.style.background = "#e8e8e8";
  contactMail.style.background = "#e8e8e8";
});
