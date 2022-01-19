function setup() {
    createCanvas(500, 600);
    ball1 = new ball(width/2,height/2,random(-20,-2),random(-16,17));
  }
  
  function draw() {
    background(220);
    ball1.draw();
    ball1.move();
    
  }
  