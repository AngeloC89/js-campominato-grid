
const bigBox = document.createElement('div');


bigBox.className = 'd-flex justify-content-between align-content-center flex-wrap';
// console.log(square)

let button = document.querySelector('.btn btn-primary')


for (let i = 1; i <= 64; i++) {


    const tmpHtml = NewSquare(i)

    tmpHtml.addEventListener('click', function () {
        if (even(i)) {
            tmpHtml.classList.add('even')
        } else {
            tmpHtml.classList.add('odd')
        };






    })




    bigBox.appendChild(tmpHtml);
    // console.log(bigBox);
    const container = document.querySelector('.container');
    container.append(bigBox);
}


function NewSquare(content) {
    const newSquare = document.createElement('div');
    newSquare.innerHTML = content;
    newSquare.setAttribute('id', 'square');
    return newSquare;
}

function even(number){
    if(number % 2 === 0){
        return 'true';
    } else{
        return 'false';
    }
}






