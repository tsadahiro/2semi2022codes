let n = 6;
let unit = 200;

function setup(){
    createCanvas(600,600);
    theta = PI/n;
    translate(300,300);
    textSize(30);
    for (let i = 0; i < n; i++){
	drawTriangle();
	rotate(2*PI/n);
    }
}

function drawTriangle(){
    fill("lightgray");
    triangle(0,0,
	     cos(theta)*unit, 0,
	     cos(theta)*unit, sin(theta)*unit
	    )
    fill("white");
    text("2seminar",unit/3,unit/5);
    scale(1,-1);
    fill("palegreen");
    triangle(0,0,
	     cos(theta)*unit, 0,
	     cos(theta)*unit, sin(theta)*unit
	    )
    fill("green");
    text("2seminar",unit/3,unit/5);
    scale(1,-1);
}

function draw(){

}
