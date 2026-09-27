var ctx=document.getElementById("myCanvas").getContext("2d");
// now we can refer to the canvas's 2D layer context using `ctx` 
ctx.fillStyle = "#f00"; 
ctx.fillRect(10, 10, ctx.canvas.width - 20, ctx.canvas.height - 20); // x, y, width, height 
ctx.fillStyle = "#000"; 
ctx.fillText("My red canvas with some black text", 24, 32); // text, x, y