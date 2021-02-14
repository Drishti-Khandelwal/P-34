const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage,bg;
var hero;
var ground;
var fly;
var monster;
var boxes1=[];
var boxes2=[];
function preload(){
backgroundImage = loadImage("sprites/GamingBackground.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(displayWidth/2,displayHeight/2,displayWidth,20);
hero = new Hero(200,300,100);
monster = new Monster(displayWidth/2+200,250,120);
for(var i = 0; i<displayHeight/2; i=i+20){
  boxes1.push(new Block(displayWidth/2, i,20,20))
}
for(var i = 0; i<displayHeight/2; i=i+20){
  boxes2.push(new Block(displayWidth/2-50, i,20,20))
}
fly = new Fly(hero.body,{x:200,y:300});
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);
  ground.display();
  hero.display();
  fly.display();
  monster.display();
  for(var i = 0; i<boxes1.length; i= i+1){
    boxes1[i].display();
  }
  for(var i = 0; i<boxes2.length; i= i+1){
    boxes2[i].display();
  }
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}
function mouseReleased(){
  fly.release();
}