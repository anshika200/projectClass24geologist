class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':2
      }
      this.body = Bodies.rectangle(x, y, 50 , 50, options);
      this.width = 150;
      this.height = 150;
      
      World.add(world, this.body);
      this.image = loadImage("hammer.png");
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
     
      pop();
    }
  };