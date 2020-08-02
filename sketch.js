var fixedRect, movingRect;
var ob1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  ob1 =createSprite(300,200,20,50);
  ob1.shapeColor ="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,ob1))
{
  movingRect.shapeColor ="red";
  ob1.shapeColor ="red";
}
  else
  {
    movingRect.shapeColor ="green";
  ob1.shapeColor ="green";
  }
  drawSprites();
}
