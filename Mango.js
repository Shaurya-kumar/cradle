class Mango{
    constructor(x, y, width, height) {
        var options = {
             isStatic:true,
             'restitution':0.8,
             'friction':1.0,
             'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height; 
        
        World.add(world, this.body);

        this.image = loadImage("mango.png");
      } 
      display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width*2, this.height*2);
        pop();
      }
}