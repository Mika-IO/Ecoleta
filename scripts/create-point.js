itens_input = document.querySelector('input[name=itens]');
state_input = document.querySelector('input[name=estado]');
city_input = document.querySelector('input[name=cidade]');

function populateUfs() {
    document.getElementsByClassName("cityes").remove
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then( response => response.json())
    .then( states => {
        for (state of states) {
            document.getElementById('uf-select').innerHTML += `<option value='${state['sigla']}'>${state['sigla']}</option>`
        }
    })
}

function populatecities(event) {
    state_input.value = event.target.value
    url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`
    document.getElementById('city-select').innerHTML = `<option>Selecione a cidade</option>`
    fetch(url)  
    .then( response => response.json())
    .then( cities => {
        for (citie of cities) {
            document.getElementById('city-select').innerHTML += `<option value='${citie['nome']}'>${citie['nome']}</option>`
        }
        document.getElementById('city-select').disabled = false
    })
}

populateUfs()
document.getElementById('city-select').disabled = true
document
    .getElementById('uf-select')
    .addEventListener('change', populatecities)
document.getElementById('city-select').addEventListener('change', () => {
    i = document.getElementById('city-select').options.selectedIndex;
    option = document.getElementById('city-select').options[i]
    city_input.value = option.value
})

itens = document.querySelectorAll('.grid-itens')
function selectedUnselected(event){ 
    event.target.classList.toggle('sel')
    lis = document.querySelectorAll('li')
    selected_itens = []
    for (li of lis){
        if (li.classList.contains('sel')){
            selected_itens.push(li.id)
        }
    }
    itens_input.value = selected_itens}

for (iten of itens) {
    iten.addEventListener('click', selectedUnselected)
}
