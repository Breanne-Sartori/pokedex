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
/*for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height > 5){
        document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ") - wow, that's big! " + "</p>");
    }
    else {
    document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "</p>");
    }
};*/

pokemonList.forEach (function(pokemon){
    if (pokemon.height > 5){
        document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ") - wow, that's big! " + "</p>");
    }
    else {
    document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ") " + "</p>");
    }
}); 



