//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const poke1 = document.querySelector("#poke1").value;
  const poke2 = document.querySelector("#poke2").value;
  const url = `https://pokeapi.co/api/v2/pokemon/${poke1}`;
  const url2 = `https://pokeapi.co/api/v2/pokemon/${poke2}`;
  let pokeStore = [];
  let pokeImg = [];

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      pokeStore.push(data.types[0].type.name);
      pokeImg.push(data.sprites.front_shiny);
      document.querySelector("#pokeImg1").src = data.sprites.front_shiny;
      document.querySelector(
        "#poke1Type"
      ).innerText = `Pokemon type: ${data.types[0].type.name}`;

      fetch(url2)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);
          pokeStore.push(data.types[0].type.name);
          pokeImg.push(data.sprites.front_shiny);
          document.querySelector("#pokeImg2").src = data.sprites.front_shiny;
          document.querySelector(
            "#poke2Type"
          ).innerText = `Pokemon type: ${data.types[0].type.name}`;
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
