var navactive = false
const show = document.querySelector('.show')
const paintings = document.getElementsByClassName("magazine")
const cross = document.getElementById("cross")

const about = document.querySelector('.about')
var currentSlide = 0;
const backgrounds = ['DispenserCircuit.png', 'tinkercad.png', 'avenueslab.jpg']
const title = ['Arduino', '3D modeling', 'Scientific Research']
const sub = ['Coding, Robotics, Circuits, take a look at the robots our students created', 'Check out how our students made use of 3D modeling to fight this crisis', 'Learn more about the COVID-19 with our scientific research']

const Add = () => {
    currentSlide = (currentSlide < backgrounds.length - 1) ? (currentSlide + 1) : 0;
    Transition()
}

const Subtract = () => {
    currentSlide = (currentSlide != 0) ? (currentSlide - 1) : backgrounds.length - 1;
    Transition()
}

const Transition = () =>{
    document.querySelector('.slide').style.opacity = 0;
    window.setTimeout('ChangeSlide()', 600)
}

const ChangeSlide = () => {
    document.getElementById('title').textContent = title[currentSlide]
    document.getElementById('sub').textContent = sub[currentSlide]
    document.querySelector('.slide').style.backgroundImage = `url(./images/${backgrounds[currentSlide]})`
    document.querySelector('.slide').style.opacity = 1;
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