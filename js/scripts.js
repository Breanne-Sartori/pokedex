let pokemonList = [
    {
        name: 'Bulbasaur',
        type: ['grass', 'poison'],
        height: 7
    },
    {
        name: 'Squirtle',
        type: 'water',
        height: 5
    },
    {
        name: 'Pidgey',
        type: ['normal', 'flying'],
        height: 3
    }
]; 

//print the list of Pokemon
for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height > 5){
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - wow, that's big! <br> ");
    }
    else {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") <br> ");
    }
}
   