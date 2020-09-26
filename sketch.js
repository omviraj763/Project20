var car,car2,car3,car4,wall,fixedRect;
var speed,weight;
var line1, line2, line3;
var deformation;

function setup() {
  createCanvas(1400,500);

  //speed and weight
  speed=random(55,90);
  weight=random(400,1500);

  //cars
  car = createSprite(100, 100, 15, 10);
  car.shapeColor = "white";
  car.velocityX = speed;

  car2 = createSprite(100, 200, 15, 10);
  car2.shapeColor = "yellow";
  car2.velocityX = speed;

  car3 = createSprite(100, 300, 15, 10);
  car3.shapeColor = "red";
  car3.velocityX = speed;

  car4 = createSprite(100, 400, 15, 10);
  car4.shapeColor = "lightGreen";
  car4.velocityX = speed;

  //walls
  wall = createSprite(1300,100,50,60);
  wall.shapeColor = "grey"; 

  wall = createSprite(1300,200,50,60);
  wall.shapeColor = "grey";
  
  wall = createSprite(1300,300,50,60);
  wall.shapeColor = "grey";

  wall = createSprite(1300,400,50,60);
  wall.shapeColor = "grey";

  //lines
  line1 = createSprite(1, 350, 2900,5);
  line1.shapeColor = "white";

  line2 = createSprite(1, 250, 2900,5);
  line2.shapeColor = "white";

  line3 = createSprite(1, 150, 2900,5);
  line3.shapeColor = "white";

  

}

function draw() {
  background(80,80,80);

  if (wall.x-car.x < (car.width+wall.width)/2) {
      car.velocityX = 0;
      var deformation=0.5 * weight * speed* speed/22509;
      if (deformation>180) {
          car.shapeColor=color(255,0,0);
        } 
       
        if (deformation<180 && deformation>100) {
            car.shapeColor=color(230,230,0);
        } 
  
        if (deformation<100) {
            car.shapeColor=color(0,255,0);
        }
      }
    
  
      if (wall.x-car2.x < (car2.width+wall.width)/2) {
        car2.velocityX = 0;
        var deformation=0.5 * weight * speed* speed/22509;
        if (deformation>180) {
            car2.shapeColor=color(255,0,0);
        } 
        
        if (deformation<180 && deformation>100) {
            car2.shapeColor=color(230,230,0);
        } 
  
        if (deformation<100) {
            car2.shapeColor=color(0,255,0);
        }
      }
    
  
  if (wall.x-car3.x < (car3.width+wall.width)/2) {
    car3.velocityX = 0;
    var deformation=0.5 * weight * speed* speed/22509;
    if (deformation>180) {
        car3.shapeColor=color(255,0,0);
    } 
     
    if (deformation<180 && deformation>100) {
        car3.shapeColor=color(230,230,0);
    } 
    if (deformation<100) {
      car3.shapeColor=color(0,255,0);
  }
}


if (wall.x-car4.x < (car4.width+wall.width)/2) {
  car4.velocityX = 0;
  var deformation=0.5 * weight * speed* speed/22509;
  if (deformation>180) {
      car4.shapeColor=color(255,0,0);
  } 
   
  if (deformation<180 && deformation>100) {
      car4.shapeColor=color(230,230,0);
  } 

  if (deformation<100) {
      car4.shapeColor=color(0,255,0);
  }
}


  

  drawSprites();
}