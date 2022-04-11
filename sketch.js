var jugador
function setup() {
  createCanvas(400,400)
  jugador=createSprite(200,200,20,20);
  jugador.shapeColor="red"

}

function draw() 
{
  background(30); 
  drawSprites();
  if (keyDown("left")) {
 jugador.velocityX=-4
  }

}




