const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var piso;

var bola;

var right;
var up;

function setup() {
  createCanvas(500, 600);

  engine = Engine.create();
  world = engine.world;

  var piso_options = {
    isStatic: true,
  };

  piso = Bodies.rectangle(250, 500, 500, 20, piso_options);
  World.add(world, piso);

  var bola_options = {
    restitution: 0.4,
    frictionAir: 0.05,
  };

  bola = Bodies.circle(250, 50, 20, bola_options);
  World.add(world, bola);

  console.log(bola);

  right = createImg("right.png");
  right.size(60, 50);
  right.position(420, 520);
  right.mouseClicked(moverParaDireita);

  up = createImg("up.png");
  up.size(40, 50);
  up.position(20, 520);
  up.mouseClicked(moverParaCima);
}

function draw() {
  background("black");

  Engine.update(engine);

  strokeWeight(2);
  stroke("purple");
  noFill();

  rectMode(CENTER);
  rect(piso.position.x, piso.position.y, 500, 20);

  ellipseMode(RADIUS);
  ellipse(bola.position.x, bola.position.y, 20);
}
function moverParaDireita() {
  Body.applyForce(bola, { x: 0, y: 0 }, { x: 0.05, y: 0 });
}
function moverParaCima() {
  Body.applyForce(bola, { x: 0, y: 0 }, { x: 0, y: -0.05 });
}
