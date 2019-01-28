
import {ditectBrickAndPaddle} from './ditect.js';

export default class Brick{

    constructor(game, position){
        
        this.brickImage = game.brickImage;
        this.game = game;
        this.position = position;
        this.width = 30
        this.height = 9;
        this.markedForDeletion = false;
    }
    draw(ctx){
        ctx.drawImage(
            this.brickImage,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }

    //final ball for each brick
    update(){
        if(ditectBrickAndPaddle(this.game.ball, this)){
            this.game.ball.speed.y  = -this.game.ball.speed.y;
            this.markedForDeletion = true;
            this.game.score += this.game.incrementScoreRate ;
            this.game.sound.brick.play();
        }
    }
}