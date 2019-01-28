export default  class InputHandler {
    
    constructor(paddle){

            let game = paddle.game;

        document.addEventListener('keydown',function(e){

            switch (e.keyCode) {

                case 37:
                   //move left
                    paddle.moveLeft();
                    break;
                
                case 39:
                    //move right 
                    paddle.moveRight();
                     break;
                case 32:
                    if(game.BeingGameOver){
                       game.score = 0;
                       game.gameLive = 5;
                       game.gameOver = false;
                       game.BeingGameOver = false;
                       game.isPlaying = true;
                       game.sound.intro.currentTime = 0;
                    }
                    game.sound.intro.volume = 0.2;
                    game.goBakeToGame();
                    break;
                 case 27:
                    game.tooglePause();
                     break;

            }
        });

        document.addEventListener('keyup',function(e){

            switch (e.keyCode) {
                case 37:
                   //stop paddle
                    if(paddle.speed < 0){
                        paddle.stop();
                    }
                    break;
                
                case 39:
                    //stop paddle
                    if(paddle.speed > 0){
                        paddle.stop();
                    }
                     break;
            }
        });
    }

}