
function drawLine(ctx, x1, y1, x2, y2, stroke = 'black', width = 3) {
        let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');
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
function init() {
    drawLine(ctx, 10, 10, 100, 100, 'red', 3);
}


