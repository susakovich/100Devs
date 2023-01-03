//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeSFCharacter(punch, kick, catchPhrase, specialMove) {
  this.punch = punch;
  this.kick = kick;
  this.catchPhrase = catchPhrase;
  this.specialMove = specialMove;

  // Methods
  this.taunt = function () {
    console.log(`You can't handle my ${this.specialMove}.`);
  };

  this.winning = function () {
    console.log(`Haha! ${this.catchPhrase}`);
  };

  this.dash = function () {
    console.log(`Whooppp, missed me!`);
  };
}

let ryu = new MakeSFCharacter("high", "high", "Get OVER HERE", "HADDDDUKKEEEN");
console.log(ryu);
