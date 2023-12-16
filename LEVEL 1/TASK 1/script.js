const menuBtn = document.getElementById('menuBtn')
const menu = document.getElementById('menu')
const navLinks = menu.querySelectorAll('a')
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    setMenuIcon()


})
function setMenuIcon() {
    if (menuBtn.classList.contains('ri-close-line')) {
        document.body.style.overflow = "scroll"
        menuBtn.classList.replace('ri-close-line', 'ri-menu-3-line')
    } else {
        document.body.style.overflow = "hidden"
        setTimeout(() => {
            menuBtn.classList.replace('ri-menu-3-line', 'ri-close-line')

        }, 500)
    }
}

let bWidth = window.innerWidth;
console.log(bWidth)

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.toggle('active')

        if(bWidth<769){
            setMenuIcon()
        }

    })
})