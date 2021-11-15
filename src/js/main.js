// let te permite declarar variables limitando su alcance 
//(scope) al bloque, declaración, o expresión donde se está usando. 
//a diferencia de la palabra clave var la cual define una variable global o local en una
//función sin importar el ámbito del bloque.

//document.getElementById Devuelve una referencia al elemento por su ID.


// variables
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

//funciones para el cambio de nav
function menus() {
    let Desplazamiento_Actual = window.scrollY;

    if (Desplazamiento_Actual <= 300) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '0.5s';
        menu.style.top = '80px';
        abrir.style.color = '#fff';
    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        menu.style.top = '100px';
        abrir.style.color = '#000';
    }
}

//funcion para el responsive
function apertura(){
    if(cerrado){
        menu.style.width = '70vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

//eventos


//al momento de cargar ejecute el evento menus
window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});

//evento donde si no se seleciona span cierra menu
window.addEventListener('click',function(e){
    if(cerrado==false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});

//El método addEventListener() nos sirve para registra un evento a un objeto en específico. 
//El objeto especifico puede ser un simple elemento en un archivo, el mismo documento, 
//una ventana o un XMLHttpRequest.
window.addEventListener('scroll', function() {

    //scrollY=Retorna el número de píxeles que han sido desplazados 
    //en el documento mediante el scroll vertical
    //remplaza window.pageYOffset
    console.log(window.scrollY);
    menus();
})
window.addEventListener('resize', function(){
    if (Screen.width>=700) {
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    } else {
        
    }
})
abrir.addEventListener('click', function(){
    apertura();
});