const bigbox = document.querySelector(".bigbox");
const botao = document.querySelector(".botao");
const txt = document.getElementById("txt2");

let background_Bigbox = '#292929';

botao.addEventListener('click', ()=>{
    if(background_Bigbox === '#292929') {
        background_Bigbox = '#F2F2F2'       
    } else if(background_Bigbox === '#F2F2F2'){
        background_Bigbox = '#C7C7C7'
    } else {
        background_Bigbox = '#292929'
    }
    
    bigbox.style.backgroundColor = background_Bigbox;
    txt.textContent = 'Background: ' + background_Bigbox;
});