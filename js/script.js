const cards = document.querySelectorAll('.card');
const removective = ()=>{
    cards.forEach(card =>{
        card.classList.remove('active');
    })
}
cards.forEach(card=>{
    card.addEventListener('mouseenter', ()=>{
        removective();
        card.classList.add('active');
    })
})