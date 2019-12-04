// Your code goes here

//Mouse Over
let content = document.querySelectorAll('.text-content');

content.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.color = 'red';
    })
})

//Mouse Click
let mouseClick = document.querySelector('img');

mouseClick.addEventListener('click', () => {
mouseClick.src = 'https://720840.smushcdn.com/706081/wp-content/uploads/2019/07/CTA.jpg?lossy=1&strip=0&webp=1';
})

//Double Click
mouseClick.addEventListener('dblclick', () => {
    mouseClick.src = 'img/fun-bus.jpg';
})

//Clipboard Event - Copy P
let clipboard = document.querySelectorAll('p');

clipboard.forEach(element => {
    element.addEventListener('copy', () => {
        window.alert('Did you just copy something from my page?');
    })
})

//resize
const body = document.querySelector('body');
window.addEventListener('resize', () => {
    body.style.backgroundColor = 'red';
})

//Keypress
body.addEventListener('keypress', () => {
    body.style.backgroundColor = 'purple';
})

//Keyup
body.addEventListener('keyup', () => {
    body.style.backgroundColor = 'white';
})

//wheel
const imgContent = document.querySelectorAll('.img-content');
imgContent.forEach((element) => {
    element.addEventListener('wheel', () => {
        element.style.transform = 'scale(1.2)';
        element.style.transition = 'transform 1.5s';
    })
})

//select
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(element => {
    element.addEventListener('mouseleave', () => {
        window.alert("I see that you've considered a link.")
        event.preventDefault();
    })
})

//drag/drop