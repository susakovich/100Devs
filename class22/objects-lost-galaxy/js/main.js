//Create a mouse object that has four properties and three methods

let mouse = {};

mouse.color = "Black";
mouse.brand = "Logitech";
mouse.wireless = true;
mouse.model = "MX Master 3";

mouse.rightClck = function () {
  console.log(`You have right clicked with your ${mouse.brand} mouse.`);
};

mouse.rgb = function () {
  console.log(
    `You have changed your mouse color from ${mouse.color} to white.`
  );
};

mouse.cable = function () {
  console.log(
    `Your ${mouse.brand} mouse is not wireless anymore, you have plugged cable.`
  );
};
