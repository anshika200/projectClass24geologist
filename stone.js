class Stone  {
    constructor(x, y) {
      var options = {
          'restitution':0.25,
          'friction':5,
          'density':4.0
      }
      this.body = Bodies.rectangle(x, y, 50 , 50, options);
      this.width =150;
      this.height =100;
      
      
      World.add(world, this.body);
      this.image = loadImage("stone.png");
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
     pop(); 
     }
  }