function Snake(manager){
  this.lastPosX = 0;
  this.lastPosY = 0;
  this.x = 30;
  this.y = 30;
  this.xSpeed = scale;
  this.ySpeed = 0;
  this.currentDirection = "Right";
  this.bodyParts = [];
  this.hasMovedAlready = false;
  this.oldDirection = "Right";


  this.Update = function(){

	  this.Move();
    this.hasMovedAlready = false;


    for(var i=0; i<this.bodyParts.length;i++){
      this.bodyParts[i].Update();
    }

    this.CollisionCheck();

    draw.DrawRect("#ee22ee", this.x, this.y);

  }
  
  this.destroyTail = function(){
    for(var i=0; i<this.bodyParts.length;i++){
      delete this.bodyParts[i];
    }
	this.bodyParts = [];
  }

  this.ChangeDirection = function(direction){
    if(this.hasMovedAlready == false)
    {
	     switch(direction)
       {
	         case "Left": if(this.currentDirection != "Right"){ this.xSpeed = -scale; this.ySpeed = 0; this.currentDirection = "Left";}
		          break;
		       case "Up": if(this.currentDirection != "Down"){this.xSpeed = 0; this.ySpeed = -(scale/2); this.currentDirection = "Up";}
		          break;
		       case "Down": if(this.currentDirection != "Up"){this.xSpeed = 0; this.ySpeed = (scale/2); this.currentDirection = "Down";}
		          break;
		       case "Right": if(this.currentDirection != "Left"){this.xSpeed = scale; this.ySpeed = 0; this.currentDirection = "Right";}
		          break;
	     }

       if(this.oldDirection != direction)
       {
          this.hasMovedAlready = true;
          this.oldDirection = direction;
        }

     }
	}

	this.Move = function(){
    this.lastPosX = this.x;
    this.lastPosY = this.y;
	  this.x += this.xSpeed;
	  this.y += this.ySpeed;

		if(this.x > canvas.width - scale){
		this.x = 0;}
		if(this.y > canvas.height -(scale/2)){
		this.y = 0;}
		if(this.x < 0){
		this.x = canvas.width -scale;}
		if(this.y < 0){
		this.y = canvas.height-(scale/2);}

	}

  this.Grow = function()
  {

      if(this.bodyParts.length == 0)
      {
         this.newBodyPart = new Tail(this);
      }
      else
      {
        this.newBodyPart = new Tail(this.bodyParts[this.bodyParts.length-1]);
      }
      this.newBodyPart.ShuffleColor();
      this.bodyParts.push(this.newBodyPart);

  }

  this.CollisionCheck = function(){

        for(var i=0; i<this.bodyParts.length;i++)
        {
          if(this.bodyParts[i].x == this.x && this.bodyParts[i].y == this.y)
          {
              manager.GameOver();
          }
        }
 }
}
