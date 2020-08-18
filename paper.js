class Paper{
    constructor (){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
        }
        this.image = loadImage("paper.png");
        this.paperBall = Bodies.circle(100,450,30,options);
        
        World.add(world,this.paperBall);
    }
    display(){
        
        push ();
        fill ("yellow");
        translate(this.paperBall.position.x, this.paperBall.position.y)
        imageMode(CENTER);
        image(this.image, 0, 0, 60,60);
        pop ();
        }

    
  
}