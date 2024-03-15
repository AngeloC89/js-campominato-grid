
const bigBox = document.createElement('div');


bigBox.className = 'd-flex justify-content-between align-content-center flex-wrap';
// console.log(square)




for (let i = 1; i <= 64; i++) {


    const tmpHtml = NewSquare(i)



    bigBox.appendChild(tmpHtml);
    // console.log(square);
    const container = document.querySelector('.container');
    container.append(bigBox);
}


function NewSquare(content) {
    const newSquare = document.createElement('div');
    newSquare.innerHTML = content; 
    newSquare.setAttribute('id', 'square');
    return newSquare;
}







