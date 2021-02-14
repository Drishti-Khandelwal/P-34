class Monster{
constructor(x,y,r) {
 var options ={
 density : 5,
frictionAir :0
 };
 this.x=x;
 this.y=y;
 this.r=r;
this.image = loadImage("sprites/Monster-01.png");
this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
World.add(world,this.body);
    }
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image,0,0,this.r*2, this.r*2);
pop();




}
}