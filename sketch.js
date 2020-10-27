var bullet,wall;
var speed,thickness,weight;
var deformation;

function setup() {
  speed=random(223,321);
  thickness=random(22,84);
  weight=random(30,52);
  createCanvas(1400,400);
  bullet=createSprite(50, 200, 50, 10);
  wall=createSprite(1300,200,thickness,height/2);
  wall=color(80,80,80);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
 

}
function draw() {
  background(200,255,255);  
  if(wall.x - bullet.x <= bullet.width/2+wall.width/2){
    bullet.velocityX=0;
    deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness); 
  }
    if (deformation>12){
      wall.shapeColour="red";
    }
    
   
    
    if (deformation<4){
     wall.shapeColour="green";
    }
    
    
    
    
    
      

  drawSprites()
}