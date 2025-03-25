const getBreweryLocalStorage = async() => {
    const id = localStorage.getItem("breweryId");
    const results = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`)
    const brewery = await results.json()
    const element = document.createElement('div')
    element.innerHTML =`<div>
        <img src=""><img>
        <p>Nombre: ${brewery.name}</p>
        <p>Direccion: ${brewery.address_1}</p>
    </div>`
    main.appendChild(element)
}

const getBreweryParams = async() => {
    const params = new URLSearchParams(document.location.search);
    const id = params.get("id"); // is the string "Jonathan"
    const results = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`)
    const brewery = await results.json()
    const element = document.createElement('div')
    element.innerHTML =`<div>
        <img src=""><img>
        <p>Nombre: ${brewery.name}</p>
        <p>Direccion: ${brewery.address_1}</p>
    </div>`
    main.appendChild(element)
}

//getBreweryLocalStorage() obtiene id del local storage
//getBreweryParams() obtiene id de los parametros