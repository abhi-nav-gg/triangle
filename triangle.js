class triangle {
    constructor(x1,y1,x2,y2,x3,y3) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.triangle(x1,y1,x2,y2,x3,y3,options);
      this.x1 = x1 ;
      this.y1 = y1;
      this.y2= y2;
      this.x2 = x2 ;
      this.x3 = x3 ;
      this.y3 =y3 ;
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      triangleMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
     triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
      pop();
    }
  };
  