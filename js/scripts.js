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
        button.classList.add('primary-button');
        listItem.appendChild(button);
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

            let modalContainer = document.querySelector('#modal-container');

            //Clear existing modal content
            modalContainer.innerHTML = '';  

            let modal = document.createElement('div');
            modal.classList.add('modal');

            //Add new modal content
            let closeButton = document.createElement('button');
            closeButton.classList.add('modal-close');
            closeButton.innerText = 'Close';
            closeButton.addEventListener('click', hideModal);

            let titleElement = document.createElement('h1');
            titleElement.innerText = title;
            
            let contentElement = document.createElement('p');
            contentElement.innerText = text;

            let imageElement = document.createElement('img');
            imageElement = img;

            modal.appendChild(closeButton);
            modal.appendChild(titleElement);
            modal.appendChild(contentElement);
            modal.appendChild(imageElement);
            modalContainer.appendChild(modal);

            modalContainer.classList.add('is-visible');


            //Create the function to hide the modal
            function hideModal(){
                modalContainer.classList.remove('is-visible');

            }


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




