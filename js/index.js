// References
const aboutBtn = document.querySelector("#about-btn");
const skillsetBtn = document.querySelector("#skillset-btn");
const contactBtn = document.querySelector("#contact-btn");
const togglerBtn = document.querySelector("#toggler");
const githubBtn = document.querySelector("#github-btn");
const linkedinBtn = document.querySelector("#linkedin-btn");
const twitterBtn = document.querySelector("#twitter-btn");

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
    //* BG
    document.body.style.background = "#1c1c1c";
    contactMail.style.background = "#2c2c2c";
    footer.style.background = "#2c2c2c";
    wave.style.fill = "#2c2c2c";
    about.style.background = "#2c2c2c";

    //* Hover

    aboutBtn.classList.add("dark");
    skillsetBtn.classList.add("dark");
    contactBtn.classList.add("dark");
    togglerBtn.classList.add("dark");
    githubBtn.classList.add("dark");
    linkedinBtn.classList.add("dark");
    twitterBtn.classList.add("dark");

    aboutBtn.classList.remove("bright");
    skillsetBtn.classList.remove("bright");
    contactBtn.classList.remove("bright");
    togglerBtn.classList.remove("bright");
    githubBtn.classList.remove("bright");
    linkedinBtn.classList.remove("bright");
    twitterBtn.classList.remove("bright");
    return;
  }
  //* BG
  document.body.style.background = "#f2f2f2";
  footer.style.background = "#e8e8e8";
  wave.style.fill = "#e8e8e8";
  about.style.background = "#e8e8e8";
  contactMail.style.background = "#e8e8e8";

  //* Hover
  aboutBtn.classList.add("bright");
  skillsetBtn.classList.add("bright");
  contactBtn.classList.add("bright");
  togglerBtn.classList.add("bright");
  githubBtn.classList.add("bright");
  linkedinBtn.classList.add("bright");
  twitterBtn.classList.add("bright");

  aboutBtn.classList.remove("dark");
  skillsetBtn.classList.remove("dark");
  contactBtn.classList.remove("dark");
  togglerBtn.classList.remove("dark");
  githubBtn.classList.remove("dark");
  linkedinBtn.classList.remove("dark");
  twitterBtn.classList.remove("dark");
});
