export class Paddle{
    constructor(game){
        this.width  = game.paddleWidth;
        this.height = game.paddleHeight;
        this.screenWidth  = game.gameWidth;
        this.position     = {
                x : game.gameWidth/2 - this.width/2,
                y : game.gameHeight - 10,
        }
        this.maxSpeed = 5;
        this.speed = 0;
        this.game = game;
    }
    stop(){
        this.speed = 0;
    }
    moveLeft(){
        this.speed = -this.maxSpeed;
    }
    moveRight(){
        this.speed = this.maxSpeed;
    }
    draw(ctx){
        ctx.fillStyle = '#24a977';
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
    update(deltaTime){

        this.position.x += this.speed;
        
        if(this.position.x < 0){
            this.position.x = 0;
        }
        if(this.position.x + this.width > this.screenWidth){
            this.position.x = this.screenWidth - this.width;
        }
    }
  
   
}