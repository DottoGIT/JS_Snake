function Fruit(snake,manager){

  this.x;
  this.y;
  
  this.obstacles = [];



    this.Update = function(){

      if(snake.x == this.x && this.y == snake.y){
        this.Collect();
		this.newObst = new Obstacle(snake,manager);
		this.newObst.Spawn();
		this.obstacles.push(this.newObst);
      }
	  
	  
    for(var i=0; i<this.obstacles.length;i++)
	{
		this.obstacles[i].Update();
    }

      draw.DrawRect("red", this.x, this.y);
    }

	this.DeleteObstacles = function(){
		for(var i=0; i<this.obstacles.length;i++)
		{
			delete this.obstacles[i];
		}
		
		this.obstacles = [];
	}
	
    this.Spawn = function(){
         do{

          this.RandomSpot();
          this.isOverlaping = false;

          if(snake.bodyParts.length != 0)
          {
             for(var i=0; i<snake.bodyParts.length;i++)
             {
                if((snake.bodyParts[i].x == this.x && snake.bodyParts[i].y == this.y) || (snake.x == this.x && snake.y == this.y))
                 {
                  this.isOverlaping = true;
                  break;
                 }
             }
			 
			 for(var j = 0; j<this.obstacles.length;j++)
			 {
				if(this.obstacles[j].x == this.x && this.obstacles[j].y == this.y)
                 {
                  this.isOverlaping = true;
                  break;
                 }
			 }
           }
         }while(this.isOverlaping == true)

    }


    this.Collect = function(){
      snake.Grow();
      this.Spawn();
	  
	  
	  
      manager.ScorePoints();
    }

    this.RandomSpot = function(){
        this.x = (Math.floor(Math.random() * 29) + 1)*scale;
        this.y = (Math.floor(Math.random() * 14,5) + 1)*scale;
    }

 }
