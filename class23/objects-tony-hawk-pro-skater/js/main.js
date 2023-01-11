//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

const TonyHawkCharacter = function (chName, chStance, chSponsor, chMove) {
  this.characterName = chName;
  this.stance = chStance;
  this.sponsor = chSponsor;
  this.specialMove = chMove;

  this.flip = function () {
    console.log(`${this.characterName} just did a kickflip!`);
  };

  this.taunt = function () {
    console.log(`Don't make me use my ${this.specialMove}!`);
  };

  this.grab = function () {
    console.log(`Melon Grabbbbb!`);
  };
};

let susak = new TonyHawkCharacter("Danijel", "Goofy", "Apple", "Ghetto Bird");
console.log(susak);
susak.flip();
susak.grab();
susak.taunt();
