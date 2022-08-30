// References
const aboutBtn = document.querySelector('#about-btn');
const skillsetBtn = document.querySelector('#skillset-btn');
const contactBtn = document.querySelector('#contact-btn');

const about = document.querySelector('#about');
const skillset = document.querySelector('#skillset');
const contact = document.querySelector('#contact');

aboutBtn.addEventListener('click', function(e){
    window.scrollTo({
        top: about.offsetTop,
        behavior: 'smooth'
    });
});

skillsetBtn.addEventListener('click', function(e){
    window.scrollTo({
        top: skillset.offsetTop,
        behavior: 'smooth'
    });
});

contactBtn.addEventListener('click', function(e){
    window.scrollTo({
        top: contact.offsetTop,
        behavior: 'smooth'
    });
});