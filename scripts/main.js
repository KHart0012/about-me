function calc_time(dist){
    return dist / 299792458.0
}

function calc_dist(time){
    return time * 299792458.0
}

function change_dist() {
    const time = parseFloat(document.querySelector("#input1").value)

    const dist = calc_dist(time)

    if (isNaN(time)){
        document.getElementById('input2').value = ""
    } else {
        document.getElementById('input2').value = dist
    }
}

function change_time() {
    const dist = parseFloat(document.querySelector("#input2").value)

    const time = calc_time(dist)
    
    if (isNaN(dist)){
        document.getElementById('input1').value = ""
    } else {
        document.getElementById('input1').value = time
    }
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

if (document.querySelector('#poke_sprite') != null){
    document.querySelector('#poke_sprite').style.visibility = "hidden"
}

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

if (document.querySelector('#input1') != null){
    document.querySelector('#input1').addEventListener('input', change_dist)
}

if (document.querySelector('#input2') != null){
    document.querySelector('#input2').addEventListener('input', change_time)
}

if (document.querySelector('#get_pokemon') != null){
    document.querySelector('#get_pokemon').addEventListener('click', get_random_pokemon)
}

if (document.querySelector('#contact') != null){
    document.querySelector('#contact').addEventListener('click', store)
}