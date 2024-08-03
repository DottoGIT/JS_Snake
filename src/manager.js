/// CANVAS STUFF ///
 const canvas = document.querySelector(".canvas");
 const btn = document.querySelector('.btn');
 const ctx = canvas.getContext("2d");
 const scale = 10;
 const rows = canvas.height / scale;
 const columns = canvas.width / scale;
 

 
 

///Game Info///
var isGameOver = true;
var currentScore = 0;
var gameSpeed = 100;

///OBJECT INICIALIZATION///

 var snake;
 var draw;
 var fruit;

///MAIN.FUNCTION///
(function setup() {
  snake = new Snake(this);
  draw = new Draw();
  fruit = new Fruit(snake, this);
  document.getElementById("Score").innerHTML = "Score: " + currentScore;
  fruit.Spawn();

  window.setInterval(() => {
    if(isGameOver == false){
  	draw.Clear();
  	snake.Update();
    fruit.Update();
    }
}, gameSpeed );
}());

///Functions///
function GameOver()
{
    isGameOver = true;
}

function ScorePoints(){
  currentScore += 10;
  document.getElementById("Score").innerHTML = "Score: " + currentScore;
}

function ResetPoints(){
  currentScore = 0;
}

btn.onclick = function () {
	ResetPoints();
	document.getElementById("Score").innerHTML = "Score: " + currentScore;
	isGameOver = false;
	snake.destroyTail();
	fruit.DeleteObstacles();
	snake.x = 30;
	snake.y = 30;
};

///EVENT LISTENERS///
window.addEventListener('keydown', ((evt) => {
	const direction = evt.key.replace('Arrow', '');
	snake.ChangeDirection(direction);

}))
