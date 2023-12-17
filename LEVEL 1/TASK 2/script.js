const projects = [
    {
        id:1,
        name:"Shopping Cart",
        path:"./img/p1.png",
        demo:"https://shopping-cart-orpin-three.vercel.app/",
        code:"https://github.com/ankitjhagithub21/shopping-cart"

    },
    {
        id:2,
        name:"Recipe Finder",
        path:"./img/p2.png",
        demo:"https://recipe-finder-app-tau.vercel.app/",
        code:"https://github.com/ankitjhagithub21/recipe-finder-app"

    },
    {
        id:3,
        name:"TMDB Clone",
        path:"./img/p3.png",
        demo:"https://tmdb-clone-mauve.vercel.app/",
        code:"https://github.com/ankitjhagithub21/tmdb-clone"

    },
    {
        id:4,
        name:"Car Dealer",
        path:"./img/p4.png",
        demo:"https://car-dealer-wine-theta.vercel.app/",
        code:"https://github.com/ankitjhagithub21/car-dealer",

    },
    {
        id:5,
        name:"Flexa",
        path:"./img/p5.png",
        demo:"https://flexa-nu.vercel.app/",
        code:"https://github.com/ankitjhagithub21/flexa",
    },
    {
        id:6,
        name:"Ecommerce Website",
        path:"./img/p6.png",
        demo:"https://cara-ecom-23.netlify.app/",
        code:"https://github.com/ankitjhagithub21/Ecommerce-internpeTask2"
    },
 
    

]

const projectContainer = document.getElementById('projectContainer')
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu')
const links = document.getElementById('navbar').querySelectorAll('.btn')

projects.forEach((project)=>{
    let div = document.createElement('div')
    div.classList.add('col-md-6','col-lg-4')
    div.innerHTML = `
    
    
    <div class="card">
    <img src=${project.path} alt=${project.name} class="card-img-top">
    <div class="card-body">
        <h5>${project.name}</h5>
         <div class="d-flex justify-content-between align-items-center">
            <a href=${project.code} target="_blank" class="text-light fs-4"><i class="fa-brands fa-github"></i></a>
            <a href=${project.demo} target="_blank" class="fs-5">
            Live Demo
            </a>
         </div>
    </div>
</div>
    
    `
    projectContainer.appendChild(div)
})



menuBtn.addEventListener('click',()=>{
    
  
  toggleNav()
})
function toggleNav(){
    menu.classList.toggle('active')
    if(menu.classList.contains('active')){
        menuBtn.classList.replace('fa-bars','fa-xmark')
        document.body.style.overflow="hidden"
     }else{
        menuBtn.classList.replace('fa-xmark','fa-bars')
        document.body.style.overflow="scroll"
     }
}
let b = document.body.clientWidth

links.forEach((link)=>{
    link.addEventListener('click',()=>{
        if(b<769){
            toggleNav()
        }
    })
})