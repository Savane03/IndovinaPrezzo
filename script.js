let input = document.querySelector('#prix');
let error= document.querySelector('small');
let formulaire=document.querySelector('#formulaire');

error.style.display='none';

let nombreAleatoire= Math.floor(Math.random()*1001);
let coups=0;
let nombreChoisi;

function verifier(nombre){
    let instruction= document.createElement('div');
    if(nombre<nombreAleatoire){
        document.querySelector('#instructions').prepend(instruction);
        instruction
        instruction.innerHTML=`#${coups} (${nombreChoisi}) Di più`;
        instruction.classList.add('plus');
        instruction.classList.add('instruction')
    }else if (nombre>nombreAleatoire) {
        document.querySelector('#instructions').prepend(instruction);
        instruction.innerHTML=`#${coups} (${nombreChoisi}) Di meno`;
        instruction.classList.add('moins');
        instruction.classList.add('instruction')
    }else{
        document.querySelector('#instructions').prepend(instruction);
        instruction.innerHTML=`#${coups} (${nombreChoisi}) Congratulazioni , hai trovato il prezzo giusto!`;
        instruction.classList.add('fini');
        instruction.classList.add('instruction');
        input.disabled=true;
    }

}

input.addEventListener('keyup', ()=> {
    if(isNaN(input.value)){
        error.style.display="inline"
    }else{
        error.style.display="none"
    }
})

formulaire.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(isNaN(input.value)||input.value=='' ){
        input.style.borderColor='red'
    }
    else{
        coups++
        input.style.borderColor='silver' 
        nombreChoisi=input.value 
        input.value='';
        verifier(nombreChoisi)
    }
})