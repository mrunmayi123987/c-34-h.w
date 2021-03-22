class Hero {
  

    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.radius= 30;
      //this.height=50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
//pos.x = mouseX;
//pos.y = mouseY;

      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      fill("red");
      circle(0, 0, this.radius);
      pop();
    }
  }
  