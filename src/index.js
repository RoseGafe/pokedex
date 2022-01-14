const pokeBtn = document.querySelector(".search");

const getPokemonData = () => {
  const id = document.querySelector(".id").value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => printInfo(data));
};

pokeBtn.addEventListener("click", getPokemonData);

function printInfo(data) {
  const pokeContainer = document.querySelector(".poke-container");
  const pokeInfo = document.createElement("div");
  pokeInfo.className = "searched-info";
  pokeContainer.appendChild(pokeInfo);

  const pokeId = document.createElement("div");
  pokeId.className = "id-pokemon";
  pokeId.innerHTML = `Id: ${data.id}`;
  pokeInfo.appendChild(pokeId);

  const pokeName = document.createElement("div");
  pokeName.className = "name-pokemon";
  pokeName.innerHTML = `Nombre: ${data.name}`;
  pokeInfo.appendChild(pokeName);

  const pokeImg = document.createElement("img");
  pokeImg.className = "img-pokemon";
  pokeImg.setAttribute("src", data.sprites.other.dream_world.front_default);
  pokeInfo.appendChild(pokeImg);

  const pokeHeight = document.createElement("div");
  pokeHeight.className = "height-pokemon";
  pokeHeight.innerHTML = `Altura: 0.${data.height}m`;
  pokeInfo.appendChild(pokeHeight);

  const pokeWeight = document.createElement("div");
  pokeWeight.className = "weight-pokemon";
  pokeWeight.innerHTML = `Peso: ${data.weight}kg`;
  pokeInfo.appendChild(pokeWeight);

  const pokeType = document.createElement("div");
  pokeType.className = "type-pokemon";
  pokeType.innerHTML = `Tipos: ${data.types[0].type.name} / ${data.types[1].type.name}`;
  pokeInfo.appendChild(pokeType);

  const pokeMoves = document.createElement("div");
  pokeMoves.className = "moves-pokemon";
  pokeMoves.innerHTML = `Movimientos: ${data.moves[0].move.name} / ${data.moves[1].move.name} / ${data.moves[2].move.name} / ${data.moves[3].move.name}`;
  pokeInfo.appendChild(pokeMoves);
}
