import {ditectBrickAndPaddle} from './ditect.js';


export default class Ball{
    constructor(game){
    this.ballSize = 4;
        this.speed ={
            x:-1.3,y:-1.3
        }
        this.position = {
            x:50,y:100
        }

        //get all data from main classesh
        this.gameWidth  = game.gameWidth;
        this.gameHeight = game.gameHeight
        this.ballImage = game.gameImage;
        this.game = game;

    }

    draw(ctx){

        //draw ball instance
        ctx.drawImage(this.ballImage,this.position.x,this.position.y,this.ballSize,this.ballSize);
    }
    update(deltaTime){

        //move the ball on screen
        this.position.x += this.speed.x;
        this.position.y += this.speed.y

        //wall on left or right
        if(this.position.x + this.ballSize > this.gameWidth || this.position.x < 0){
            this.speed.x  = -this.speed.x;
            this.game.sound.ballDrop.play();
        }

        //wall on top or bottom
        if(this.position.y + this.ballSize > this.gameHeight || this.position.y < 0){
            this.speed.y = -this.speed.y;
        }else if(this.position.y-this.ballSize < 0){
            this.game.sound.ballDrop.play();
        }

        //make sure to touch on paddle and wall

        if(ditectBrickAndPaddle(this, this.game.paddle)){

            this.speed.y  = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.ballSize;
            this.game.sound.paddle.play();
            
        }

        if(this.position.y+this.ballSize >= this.gameHeight){
           this.game.gameOver = true;
        }else{
            this.game.gameOver = false;
        }



    }
}