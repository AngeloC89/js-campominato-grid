
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


const button = document.querySelector('.btn.btn-primary')
const container = document.querySelector('.container');
let levelChoice = document.getElementById('level');
button.addEventListener('click', function () {
    // console.log('il tasto funziona');
    container.innerHTML = '';
    choice = parseInt(levelChoice.value);
    // console.log(choice);

//questo ciclo-for crea, tramite la funzione NewSquare, un numero di quadrati stabilito da choice, che a sua volta equivale a uno dei tre livelli di difficoltà.
    for (let i = 1; i <= choice; i++) {
        const tmpHtml = NewSquare(i, choice,'id', 'square');

        tmpHtml.addEventListener('click', function () {
            if (even(i)) {
                tmpHtml.classList.toggle('even');
                console.log('Il numero della casella è: ' + i)
            } else {
                tmpHtml.classList.toggle('odd');
                console.log('Il numero della casella è: ' + i)
            }
        });



        container.appendChild(tmpHtml);
    }

})


/** ****************************** Funzioni *************************************/

//questa funzione crea i singoli quadrati stabilendo anche la width usando calc... numSquare verrà sostituito dal numero di quadrati che vogliamo creare, che in questo caso è deciso tramite "choice(difficoltà)", ma nella funzione serve solo a stabilire la radice quadrata per usarla nella width e stabilire la lunghezza della riga della griglia
function NewSquare(content, numSquare, type, idClass) {
    let newSquare = document.createElement('span');
    newSquare.innerHTML = content;
    newSquare.setAttribute(`${type}`, `${idClass}`);//ho modificato la funzione in modo da poter usare una qualsiasi classe o id senza dover compromettere la sua indipendenza dalla classe/id stessa
    squareWidth = `calc(100% / ${Math.sqrt(numSquare)} - 10px)`;
    newSquare.style.width = squareWidth;
    return newSquare;
}

//questa funzione serve a stabilire se un numero è pari.. lo useremo per associare un determinato colore ai numeri pari.
function even(number) {
    if (number % 2 === 0) {
        return 'true';
    }
};





