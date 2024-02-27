//Dom
let FirButton = document.querySelector('#first-button');
let NextEle = FirButton.nextElementSibling;

FirButton.addEventListener('mouseenter' , ()=>{
    // make a between for arrow icon
    NextEle.style.paddingRight = '20px';

})
FirButton.addEventListener('mouseleave' , ()=>{
    // takeout a between for arrow icon
    NextEle.style.paddingRight = '5px';
})