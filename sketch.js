var enemy_img,background_img,lep1_img;
var platform;
function preload(){
 enemy_img = loadImage("images/enemy.png");
 background_img = loadImage("images/bg.png");
 lep1_img = loadImage("images/lep1.png");

}

function setup(){
 var canvas = createCanvas(1300,600);
 lep = createSprite(100,500,50,50);
 lep.addImage(lep1_img);
 lep.scale = 1.5;                               

}
function draw(){
    background(background_img)
    drawSprites();

}