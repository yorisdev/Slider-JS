const items = document.getElementsByClassName('imgSL');
const nbSlide = items.length;
const after = document.querySelector('.right');
const before = document.querySelector('.left');
let count = 0;

function afterSlide(){
  
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    // console.log(count);
    
}



function beforeSlide(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide -1;
    }

    items[count].classList.add('active')
    // console.log(count);
    
}


function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}



window.addEventListener("DOMContentLoaded", (event) =>{
    after.addEventListener('click', afterSlide);
    before.addEventListener('click',beforeSlide);
    document.addEventListener('keydown', keyPress);
})