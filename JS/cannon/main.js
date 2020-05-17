var canvas = document.getElementById('myCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = document.getElementById("myCanvas");
var c = ctx.getContext("2d");

function animate() {

    requestAnimationFrame(animate);

    c.clearRect(0,0,innerWidth, innerHeight);

    ctx.fillStyle = '#ccc';

    c.beginPath();
    c.lineWidth = 10;
    c.arc(window.innerWidth/2, window.innerHeight/2, 100, 0, 2 * Math.PI);
    c.strokeStyle = "#00a4ff";
    c.fillStyle = "#4dbfff";
    c.fill();
    c.stroke();

}

// Box width
var bw = 400;
// Box height
var bh = 400;
// Padding
var p = 10;

function drawBoard(){
    for (var x = 0; x <= bw; x += 40) {
        c.moveTo(0.5 + x + p, p);
        c.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 40) {
        c.moveTo(p, 0.5 + x + p);
        c.lineTo(bw + p, 0.5 + x + p);
    }
    c.strokeStyle = "black";
    c.stroke();
}


animate();
drawBoard();