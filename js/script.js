
const square = document.createElement('div');
 

square.className = 'd-flex justify-content-between align-content-center flex-wrap';
square.setAttribute('id', 'bigbox');
// console.log(square)

let tmpHtml = '';


for (let i = 1; i <= 64; i++) {
   
   
    tmpHtml += ` <div id="square"> </div>`;
}


const box = document.querySelector('.box');
console.log(box)

square.innerHTML = tmpHtml;
// console.log(square);
const container = document.querySelector('.container');
container.append(square);






