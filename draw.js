canvas = document.createElement("canvas");

c_width = 1200; c_height = 600;
canvas.width = c_width;
canvas.height = c_height;

document.getElementById("draw").appendChild(canvas);

canvas.style.backgroundColor = "black";




//draw
ctx = canvas.getContext("2d");
ctx.strokeStyle = "#FFFFFF";	//stroke color
ctx.fillStyle = "white";

function coord(coordinate) { //converts cartesian to native
	return [coordinate[0] + c_width/2, -coordinate[1] + c_height/2];
}

function icoord(coordinate_n) { //converts native to cartesian
	return [coordinate_n[0] - c_width/2, -coordinate_n[1] + c_height/2];
}



function x(t) {
	return Math.sin(t)*(Math.exp(Math.cos(t))-2*Math.cos(4*t)-Math.pow(Math.sin(t/12),5));
}


function y(t) {
	return Math.cos(t)*(Math.exp(Math.cos(t))-2*Math.cos(4*t)-Math.pow(Math.sin(t/12),5));
}


function circ(c_params) {	// c_params = [center,r]
	center = coord(c_params);
	point_x = 1; point_y = 1;	//point size
	p_center = [center[0]  - point_x/2, center[1] - point_y/2];
	
	ctx.fillRect( p_center[0], p_center[1] ,point_x,point_y);

}


h = 0.001;
circ([[0,0],100]);

/*
// quick draw
for(let t=0; t<=12*Math.PI*12; t+=h) {
	circ([x(t)*60,y(t)*60]);
}*/

let t=0;
setInterval(function() {
	t+=h;
	circ([x(t)*60,y(t)*60]);
},1)


/*

setInterval(function(){ 
	time+=1/m;
	wipe();

	prev = phasor([ [0,0] , 10*mag(ft[0])/10 ], time*ph[0] + arg(ft[0]) );	//staring circle to set starting and ending positions
	for(let i=1;i<ft.length;i++) {
		prev = phasor([ prev, 10*mag(ft[i])/10 ], time*ph[i] +  arg(ft[i]) );
		
	}
	shape.push(prev);
    tracer(shape);


}, 30);
*/