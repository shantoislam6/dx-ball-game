//import all classes of game
import Game from './class/game.js';

//get canvas element
const canvas = document.getElementById('gameScreen');
const ctx    =  canvas.getContext('2d');

//get screen size 
const screenWidth  = ctx.canvas.width;
const screenHeight = ctx.canvas.height;

//clear rect function 
function clearRect(){
    ctx.clearRect(0,0,screenWidth,screenHeight);
}

//vfx 
//create ball image object
const balliamge = new Image();
balliamge.src = 'assest/gfx/ball.png';

//create brick image object 
const brickImage = new Image();
brickImage.src ='assest/gfx/brick.png';


//sfx for game 
//intor music 
const introMusic = new Audio('assest/sfx/intro.mp3');
introMusic.loop = true;
introMusic.volume = 0.2;


//paddle drop sound
const paddleSound = new Audio('assest/sfx/paddle.mp3');
paddleSound.volume = 1;

//other ball drop sound
const ballDrop = new Audio('assest/sfx/balldrop.mp3');
      ballDrop.volume = 0.4;

//brick distroy sound
const brickDistroy = new Audio('assest/sfx/brick.mp3');
    brickDistroy.volume = 1;

//missind ball sound:
const missedBall = new Audio('assest/sfx/missed.mp3');
missedBall.volume = 1;


//sound object
const sfx = {
    intro : introMusic,
    paddle : paddleSound,
    ballDrop: ballDrop,
    brick  : brickDistroy ,
    missed : missedBall,
}

//game object
const game = new Game(
    screenWidth/7,
    screenHeight/28, 
    screenWidth, 
    screenHeight,
    balliamge,
    ctx,
    brickImage,
    sfx
);
game.start();

//game loop
//init deltaTime
let lastTime = 0;
function gameLoop(timeStamp){

 let deltaTime = timeStamp - lastTime;
     lastTime  = timeStamp;

    //paddale loop 
    clearRect();
    game.draw(ctx);
    game.update(deltaTime);
   
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);




