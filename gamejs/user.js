var imgBackground = new Image();
imgBackground.src = "../img/sky.jpg";

var imgPlayer = new Image();
imgPlayer.src = "../img/dora.png";

imgPlayer.addEventListener("load",drawScreen, false);

function drawScreen()
{
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	Context.drawImage(imgBackground, 0, 0,1000,700);
	Context.drawImage(imgPlayer,350,250,123,194);
}
drawScreen();