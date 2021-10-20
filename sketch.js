const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.8,
		frictionAir: 0.5,
		density:1.0
	}


	ball = Bodies.circle(100, 600, 10, ball_options);
	World.add(world, ball);

	wall_Bottom = new Ground(600, 650, 1200, 20);
	wall_Right = new Ground(800, 570, 20, 150);
	wall_Left = new Ground(1100, 570, 20, 150);
	
	ellipseMode(RADIUS);


	Engine.run(engine);

}


function draw() {
	background(0);
	
	ellipse(ball.position.x,ball.position.y,10);
	wall_Bottom.showGround();
	wall_Right.showGround();
	wall_Left.showGround();
	keyPressed();

	drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 30, y: 15})
	}
}