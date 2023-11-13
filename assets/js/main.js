const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav__toggle','nav-menu')

/* ANIMATION*/
gsap.from('.home__title', {opacity: -1, duration: 1.5, delay:1})
gsap.from('.home__img', {opacity: 0, duration: 1, delay:1, x: 100})
gsap.from('.home__subtitle', {opacity: 0, duration: 1, delay:1, y: -30})
gsap.from('.home__description', {opacity: 0, duration: 1.5, delay:1.2, x:0})
gsap.from('.nav__logo',{opacity:0,duration:2,delay:1,x:50})
gsap.from('.nav__list',{opacity:0,duration:2,delay:1,y:-50})


gsap.from('.box__medium', {opacity: 0, duration: 1.5, delay:1.3, y: -50})
gsap.from('.box__small', {opacity: -1, duration: 1.5, delay:1.4, y: -50})