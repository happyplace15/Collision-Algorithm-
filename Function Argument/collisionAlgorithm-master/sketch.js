var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1= createSprite(100,200,50,60);
  gameObject1.shapeColor= "green";
  gameObject1.debug= true;
  gameObject2= createSprite(200,200,80,60);
  gameObject2.shapeColor= "green";
  gameObject2.debug= true;
  gameObject3= createSprite(300,300,50,90);
  gameObject3.shapeColor= "green";
  gameObject3.debug= true;
  gameObject4= createSprite(500,300,80,50);
  gameObject4.shapeColor= "green";
  gameObject4.debug= true;
  
  
  
}

function draw() {
  background(0,0,0);  
  gameObject1.x = World.mouseX;
  gameObject1.y = World.mouseY;
  if(isTouching(gameObject1,gameObject2)){
    gameObject1.shapeColor = "red";
    gameObject2.shapeColor = "red ";
  }
else{
  gameObject1.shapeColor = "blue";
  gameObject2.shapeColor = "blue ";
}
  
  drawSprites();

}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}
