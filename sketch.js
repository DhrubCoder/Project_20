//Dhrub
// GAME STATE
var gameState = "play";

// making variables
var bath , bathImg , brush , brushImg , drink , drinkImg , eat , eatImg , gym , gymImg , move , moveImg , sleep , sleepImg ;
var bg , bgImg;
var man ;


//////////////////////////////         PRELOAD          ////////////////////////////

function preload(){

bgImg = loadImage("images/iss.png");
bathImg = loadAnimation("images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png");
brushImg = loadAnimation("images/brush.png");
drinkImg = loadAnimation("images/drink1.png","images/drink2.png");
eatImg = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png","images/eat2.png");
gymImg = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png","images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png","images/gym11.png","images/gym11.png","images/gym12.png","images/gym12.png","images/gym11.png","images/gym11.png","images/gym12.png","images/gym12.png");
moveImg = loadAnimation("images/move1.png","images/move2.png");
sleepImg = loadAnimation("images/sleep.png");


}

///////////////////////////////          SETUP         ///////////////////////////////

function setup() {
    // CANVAS
 createCanvas(1300,900);

 bg = createSprite(600,400);
 bg.addImage(bgImg);
 bg.scale = 0.3;


 man = createSprite(650,600);
 man.addAnimation("sleep",sleepImg);
 man.scale = 0.2;
 

    

}

/////////////////////////////           DRAW           /////////////////////////////////          

function draw() {

background("green");

if(gameState === "play"){

    drawSprites();
    textSize(30);
    fill("white");
    text("INSTRUCTIONS",20,30);
    fill("red");
    text("UP ARROW for bathing",20,150);
    text("DOWN ARROW for drinking",20,70);
    text("LEFT ARROW for brushing",20,110);
    text("RIGHT ARROW for sleeping",20,310);
    text("F for food",20,230);
    text("G for execise",20,270);
    text("SPACE for moving",20,190);



    if(keyDown("g")){
        man.addAnimation("gym" , gymImg); 
        man.changeAnimation("gym");
        man.x = 650;
        man.velocityX = 0;
     }
  
if(keyDown("f")){
    man.addAnimation("food",eatImg);
    man.changeAnimation("food");
    man.x = 230;
    man.velocityX = 0;
}

if(keyDown("up_arrow")){
    man.addAnimation("bath",bathImg);
    man.changeAnimation("bath");
    man.x = 650;
    man.velocityX = 0;
}

if(keyDown("down_arrow")){
    man.addAnimation("drink",drinkImg);
    man.changeAnimation("drink");
    man.velocityX = 0;
}

if(keyDown("left")){
    man.addAnimation("brush",brushImg);
    man.changeAnimation("brush");
    man.x = 650;
    man.velocityX = 0;
}

if(keyDown("space")){
    man.addAnimation("move",moveImg);
    man.changeAnimation("move");
    man.x = 650;
    man.velocityX = 1;
   
}

if(keyDown("right")){
    man.addAnimation("sleep",sleepImg);
    man.changeAnimation("sleep");
    man.x = 650;
    man.velocityX = 0;
}

}
    

}