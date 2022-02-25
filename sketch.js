var box;
var krusha;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  krusha=createSprite(250,250,45,45);
  krusha.shapeColor="yellow"
  box.shapeColor="green"
}

function draw() 
{
   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    krusha.position.x=krusha.position.x+6;
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    krusha.position.x=krusha.position.x-6;
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    krusha.position.y=krusha.position.y-6;
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    krusha.position.y=krusha.position.y+6;
    box.position.y = box.position.y + 5;
  }

  drawSprites();
}




