function Draw(){
    this.DrawRect = function(color, x, y)
    {
      ctx.fillStyle = color;
      ctx.fillRect(x,y,scale,scale/2);
    }
    this.Clear = function()
    {
      ctx.clearRect(0,0,canvas.width,canvas.height);
    }
}
