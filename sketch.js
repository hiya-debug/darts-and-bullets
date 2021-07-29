function setup() {
  createCanvas(800,400);
  var wall,thikness
  var bullet,speed,weight
  thinkness = random(22,83)
  wall = createsprite(1200,200,thinkness,height/2)
  speed = random(223,321)
    weight =  random(30,52)
}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet,wall)) {
    bullet.velocityX = 0
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
   |
   if(damage>10){
     wall.shapecolor = color(255,0,0)
   }
   if (damage>10){
    wall.shapecolor = color(0,255,0)
  }

  }
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
  bulletRightEdge = Lbullet.x +Lbullet.width
  wallLeftEdge = Lwall.x
  if(bulletRightEdge >= wallLeftEdge)
  {
  return true
  }
  return false
}