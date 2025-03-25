async function getApiInfo() {
  const res = await fetch(
    "https://api.openbrewerydb.org/v1/breweries/?per_page=3"
  );
  const breweries = await res.json();
  console.log(breweries);
  const results = breweries.map((brewery) => {
    return {
      name: brewery.name,
      phone: brewery.phone,
      address: `${brewery.address_1}, ${brewery.city}, ${brewery.state}`,
      id: brewery.id,
    };
  });
  const projects = document.querySelector(".recent-proyect-articles");

  projects.innerHTML = "";

  results.forEach((brewery) => {
    console.log(brewery)
    projects.innerHTML += `<article class="recent-article"> <img src="css/images/Rectangle1.png"/> <h2 id="brewery-name"> ${brewery.name}</h2> <p id="brewery-address"> ${brewery.address} </p> <p id="brewery-phone"> ${brewery.phone}</p> 
    <button id="buttonId" onclick="saveBreweryById('${brewery.id}')">Ver más... </button></article> `
    
  });
}
const saveBreweryById = (id) => {
  localStorage.setItem("breweryId", id);
  window.location.href="/proyectPage/proyectPage.html"
}

getApiInfo();

function showP(){
  const myP = document.querySelectorAll("p.servicesP");
  myP.forEach((p) => {
    p.classList.toggle("hidden");
  });
}

/* <button class="learnMore" onclick="toggleText('texto2')">Learn More </button>
<div id="texto2" class="toggle-text"> */

document.querySelectorAll(".learnMore").forEach((button) => {
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

  


// //Qué quiero hacer
// function showP(){
//   const myP = document.querySelectorAll("p.servicesP");

//   myP.forEach((p) => {
//     p.classList.toggle("hidden");
//   });
    
//   /*if(myP.classList.contains("hidden")){o
//     myP.classList.remove("hidden")
//   }else{
//     myP.classList.add("hidden")
//   }*/
// }
// // Cuando lo quiero hacer 
// document.querySelectorAll(".learnMore").forEach((button) => {
//   button.addEventListener("click", showP);
// })