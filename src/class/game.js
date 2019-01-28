
//manage all class instance of object
import {Paddle} from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';
import { levelOne, buldLevel,  } from './level.js';
const pushScreen = document.querySelector('.puase-screen');
const GAMESTATE = {
    PAUSE : 0,
    RUNNIG: 1,
    MENU : 0,
    GAMEOVER: 1,
}

// main class isntance of this game
export default class Game {

    constructor(pW, pH, sW, sH, bI,ctx,bcI,sound){

        //all game prooperty
        this.paddleWidth = pW;
        this.paddleHeight = pH;
        this.gameWidth = sW;
        this.gameHeight = sH;
        this.gameImage = bI;
        this.ctx = ctx;
        this.defaultLevel = buldLevel(this, levelOne);
        this.brickImage = bcI;
        this.gameLive = 5;
        this.gameFisrtStart = true;
        this.level = 16;
        this.gameOver = false;
        this.isPlaying = false;
        this.score = 0;
        this.incrementScoreRate = 10;
        this.sound    = sound;
        

    }
    start(){

        this.gameState = GAMESTATE.RUNNIG;

        this.paddle = new Paddle(this);
        this.ball  = new Ball(this);

        this.brickObj = buldLevel(this, levelOne);

        this.allobj = [ this.paddle, this.ball, ...this.brickObj];

         //input handler
        new InputHandler( this.paddle ) ;
        
    }
    update(deltaTime){

        let breakDis = document.querySelector('.live-stop');

        if(this.gameFisrtStart){

           breakDis.firstElementChild.innerHTML = 'PRESS SPACEBAR TO START THIS GAME';
           breakDis.style.display = 'block';

            return ;
        }else{
            this.sound.intro.play();
            this.isPlaying = true;
        }
        if(this.gameState == GAMESTATE.PAUSE && this.isPlaying){
                pushScreen.style.display = 'block';
            return;
        }else{
            pushScreen.style.display = 'none';
        }
        if(this.gameOver)return;
        this.allobj.forEach(function(obj){
            obj.update(deltaTime);
        });

        this.allobj = this.allobj.filter(function(object){
            return !object.markedForDeletion;
        });

        if(this.gameOver){

           this.sound.missed.play();

           this.gameLive--;
           this.sound.intro.volume = 0;

           breakDis.firstElementChild.innerHTML = 'PRESS SPACEBAR TO PLAY CONTINUE'

           breakDis.style.display = 'block';

           if(this.gameLive == 0){

            breakDis.firstElementChild.innerHTML = 'YOU SCORES : ' + this.score ;
            breakDis.firstElementChild.innerHTML += '<br>GAME OVER AND PRESS SPACE TO RESTART GAME'
            this.brickObj = this.defaultLevel;
            this.start();
            this.BeingGameOver = true;

           }

        }else{
            breakDis.style.display = 'none';
        }
        document.getElementById('alive').innerHTML = 'LIVE : '+this.gameLive;
        document.getElementById('score').innerHTML = 'UPDATE SCORES : '+this.score;


    }
    
    draw(ctx){
        this.allobj.forEach(function(obj){
            obj.draw(ctx);
        });
    }
    tooglePause(){
        if(this.gameState == GAMESTATE.RUNNIG){
            this.gameState = GAMESTATE.PAUSE;;
        }else{
            this.gameState = GAMESTATE.RUNNIG;
            this.isPlaying = false;
        }
    }
    goBakeToGame(){
        this.gameOver = false;
        this.gameFisrtStart = false;
        
    }
    
    
}