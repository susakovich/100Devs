document.querySelector("button").addEventListener("click", getJoke);

function getJoke() {
  const url = "https://v2.jokeapi.dev/joke/Any";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.joke);
      document.querySelector("h2").innerText = data.joke;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
