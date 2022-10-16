const ujFeladatGomb = document.querySelector('#ujFeladat');

const newModal = document.querySelector('#new');
const uj_mentes = document.querySelector('#mentes');

const edit_modal = document.querySelector('#edit');
const szerkesztes = document.querySelector('#szerkeszt');

const prioritasErtek = document.querySelector('#prioritas');
const dateErtek = document.querySelector('#date');
const leirasErtek = document.querySelector('#leiras');

const edit_prioritas = document.querySelector('#editPrioritas');
const edit_date = document.querySelector('#editDate');
const edit_body = document.querySelector('#editLeiras');

const lista = document.querySelector('ul');


ujFeladatGomb.addEventListener('click', ()=>{
    newModal.showModal();

    prioritasErtek.value = '';
    dateErtek.value = '';
    leirasErtek.value = '';
    
})

uj_mentes.addEventListener('click', () => {

    if(leirasErtek.value !== '' & prioritasErtek.value !== '' & dateErtek.value !== ''){
        const teendo = {
            teendoID: Math.floor(Math.random() * 1000000),
            teendoPrioritas: `${prioritasErtek.value}`,
            teendoDate: `${dateErtek.value}`,
            teendoBody: `${leirasErtek.value}`
        };
    
        if(localStorage.getItem('myStorage') === null){
            const data = [];
            data.unshift(teendo);
            localStorage.setItem('myStorage', JSON.stringify(data));
        }
        else{
            const datajson = localStorage.getItem('myStorage');
            const data = JSON.parse(datajson);
            data.unshift(teendo);
            localStorage.setItem('myStorage', JSON.stringify(data));
        }
        
        
        showLocalData();
    }
})



function showLocalData(){
    lista.innerHTML = '';

    const adat = JSON.parse(localStorage.getItem('myStorage'));
    // console.log(adat);


    if(adat != null){
        adat.map(item => {
            const template = lista.insertAdjacentHTML('beforeend',
            `<li>
                <p class=${item.teendoPrioritas === 'Fontos' ? '"fontos">F' : '"nemfontos">N'}</p>
                <div class="leiras-doboz">
                    <p class="leiras">${item.teendoBody}</p>
                    <p class="prioritas">${item.teendoPrioritas}</p>
                    <p class="datum">${item.teendoDate.replace('T', ' ')}</p>
                    <p class="hidden">${item.teendoID}</p>
                </div>
                <div class="buttons">
                    <button class="delete"><i class="fa-solid fa-trash"></i></button>
                    <button class="update"><i class="fa-solid fa-arrows-rotate"></i></button>
                </div>
            </li>`);

        });


        const torlesGombok = document.querySelectorAll('.delete');
        torlesGombok.forEach(item => {
            item.addEventListener('click', (e) => {
        
                const ujAdat = adat.filter(item => item.teendoID != e.target.parentElement.previousElementSibling.lastElementChild.innerHTML);
                // console.log(e.target.parentElement.previousElementSibling.lastElementChild.innerHTML);
                // console.log(ujAdat);
        
                localStorage.setItem('myStorage', JSON.stringify(ujAdat));
        
                showLocalData();
            })         
        });


        const updateGombok = document.querySelectorAll('.update');
        updateGombok.forEach(item => {
            item.addEventListener('click', (e) => {
                edit_modal.showModal();

                const celpont = adat.find(item => item.teendoID == e.target.parentElement.previousElementSibling.lastElementChild.innerHTML);
                // console.log(celpont);

                edit_prioritas.value = celpont.teendoPrioritas;
                edit_date.value = celpont.teendoDate;
                edit_body.value = celpont.teendoBody;

                szerkesztes.addEventListener('click', () => {

                    const edited = {
                        teendoID: celpont.teendoID,
                        teendoPrioritas: `${edit_prioritas.value}`,
                        teendoDate: `${edit_date.value}`,
                        teendoBody: `${edit_body.value}`
                    };
                    // console.log(edited);
    
                    let index = adat.indexOf(celpont);
                    adat[index] = edited;
    
                    localStorage.setItem('myStorage', JSON.stringify(adat));
    
                    showLocalData();
                });
    
            });

        });
    }
}
