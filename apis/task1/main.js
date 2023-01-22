document.querySelector("button").addEventListener("click", getJoke);

function getJoke() {
  const url = "https://v2.jokeapi.dev/joke/Any?type=single";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerText = data.joke;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
