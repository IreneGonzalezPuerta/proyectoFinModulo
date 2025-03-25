const getBreweries = async () => {
    const results = await fetch('https://api.openbrewerydb.org/v1/breweries')
    const breweries = await results.json()
    const main = document.getElementById('main')
    breweries.forEach(brewery => {
        const element = document.createElement('div')
        element.innerHTML =`<div>
            <p>Nombre: ${brewery.name}</p>
            <p>Direccion: ${brewery.address_1}</p>
            <button onclick="saveBreweryId('${brewery.id}')">Ver mas</button>
            <a href="project.html?id=${brewery.id}"></a>
        </div>`
        main.appendChild(element)
    });
}

const saveBreweryId = (id) => {
    localStorage.setItem("breweryId", id);
    window.location.href="project.html"
}

getBreweries()