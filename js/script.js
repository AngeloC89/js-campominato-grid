

// console.log(square)

let button = document.querySelector('.btn btn-primary')


for (let i = 1; i <= 64; i++) {


    const tmpHtml = NewSquare(i)

    tmpHtml.addEventListener('click', function(){
        if (even(i)) {
            tmpHtml.classList.toggle('even');
        } else {
            tmpHtml.classList.toggle('odd');
        }
    });


    const container = document.querySelector('.container');
    container.appendChild(tmpHtml);
}


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






