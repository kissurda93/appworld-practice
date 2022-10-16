import {loadIn, getMock} from './functions.js';

window.addEventListener('load', loadIn);

const dpdMenu = document.querySelector('.dropdown-menu');
const labels = document.querySelectorAll('label');
const gyartoInput = document.querySelector('#gyarto');
const modelInput = document.querySelector('#model');
const dateInput = document.querySelector('#date');
const colorInput = document.querySelector('#color');
const engineInput = document.querySelector('#engine');
const mentes = document.querySelector('#save');
const mezoTorles = document.querySelector('#delete');


mezoTorles.addEventListener('click', e => {
    gyartoInput.value = '';
    modelInput.value = '';
    dateInput.value = '';
    colorInput.value = '';
    engineInput.value = '';
    e.stopPropagation();
});


mentes.addEventListener('click', e => {
    if(gyartoInput.value == '' ||
    modelInput.value == '' ||
    dateInput.value == '' ||
    colorInput.value == '' ||
    engineInput.value == ''){
        if(document.querySelector('.alert')){
            document.querySelector('.alert').remove();
        }
        dpdMenu.insertAdjacentHTML('beforeend', 
        `<div class="alert alert-danger mx-2" role="alert">
        Minden mező kitöltése kötelező!
      </div>`);

      e.stopPropagation();
    
    }
    else{
        if(document.querySelector('.alert')){
            document.querySelector('.alert').remove();
        }

        const localData = localStorage.getItem('CarRegister');
        const cars = JSON.parse(localData);

        const newData = {
            manufacturer: gyartoInput.value,
            model: modelInput.value,
            date_of_manufact: new Date(dateInput.value).getTime(),
            color: colorInput.value,
            cylinderCap: parseInt(engineInput.value)
        };

        cars.unshift(newData);
        
        localStorage.setItem('CarRegister', JSON.stringify(cars));

        loadIn();

        gyartoInput.value = '';
        modelInput.value = '';
        dateInput.value = '';
        colorInput.value = '';
        engineInput.value = '';

    }
})

labels.forEach(item => {
    item.addEventListener('click', e => e.stopPropagation());
})
