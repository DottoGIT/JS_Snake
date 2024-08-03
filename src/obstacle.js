function Obstacle(snake, manager){

  this.x;
  this.y;



    this.Update = function(){

      if(snake.x == this.x && this.y == snake.y){
        this.Collide();
      }

      draw.DrawRect("#444444", this.x, this.y);
    }

    this.Spawn = function(){
         do{

          this.RandomSpot();
          this.isOverlaping = false;

          if(snake.bodyParts.length != 0)
          {
             for(var i=0; i<snake.bodyParts.length;i++)
             {
                if((snake.bodyParts[i].x == this.x && snake.bodyParts[i].y == this.y) || (snake.x == this.x || snake.y == this.y))
                 {
                  this.isOverlaping = true;
                  break;
                 }

             }
           }
         }while(this.isOverlaping == true)

    }
	
	this.Collide = function(){
		manager.GameOver();
	}
	
    this.RandomSpot = function(){
        this.x = (Math.floor(Math.random() * 29) + 1)*scale;
        this.y = (Math.floor(Math.random() * 14,5) + 1)*scale;
    }
}
