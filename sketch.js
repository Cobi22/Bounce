var mr, mr1, fr;

function setup() {
  createCanvas(800,400);

  mr = createSprite(200, 200, 50, 30);
  mr1 = createSprite(600, 100, 30, 30);
  fr = createSprite(600, 200, 40, 80);

  mr.shapeColor = "green";
  mr1.shapeColor = "green";
  fr.shapeColor = "green";

  mr.debug = true;
  mr1.debug = true;
  fr.debug = true;

  mr.velocityX = 3;
  mr1.velocityY = 3;
  
}

function draw() {
  background(230);
 // mr.x = mouseX;
 // mr.y = mouseY;  
  
  if(isTOUCHING(mr, fr)){
    mr.shapeColor = "red";
    fr.shapeColor = "red";
  } else {
    mr.shapeColor = "green";
    fr.shapeColor = "green";
    }
  bounceOFF(mr, fr);
  bounceOFF(mr1, fr);

  drawSprites();
  //hewwo dere
}