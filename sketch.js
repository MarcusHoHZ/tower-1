const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload() {

}



function setup() {
    var canvas = createCanvas(1200,450)
    engine = Engine.create();
    world = engine.world;


ground = new Ground(600,440,1200,20)
stand = new Ground(800,250,200,10)
stand2 = new Ground(400,320,200,10)

block1 = new Block(720,225,40,40)
block2 = new Block(760,225,40,40)
block3 = new Block(800,225,40,40)
block4 = new Block(840,225,40,40)
block5 = new Block(880,225,40,40)

block6 = new Block(740,185,40,40)
block7 = new Block(780,185,40,40)
block8 = new Block(820,185,40,40)
block9 = new Block(860,185,40,40)

block10 = new Block(760,145,40,40)
block11 = new Block(800,145,40,40)
block12 = new Block(840,145,40,40)

block13 = new Block(780,105,40,40)
block14 = new Block(820,105,40,40)



block15 = new Block(320,295,40,40)
block16 = new Block(360,295,40,40)
block17= new Block(400,295,40,40)
block18 = new Block(440,295,40,40)
block19 = new Block(480,295,40,40)

block20 = new Block(340,255,40,40)
block21 = new Block(380,255,40,40)
block22 = new Block(420,255,40,40)
block23 = new Block(460,255,40,40)

block24 = new Block(360,215,40,40)
block25 = new Block(400,215,40,40)
block26 = new Block(440,215,40,40)

block27 = new Block(380,175,40,40)
block28 = new Block(420,175,40,40)


}


function draw() {

    background('grey')
    fill('white')
    textSize(21)
    text('Drag the Hexagon and Release it, to launch towards blocks',200,80)

ground.display()
stand.display()
stand2.display()
fill('pink')
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
fill('green')
block6.display()
block7.display()
block8.display()
block9.display()
fill('blue')
block10.display()
block11.display()
block12.display()
fill('yellow')
block13.display()
block14.display()


fill('pink')
block15.display()
block16.display()
block17.display()
block18.display()
block19.display()
fill('green')
block20.display()
block21.display()
block22.display()
block23.display()
fill('blue')
block24.display()
block25.display()
block26.display()
fill('yellow')
block27.display()
block28.display()


}




