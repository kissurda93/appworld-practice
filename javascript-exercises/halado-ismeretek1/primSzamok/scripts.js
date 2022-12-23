const div = document.querySelector('div');
let szamlalo = 0;

for(num = 2; num < Infinity; num++){
    let primszamAllapot = 0;

    for(var i = 2; i < num; i++){
        if(num % i === 0){
            primszamAllapot = 1;
            break;
        }
    }

    if(primszamAllapot === 0){
        div.innerHTML += `${num}, `;
        szamlalo++;
    }

    if(szamlalo === 3){
        break;
    }
}
