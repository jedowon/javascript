﻿window.addEventListener("load", drawScreen, false);
window.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mouseup", onMouseUp, false);

var imgPlayer = new Image();
imgPlayer.src = "../img/dora.png";
imgPlayer.addEventListener("load", drawScreen, false);

var bMouseClicked = false;
intMouseX = 480;
intMouseY = 300;
var strMouseStatus = "준비중";


function drawScreen(){
  var theCanvas=document.getElementById("GameCanvas");
  var Context = theCanvas.getContext("2d");
  Context.fillStyle="#ff0";
  Context.fillRect(0,0,1024,768);
  Context.drawImage(imgPlayer, intMouseX, intMouseY,100,100);
  Context.fillStyle = "#000000";
  Context.font = '24px Arial';
  Context.textBaseline = "top";
  Context.fillText("발생한 마우스 이벤트는 : "+strMouseStatus,5,5);
  Context.fillText("마우스 좌표는  x :"+intMouseX+" y :"+intMouseY,5,30);
}


function onMouseDown(e){
 strMouseStatus = "클릭!";
 var theCanvas = document.getElementById("GameCanvas");
 bMouseClicked = true;
 intMouseX = e.clientX - theCanvas.offsetLeft-42;
 intMouseY = e.clientY - theCanvas.offsetTop-50;
 drawScreen();
}
function onMouseMove(e){
  strMouseStatus = "Moving now";
  if(bMouseClicked){
    var theCanvas = document.getElementById("GameCanvas");
    intMouseX = e.clientX-theCanvas.offsetLeft-42;
    intMouseY = e.clientY-theCanvas.offsetTop-50;
    drawScreen();
  }
}


function onMouseUp(e){
  strMouseStatus = "클릭 끝!";
  bMouseClicked = false;
  intMouseX = 480;
  intMouseY = 300;
  drawScreen();
}