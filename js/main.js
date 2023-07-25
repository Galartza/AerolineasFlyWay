// Seleccionar el elemento del DOM con el id 'nav' y asignarlo a la variable 'nav'
const nav = document.querySelector('#nav');

// Seleccionar el elemento del DOM con el id 'abrir' y asignarlo a la variable 'abrir'
const abrir = document.querySelector('#abrir');

// Seleccionar el elemento del DOM con el id 'cerrar' y asignarlo a la variable 'cerrar'
const cerrar = document.querySelector('#cerrar');

// Escuchar el evento 'click' en el elemento 'abrir' y ejecutar la función cuando ocurra
abrir.addEventListener('click', () => {
    // Agregar la clase 'visible' al elemento 'nav'
    nav.classList.add('visible');
});

// Escuchar el evento 'click' en el elemento 'cerrar' y ejecutar la función cuando ocurra
cerrar.addEventListener('click', () => {
    // Remover la clase 'visible' del elemento 'nav'
    nav.classList.remove('visible');
});

// Escuchar el evento 'scroll' en la ventana (window) y ejecutar la función cuando ocurra
window.addEventListener('scroll', () => {
    // Seleccionar el elemento del DOM 'header' y asignarlo a la variable 'header'
    var header = document.querySelector('header');

    // Alternar (toggle) la clase 'abajo' en el elemento 'header' dependiendo del valor de 'window.scrollY'
    // Si el valor de 'window.scrollY' es mayor a 0, se agrega la clase 'abajo', de lo contrario, se remueve
    header.classList.toggle('abajo', window.scrollY > 0);
});