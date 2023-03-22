'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');


// limitation of querySelector method
// this an array of buttons
const btnopenmodal = document.querySelectorAll('.show-modal'); 
console.log(btnopenmodal) // this an array of buttons

const closesmodal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


const openmodal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}



for(let i=0; i < btnopenmodal.length; i++) {
    btnopenmodal[i].addEventListener('click', openmodal )
}




btnClosemodal.addEventListener('click', closesmodal);
overlay.addEventListener('click', closesmodal);


document.addEventListener('keydown', function(e){

    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
            closesmodal();
    }

});
