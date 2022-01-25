class player{
   constructor(playerX,playerY){
       this.playerX = playerX;
       this.playerY = playerY;
       this.w = 200
       this.h = 20
       this.c = "black"
   }
  draw(){
      fill(this.c);
      rect(mouseX,this.playerY,this.w,this.h);
  }
  getX() {
      return this.playerX;
    }
  getY() {
      return this.playerY;
    }
}
