const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;     

var engine,world,object;
var fairy,fairyimage;
var bgimage;
var starBody,star,starimg;

function preload(){
  fairyimage = loadImage("images/fairy.png");
  bgimage = loadImage("images/starnight.png");
  starimg = loadImage("images/star.png");
}

function setup() {
	createCanvas(800, 750);

fairy = createSprite(130,520);
fairy.addImage(fairyimage);
fairy.scale = 0.25;

star = createSprite(650,30);
star.addImage(starimg);
star.scale = 0.2;

engine = Engine.create();
 world = engine.world;
 starBody = Bodies.circle(650,30,5,{restitution:0.5,isStatic:true});
 World.add(world,starBody)

}


function draw() {
  background(bgimage);
  star.x = starBody.position.x;
  star.y = starBody.position.y;
  Engine.update(engine);
drawSprites();
}
function keyPressed(){
  if (keyCode === RIGHT_ARROW) {
    fairy.x = fairy.x+20;
  }
  if (keyCode === LEFT_ARROW) {
    fairy.x = fairy.x-20;
  }
  if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(starBody,false);
  }
}