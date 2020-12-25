var wall,thickness;
var bullet,speed,weight;






function setup() {
  createCanvas(1600,400);


  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,20);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  

  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/22509;
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
     
    }
     
    }


  drawSprites();
}

function hascollided(bullet1,wall1){
    
  bulletRightEdge=bullet1.x +bullet1.width;
  wallLeftEdge=wall1.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
      return true
  }
  return false;

}