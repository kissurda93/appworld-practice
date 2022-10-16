import products from '../products/products.json' assert{type: 'json'};

// console.log(products);
const totalDiv = document.querySelector('#totalPrice');
const totalPrice = document.querySelector('#total');


products.forEach((item) => {
    totalDiv.insertAdjacentHTML("beforebegin", `<div class="row mb-3">
    <div class="col-md-2 text-end bg-dark bg-gradient p-1">${item.name}</div>
    <div class="col-md-2 bg-dark bg-gradient p-1"><span>${item.price}</span> Ft</div>
    <div class="col-md-2 text-end bg-dark bg-gradient p-1"><button type="button" class="btn btn-danger p-0 px-2 mx-3">Törlés</button></div>
    <div class="col-md-1 d-flex flex-row px-0 bg-dark bg-gradient p-1">
        <button class="decrement bg-dark bg-gradient">-</button>
        <div class="flex-grow-1 text-center">1</div>
        <button class="increment bg-dark bg-gradient">+</button>
    </div>
    <div class="col-md-1 bg-dark text-end bg-gradient p-1"><span class="subTotal">${item.price}</span> Ft</div>
    </div>`);
})

countTotal();

const increment = document.querySelectorAll('.increment');
const decrement = document.querySelectorAll('.decrement');
// console.log(increment, decrement);

increment.forEach(item => {
    item.addEventListener('click', (event) => {
        // console.log(event.target.parentElement.parentElement);
        const productDiv = event.target.parentElement.parentElement;
        const childrens = productDiv.children;

        const productPrice = childrens[1].firstElementChild.innerHTML;
        const output = childrens[3].children[1];
        const subTotal = childrens[4].firstElementChild;

        // console.log(childrens);
        let count = parseInt(output.innerHTML) + 1;
        output.innerHTML = count;

        subTotal.innerHTML = count * productPrice;

        countTotal();
    })    
})

decrement.forEach(item => {
    item.addEventListener('click', (event) => {
        // console.log(event.target.parentElement.parentElement);
        const productDiv = event.target.parentElement.parentElement;
        const childrens = productDiv.children;

        const productPrice = childrens[1].firstElementChild.innerHTML;
        const output = childrens[3].children[1];
        const subTotal = childrens[4].firstElementChild;
        let count = parseInt(output.innerHTML) - 1;

        if(count >= 1){
            output.innerHTML = count;
        }
        else{
            count = 1;
            output.innerHTML = count;
        }

        subTotal.innerHTML = count * productPrice;

        countTotal();
    })
})

const delButtons = document.querySelectorAll('[type="button"]');
// console.log(delButtons);

delButtons.forEach(item => {
    item.addEventListener("click", event => {
        // console.log(event.target.parentElement.parentElement);
        event.target.parentElement.parentElement.remove();

        countTotal();
    })
})



function countTotal(){
    const subTotals = document.querySelectorAll('.subTotal');
    let totalCounter = 0;
    subTotals.forEach(item => {
        totalCounter += parseInt(item.innerHTML);
    })
    // console.log(totalCounter);
    totalPrice.innerHTML = totalCounter;
}