const getBreweryLocalStorage = async () => {
    const breweryId = localStorage.getItem("breweryId");
    const results = await fetch (`https://api.openbrewerydb.org/v1/breweries/${breweryId}`);
    console.log(results);

    const brewery = await results.json()
    const element = document.getElementById("simplify-article")

    element.innerHTML = `<div id="articles">
    <p> Nombre: ${brewery.name}</p>
    <p> Dirección: ${brewery.adress}</p>
    <p> Phone: ${brewery.phone}</p>
    </div>`
}
getBreweryLocalStorage();



// function showP(){
//     const myP = document.querySelectorAll("p.servicesP");
//     myP.forEach((p) => {
//       p.classList.toggle("hidden");
//     });
//   }
  
  document.querySelectorAll(".learn-more").forEach((button) => {
    button.addEventListener("click", showP);
  })


 
  // script.js
  
  function toggleText(textId) {
    const textElement = document.getElementById(textId);
    
    // Alterna la visibilidad de los textos
    if (textElement.style.display === 'block') {
      textElement.style.display = 'none';
    } else {
      textElement.style.display = 'block';
    }
  }
