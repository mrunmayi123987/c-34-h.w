const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var superman;
var support;
var chain;
var gameState="start";

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
    world = engine.world;
  // create sprites here

  ground=new Ground(1500,400,3000,20);
  superman = new Hero(1500,400);
  //support= new Ground(50,50,20,20);
  //dot = createSprite(50,400,20,20);
  chain = new Fly(superman.body,{x:50,y:50});
}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
  superman.display();
  //support.display();
  chain.display();

  //drawSprites();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(superman.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  chain.fly();
  gameState = "launched";
}
