const ratingBtns = document.getElementsByClassName('btn--rating');
const btnRating = document.getElementById('btn-submit-rating');
const ratingBox = document.getElementById('rating-box');
const thankBox = document.getElementById('thank-box');
const selectedText = document.getElementById('selected-text');

const main = () => {
    for(let i = 0; i < ratingBtns.length; i++){
        ratingBtns[i].addEventListener('click', () => {
            ratingBtns[i].value = i+1;       
            checkBtnActive(ratingBtns[i]);
        });  
    }
}

const checkBtnActive = (btn) => {
    if(!btn.classList.contains('btn--active')){
        btn.classList.add('btn--active');
        resetButtons(ratingBtns, btn.value);
    }   
}

const resetButtons = (btns, currentActive) => {
    for(let i = 0; i < btns.length; i++){      
        if(btns[i].classList.contains('btn--active') && btns[i].value !== currentActive){
            btns[i].classList.remove('btn--active');
        }
    }
}

btnRating.addEventListener('click', () => {
    const selectedValue = document.getElementsByClassName('btn--active');
    
    if(selectedValue.length){
        ratingBox.classList.add('rating-box-hiding');
        thankBox.classList.add('thank-box-visible');
        selectedText.innerText = `You Selected ${selectedValue[0].value} out of 5`;
        return;
    }
    alert('You need to select one option of the rating number!');
});

main();