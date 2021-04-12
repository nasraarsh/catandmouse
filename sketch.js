var cat, catimg1, catimg2;
var mouse, mouseimg1, mouseimg2;

function preload() {
    //load the images here
bg = loadImage("images/garden.png")
catimg1 = loadAnimation("images/cat1.png")
catimg2 = loadAnimation("images/cat2.png, images/cat3.png")
catimg3 = loadAnimation("images/cat4.png")
mouseimg1 = loadAnimation("images/mouse1.png")
mouseimg2 = loadAnimation("images/mouse2.png, images/mouse3.png")                                                                                                                       
mouseimg3 = loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat = createSprite(870, 600)
   cat.addAnimation("catSleeping", catimg1)

   mouse = createSprite(200, 600)
   mouse.addAnimation("jerryStanding", mouseimg1)


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.widh/2)){
        cat.velocityX = 0;
        cat.addAnimation("catStanding", catimg3);
        cat.changeAnimation("catStanding");
        mouse.addAnimation("jerryWinking", mouseimg3);
        mouse.changeAnimation("jerryWinking");
        cat.x = 300;
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning", catimg2);
      cat.changeAnimation("catRunning");
      mouse.addAnimation("mouseTeasing", mouse2img);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;

  }


}
