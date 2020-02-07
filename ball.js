class Ball{
  
  constructor(){
    this.x = 200;
    this.y = 300;
  }
  
  mostrar(){
      ellipse(this.x,this.y,50,50);
  }
  
  mover(){
    this.x--;
    this.y++;
  }
}
