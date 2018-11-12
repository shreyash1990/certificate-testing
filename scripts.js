var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var imageObj = new Image();
let dataURL = canvas.toDataURL();
imageObj.src = "certificate.png";
imageSign = new Image();
imageSign.src= "angie.png";

imageObj.onload = function () {
	context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
}

getData = () => {
	event.preventDefault();
	let name = document.getElementById("form").elements[0].value;
	let date = document.getElementById("form").elements[1].value;
	addName(name, date);
	context.drawImage(imageSign,700,570,200,200);

}

addName = (name, date) => {
	context.font = "55px Arial";
	context.fillStyle = "black"
	// context.fillText(name,350,440);
	// context.fillText(date,150,700);

	// context.strokeStyle = 'red';
	context.moveTo(510, 20);
	context.lineTo(510, 500);
	// context.stroke();
	context.textAlign = 'center';
	context.fillText(name, 510, 440);
	console.log(imageSign.src);


}


// Code to make sure the image fits inside the canvas tag.
var fitImageOn = function (canvas, imageObj) {
	var imageAspectRatio = imageObj.width / imageObj.height;
	var canvasAspectRatio = canvas.width / canvas.height;
	var renderableHeight, renderableWidth, xStart, yStart;

	// If image's aspect ratio is less than canvas's we fit on height
	// and place the image centrally along width
	if (imageAspectRatio < canvasAspectRatio) {
		renderableHeight = canvas.height;
		renderableWidth = imageObj.width * (renderableHeight / imageObj.height);
		xStart = (canvas.width - renderableWidth) / 2;
		yStart = 0;
	}

	// If image's aspect ratio is greater than canvas's we fit on width
	// and place the image centrally along height
	else if (imageAspectRatio > canvasAspectRatio) {
		renderableWidth = canvas.width
		renderableHeight = imageObj.height * (renderableWidth / imageObj.width);
		xStart = 0;
		yStart = (canvas.height - renderableHeight) / 2;
	}

	// Happy path - keep aspect ratio
	else {
		renderableHeight = canvas.height;
		renderableWidth = canvas.width;
		xStart = 0;
		yStart = 0;
	}
	context.drawImage(imageObj, xStart, yStart, renderableWidth, renderableHeight);
};

imageObj.onload = function () {
	fitImageOn(canvas, imageObj)
};