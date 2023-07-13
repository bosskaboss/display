var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var iposY;
var iposX;
var lineLength = 200;
var fposY;
var fposX;
var speed = 0.05;
const pos = []
var id = null;

function init() {
    let i = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    while (i < 10) {
        iposY = Math.floor(Math.random() * 300 - 50);
        iposX = Math.floor(Math.random() * 600 + 50);
        lineLength = 200;
        fposY = Math.cos(-30 * Math.PI / 180) * lineLength + iposY;
        fposX = Math.sin(-30 * Math.PI / 180) * lineLength + iposX;
        pos.push([iposX, iposY, fposX, fposY]);
        i++;
    }
    function animate(direction,starttim,fintim) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pos.forEach(element => {
            element[0] -= direction;
            element[1] -= direction;
            element[2] += direction;
            element[3] += direction;
            drawLine(ctx, element[0], element[1], element[2], element[3], 'tomato', 3);
        });

        if(starttim != fintim){
            starttim++;
        }
        if(starttim == fintim){
            direction *=-1;
            starttim =0;
        }
        console.log(direction);
        requestAnimationFrame(function () {
            animate(direction,starttim,fintim);
        });
    }
    animate(speed,0,500);


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