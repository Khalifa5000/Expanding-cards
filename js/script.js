const cards = document.querySelectorAll('.card');
const removeActive = ()=>{
    cards.forEach(card =>{
        card.classList.remove('active');
    })
}
cards.forEach(card=>{
    card.addEventListener('mouseenter', ()=>{
        removeActive();
    card.classList.add('active');
    })
})