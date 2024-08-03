function Tail(prevPart){

  this.lastPosX;
  this.lastPosY;
  this.x = prevPart.lastPosX;
  this.y = prevPart.lastPosY;
  this.previousPart = prevPart;
  this.color;

  this.ShuffleColor = function(){

        this.rand = (Math.floor(Math.random() * 10) + 1);

        switch (this.rand) {
          case 1: {this.color = "#99ccff";}
            break;
          case 2: this.color = "#99ffff";
            break;
          case 3: this.color = "#66ffff";
            break;
          case 4: this.color = "#ccffff";
            break;
          case 5: this.color = "#00ffcc";
            break;
          case 6: this.color = "#33ffcc";
            break;
          case 7: this.color = "#99ffcc";
            break;
          case 8: this.color = "#66ff99";
            break;
          case 9: this.color = "#ccccff";
            break;
          case 10: this.color = "#66ccff";
            break;
        }



  }

    this.Update = function(){
      this.Move();
      draw.DrawRect(this.color,this.x ,this.y);
    }

    this.Move = function(){
      this.lastPosX = this.x;
      this.lastPosY = this.y;
      this.x = this.previousPart.lastPosX;
      this.y = this.previousPart.lastPosY;
    }

 }
