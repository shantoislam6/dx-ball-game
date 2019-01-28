import Brick from './brick.js';
export const levelOne = [
    [0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1],
    [1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
]
export function buldLevel(game, level){

    let bricks = [];

   level.forEach(function(row, rowIndex ){

        row.forEach( function(brick,brickIndex){

            if(brick == 1){

                let posions = {

                    x : 18 * brickIndex,

                    y : 10 + 8 * rowIndex,

                }

                bricks.push(
                     new Brick(game,posions)
                )

            }
        });


   });
   return bricks;


}