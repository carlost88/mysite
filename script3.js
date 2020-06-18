imgHolder = document.querySelector('.babyBull');
coordinates = document.querySelector('h2');
title = document.querySelector('h1');
disco = document.querySelector('.disco');
landing = document.querySelector('.landing');

const bull = document.querySelector('#bull');
const bull2 = document.createElement('img'); 
bull2.src ="bull2.png";

let displayedImage = false;

const disappear = (e) => {
    displayedImage = !displayedImage;
    if (displayedImage){
        imgHolder.replaceChild(bull2, bull);
    } else {
        imgHolder.replaceChild(bull, bull2);
    }
}

const getCoords = (e) => {
	coordinates.textContent = `X: ${e.offsetX} Y: ${e.offsetY}`;
}

const colorChange = (e) => {
	title.style.color = `rgb(${e.offsetX}, 45, ${e.offsetY})`;
	landing.style.color = `rgb(${e.offsetY}, ${e.offsetX}, 45)`;
}

const colorChangeBlack = (e) => {
	title.style.color = 'black';
	landing.style.color = `rgb(243, 81, 243)`;
}

disco.addEventListener('mousemove', colorChange);
disco.addEventListener('mouseleave', colorChangeBlack);
imgHolder.addEventListener('click', disappear);
document.querySelector('body').addEventListener('mousemove', getCoords);