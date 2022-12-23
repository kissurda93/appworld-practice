export async function loadIn() {
    if(localStorage.getItem('CarRegister') === null){
        await getMock();
    }
    
    const localData = localStorage.getItem('CarRegister');
    const data = JSON.parse(localData);
    console.log(data);

    const tBody = document.querySelector('tbody');
    tBody.innerHTML = '';

    data.map(item => {
        tBody.insertAdjacentHTML('beforeend', 
        `<tr>
        <td>${item.manufacturer}</td>
        <td>${item.model}</td>
        <td>${new Date(parseInt(item.date_of_manufact)).toLocaleDateString()}</td>
        <td>${item.color}</td>
        <td>${item.cylinderCap}</td>
        </tr>`)
    });
    
}


export async function getMock(){

    const response = await fetch('http://carregister.local/API/index.php');
    const data = await response.json();

    localStorage.setItem('CarRegister', JSON.stringify(data));
    console.log('Az adat az API-tol érkezett!');
}
