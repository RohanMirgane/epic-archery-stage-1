class playerBase {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        };
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadimage("./assets/base1.png");
        world.add(world,this.body);
    


    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    Push();
    translate(pos.x,pos.y);
    rotate(angel);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    Pop();
}
      
    

} 
