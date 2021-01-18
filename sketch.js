const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImage
var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score=0
function preload(){
  polygon_img=loadImage("polygon.png");
  getTime();
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Box(300,275);

  block2 = new Box(330,275);
  block3 = new Box(360,275);
  block4 = new Box(390,275);
  block5 = new Box(420,275);
  block6 = new Box(450,275);
  block7 = new Box(480,275);
  //level two
  block8 = new Box(330,235);
  block9 = new Box(360,235);
  block10 = new Box(390,235);
  block11 = new Box(420,235);
  block12 = new Box(450,235);
  //level three
  block13 = new Box(360,195);
  block14 = new Box(390,195);
  block15 = new Box(420,195);
  //top
  block16 = new Box(390,155);

  //set 2 for second stand
  //level one
  blocks1 = new Box(640,175);
  blocks2 = new Box(670,175);
  blocks3 = new Box(700,175);
  blocks4 = new Box(730,175);
  blocks5 = new Box(760,175);
  //level two
  blocks6 = new Box(670,135);
  blocks7 = new Box(700,135);
  blocks8 = new Box(730,135);
  //top
  blocks9 = new Box(700,135);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  if(backgroundImage)
  background(backgroundImage); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("red");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
text("Score= "+score,200,100)
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
  keyPressed();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
 //    slingshot.attach(ball.body);
  }
}
async function getTime(){
  var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON=await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13)
  if(hour>=06 && hour>=19){
     bg="bg2.jpg"
  }
  else{
   bg="bg1.png"
  }
backgroundImage=loadImage(bg)
}