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
const darkElements = document.querySelectorAll('.dark');
const darkBgElements = document.querySelectorAll('.dark-bg');

//* Divs
const about = document.querySelector('#about');
const skillset = document.querySelector('#skillset');
const contact = document.querySelector('#contact');
const dark = document.querySelector('#dark');
const bright = document.querySelector('#bright');
const proyects = document.querySelector('#proyects');

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

  //! BRIGHT MODE
  if (!dark.classList.contains('hide')) {
    //* BG
    document.body.style.background = '#1c1c1c';
    darkBgElements.forEach((el) => {
      el.classList.add('dark-bg');
      el.classList.remove('bright-bg');
    });

    //* Hover
    darkElements.forEach((el) => {
      el.classList.add('dark');
      el.classList.remove('bright');
    });
    return;
  }
  //! DARK MODE
  //* BG
  document.body.style.background = '#f2f2f2';
  darkBgElements.forEach((el) => {
    el.classList.add('bright-bg');
    el.classList.remove('dark-bg');
  });

  //* Hover
  darkElements.forEach((el) => {
    el.classList.add('bright');
    el.classList.remove('dark');
  });
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
