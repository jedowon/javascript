window.addEventListener("load", drawScreen, true);

function drawScreen()
{
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	Context.fillStyle = "#583054";
	Context.fillRect(0,0,1000,700);

	Context.beginPath();
	Context.moveTo(10,10);
	Context.lineTo(150,150);
	Context.strokeStyle="#000";
	Context.stroke();

	Context.beginPath();
	Context.arc(200,30,50,1*Math.PI,2*Math.PI,false);
	Context.fillStyle="#ff0";
	Context.fill();

	var gradient=Context.createLinearGradient(0,0,170,0);
	gradient.addColorStop("0","magenta");
	gradient.addColorStop("0.5","blue");
	gradient.addColorStop("1.0","red");

	// Fill with gradient
	Context.strokeStyle=gradient;
	Context.lineWidth=5;
	Context.strokeRect(5,5,160,100);
}