let menuBtn = document.getElementById('menubutton')
menuBtn.addEventListener('click',()=>{
    if(menuBtn.classList.contains('ri-menu-line')){
        menuBtn.classList.replace('ri-menu-line','ri-close-line')
        document.querySelector('.right').style.display = 'flex'
    }else{
        menuBtn.classList.replace('ri-close-line','ri-menu-line')
        document.querySelector('.right').style.display = 'none'

    }
})