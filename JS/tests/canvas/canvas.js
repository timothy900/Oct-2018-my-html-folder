var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// var square = c.fillRect(300,canvas.height-200, 100,100);

// // red face
// c.fillStyle = 'rgb(200,0,0)';
// c.fillRect(5,canvas.height-200, 100,100);
// c.fillStyle = 'rgb(0,0,0)';
// c.fillRect(10,canvas.height-190, 10,10);
// c.fillRect(85,canvas.height-190, 10,10);
// c.fillRect(10,canvas.height-150, 80,10);
// c.fillStyle = 'rgb(255,255,255)';
// c.fillRect(13,canvas.height-185, 3,3);
// c.fillRect(88,canvas.height-185, 3,3)

// c.fillStyle = 'rgb(200,0,0)';
// c.fillRect(10,square, 10,10);

// for (var i = 0; i < 2000; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;

//     c.fillStyle = 'rgb(255,255,255)';
//     c.fillRect(x,y, 3,3);
// }
var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
var cannonSpread = 5;
var squareWidth = 40;
var squareHeight = 40;
var cannonWidth = 70;
var x = innerWidth/2 - squareWidth/2;
var y = (innerHeight- innerHeight/3);
var xSpeed = (Math.random() * cannonSpread) * plusOrMinus;
// var xSpeed = 5;
var ySpeed = -20;

var y2 = innerHeight/2;
var yGravity = 10;
gravityStrength = 1;

function animate() {

    requestAnimationFrame(animate);

    c.clearRect(0,0,innerWidth, innerHeight);

    c.fillStyle = 'rgb(255,255,255)';
    c.fillRect(x,y, squareWidth,squareHeight);

    c.fillRect((innerWidth/2-cannonWidth/2),(innerHeight- innerHeight/3), cannonWidth,innerHeight/3);

    // if (x + squareWidth/2 > innerWidth || x + squareWidth/2 < 0){
    //     xSpeed = -xSpeed;
    // }
    // if (y + squareHeight/2 > innerHeight || y + squareHeight/2 < 0){
    //     ySpeed = -ySpeed;
    // }

    c.fillRect(100,y2, 30,30)

    if(y2 >= innerHeight + 25) {
        yGravity = -yGravity;
    }


    yGravity+=gravityStrength;
    y2+=yGravity;

    y+=ySpeed;
    x+=xSpeed;

    console.log(yGravity);
}

animate();