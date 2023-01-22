document.querySelector("button").addEventListener("click", getDigi);

function getDigi() {
  let digimon = document.querySelector("input").value;

  let url = `https://digimon-api.vercel.app/api/digimon/name/${digimon}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("img").src = data[0].img;
      document.querySelector("h4").innerText = data[0].level;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
