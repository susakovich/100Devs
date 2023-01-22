document.querySelector("button").addEventListener("click", getPoke);

function getPoke() {
  let poke = document.querySelector("input").value;
  let url = `https://pokeapi.co/api/v2/pokemon/${poke}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector(
        "h3"
      ).innerText = `Your ${poke.toUpperCase()} have ${data.weight} kg's`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
