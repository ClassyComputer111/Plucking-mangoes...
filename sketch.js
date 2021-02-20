
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6;
var Stone
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1200,120,30)
	mango3 = new mango(900,180,30)
	mango4 = new mango(900,280,30)
	mango5 = new mango(1000,250,30)
	mango6 = new mango(1150,200,30)

	stones = new Stone(100,460,30)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  detectCollision(stones,mango1)
  detectCollision(stones,mango2)
  detectCollision(stones,mango3)
  detectCollision(stones,mango4)
  detectCollision(stones,mango5)
  detectCollision(stones,mango6)
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stones.display();



  groundObject.display();
}

function mouseDragged() {
	Matter.body.setPosition(stones.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
	attach.fly();
}
function detectCollision(lstones,lmango) {
	if(lstones.body.position.x- lmango.body.position.x < lmango.diametre + lstones.diameter
		&& lstones.body.position.x - lstones.body.position.x < lmango.diametre +lstones.diametre
		&& lstones.body.position.y - lmango.body.position.y < lmango.diametre +lstones.diametre
		&& lmango.body.position.y - lstones.body.position.y , lmango.diametre + lstones.diametre ) {
			Matter.body.setStatic(lmango.body,false)

	}
}
 function keyPressed() {
	 if(keyCode === 32){
		 Matter.Body.setPosition(stones.body,{x:100,y:465});
		 attach.launch(stones,body)
	 }
 }