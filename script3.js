imgHolder = document.querySelector('.babyBull');
coordinates = document.querySelector('h2');
title = document.querySelector('h1');

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
}

const colorChangeBlack = (e) => {
	title.style.color = 'black';
}

bull.addEventListener('mousemove', colorChange);
bull.addEventListener('mouseout', colorChangeBlack);
bull2.addEventListener('mousemove', colorChange);
bull2.addEventListener('mouseout', colorChangeBlack);
imgHolder.addEventListener('click', disappear);
document.querySelector('body').addEventListener('mousemove', getCoords);