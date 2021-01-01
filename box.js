class Box extends Baseclass {
  constructor(x, y, width, height) {
    
    super(x,y,width,height);

    this.image = loadImage("sprites/box.png");
    
  }
  display(){
   super.display();
  }
};
