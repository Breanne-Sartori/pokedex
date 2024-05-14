let pokemonRepository = (function(){
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

    function getAll(){
        return pokemonList;
    }

    function add(pokemon){
        if (typeof pokemon === 'object'){
        pokemonList.push(pokemon);
        }
        else {
            console.log('Not valid');
        }
    };

    return {
        add: add,
        getAll: getAll
        }
    } ) ();

//Check that the correct info is being returned
console.log(pokemonRepository.getAll());

//access the results from the key 'getAll' within the 'pokemonRepository' object
    pokemonRepository.getAll().forEach(function (pokemon) {
        if (pokemon.height > 5) {
            document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ") - wow, that's big! " + "</p>");
        }
        else {
            document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ") " + "</p>");
        }
    });



