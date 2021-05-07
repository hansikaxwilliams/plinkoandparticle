class Particle{
constructor(x,y,radius){
    var options={
restitution:0.8
    }
    this.r=r;
    this.body=Bodies.circle(x,y,this.r,options);
  this.color=color(random(0,255)),(random(0,255)),(random(0,255));
  World.add(world,this.body);
}
display(){
var pos=this.body.position;
var angle=this.body.angle;
push();
rotate(angle);
translate(pos.x, pos.y);
ellipseMode(RADIUS);
ellipse(x,y,this.r, this.r);
pop();
}
}