class Dustbin{
    constructor(){
        var options ={
            isStatic:true
        }
        this.width = 200;
        this.height = 20;

        this.image = loadImage("dustbingreen.png");

        this.bottom = Bodies.rectangle(650,635,this.width,20, options);
        this.right = Bodies.rectangle(560,600,this.width/2,20, options);
        this.left = Bodies.rectangle(760,600,this.width/2,20, options);

        

        World.add(world, this.left);
        World.add(world, this.right);
        World.add(world, this.bottom);
    }
    display(){
        push ();
        fill ("yellow");
        /*translate(this.bottom.position.x, this.bottom.position.y)
        translate(this.left.position.x, this.left.position.y)
        translate(this.right.position.x, this.right.position.y)*/
        imageMode(CENTER);
        image(this.image, 700, 550, this.width, 200);
        pop ();
    }
}