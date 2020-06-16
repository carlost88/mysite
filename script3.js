imgHolder = document.querySelector('.babyBull');
// const bull = img = document.createElement('img'); 
// bull.src = 'bull.png';

const bull = document.querySelector('#bull');

// const sayMoo = () => {
// alert('moo');
// }

const bull2 = document.createElement('img'); 
bull2.src = 'bull2.png';
let displayedImage = false;

const disappear = (e) => {
    displayedImage = !displayedImage;
    console.log(e) // this gives us the event object
    if (displayedImage){
        imgHolder.replaceChild(bull2, bull);
        // alert('Moo!');
    } else {
        imgHolder.replaceChild(bull, bull2);
        // alert('I love you, Kobbi');
    }
}

imgHolder.addEventListener('click', disappear);