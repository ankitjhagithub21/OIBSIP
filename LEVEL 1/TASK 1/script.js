const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const navLinks = menu.querySelectorAll('a');
const bWidth = window.innerWidth;

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    setMenuIcon();
});

function setMenuIcon() {
    if (menuBtn.classList.contains('ri-close-line')) {
        document.body.style.overflow = "scroll";
        menuBtn.classList.replace('ri-close-line', 'ri-menu-3-line');
    } else {
        if (menuBtn.classList.contains('ri-menu-3-line')) {
            document.body.style.overflow = "hidden";
            menuBtn.classList.replace('ri-menu-3-line', 'ri-close-line');
        }
    }
}

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.toggle('active');

        if (bWidth < 768) {
            setMenuIcon();
        }
    });
});

menuBtn.addEventListener('transitionend', () => {
    if (menuBtn.classList.contains('ri-close-line')) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "scroll";
    }
});
