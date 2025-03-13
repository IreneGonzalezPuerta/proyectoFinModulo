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
      adress: brewery.adress,
    };
  });
  const projects = document.querySelector(".recent-proyect-articles");

  projects.innerHTML = "";

  results.forEach((brewery) => {
    projects.innerHTML +=
      '<article class="recent-proyect-1"><h2 id="brewery-name">${brewery.name}</h2><p id="brewery-adress"></p><p id="brewery-phone">${brewery.name}</p></article>';
  });
}

getApiInfo();
