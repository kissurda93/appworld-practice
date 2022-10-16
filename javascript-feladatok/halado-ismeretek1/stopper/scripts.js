setInterval(() => {
    document.querySelector('#clock').innerHTML = new Date().toLocaleString();
}, 1000);



const input = document.querySelector('#input');
const button = document.querySelector('button');
const output = document.querySelector('#output');
output.innerHTML = 0;
let interval;

button.addEventListener('click', startCount);

function startCount(){
    let counter = input.value;
    interval = setInterval(() => {
        output.innerHTML = counter;
        counter--;
        if(counter < 0){
            stopCount();
        }        
    }, 1000)
}

function stopCount(){
    clearInterval(interval);
}

