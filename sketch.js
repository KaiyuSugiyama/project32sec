const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// Defining variables
var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("Sword-PNG-Image.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  // Creating objects
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  dragon1 = new Dragon(350,250,300,150);
  dragon2 = new Dragon(670,150,300,150);
  person = new Person(100,230,100,100)
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  slingShot = new Slingshot(this.ball,{x:150,y:200});

}
function draw() {
  background("black"); 
  
  Engine.update(engine);
  textSize(40);
  fill("orange");
  text("Kill the dragons to win!",200,50);
  
  // Displaying objects
  ground.display();
  stand1.display();
  stand2.display();
  dragon1.display();
  dragon2.display();
  person.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");

  // creating sword
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,60,60);
  

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed() {
  // Pressing space makes the sword go back to the person's hand.
  if(keyCode === 32) {
    slingShot.attach(this.ball);
  }
}