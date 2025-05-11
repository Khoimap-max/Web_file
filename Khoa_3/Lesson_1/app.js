fetch('https://pokeapi.co/api/v2/pokemon/10')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let img = document.getElementById('img')
        img.src = data.sprites.front_default;
    })