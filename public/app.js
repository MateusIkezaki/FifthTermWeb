var navactive = false
const show = document.querySelector('.show')
const paintings = document.getElementsByClassName("magazine")
const cross = document.getElementById("cross")
const about = document.querySelector('.about')
var currentSlide = 0;
const backgrounds = ['epBanner.png', 'hs2.png', 'hb2.png','DispenserCircuit.png', 'tinkercad.png', 'avenueslab.jpg','cBanner.png']
const title = ['Elevator Project', 'Preventive Station', 'Hugging Robot', 'Safe High Five', 'Mask Dispenser', 'Hued', '7 Day Challenge!']
const sub = ['Sonic Sensor/Distance Controlled Elevator', 'An anti COVID-19 station where you can sanitize your hands and shoes and measure your temperature.', 'This hugging robot can fulfill your emotional needs during quarantine!', 'Tired of using hand sanitizer every time you touch something? This mechanical hand will solve your problems!', 'An automatic mask dispenser as a safety back-up', 'Hued is an app designed to solve creativity-related issues generated by the pandemic all of us are living in today.', 'We have developed several fun and creative activities for our kids to do and share with their friends, come check them out!']
const links = ['Elevator.html','Station.html','Hug.html','Hand.html','MaskDis.html','App.html','Days.html']
var projectbackgrounds = new Array();
projectbackgrounds[0] = new Array('epBanner.png', 'hsBanner.png', 'hb2.png','shBanner.png', 'Banner.png', 'hueBanner.jpg','cBanner2.png')
projectbackgrounds[1] = new Array('hs1.jpg','hs2.jpg','hs3.jpg', 'hs4.png', 'hs5.png')
projectbackgrounds[2] = new Array('hb1.png','hb2.png','hb3.jpg', 'hb4.jpg', 'hb5.jpg')
projectbackgrounds[3] = new Array('sh1.png','sh2.jpg','sh3.png', 'sh4.png', 'shBanner.png')
projectbackgrounds[4] = new Array('ep1.PNG','ep2.PNG','ep3.PNG', 'ep4.PNG', 'ep5.png')
projectbackgrounds[5] = new Array('md1.png','md2.png','md3.png', 'DispenserCircuit.png', 'md4.jpg')
projectbackgrounds[6] = new Array('hue1.jpg','hue2.png','hue3.png', 'hue4.png', 'hue5.png')
projectbackgrounds[7] = new Array('c2.png','c1.jpg','c3.png', 'c4.png', 'c5.jpeg')
const Add = (slides) => {
    currentSlide = (currentSlide < projectbackgrounds[slides].length - 1) ? (currentSlide + 1) : 0;
}

const Subtract = (slides) => {
    currentSlide = (currentSlide != 0) ? (currentSlide - 1) : projectbackgrounds[slides].length - 1;
}

const Transition = (execute) =>{
    document.querySelector('.slide').style.opacity = 0;
    window.setTimeout(execute, 600)
}

const EmptyTransition = (target) => {
    document.querySelector('.slide').style.backgroundImage = `url(./images/${projectbackgrounds[target][currentSlide]})`
    document.querySelector('.slide').style.opacity = 1;
}

const ChangeSlide = () => {
    document.querySelector('.slide').style.backgroundImage = `url(./images/${projectbackgrounds[0][currentSlide]})`
    document.querySelector('.slide').style.opacity = 1;
    document.getElementById('title').textContent = title[currentSlide]
    document.getElementById('sub').textContent = sub[currentSlide]
    document.getElementById('slidelink').href = links[currentSlide]
}


const navSlide = () => {
    const burger  = document.querySelector('.burger');
    //achar div .burger no documento
    const nav = document.querySelector('.nav-links');
    //achar div .nav-links no documento
    const navlinks = document.querySelectorAll('.nav-links li')
    //achar todos os elementos .nav-links li no documento

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //ao clicar no burger, tocar animacao nav-active
        navlinks.forEach((link, index) => {
            //animacao sera tocada para cada item .nav-links li
            if(link.style.animation)
            {
                link.style.animation = '';
                //se o link tiver uma animacao, mudar animacao para nada, assim a animacao sera resetada
                navactive = false
                document.querySelector('.blackscreen').style.opacity = 0
            }
            else{
                link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                //se nao tiver animacao, mudar animacao para navFade
                navactive = true
                document.querySelector('.blackscreen').style.opacity = 0.8
            }
        });

        burger.classList.toggle('toggle')
    });
}

navSlide()