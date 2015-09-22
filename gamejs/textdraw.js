window.addEventListener("load",drawScreen,false);
window.addEventListener("keydown",onkeydown,false);
window.addEventListener("keyup",onkeyup,false);

var strKeyEventType="";
var strKeyEventValue="";

var imgPlayer = new Image();
imgPlayer.src = "../img/dora.png";

imgPlayer.addEventListener("load",drawScreen, false);

function drawScreen()
{

	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	Context.drawImage(imgBackground, 0, 0,1000,700);
	Context.drawImage(imgPlayer,350,250,123,194);
	Context.fillStyle = "#000";
	Context.font = '24px nanumgothic';
	Context.textBaseline = "top";
	Context.fillText("입력된 키는 : "+strKeyEventType,5,5);
	Context.fillText("키 입력상태는 : "+strKeyEventValue,5,30);
	

}
function onkeydown(e)
{
	strKeyEventType = e.type;
	if(e.keyCode)code = e.keyCode;
	strKeyEventValue = code;
	drawScreen();
}
function onkeyup(e)
{
	strKeyEventType = e.type;
	if(e.keyCode)code = e.keyCode;
	strKeyEventValue = code;
	drawScreen();
}