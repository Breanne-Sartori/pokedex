let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        if (typeof pokemon === 'object') {
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
        button.classList.add('btn');
        button.setAttribute('data-target', '#exampleModal');
        button.setAttribute('data-toggle', 'modal');
        listItem.appendChild(button);
        listItem.classList.add('list-group-item');
        pokemonList.appendChild(listItem);
        //Event listener
        newEvent(button, pokemon);
    }

    /*Create an even outside of the addListItem function
    This needs to be a function itself so that it can be called*/
    function newEvent(button, pokemon) {
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        });
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    //This function is called in the button event listener. 
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            console.log(item);
            //Start of Bootstrap Modal
            let modalBody = $('.modal-body');
            let modalTitle = $('.modal-title');

            //Clear existing content
            modalTitle.empty();
            modalBody.empty();

            let titleElement = document.createElement('h1');
            titleElement.innerText = item.name;

            let imageElement = document.createElement('img');
            imageElement.src = item.imageUrl;
            imageElement.classList.add('modal-image');

            let heightContent = document.createElement('p');
            heightContent.innerText = "Height: " + item.height;

            let typeHeading = document.createElement('p');
            typeHeading.innerText = "Types:";

            let typeList = document.createElement('ul');
            item.types.forEach((type) => {
                let listItem = document.createElement('li');
                listItem.innerText = type.type.name;
                typeList.appendChild(listItem);
            });

            modalTitle.append(titleElement);
            modalBody.append(imageElement);
            modalBody.append(heightContent);
            modalBody.append(typeHeading);
            modalBody.append(typeList);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
    }

})();

//loadList gets the data from the repository and uses the forEach function on this data
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
})




