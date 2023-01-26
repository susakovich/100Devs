document.querySelector("button").addEventListener("click", getFetch);

document.querySelector("h2").innerText = localStorage.getItem("books");

function getFetch() {
  let choice = document.querySelector("input").value;
  const url = `https://openlibrary.org/isbn/${choice}.json`;
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      if (!localStorage.getItem("books")) {
        localStorage.setItem("books", data.title);
      } else {
        // put title into localStorage
        let books = localStorage.getItem("books") + "; " + data.title;
        localStorage.setItem("books", books);
        // put localStorage books key into DOM
      }
      document.querySelector("h2").innerText = localStorage.getItem("books");
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
