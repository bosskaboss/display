var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var posY = 0;
var posX = 0;
var lineLength = 10;
var speed = 2;
function init() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawLine(ctx, posX, posY, 100, 100, 'tomato', 3);
}
function drawLine(ctx, x1, y1, x2, y2, stroke = 'black', width = 3) {
    // start a new path
    ctx.beginPath();

    // place the cursor from the point the line should be started 
    ctx.moveTo(x1, y1);

    // draw a line from current cursor position to the provided x,y coordinate
    ctx.lineTo(x2, y2);

    // set strokecolor
    ctx.strokeStyle = stroke;

    // set lineWidht 
    ctx.lineWidth = width;

    // add stroke to the line 
    ctx.stroke();
}

if (canvas) init();