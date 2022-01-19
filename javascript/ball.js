var accel; 

class ball {
  
    constructor(x,y,yVelocity,xVelocity){
      this.x=x;
      this.y=y;
      this.yVelocity = yVelocity;
      this.xVelocity = xVelocity;
      accel = 0.6;
      this.temp = xVelocity;
    }
    
    draw(){
      fill(100);
      circle(this.x,this.y,25);
      text("xVelocity: "+ this.xVelocity%1,50,50,200,100)
      text("temp: "+ this.temp,50,60,200,100)
    }
    
    move(){
      this.yVelocity += accel;
      this.y += this.yVelocity;
      
      if (this.temp < 0) {
        this.temp *=-1;
      }
      if (this.xVelocity <0.1 && this.xVelocity > 0){
        this.xVelocity = 0;
      }
      if (this.xVelocity > 0) {
        this.xVelocity -= (0.0055*this.temp);
        this.x += this.xVelocity;
      }
      if (this.xVelocity < 0) {
        this.xVelocity = this.xVelocity+(0.0055*this.temp);
        this.x += this.xVelocity;
      }
      if (this.x > width) {
        this.xVelocity *=-1;
        this.x = width;
      }
      if (this.x < 0) {
        this.xVelocity *=-1;
        this.x = 0;
      }
      if (this.y > height) {
        this.yVelocity *= -0.6;
        this.y = height;
      }
      
    }
  }