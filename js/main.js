const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');



abrir.addEventListener('click', () => {
    nav.classList.add('visible');
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
})


window.addEventListener('scroll', () => {
    var header = document.querySelector('header');
    header.classList.toggle('abajo', window.scrollY>0);
})