'use strict'; 

// buttonYes 
// buttonNo

const buttonYes = window.document.getElementById('buttonYes');
const botonNo = document.querySelector('#buttonNo');

// QUERY SELECTOR
const mainTittle = document.querySelector('.main__tittle')
console.log(mainTittle);

// NORMAL SELECTOR
const mainTitle = document.getElementById ('mainTitle');



// adding a text in the tittle
mainTitle.innerHTML += 'Elliot';

let nombre = prompt('whats your name shawty');
mainTitle.innerHTML += nombre + ' ❤';

const zomosNobios = () => {
  alert('💞NoW ZoMos NoBioS💞');
  alert('😱NuesTra VoDa Is TomorroW😱');
  location.href = 'https://www.youtube.com/watch?v=QcQ-PxUtgaE';
}
const ebitarKCRombaMyBobo = () => {
  botonNo.style.position = 'absolute';
  botonNo.style.top = (Math.random() * window.innerHeight) + 'px';
  botonNo.style.left = (Math.random() * window.innerWidth) + 'px';
}
buttonYes.addEventListener('click', zomosNobios);
botonNo.addEventListener('mouseover', ebitarKCRombaMyBobo);


window.addEventListener('click', () => {
  console.log('click');
});

window.addEventListener ('keydown', () =>{
  console.log('keyDown');
});


window.addEventListener ('click', () => {
  alert('you clicked me, thnaks!');
});

window.removeEventListener ('dblclick', () => {
  alert('you clicked twice!');
});

// alerts
alert('Some changes in the main screen!');

// confirmation
console.log(confirm('accept cookies'));


// --------------------

const saludar = () => {
  console.log('hello there!');

  window.removeEventListener('click', saludar);
}

window.addEventListener('click', saludar)




const userName = prompt('Type your name');
console.log(userName);


document.addEventListener('DOMContentLoaded', DocumentReady);


const saludar = () => {
  console.log('Hola como estás')
}
window.onclick = saludar;

