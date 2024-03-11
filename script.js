let menuBtn = document.getElementById('menubutton')
let resMenu = document.querySelector('.responsivenav')
menuBtn.addEventListener('click',()=>{
    if(menuBtn.classList.contains('ri-menu-line')){
        menuBtn.classList.replace('ri-menu-line','ri-close-line')
        resMenu.style.transform = 'translateX(0%)'
    }else{
        menuBtn.classList.replace('ri-close-line','ri-menu-line')
        resMenu.style.transform = 'translateX(100%)'
    }
})
console.log(resMenu);