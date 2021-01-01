const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var backgroundImage;

function preload() {
    backgroundImage=loadImage("sprites/bg.png");
    
}

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(650,390,70,70);
    box2 = new Box(860,390,70,70);
    ground = new Ground(500,height,width,20);
    pig1 = new Pig(750,390,70,70);
    log1 = new Log(750,380,300,20,PI);

    box3 = new Box(650,300,70,70);
    box4 = new Box(860,300,70,70);
    pig2 = new Pig(750, 300,70,70);

    log2 = new Log(750,250,300,20,PI);

    box5 = new Box(750, 200,70,70);

    log3 = new Log(740,200,150,20,-PI/5);
    log4 = new Log(800,200,150,20,PI/5);

    bird = new Bird(250,250,70,70);

}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
    /*console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    pig2.display();
    box3.display();
    box4.display();

    log2.display();
    box5.display();
    
    log3.display();
    log4.display();

    bird.display();
}