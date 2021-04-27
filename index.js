const category1 = document.getElementById('category1');
const category2 = document.getElementById('category2');
const category3 = document.getElementById('category3');

const button = document.getElementsByClassName('button');
button[0].addEventListener('click', showMore);
button[1].addEventListener('click', showMore);
button[2].addEventListener('click', showMore);

function showMore(){
    if(this==button[0]){
        category1.classList.add('mostrar');
        limpiar(category2, category3);
    } else if(this==button[1]){
        category2.classList.add('mostrar');
        limpiar(category1, category3);
    } else{
        category3.classList.add('mostrar');
        limpiar(category1, category2);
    }
}

function limpiar(ind1, ind2){
    ind1.classList.remove('mostrar')
    ind2.classList.remove('mostrar')
}