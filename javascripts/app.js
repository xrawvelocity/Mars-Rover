/*jshint esversion: 6*/

function init(){
  console.log("This is the rover game. You can check the position of both rovers and see the obstacles in the board " + 
             "by calling the positionCheck() function. You can control either rover using the following functions: " +
             "'turnRight(rover)', 'turnLeft(rover)', 'moveForward(rover)', 'moveBackwards(rover)' and 'command(commands, rover)'. " +
             "Where it says rover you can pass in 'rover1' or 'rover2' and where it says command you can pass in a string " +
             "containing either 'f' for forward, 'b' for backwards, 'r' for turning right, and 'l' for turning left." +
             "You can see this message again by calling the 'init()' function.");
}

init();

// ======================
var rover1 = {
  name: 'first rover',
  directions: ['N','W','S','E'],
  currentDirection: 'N',
  position: [0,0]
};

var rover2 = {
  name: 'second rover',
  directions: ['N','W','S','E'],
  currentDirection: 'N',
  position: [9,0]
};

var board = [[0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,'o',0,0],
             [0,'o',0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,'o',0,0],
             [0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,'o',0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0]];

board[rover1.position[1]][rover1.position[0]] = 'x';
board[rover2.position[1]][rover2.position[0]] = 'y';


// ======================

function positionCheck(){
  clear();
  console.log(`The ${rover1.name} is facing ${rover1.currentDirection} and it is sitting at the [${rover1.position}] coordinates.`);
  console.log(`The ${rover2.name} is facing ${rover2.currentDirection} and it is sitting at the [${rover2.position}] coordinates.`);
  for(let i = 0; i < board.length; i++){
    console.log(board[i]);
  }
}

function turnLeft(rover){
  if (rover.currentDirection == 'E'){
    rover.currentDirection = 'N';
  } else if (rover.currentDirection == 'N') {
    rover.currentDirection = 'W';
  } else if (rover.currentDirection == 'W') {
    rover.currentDirection = 'S';
  } else if (rover.currentDirection == 'S') {
    rover.currentDirection = 'E';
  }
  console.log(`The ${rover.name} turned left. It is now facing ${rover.currentDirection} and it is sitting at the [${rover.position}] coordinates.`);
}

function turnRight(rover){
  if (rover.currentDirection == 'E'){
    rover.currentDirection = 'S';
  } else if (rover.currentDirection == 'N') {
    rover.currentDirection = 'E';
  } else if (rover.currentDirection == 'W') {
    rover.currentDirection = 'N';
  } else if (rover.currentDirection == 'S') {
    rover.currentDirection = 'W';
  }
  console.log(`The ${rover.name} turned right. It is now facing ${rover.currentDirection} and it is sitting at the [${rover.position}] coordinates.`);
}

function moveForward(rover){
  board[rover.position[1]][rover.position[0]] = 0;
  clear();
  if(rover.position[0] >= 0 && rover.position[0] < 9 && rover.currentDirection == 'E' &&
     board[rover.position[1]][rover.position[0]+1] != 'o' &&
     board[rover.position[1]][rover.position[0]+1] != 'x' &&
     board[rover.position[1]][rover.position[0]+1] != 'y'){
      rover.position[0]++;
      console.log(`Moved rover forward. It is now facing ${rover.currentDirection} and it is sitting at the [${rover.position}] coordinates.`);
  } else if(rover.position[1] >= 0 && rover.position[1] < 9 && rover.currentDirection == 'S' &&
            board[rover.position[1]+1][rover.position[0]] != 'o' &&
            board[rover.position[1]+1][rover.position[0]] != 'x' &&
            board[rover.position[1]+1][rover.position[0]] != 'y'){
      rover.position[1]++;
      console.log(`Moved rover forward. It is now facing ${rover.currentDirection} and it is sitting at the [${rover.position}] coordinates.`);
    } else if(rover.position[0] > 0 && rover.position[0] <= 9 && rover.currentDirection == 'W' &&
              board[rover.position[1]][rover.position[0]-1] != 'o' &&
              board[rover.position[1]][rover.position[0]-1] != 'x' &&
              board[rover.position[1]][rover.position[0]-1] != 'y'){
      rover.position[0]--;
      console.log(`Moved rover forward. It is now facing ${rover.currentDirection} and it is sitting at the [${rover.position}] coordinates.`);
   } else if(rover.position[1] > 0 && rover.position[1] <= 9 && rover.currentDirection == 'N' &&
             board[rover.position[1]-1][rover.position[0]] != 'o' &&
             board[rover.position[1]-1][rover.position[0]] != 'x' &&
             board[rover.position[1]-1][rover.position[0]] != 'y'){
      rover.position[1]--;
      console.log(`Moved rover forward. It is now facing ${rover.currentDirection} and it is sitting at the [${rover.position}] coordinates.`);
   } else {
      console.log("Can't go forward because there is either an obstacle in the way or you are hitting a wall.");
      console.log(`The rover is now facing ${rover.currentDirection} and it is sitting at the [${rover.position}] coordinates.`);
  }
  
  board[rover1.position[1]][rover1.position[0]] = 'x';
  board[rover2.position[1]][rover2.position[0]] = 'y';
  
  for(let i = 0; i < board.length; i++){
    console.log(board[i]);
  }}

