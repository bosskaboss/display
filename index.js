var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var iposY;
var iposX;
var lineLength = 200;
var fposY;
var fposX;
var speed = 0.05;
var pos = []
var id = null;

function init() {
    let i = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.2;
    ctx.lineCap = 'round';
    while (i < 15) {
        iposY = Math.floor(Math.random() * 300 - 50);
        iposX = Math.floor(Math.random() * 600 + 50);
        lineLength = 200;
        fposY = Math.cos(-30 * Math.PI / 180) * lineLength + iposY;
        fposX = Math.sin(-30 * Math.PI / 180) * lineLength + iposX;
        pos.push([iposX, iposY, fposX, fposY]);
        i++;
    }
    function animate(direction, starttim, fintim) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pos.forEach(element => {
            element[0] -= direction;
            element[1] -= direction;
            element[2] += direction;
            element[3] += direction;
            drawLine(ctx, element[0], element[1], element[2], element[3], 'Aqua', 5);
        });

        draw4circles(100,100,starttim,45,30);

        if (starttim != fintim) {
            starttim++;
        }
        if (starttim == fintim) {
            direction *= -1;
            starttim = 0;
        }

        requestAnimationFrame(function () {
            animate(direction, starttim, fintim);
        });
    }
    animate(speed, 0, 360);


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

    ctx.closePath();
    ctx.beginPath();
    ctx.arc((x1 + x2) / 2, (y1 + y2) / 2, 3, 0, 2 * Math.PI, false);
    ctx.fillStyle = stroke;
    ctx.fill();
    ctx.closePath();
}

function drawcircle(x1,y1,size,stroke = 'black'){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.arc(x1, y1, size, 0, 2 * Math.PI, false);
    ctx.fillStyle = stroke;
    ctx.fill();
}
function draw4circles(x,y,angle,size,spread){
    x1 = Math.sin(angle * Math.PI/180)*spread + x;
    y1 = Math.cos(angle * Math.PI/180)*spread +y ;
    drawcircle(x1,y1,size,'Aqua');
    x2 = Math.sin((angle+90) * Math.PI/180)*spread + x;
    y2 = Math.cos((angle+90) * Math.PI/180)*spread + y ;
    drawcircle(x2,y2,size,'Aqua');
    x3 = Math.sin((angle+180) * Math.PI/180)*spread + x;
    y3 = Math.cos((angle+180) * Math.PI/180)*spread +y ;
    drawcircle(x3,y3,size,'Aqua');
    x4 = Math.sin((angle+270) * Math.PI/180)*spread + x;
    y4 = Math.cos((angle+270) * Math.PI/180)*spread + y ;
    drawcircle(x4,y4,size,'Aqua');
}
if (canvas) init();