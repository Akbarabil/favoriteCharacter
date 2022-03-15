let btnBen = document.querySelector('#ben');
let btnKen = document.querySelector('#ken');
let btnDomba = document.querySelector('#domba');
let input = document.querySelector('#satu');

btnBen.addEventListener('click', ()=> {
    input.value= "Saya suka Baby Ben karena... "
});
btnKen.addEventListener('click', ()=> {
    input.value= "Saya suka Ninja Ken karena... "
});
btnDomba.addEventListener('click', ()=> {
    input.value= "Saya suka Guru Domba karena... "
});

let hasil = document.querySelector('#input');
let final = document.querySelector('#dua');

hasil.addEventListener('click', ()=> {
    final.value = input.value;
})