function moveBackwards(rover){
  board[rover.position[1]][rover.position[0]] = 0;
  clear();
  if(rover.position[0] >= 0 && rover.position[0] < 9 && rover.currentDirection == 'W' && 
    board[rover.position[1]][rover.position[0]+1] != 'o' &&
    board[rover.position[1]][rover.position[0]+1] != 'x' &&
    board[rover.position[1]][rover.position[0]+1] != 'y'){
      rover.position[0]++;
      console.log(`Moved rover backwards. It is now facing ${rover.currentDirection} and it is sitting at the [${rover.position}] coordinates.`);
  } else if(rover.position[1] >= 0 && rover.position[1] < 9 && rover.currentDirection == 'N' && 
    board[rover.position[1]+1][rover.position[0]] != 'o' &&
    board[rover.position[1]+1][rover.position[0]] != 'x' &&
    board[rover.position[1]+1][rover.position[0]] != 'y'){
      rover.position[1]++;
      console.log(`Moved rover backwards. It is now facing ${rover.currentDirection} and it is sitting at the [${rover.position}] coordinates.`);
  } else if(rover.position[0] > 0 && rover.position[0] <= 9 && rover.currentDirection == 'E' && 
    board[rover.position[1]][rover.position[0]-1] != 'o' &&
    board[rover.position[1]][rover.position[0]-1] != 'x' &&
    board[rover.position[1]][rover.position[0]-1] != 'y'){
      rover.position[0]--;
      console.log(`Moved rover backwards. It is now facing ${rover.currentDirection} and it is sitting at the [${rover.position}] coordinates.`);
  } else if(rover.position[1] > 0 && rover.position[1] <= 9 && rover.currentDirection == 'S' && 
    board[rover.position[1]-1][rover.position[0]] != 'o' &&
    board[rover.position[1]-1][rover.position[0]] != 'x' &&
    board[rover.position[1]-1][rover.position[0]] != 'y'){
      rover.position[1]--;
      console.log(`Moved rover backwards. It is now facing ${rover.currentDirection} and it is sitting at the [${rover.position}] coordinates.`);
  } else {
      console.log("Can't go backwards because there is either an obstacle in the way or you are hitting a wall.");
      console.log(`The rover is now facing ${rover.currentDirection} and it is sitting at the [${rover.position}] coordinates.`);
  }
  board[rover1.position[1]][rover1.position[0]] = 'x';
  board[rover2.position[1]][rover2.position[0]] = 'y';
  
  for(let i = 0; i < board.length; i++){
    console.log(board[i]);
  }}

function command(commands, rover){
  let arr = commands.split('');
  
  for(let el of arr){
    if(el == 'f' || el == 'b' || el == 'r' || el == 'l'){
      if (el == 'f'){
        moveForward(rover);
      } else if (el == 'r'){
        turnRight(rover);
      } else if (el == 'l'){
        turnLeft(rover);
      } else if (el == 'b'){
        moveBackwards(rover);
      } else {
        continue;
      }
    } else {
      console.log("You can only use 'f' 'b' 'r' and 'l'");
      break;
    }
    
  }
}
