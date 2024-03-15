
/*Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 rig
*/


let button = document.querySelector('.btn.btn-primary')
const container = document.querySelector('.container');
button.addEventListener('click', function(){
    console.log('il tasto funziona');
  container.innerHTML = '';


for (let i = 1; i <= 64; i++) {


    const tmpHtml = NewSquare(i)

    tmpHtml.addEventListener('click', function(){
        if (even(i)) {
            tmpHtml.classList.toggle('even');
        } else {
            tmpHtml.classList.toggle('odd');
        }
    });


   
    container.appendChild(tmpHtml);
}

})


/** ****************************** Funzioni *************************************/
function NewSquare(content) {
    const newSquare = document.createElement('span');
    newSquare.innerHTML = content;
    newSquare.setAttribute('id', 'square');
    return newSquare;
}

function even(number){
    if(number % 2 === 0){
        return 'true';
    }   
};






