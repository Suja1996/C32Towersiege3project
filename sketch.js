
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score=0
var backgroundImg
bgImage="sprites/bg.png" 
function preload()
{
	getTime()
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new ground(700,300,800,10,"images/base.png")

	//tree=new Ground(800,300,800,600,"images/tree.png")
	//tree.scale=0.5
	mango1=new Box(320,298,30,30);
  mango2=new Box(352,298,30,30);
	 mango3=new Box(384,298,30,30);
	mango4=new Box(416,298,30,30);
	mango5=new Box(448,298,30,30);
	mango6=new Box(482,298,30,30);
	mango7=new Box(352,288,30,30);
	mango8=new Box(384,288,30,30);
	mango9=new Box(416,288,30,30);
	mango10=new Box(448,288,30,30);
	mango11=new Box(400,200,30,30);
  mango12=new Box(384,278,30,30);
  mango13=new Box(416,278,30,30);
	//mango14=new Box(400,260,30,30);
	
	stone1=new stone(84,100,50)


console.log()
slingshot1=new slingshot(stone1.body,{x:84,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
if(backgroundImg)
  background(backgroundImg);
  drawSprites();
  textSize(20)
  text("score: "+score,600,100)
 // tree.score()
 mango1.display();
 mango2.display();
mango3.display();
 mango4.display();
 mango6.display();
mango5.display();
mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
 mango11.display();
 mango12.display();
 mango13.display();

  mango1.score();
  mango2.score();
 mango3.score();
  mango4.score();
  mango6.score();
mango5.score();
 mango7.score();
  mango8.score();
  mango9.score();
  mango10.score();
  mango11.score();
  mango12.score();
  mango13.score();
  //mango14.score();
  text(mouseX+','+mouseY,mouseX,mouseY)
  ground1.display();

  //ground1.score()
 stone1.display()
 slingshot1.display()
 mangoFall(stone1,mango1)
 mangoFall(stone1,mango2)
 mangoFall(stone1,mango3)
 mangoFall(stone1,mango4)
 mangoFall(stone1,mango5)
 mangoFall(stone1,mango6)
 mangoFall(stone1,mango7) 
 mangoFall(stone1,mango8)
 mangoFall(stone1,mango9)
 mangoFall(stone1,mango10)
 mangoFall(stone1,mango11)
 mangoFall(stone1,mango12)
// console.log(stone1.body)
if (keyDown("space")){
	Matter.Body.setPosition(stone1.body,{x:120,y:460});
		slingshot1.attach(stone1.body);
	}
}



function mouseDragged(){

   Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot1.fly();
}

function mangoFall(stone,Box){

	if(isTouching(stone,Box)){
	//	console.log("mangofall")
		Matter.Body.setStatic(Box.body,false);
	 }
}
 async function getTime(){
	console.log("getting time");
	var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
    var responseJSON=await response.json();
    //console.log(responseJSON.datetime);
    datetime=responseJSON.datetime;
   var time=datetime.slice(11,13);
   console.log(time);

   if(time>6 && time<19){
    bgImage="bg.png"  
   
   }else{
    bgImage="bg2.jpg"
   }
   backgroundImg = loadImage(bgImage);


 }
