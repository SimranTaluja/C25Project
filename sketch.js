
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground)
	
	dustbin = new Dustbin();
	paperBall = new Paper();
	 
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  paperBall.display();
  dustbin.display();
  
  fill ("white");
  rect(ground.position.x, ground.position.y, width, 10,);
 
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.paperBall,paperBall.paperBall.position,{x:85,y:-85});
	}
}

