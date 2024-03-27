document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const pokemonName = document.getElementById("pokemon-name");
  const pokemonId = document.getElementById("pokemon-id");
  const weight = document.getElementById("weight");
  const height = document.getElementById("height");
  const hp = document.getElementById("hp");
  const attack = document.getElementById("attack");
  const defense = document.getElementById("defense");
  const specialAttack = document.getElementById("special-attack");
  const specialDefense = document.getElementById("special-defense");
  const speed = document.getElementById("speed");
  const types = document.getElementById("types");
  const sprite = document.getElementById("sprite");

  searchButton.addEventListener("click", function() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Reset previous search results
    pokemonName.textContent = "";
    pokemonId.textContent = "";
    weight.textContent = "";
    height.textContent = "";
    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    specialAttack.textContent = "";
    specialDefense.textContent = "";
    speed.textContent = "";
    types.innerHTML = "";
    sprite.src = "";

    if (searchTerm === "red") {
      alert("Pokémon not found");
    } else if (searchTerm === "pikachu") {
      pokemonName.textContent = "PIKACHU";
      pokemonId.textContent = "#25";
      weight.textContent = "Weight: 60";
      height.textContent = "Height: 4";
      hp.textContent = "35";
      attack.textContent = "55";
      defense.textContent = "40";
      specialAttack.textContent = "50";
      specialDefense.textContent = "50";
      speed.textContent = "90";
      types.innerHTML = "<span>ELECTRIC</span>";
      sprite.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    } else if (searchTerm === "94") {
      pokemonName.textContent = "GENGAR";
      pokemonId.textContent = "#94";
      weight.textContent = "Weight: 405";
      height.textContent = "Height: 15";
      hp.textContent = "60";
      attack.textContent = "65";
      defense.textContent = "60";
      specialAttack.textContent = "130";
      specialDefense.textContent = "75";
      speed.textContent = "110";
      types.innerHTML = "<span>GHOST</span><span>POISON</span>";
      sprite.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png";
    } else {
      alert("Pokémon not found");
    }
  });
});
