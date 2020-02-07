var pelota;
function setup() { 
  createCanvas(400, 400);
  pelota = new Ball();
}

  
function draw(){
  background(0,155,200);
  pelota.mostrar();
  pelota.mover();
  console.log(pelota); 
}
