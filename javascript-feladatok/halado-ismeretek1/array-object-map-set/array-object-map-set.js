

// Az Array, Object, Map és Set olyan adastruktúrák amik több adatot tartalmaznak.


//------> Array <-------
// Az Arrayket azaz tömböket kockás zárojelekel deklaráljuk.

const array = [
    'item1',
    'item2',
    true,
    45,
    45,
    {
        name: 'John Doe',
        age: 35
    },
    [25, 65, 87]
];

//Lista szerűen 0-tól indulva számozza a benne lévő elemek számát.
// A számozásról a javascript gondoskodik, nem kell nekünk külön definiálni őket!
// Afenti példában item1 a 0-ik indexű elem, item2 az 1-es, és item3 a 2-es és így tovább.
// A tömb tartalmazhat bármilyen adattípust, elemeit veszzővel kell elválasztani.
//  Feldolgozhatók bármiylen ciklussal és több beépített metódus is lehetőségre áll ami a feldolgozást segíti.
//  A következő sorokban bemutatnék párat.....

for(i = 0; i < array.length; i++){
    console.log(array[i]);
}

array.forEach(element => console.log(element));

const strings = array.filter(v => typeof v === 'string');

const listitems = strings.map(v => `<li>${v}</li>`);
const ul = `<ul>${listitems.join('')}</ul>`;

// const body = document.querySelector('body');
// body.innerHTML = ul;





//------> Set <-------
//A Set hasonlatos az Arrayhez, mind a ketten tömbszerű adat halmazok. A lényeges eltérés az hogy a Setben nem szerepelhet többször ugyanaz az adat míg egy tömbben igen.
// A Settet a new Set() objektummal deklarálhatjuk
// Hiába próbálunk egy adatot többszörözni a Setten belül, ha kiíratjuk a Settet láthatjuk hogy az adat csak egyszer szerepel benne.

const set = new Set([1,2,2,3]);
// console.log(set);

// A Set nem használ indexálást így hát nem lehet őt hagyományos ciklusokkal feldolgozni!
// Ehelyett beépített metódusai vannak amelyekből párat bemutatnék:

set.add(4);
set.delete(4);
set.forEach(val => console.log(val));
set.clear();




//------> Object <-------
// Az objektum egy kulcs és érték párokból álló adattömb. Kapcsos zárójelekkel deklaráljuk, az elemek közé vesszőt és a párok közé kettős pontot teszünk:

const obj = {
    firstName: 'John',
    secondName: 'Doe',
    age: 35,
    profession: 'cook'
}

// Az objektumokon sajnos nem annyira egyszerű át-iteráni mint a tömbökön mivel ők nem iterálhatók. Azonban a for-in ciklussal áttudunk iterálni az objektum kulcsain:
console.log(obj);
for(x in obj){
    console.log(x);
}

// Az EcmaScript8-as frissítés óta lehetőségünk let az objektum kulcsait vagy értékeit vagy mindekettőt tömbökké alakítani. Így a létrehozott tömbökön használhatjuk a korábban említett tömb metódusokat vagy ciklusokat!
const property = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj);

entries.forEach(x => console.log(x));



//------> Map <-------
// A Map az egy objektumhoz hasonlatos adatstruktúra. Itt is kulcs érték párok szerepelnek. A kulcsok értéke bármyilyen adattípus lehet. A new Map() objektummal deklaráharjuk.

const map = new Map([
    [1, 'Alice'],
    [2, 'Jonah'],
    [{firstName: 'John'}, 'Doe']
]);
// console.log(map);

// A Map-en át-iterálhatunk a for-of ciklussal:
for(x of map){
    console.log(x);
}

// A forEach-el az értékein
map.forEach(x => console.log(x))

// Illetve használhatjuk beépített metódusait:
map.set();
map.get();
map.size;
map.delete();
map.clear();
map.has();
