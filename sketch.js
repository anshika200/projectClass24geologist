
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1,stone1;
var bgImg,ground;
var rubber1;
var iron1;
var sand1,sand2,sand3,sand4,sand5;

function preload(){
	bgImg=loadImage("background.jpeg");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1=new Hammer(120,120);
	ground = new Ground(400,650,900,55);
	rubber1=new Rubber (200,300,80,40);
	stone1= new Stone (300,400);
	iron1 =new Iron (450,30,240,170);
	sand1 =new Sand (550,200)
	sand2 =new Sand (450,200)
	sand3 =new Sand (440,200)
	sand4 =new Sand (530,200)
	sand5 =new Sand (515,200)
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  
  hammer1.display();
  rubber1.display();
  stone1.display();
  iron1.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();

  drawSprites();
 
}