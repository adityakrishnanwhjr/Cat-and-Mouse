var garden, gardenImg;
var cat, catImg, catImg2, catImg3;
var mouse, mouseImg, mouseImg2;

function preload() {
    //load the images here
    gardenImg=loadImage("garden.png");
    catImg=loadAnimation("cat1.png");
    mouseImg=loadAnimation("mouse2.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    mouseImg2=loadAnimation("mouse3.png");
    catImg3=loadAnimation("cat4.png");
    mouseImg3=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400);
    garden.addImage(gardenImg);
    garden.scale=1.2;

    cat=createSprite(800,650,40,40);
    cat.addAnimation("sitting",catImg);
    cat.scale=0.15;

    mouse=createSprite(190,650,40,40);
    mouse.addAnimation("standing",mouseImg);
    mouse.scale=0.2;
}

function draw() {

    background(250);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catLastImage",catImg3);
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage",mouseImg3);
        mouse.changeAnimation("mouseLastImage");
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing");
    }

  //For moving and changing animation write code here


}
