
//console.log(JSON.parse(xmlHttp.responseText).damage_relations.double_damage_to[1].name);
import images from '../../images/*.png';

function formatName(pokemon) {
    if (pokemon.toString().length == 1) {
        let pokePhoto = '00'.concat(pokemon);
        return pokePhoto;
    }
    if (pokemon.toString().length == 2) {
        let pokePhoto = '0'.concat(pokemon);
        return pokePhoto;
    }
    else
        return pokemon;
}

function generatePokemon() {
    return ~~(Math.random() * 151 + 1);
}

function getInfo(pokemon) {
    let xmlHttp = new XMLHttpRequest();
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

function getStadistics(url) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

function win(infopoke) {
    console.log("Gana: ", infopoke.forms[0].name);
    throw new Error("fin");
    

}

function zeroDamage(sPokemon1, pokemon1, pokemon2) {
    sPokemon1.damage_relations.no_damage_to.forEach(element => {
        for (let i = 0; i < pokemon2.types.length; i++) {
            if (element.name == pokemon2.types[i].type.name) {
                console.log(`zero damage from ${pokemon1.forms[0].name}  to ${pokemon2.forms[0].name}`);
                win(pokemon2);
            }
        }
    });
}

function doubleDamage(sPokemon1, pokemon1, pokemon2) {
    sPokemon1.damage_relations.double_damage_to.forEach(element => {
        console.log(pokemon2.types.length);
        for (let i = 0; i < pokemon2.types.length; i++) {
            console.log(pokemon2.types[i].type.name);
            if (element.name == pokemon2.types[i].type.name) {
                console.log(`double damage from ${pokemon1.forms[0].name}  to ${pokemon2.forms[0].name}`);
                win(pokemon1);
            }
        }
    });
}


function halfDamage(sPokemon1, pokemon1, pokemon2) {
    sPokemon1.damage_relations.half_damage_to.forEach(element => {
        for (let i = 0; i < pokemon2.types.length; i++) {
            if (element.name == pokemon2.types[i].type.name) {
                console.log(`half damage from ${pokemon1.forms[0].name} to ${pokemon2.forms[0].name}`);
                win(pokemon2);
            }
        }
    });
}

let pokemon1 = generatePokemon();
let pokemon2 = generatePokemon();
let infopoke1 = getInfo(pokemon1);
let infopoke2 = getInfo(pokemon2);
let pokePhoto1 = formatName(pokemon1);
let pokePhoto2 = formatName(pokemon2);

let board = document.querySelector('.board');

let foto1 = document.createElement('img');
let foto2 = document.createElement('img');

let div1 = document.createElement('div');
let div2 = document.createElement('div');

div1.classList.add('card');
div2.classList.add('card');


let h1 = document.createElement('h1');
h1.textContent = infopoke1.forms[0].name;

let h2 = document.createElement('h1');
h2.textContent = infopoke2.forms[0].name;

foto1.src = `${images[pokePhoto1]}`;
div1.appendChild(h1);
div1.appendChild(foto1);
foto2.src = `${images[pokePhoto2]}`;
div2.appendChild(h2);
div2.appendChild(foto2);

board.appendChild(div1);
board.appendChild(div2);

/***********************************************/

let url = infopoke1.types[0].type.url;
let url2 = infopoke2.types[0].type.url;

let stadisticsPoke1 = getStadistics(url);
let stadisticsPoke2 = getStadistics(url2);

console.log(stadisticsPoke1.damage_relations.double_damage_to);
console.log(stadisticsPoke2.damage_relations.double_damage_to);

zeroDamage(stadisticsPoke1, infopoke1, infopoke2);
zeroDamage(stadisticsPoke2, infopoke2, infopoke1);

doubleDamage(stadisticsPoke1, infopoke1, infopoke2);
doubleDamage(stadisticsPoke2, infopoke2, infopoke1);

halfDamage(stadisticsPoke1, infopoke1, infopoke2);
halfDamage(stadisticsPoke2, infopoke2, infopoke1);

let winner = Math.round(Math.random());
/*if(winner)
    win(infopoke2);
else
    win(infopoke1);
console.log(winner);*/




























