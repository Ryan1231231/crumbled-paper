var ball
var ground, leftSide, rightSide

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,	
		friction:0,
		density:1.2
		}	
var ground_options={
isStatic:true
}
var leftSide_options={
	isStatic:true
	}
	var rightSide_options={
		isStatic:true
		}
ground = Bodies.rectangle(400,470,800,5,ground_options);
  World.add(world,ground);

  rightSide = Bodies.rectangle(700,400,5,100,rightSide_options);
  World.add(world,rightSide);

  leftSide = Bodies.rectangle(600,400,5,100,leftSide_options);
  World.add(world,leftSide);

	Engine.run(engine);
	ball = Bodies.circle(150,100,10,ball_options)
	World.add(world,ball);
	ellipseMode(RADIUS);

	
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:10,y:-20})
	}
}

function draw() {
  rectMode(CENTER);
  background(50);
  ellipse(ball.position.x,ball.position.y,10);
  rect(ground.position.x,ground.position.y,800,5);
  rect(rightSide.position.x,rightSide.position.y,5,134);
  rect(leftSide.position.x,leftSide.position.y,5,134);


  drawSprites();
 
}



