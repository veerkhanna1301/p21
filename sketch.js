var bullet, wall;
var speed, weight;
var thickness;
speed = random(55, 90);
weight = random(223, 321);
bullet.velocityX = speed;

function setup() {
  createCanvas(1600, 400);

  bullet = createSprite(50, 300, 60, 20);
  bullet.shapeColor = "white";
  thickness = random(22, 83);
  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background("blue");
  drawSprites();
  textSize(22);
  fill("purple");
  //1500 200 60
  if (wall.x - car.x < (car.width + wall.width) / 2) {
    var Damage =
      (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
    if (Damage > 10) {
      wall.shapeColor = color(255, 0, 0);
    }
    if (Damage < 10) {
      wall.shapeColor = color(0, 255, 0);
    }
  }
}
