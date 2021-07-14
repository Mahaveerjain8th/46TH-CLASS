var bg,bgimg;
var character,characterimg;
var score = 0;
var health = 100;
var LifeImg ,Life,Life2,Life3;

function preload(){
    bgimg = loadImage("images/bg.jpg");
    characterimg = loadAnimation("images/c1.gif","images/c2.gif","images/c3.gif","images/c4.gif","images/c5.gif");
    LifeImg = loadImage("images/LIFE.png");
    
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    bg = createSprite(width/2,height/2-100);
    bg.addImage(bgimg);
    bg.scale = 4;
    bg.velocityX = -3

    ground = createSprite(300,height-60,600,20);
    ground.visible = false;

    character = createSprite(100,height-400);
    character.addAnimation("ch",characterimg);
    character.scale = 2;

    Life = createSprite(220,height/2-80);
    Life.addImage(LifeImg);
    Life.scale = 0.1;
    
    Life2 = createSprite(270,height/2-80);
    Life2.addImage(LifeImg);
    Life2.scale = 0.1;

    Life2 = createSprite(320,height/2-80);
    Life2.addImage(LifeImg);
    Life2.scale = 0.1;
}

function draw(){
    background(0);
    drawSprites();
    textSize(30);
    fill("white")
    text("Score: "+score,width-150,100)
    text("Health: ",100,height/2-75)
    if(bg.x<0){
        bg.x = width/2
    }

    character.velocityY = character.velocityY+ 0.5
    character.collide(ground);

   
}
