let score = 0;
let bg = 220; //bg colour

function setup() {
    createCanvas(windowWidth, windowHeight);
    myBall = new ball(width/2,height/2,random(-20,-2),random(-16,17));
    myPlayer = new player(540, windowHeight-80);
  }
  
  function draw() {
    background(bg);
    myBall.draw();
    myBall.move();
    myPlayer.draw();
    
    text("Score: " + score, 100,height - 800 + 20 );
    
    if(collideRectCircle(mouseX,myPlayer.getY(),200,20,myBall.getX(),myBall.getY(),myBall.getR())){// checks for collision
      
        console.log("collision detected")//used for debugging
      myBall.hide();
      myBall.xVelocity *= -1//ball goes opposite way after collision so as to not increase the score more than once at a time
      myBall.yVelocity *= -1// same as above but for y
      score++
      
      }
    
  }
  