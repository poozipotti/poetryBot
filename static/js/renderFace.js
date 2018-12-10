let width = 0;
let height = 0;
let faceX = 0;
let faceY = 0;
let faceDesiredX = 0;
let faceDesiredY = 0;
let canvas = null
$(document).ready(function(){
	window.addEventListener('resize', updateWindowDimensions);
	document.addEventListener('mousemove', calculateFaceToMouseNewCords, false);
	canvas = $('canvas')[0];
	updateWindowDimensions();
	updateCanvas();
	//console.log('canvas is ' + canvas)
	setInterval(updateCanvas,20);	
});

function updateWindowDimensions(){
	if(canvas){
		width=window.innerWidth;
		height=window.innerHeight;
		canvas.width = width;
		canvas.height = height;
		faceX=width/2;
		faceY=height/2;

	}

}
function drawGradient(){
    const ctx = canvas.getContext('2d');

	// Create gradient
	var gradient=ctx.createRadialGradient(width/2,height/2,width*.3,width/2,height/2,width*.1);
	gradient.addColorStop(0,"#4286f4");
	gradient.addColorStop(1,"#4294e5");

	// Fill with gradient
	ctx.fillStyle = gradient;
    ctx.fillRect(0,0, width, height);

}
function drawFace(centerX,centerY){
		const ctx = canvas.getContext('2d');
		const radius = 100;
		const eyeDistanceX = 200;
		const eyeHeight= 20;
		const eyeRadius = 15;
		//closed mouth	
		ctx.beginPath();
		ctx.arc(centerX, centerY-radius/2, radius*2,.3 * Math.PI , .7 * Math.PI, false);
		ctx.lineWidth = 5;
		ctx.strokeStyle = 'black';
		ctx.stroke();	
		//open mouth
		/*
		ctx.beginPath();
		ctx.arc(centerX, centerY+radius+radius/2, eyeRadius*2, 2 * Math.PI, false);
		ctx.fillStyle = 'black';
		ctx.fill();
		*/

		ctx.beginPath();
		ctx.arc(centerX+eyeDistanceX/2, centerY-eyeHeight,eyeRadius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'black';
		ctx.fill();

		ctx.beginPath();
		ctx.arc(centerX-eyeDistanceX/2, centerY-eyeHeight, eyeRadius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'black';
		ctx.fill();

		//console.log('"{FACE.JS{drawFace()}}tried to draw face cords: '+ centerX + "," + centerY)

}
function calculateFaceToMouseNewCords(evt){
    const maxDistanceTraveled = 100;
    let distanceToMouse  =Math.sqrt(evt.clientX*evt.clientX + evt.clientY * evt.clientY);
    if(distanceToMouse>maxDistanceTraveled){
    	let ratio = maxDistanceTraveled/distanceToMouse;
    	faceDesiredX=width/2 + (ratio * (evt.clientX-width/2)),
    	faceDesiredY=height/2 + (ratio * (evt.clientY-height/2))
    }
}
function moveFaceToMouse(){
	const speed = 40;
    let distanceToPoint  =Math.sqrt(faceDesiredX*faceDesiredX + 
    								faceDesiredY * faceDesiredY);
    if(distanceToPoint>speed){
    	let ratio = speed/distanceToPoint;
    	faceX=faceX + (ratio * (faceDesiredX-faceX)),
    	faceY=faceY + (ratio * (faceDesiredY-faceY))
    }

}
function updateCanvas(){
	if(canvas){
	    const ctx = canvas.getContext('2d');
	    ////console.log("{FACE.JS{updateCanvas()}} the width and height" +width + "," + height );
	    moveFaceToMouse();
	    drawGradient();
		drawFace(faceX,faceY);
	}
}