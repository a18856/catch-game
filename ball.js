var accel;


class ball {
  
    constructor(x,y,yVelocity,xVelocity){   //creates a ball object when called
      this.x=x;                             
      this.y=y;
      this.yVelocity = yVelocity;
      this.xVelocity = xVelocity;
      accel = 0.6;
      this.rand = xVelocity;
      this.r = 21
      this.colour = 100;
    }
    
    draw(){
      fill(this.colour);
      circle(this.x,this.y,this.r);
      //console.log("xVelocity: "+ this.xVelocity%1,50,50,200,100) //logs updated value of balls horizontal velocity
      //console.log("rand: "+ this.rand,50,60,200,100)             //logs value of initial horizontal velocity
    }
    
    move(){
      this.yVelocity += accel;    //increases upwards velocity by the acceleration
      this.y += this.yVelocity;   //adds the vertical speed onto the y position of the ball
      
      if (this.rand < 0) { 
        this.rand *=-1;        //Stops x speed accelerating 
      }
      if (this.xVelocity > 0) {
        this.xVelocity -= (0.0055*this.rand);  //slows down horizontal speed by a constant value which is bigger depending on the initial x speed
        this.x += this.xVelocity;
      }
      if (this.xVelocity < 0) {
        this.xVelocity = this.xVelocity+(0.0055*this.rand);  //slows down horizontal speed if xVelocity is negative
        this.x += this.xVelocity;         //^increasing this number makes the balls horizontal speed slow down faster
      }
      if (this.x > width) {
        this.xVelocity *=-1;  //bounces off of the right wall
        this.x = width;
      }
      if (this.x < 0) {
        this.xVelocity *=-1;  //bounces off of the left wall
        this.x = 0;
      }
      if (this.y > height) {
      this.yVelocity = 0;
      this.xVelocity = 0;     //stops ball if it hits floor
      accel = 0;              //removes acceleration when hit floor     
      this.y = height;
      }
      
    }
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
  getR(){
    return this.r;
  }
  hide(){
    this.colour = bg;
    noStroke(); //hides ball
  }
  //getters to be used when checking for collision
  }
