document.querySelector("button").addEventListener("click", getSpell);

function getSpell() {
  const spellName = document.querySelector("input").value.toLowerCase();
  const url = `https://www.dnd5eapi.co/api/spells/${spellName}`;

  document.querySelector("#classes").innerHTML = "";
  document.querySelector("#subclasses").innerHTML = "";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // list all classes that have spell
      data.classes.forEach((obj) => {
        const li = document.createElement("li");
        li.textContent = obj.name;
        document.querySelector("#classes").appendChild(li);
      });

      // list all subclasses that have spell
      data.subclasses.forEach((obj) => {
        const li = document.createElement("li");
        li.textContent = obj.name;
        document.querySelector("#subclasses").appendChild(li);
      });

      // spell name into dom
      document.querySelector("h2").innerText = data.name;

      // casting time of spell
      document.querySelector(
        ".school"
      ).innerText = `Casting time of ${spellName} is ${data.casting_time}`;

      // level of spell
      document.querySelector(
        ".level"
      ).innerText = `Level of your ${spellName} is ${data.level}.`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
