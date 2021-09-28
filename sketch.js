const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create(); // creando un nuevo motor fisico
  world = engine.world; //Creando un nuevo mundo
  //añadir sus caracteristicas del mundo fisico
  var object_options= {
    isStatic: true
  }
  object = Bodies.rectangle(200, 100, 50, 50, object_options);//creacion del objeto
  World.add(world, object);
  console.log(object.position.y);
}

function draw() {
  background(0); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 50, 50);
}