const nav = document.querySelector('.navbar');
const closeBtn = document.querySelector('.nav-open-btn');
const openBtn = document.querySelector('.nav-close-btn');

closeBtn.addEventListener('click', function(){
    nav.classList.remove('close-nav');
})
openBtn.addEventListener('click', function(){
    nav.classList.add('close-nav');
})