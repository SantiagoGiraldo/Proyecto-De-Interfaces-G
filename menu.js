/*Codigo JavaScript*/
/*en esta pagina lo que hacemos es que al dar click en el menu se añada o se valla de nuestra pagina*/
var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');
btnMenu.addEventListener('click', function (){
	nav.classList.toggle('mostrar');
})

