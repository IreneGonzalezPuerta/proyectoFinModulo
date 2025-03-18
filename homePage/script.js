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
      address: '${brewery.address_1}, ${brewery.city}, ${brewery.state}',
    };
  });
  const projects = document.querySelector(".recent-proyect-articles");

  projects.innerHTML = "";

  results.forEach((brewery) => {
    projects.innerHTML += '<article class="recent-proyect"> <h2 id="brewery-name"> ${brewery.name}</h2> <p id="brewery-address"> ${brewery.address} </p> <p id="brewery-phone"> ${brewery.phone}</p> </article> '
    
  });
}

getApiInfo();

//Qué quiero hacer
function showP(){
  const myP = document.querySelector("p.servicesP");

  myP.forEach((p) => {
    p.classList.toggle("hidden");
  });
    
  /*if(myP.classList.contains("hidden")){
    myP.classList.remove("hidden")
  }else{
    myP.classList.add("hidden")
  }*/
}
// Cuando lo quiero hacer 
document.querySelectorAll(".learnMore").forEach((button) => {
  button.addEventListener("click", showP);
})