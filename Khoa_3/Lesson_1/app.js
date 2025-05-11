fetch('https://pokeapi.co/api/v2/pokemon/10')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let img = document.getElementById('img')
        img.src = data.sprites.front_default;
    })

let btn= document.getElementById('btn')
btn.addEventListener('click', getImg)

function getImg(){
    let id=document.querySelector('input').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let img = document.getElementById('img')
        img.src = data.sprites.front_default;
    })
}