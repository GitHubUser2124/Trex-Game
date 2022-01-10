var trex ,trex_running;
var ground, groundImage;
var invisGround;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  //create a trex sprite
  trex = createSprite(50, height-50);
  trex.addAnimation("Running", trex_running)
  trex.scale = 0.6;

  //Ground
  ground = createSprite(width/2, height-20);
  ground.addImage(groundImage);
  ground.velocityX=-5;

  //Invisible Ground
  invisGround = createSprite(width/2, height-10, width, 10);
  invisGround.visible = false;
}

function draw(){
  background("white");
  
  if(keyDown("space") && trex.isTouching(ground)){
    trex.velocityY=-12;
  }

  //Making Ground Infinite
  if(ground.x<400){
    ground.x = width/2;
  }
  

  //Adding Gravity
  trex.velocityY+=0.6;
  trex.collide(invisGround);
  drawSprites();
}
