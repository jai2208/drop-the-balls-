
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var plane;
var block1,block2;
var rotator1,rotator2,rotator3;

var angle1 = 60
var angle2 = 60
var angle3 = 60

function preload()
{
	
}

function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;

var particle_options = {
	
}

	//Create the Bodies Here.\

	particle1 = Bodies.circle(220,10,10,particle_options);
	 World.add(world,particle1);

	 particle2 = Bodies.circle(220,10,10,particle_options);
	  World.add(world,particle2);

	 particle3 = Bodies.circle(225,10,10,particle_options); 
	 World.add(world,particle3); 

	 particle4 = Bodies.circle(230,10,10,particle_options); 
	 World.add(world,particle4); 

	particle5 =Bodies.circle(230,10,10,particle_options);
	 World.add(world,particle5);

	 var plane_options = {
		isStatic  :true
	}
		
	plane = Bodies.rectangle(600,height,1200,20,plane_options)	
	World.add(world,plane)

	block1 = Bodies.rectangle(100,400,150,20,plane_options)	
	World.add(world,block1)

	block2 = Bodies.rectangle(400,400,150,20,plane_options)	
	World.add(world,block2);

	var rotator_options = {
		isStatic  :true
	}

	//Create the Bodies Here.\
	rotator1 = Bodies.rectangle(250,200,150,20,rotator_options)	
	World.add(world,rotator1)

	rotator2 = Bodies.rectangle(250,200,150,20,rotator_options)	
	World.add(world,rotator2)

	rotator3 = Bodies.rectangle(250,200,150,20,rotator_options)	
	World.add(world,rotator3)

	fill("brown");
	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);
	
  
}


function draw() {
  
  background("lightgreen");
  Engine.update(engine)

  rect(plane.position.x,plane.position.y,1200,20)
  rect(block1.position.x,block1.position.y,150,20)
  rect(block2.position.x,block2.position.y,150,20)
  
Matter.Body.rotate(rotator1,angle1)
push()
translate(rotator1.position.x,rotator1.position.y);
rotate(angle1);
rect(0,0,150,20);
pop()
angle1+=0.2

Matter.Body.rotate(rotator2,angle2)
push()
translate(rotator2.position.x,rotator2.position.y);
rotate(angle2);
rect(0,0,150,20);
pop()
angle2+=0.3

Matter.Body.rotate(rotator3,angle3)
push()
translate(rotator3.position.x,rotator3.position.y);
rotate(angle3);
rect(0,0,150,20);
pop()
angle3+=0.4

//created shape for all the paticles 
ellipse(particle1.position.x,particle1.position.y,10);
ellipse(particle2.position.x,particle2.position.y,10); 
ellipse(particle3.position.x,particle3.position.y,10); 
ellipse(particle4.position.x,particle4.position.y,10); 
ellipse(particle5.position.x,particle5.position.y,10);
 drawSprites();
 
}



