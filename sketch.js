var canvas;
var music;
var block1
var block2
var block3
var block4
var ball
function preload(){
}


function setup(){
    canvas = createCanvas(800,600);
block1=createSprite(0,580,360,30)
block1.shapeColor="red"
block2=createSprite(295,580,200,30)
block2.shapeColor="black"
block3=createSprite(515,580,200,30)
block3.shapeColor="yellow"
block4=createSprite(740,580,220,30)
block4.shapeColor="orange"
ball=createSprite(100,100,20,20)
ball.shapeColor="blue"
ball.velocityX=4
ball.velocityY=8
}

function draw() {
    background(rgb(169,169,169));
drawSprites()
var edges=createEdgeSprites()
ball.bounceOff(edges)
if(ball.isTouching(block1)){
    ball.shapeColor="red"
    ball.bounceOff(block1)
}
if(ball.isTouching(block2)){
    ball.shapeColor="black"
    ball.bounceOff(block2)
}
if(ball.isTouching(block3)){
    ball.shapeColor="yellow"
    ball.bounceOff(block3)
}
if(ball.isTouching(block4)){
    ball.shapeColor="orange"
    ball.bounceOff(block4)
}
}
