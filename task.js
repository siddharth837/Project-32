 class Task{
     constructor(x,y)
     {
        this.x=x;
        this.y=y;
        this.width=900;
        this.height=150;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height);
        this.image=loadImage("Images/story image.png")
        World.add(world,this.body);
     }
     display(){
         var posTask=this.body.position;
         push();
         /*rectMode(CENTER);
         fill("browm");
         stroke("brown");*/
         image(this.image,this.x,this.y,this.width,this.height);
         pop();
     }
 }