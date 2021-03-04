class Space{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.3,
			friction:0,
			density:1.2
			
        }
        this.x=x;
        this.y=y;
        this.width=240;
        this.height=240;
        this.space=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        //this.space=this.space.velocityY+0.8;
       this.image=loadAnimation("Images/fly1.png","Images/fly2.png","Images/fly3.png","Images/fly4.png");
        World.add(world,this.space);
    }
   
    
    display(){
        var spacePos=this.space.position;
        push();
        rectMode(CENTER);
        translate(spacePos.x,spacePos.y);
        /*fill("white");
        stroke("white");
        rect(this.x,this.y,this.width,this.height);*/
       
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}