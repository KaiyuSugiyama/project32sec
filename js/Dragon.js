class Dragon{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
        }
        this.image = loadImage("js/dragon.png")
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x =x;
        this.y = y;
        this.width = width;
        this.height = height;
        //this.Visibility = 255;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 3) {
        var pos= this.body.position;
        push();
          imageMode(CENTER);
          image(this.image,this.x,this.y,this.width,this.height);
        pop();
        } else {
        World.remove(world,this.body);
        push();
        // Slowly making it invisible if hit
        this.Visibility = this.Visibility-5;
        tint(255, this.Visibility);
        pop();
        }   
      }
}