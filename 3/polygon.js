let unit = 200;
let n = 4;
function setup(){
    createCanvas(600,600);
    translate(300,300);
    textSize(30);

    for (let i=0; i<n; i++){
	drawFundamentalDomain()
	rotate(2*PI/n);
    }
}

function drawFundamentalDomain(){
    fill("lightgray")
    triangle(0,0, cos(PI/n)*unit,0, cos(PI/n)*unit, sin(PI/n)*unit);
    fill("");
    text('2semi',unit*0.3,0.2*unit);
    scale(1,-1);
    fill("palegreen")
    triangle(0,0, cos(PI/n)*unit,0, cos(PI/n)*unit, sin(PI/n)*unit);
    fill("white")
    text('2semi',unit*0.3,0.2*unit);
    scale(1,-1);
}

function draw(){

}
