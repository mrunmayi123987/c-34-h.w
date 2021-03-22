class Fly{

    constructor(bodyA,pointB){
    
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:10
        }
        this.pointB=pointB
        this.Fly=Constraint.create(options);
        World.add(world,this.Fly);
    }

    attach(body){
        this.Fly.bodyA = body;
    }
    
    fly(){
        this.Fly.bodyA = null;
    }

    
    display(){
        
       

        if(this.Fly.bodyA){
        
            var pointA;
            pointA=this.Fly.bodyA.position;
            var pointB;
             pointB=this.pointB;

      push();

       strokeWeight(10);
        stroke("green");
        line (pointA.x,pointA.y,pointB.x,pointB.y);
        //fill("white");
        pop();
       }
    }
}