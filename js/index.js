// References

//* Nav
const aboutBtn = document.querySelectorAll('#about-btn');
const skillsetBtn = document.querySelectorAll('#skillset-btn');
const contactBtn = document.querySelectorAll('#contact-btn');
const proyectsBtn = document.querySelectorAll('#proyects-btn');
const togglerBtn = document.querySelector('#toggler');

const barsMenuChkbx = document.querySelector('#barsMenuChkbx');
const closeBarsMenu = document.querySelector('#closeBarsMenu');
const barsMenu = document.querySelector('#barsMenu');

//* Toggler
const dark = document.querySelector('#dark');
const bright = document.querySelector('#bright');

//* Divs
const about = document.querySelector('#about');
const skillset = document.querySelector('#skillset');
const contact = document.querySelector('#contact');
const proyects = document.querySelector('#proyects');

//* Set the theme
if (localStorage.getItem('theme') === 'light') {
  dark.classList.toggle('hide');
  bright.classList.toggle('hide');
  document.querySelector('html').classList.remove('dark-theme');
  document.querySelector('html').classList.add('light-theme');
}

if (localStorage.getItem('theme') === 'dark') {
  document.querySelector('html').classList.add('dark-theme');
  document.querySelector('html').classList.remove('light-theme');
}

// Listeners
aboutBtn.forEach((el) => {
  el.addEventListener('click', () => {
    window.scrollTo({
      top: about.offsetTop,
      behavior: 'smooth',
    });
  });
});

skillsetBtn.forEach((el) => {
  el.addEventListener('click', () => {
    window.scrollTo({
      top: skillset.offsetTop,
      behavior: 'smooth',
    });
  });
});

contactBtn.forEach((el) => {
  el.addEventListener('click', () => {
    window.scrollTo({
      top: contact.offsetTop,
      behavior: 'smooth',
    });
  });
});

proyectsBtn.forEach((el) => {
  el.addEventListener('click', () => {
    window.scrollTo({
      top: proyects.offsetTop,
      behavior: 'smooth',
    });
  });
});

togglerBtn.addEventListener('click', () => {
  dark.classList.toggle('hide');
  bright.classList.toggle('hide');
  if (document.querySelector('html').classList.contains('dark-theme')) {
    document.querySelector('html').classList.remove('dark-theme');
    document.querySelector('html').classList.add('light-theme');
    if (typeof Storage !== 'undefined') {
      localStorage.setItem('theme', 'light');
    }
    return;
  }
  document.querySelector('html').classList.add('dark-theme');
  document.querySelector('html').classList.remove('light-theme');
  if (typeof Storage !== 'undefined') {
    localStorage.setItem('theme', 'dark');
  }
});

barsMenuChkbx.addEventListener('click', () => {
  closeBarsMenu.classList.toggle('hide');
  barsMenu.classList.toggle('hide');
});

// Back to top btn

const button = document.querySelector('#backToTop-btn');

const displayButton = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });
};

const scrollToTop = () => {
  button.addEventListener('click', () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
};

displayButton();
scrollToTop();
