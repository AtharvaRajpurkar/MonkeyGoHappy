
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,50,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  ground=createSprite(400,350,900,10)
  console.log(ground.x)
  bananasGroup = new Group()
  obstaclesGroup = new Group()
  
}


function draw() {
  background(255)
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
if(keyDown("space") && monkey.y>=230){
  monkey.velocityY=-12
}
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground )
  banana()
  obstacle()
  stroke("white")
  textSize(20)
  fill("white")
  text("Score : "+score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time : "+survivalTime,100,50)
  
  drawSprites()

}
function banana(){
  if(World.frameCount%60===0){
      var bananas=createSprite(450,160,20,20)
      bananas.addImage(bananaImage)
      bananas.scale=0.1
      bananas.velocityX=-6
      bananas.y=Math.round(random(80,180))
      bananas.setLifetime=90
      bananasGroup.add(bananas)
  }
}
function obstacle(){
  if(World.frameCount%150===0){
      var obstacles=createSprite(600,165,20,20)
      obstacles.addImage(obstaceImage)
      obstacles.scale=0.2
      obstacles.velocityX=-5
      obstacles.y=Math.round(random(330,300))
      obstacles.setLifetime=60
      obstaclesGroup.add(obstacles)
  }
}
