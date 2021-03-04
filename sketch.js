const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var space;
var body;
var ground;
var task;
var obstacle;
var obstaclesGroup;
var challenge;

var gameState="serve";
var x;
var box;
var story,storyImage;
var task,taskImage;
var game,gameImage;
var bgImage;
var obstacleImage;
var obstacle1;
var upborder,downborder;
var storystateImage;
var spider;
var back,backImage;
var bodyp1,bodyp2;
var openingSound;
var score=0;
var gameOver,restart;


function preload(){
  a=loadAnimation("Images/fly1.png","Images/fly2.png","Images/fly3.png","Images/fly4.png");
  bee1=loadImage("Images/fly1.png");
  bee2=loadImage("Images/fly2.png")
  obstacleImage=loadImage("Images/bushes.png");
  storyImage=loadImage("Images/storyImage.png");
  taskImage=loadImage("Images/taskImage.png");
  gameImage=loadImage("Images/gameImage.png");
  bgImage=loadImage("Images/bgImage.jpg");
  backgroundImage=loadImage("Images/backgroundImage.png");
  storystateImage=loadImage("Images/storystateImage.png");
  blocksImage=loadImage("Images/blocksImage.png");
  spiderImage=loadImage("Images/spiderImage.png");
  backImage=loadImage("Images/bacK.png");

  openingSound=loadSound("Sound/Opening.wav");
  jumpSound=loadSound("Sound/jump.wav");
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  //edges=createEdgeSprites();
  createCanvas(1200,800);
  
//x=createSprite(56,126, 10, 10);
//x.shapeColor="red";
//space=new Space(387,283);
body=createSprite(438,113,40,40);
body.scale=0.3;
body.velocityY=22;
body.addAnimation("flying",a);
body.velocityY=body.velocityY+0.8;

//task=new Task(175,127);
//challenge=new Challange(123,377);

story=createSprite(585,200,800,160);
story.shapeColor="red";
story.scale=0.5;
story.addImage(storyImage);

task=createSprite(585,450,800,20);
task.addImage(taskImage);
task.scale=0.5;

game=createSprite(585,690,800,100);
game.addImage(gameImage);
game.scale=0.5;

back=createSprite(100,48,40,40);
back.addImage(backImage);
back.scale=0.33;

gameOver=createSprite(559,444,100,60);
gameOver.shapeColor="red";

/*bodyp=createSprite(149,379,50,50);
bodyp.addAnimation("flying",a);
bodyp.scale=0.4;*/
score=score+1;

obstaclesGroup=new Group();
obstacles1Group=new Group();
spiderGroup=new Group();
}

function draw() {
  Engine.update(engine);
  background("grey");  
  fill("black");
  textSize(50);
  text(mouseX+","+mouseY,mouseX,mouseY);
  //space.display();


  if(gameState==="serve"){
    background(backgroundImage);
  fill("red");
  stroke("red");
  strokeWeight(5);
  textSize(60);
  text("WELCOME TO BUZZLING BEE GAME!!!",30,58);
  openingSound.play();
 // box.visible=true;
if(mousePressedOver(game)){
  gameState="play";
}
body.visible=false;
body.velocityY=0;
story.visible=true;
task.visible=true;
game.visible=true;
back.visible=false;
//restart.visible=false;
//bodyp1.visible=true;
//bodyp1.visible=true;
if(mousePressedOver(story)){
  gameState="storyState";
}
  }

//Here Story State starts


  if(gameState==="storyState"){
   background(backgroundImage);
   fill("black");
   strokeWeight(10);
   textSize(50);
   text(mouseX+","+mouseY,mouseX,mouseY);

   fill("white");
   strokeWeight(12);
   text("Buzzling Bee is a very daring bee.",279,111);
    body.visible=false;
    story.visible=false;
    task.visible=false;
    game.visible=false;
    back.visible=true;
    restart.visible=false;
   //bodyp1.visible=true;


    if(mousePressedOver(back)){
      gameState="serve";
    }
  }

//Here game State Starts
  if(gameState==="play"){
    body.visible=true;
    task.visible=false;
    story.visible=false;
    game.visible=false;
    restart.visible=false;
    fill("black");
    textSize(50);
    text(mouseX+","+mouseY,mouseX,mouseY);
    background(backgroundImage);
    fill("red");
    textSize(50);
    text("SCORE:"+score,844,52);
    //background("green");
    fly();
    //obstacles();
   //obstacles1();
   hangingspider();

  /*if(body.isTouching(spiderGroup)){
    
     gameState="end";
   }*/
    
  }
  /*if(gameState==="end"){
    spiderGroup.setVelocityXEach(0);
    body.visible=false;
    restart.visible=true;
    if(mousePressedOver(restart)){
      gameState="play";
    }*/
  }
  drawSprites();
}
function fly(){
  if(keyDown(UP_ARROW)){
    body.velocityY=-12;
    jumpSound.play();
  }
  else{
    body.velocityY=4;
  }
}

function obstacles(){
  if(frameCount % 150 === 0) {
    obstacle = createSprite(626,792,20,20);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(blocksImage);
    obstacle.scale=2.5;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
  
}

function obstacles1(){
  if(frameCount%100===0){
    obstacle1=createSprite(800,792,220,220);
    obstacle1.velocityX=-6;
    obstacle1.shapeColor="red";
    obstacle1.lifetime = 300;
    obstacles1Group.add(obstacle1);
  }
 
}

function hangingspider(){
  if(frameCount%90===0){
    spider=createSprite(800,210,60,100);
    spider.addImage(spiderImage);
    spider.shapeColor="black";
    spider.velocityX=-4;
    spider.y=Math.round(random(180,750));
    spider.lifetime=300;
    spiderGroup.add(spider);
  }
}