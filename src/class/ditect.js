export function ditectBrickAndPaddle(ball, gameObject ){

     //make sure to touch on paddle and wall

     let bottomOfBall = ball.position.y + ball.ballSize;
      let topOfBall  = ball.position.y ;
     let topOfObject  = gameObject.position.y;
     let leftSideOfObject = gameObject.position.x;
     let rightSideObject = gameObject.position.x + gameObject.width;
     let bottomSideOfObject = gameObject.position.y + gameObject.height;

     if(bottomOfBall >= topOfObject &&
        topOfBall <= bottomSideOfObject 
         && ball.position.x >= leftSideOfObject
         && ball.position.x + ball.ballSize <= rightSideObject){
        return true;
     }else{
         return false;
     }

}