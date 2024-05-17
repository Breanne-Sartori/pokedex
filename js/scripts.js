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

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('primary-button');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        //Event listener
        newEvent(button, pokemon); 
    }

    //This function is called in the button event listener. 
    function showDetails(pokemon) {
    }

    /*Create an even outside of the addListItem function
    This needs to be a function itself so that it can be called*/
    function newEvent(button, pokemon){
        button.addEventListener('click', function(showDetails){
            console.log(pokemon.name);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
        }
    } ) ();

//Check that the correct info is being returned
console.log(pokemonRepository.getAll());

//access the results from the key 'getAll' within the 'pokemonRepository' object
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });



