//Objects
//Please create a pokemon class with as much detail as possible in 10 minutes

class Pokemon {
  constructor(name, type, level, evolved) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.evolved = evolved;

    this.roar = function () {
      console.log(`Your ${this.name} is angry. RAWRRRRR!`);
    };

    this.thunderBolt = function () {
      console.log(
        `${this.name} is using his special move Thunderbolt. Be aware! ⚡️⚡️⚡️`
      );
    };

    this.evolution = function () {
      console.log(
        `${this.name} will evolve into Raichu, but it won't be by leveling, you need to find out how?! `
      );
    };
  }
}
let pikachu = new Pokemon("Pikachu", "Electric", 19, false);
console.log(pikachu);
pikachu.roar();
pikachu.evolution();
pikachu.thunderBolt();
