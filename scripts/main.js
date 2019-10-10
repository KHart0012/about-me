function calc_numitems(numItems, numBags){
    return numItems * numBags
}

function find_total_items() {
    const items = document.querySelector("#input1").value
    const bags = document.querySelector("#input2").value

    const total_num = calc_numitems(items, bags)

    document.querySelector('#result').innerHTML = total_num
}

function store(){
    const first_name = document.querySelector('#fname').value
    const last_name = document.querySelector('#lname').value
    const email = document.querySelector('#email').value
    const subject = document.querySelector('#subject').value

    localStorage.setItem('First Name: ', first_name)
    localStorage.setItem('Last Name: ', last_name)
    localStorage.setItem('Email: ', email)
    localStorage.setItem('Subject: ', subject)
}

document.querySelector('#poke_sprite').style.visibility = "hidden"

async function get_random_pokemon(){
    let poke_num = Math.floor((Math.random() * 807) + 1)
    let pokeURI = 'https://pokeapi.co/api/v2/pokemon/' + poke_num + '/'
    
    const response = await fetch(pokeURI)
    const obj = await response.json()

    let poke_name = obj.forms[0].name
    let poke_sprite = obj.sprites.front_default

    document.querySelector('#pokemon').innerHTML = poke_name
    document.querySelector('#poke_sprite').style.visibility = "visible"
    document.querySelector('#poke_sprite').src = poke_sprite
}



if (document.querySelector('#get_pokemon') != null){
    document.querySelector('#get_pokemon').addEventListener('click', get_random_pokemon)
}

if (document.querySelector('#submit') != null){
    document.querySelector('#submit').addEventListener('click', find_total_items)
}

if (document.querySelector('#contact') != null){
    document.querySelector('#contact').addEventListener('click', store)
}