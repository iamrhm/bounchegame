window.onload=myfunction=function(){
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
var radius = 10;
var startAngle = 0;
var endAngle = 2*Math.PI;
var dx = (Math.random()-0.5)*10;
var dy = -6;
var rX = (canvas.width/2)-100;
var rY = canvas.height-51;
var x=rX+50;
var y=rY-radius;
var rectAngle = 0;
var firstTime = 1;
var boxWidth = 100;
var boxHeight = 5;

function checkKey(e) {
    if (e.keyCode == '37'){
        if (rX-5 < 0){
             rX=rX;
        }
        else {
             rX-=20;
        }
    }
    else if (e.keyCode == '39') {
        if (rX+105 > innerWidth){
             rX=rX;
        }
        else {
            rX+=20;
        }
    }
    else if(e.keyCode=='32'){
        init();
    }
}
//------------------------Starting Position----------------//
c.clearRect(0, 0, innerWidth, innerHeight);
c.beginPath();
c.rect(rX, rY, boxWidth, boxHeight);
c.fillStyle = 'yellow';
c.fill();
c.strokeStyle = 'black';
c.stroke();

c.beginPath();
c.arc(x, y, radius, startAngle, endAngle, false);
c.fillStyle = 'red';
c.fill();
c.strokeStyle = 'black';
c.stroke();

//-------------------Game Conditions------------------------//
document.onkeydown = checkKey;
function animation(){
        document.onkeydown = checkKey;
        requestAnimationFrame(animation);
        c.clearRect(0, 0, innerWidth, innerHeight);
        c.beginPath();
        c.rect(rX, rY, boxWidth, boxHeight);
        c.fillStyle = 'yellow';
        c.fill();
        c.strokeStyle = 'black';
        c.stroke();

        c.beginPath();
        c.arc(x, y, radius, startAngle, endAngle, false);
        c.fillStyle = 'red';
        c.fill();
        c.strokeStyle = 'black';
        c.stroke();
        if (x+radius > innerWidth || x-radius< 0){
            dx=-dx;
        }
        else if (y-radius < 0){
            dy=-dy;
        }
        else if( ((x-radius>=rX && x-radius<=rX+boxWidth) || (x+radius>=rX && x+radius<=rX+boxWidth))  && y+radius==rY && firstTime==0){
            dy=-dy;
        }
       if (parseInt(y) > parseInt(innerHeight)){
            myfunction();
       }
       
        x += dx;
        y += dy;
        firstTime=0;
    }


function init(){
    animation();
}
}