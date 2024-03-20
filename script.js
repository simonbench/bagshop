let nav = document.querySelector('nav');
let hamburger = document.getElementById('hamburger');
let menu = document.querySelector('.menu');
let src = document.getElementById('search');
let form = document.querySelector('.form');
let sections = document.querySelectorAll('section');
let linkNav = document.querySelectorAll('.menu a');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active')
    hamburger.classList.toggle('bx-x')
    form.classList.remove('active')
    nav.classList.add('active')
});

src.addEventListener('click', () => {
    form.classList.toggle('active')
    menu.classList.remove('active')
    hamburger.classList.remove('bx-x')
});

window.addEventListener('scroll', () => {
    nav.classList.toggle('active', scrollY > 0)
    menu.classList.remove('active')
    hamburger.classList.remove('bx-x')
});

let scrollActive = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            linkNav.forEach(links => {
                links.classList.remove('active')
                document.querySelector('.menu a[href*='+id+']').classList.add('active')
            });
        }
    });
}

window.addEventListener('scroll', scrollActive);