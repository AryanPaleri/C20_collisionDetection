
var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(500,400,50,80);
  fixedRect.shapeColor="green";

  movingRect=createSprite(800,400,80,50);
  movingRect.shapeColor="green";
}

function draw() {
  background("turquoise"); 
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
   else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
   }
   

  drawSprites();
}