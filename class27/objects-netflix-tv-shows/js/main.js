//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class Netflix {
  constructor(name, yearMade, genre, rating) {
    this.name = name;
    this.yearMade = yearMade;
    this.genre = genre;
    this.rating = rating;

    this.playMovie = function () {
      console.log(`Your ${this.name} movie is about to start.`);
    };

    this.pauseMovie = function () {
      console.log(`Your movie has been paused.`);
    };

    this.repeatMovie = function () {
      console.log(`Your ${this.name} movie will be repeated again.`);
    };
  }
}

let terminator = new Netflix("Terminator", 1984, "Sci-Fi", 8.1);
console.log(terminator);
console.log(`Rating of ${terminator.name} movie is ${terminator.rating}/10.`);
terminator.playMovie();
terminator.pauseMovie();
terminator.repeatMovie();
