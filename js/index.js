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

//Keydown

//wheel

//drag/drop

//resize

//scroll

//select