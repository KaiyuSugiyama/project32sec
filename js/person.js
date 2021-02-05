class Person{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
        }
        this.image = loadImage("js/person.png")
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
      display(){
        var pos= this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
        pop();
        push();
        pop();
      }   
}
