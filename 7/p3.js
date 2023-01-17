const unit = 80;

function setup(){
    createCanvas(19*unit, 10*unit);
    background("white");
    translate(5*unit, 5*unit);

    for (let i = -10; i < 10; i++){
	for (let j = -10; j < 10; j++){
	    drawHexagon(3/2*(i+j)*unit,
			sqrt(3)/2*(i-j)*unit
		       );
	}
    }
}

function drawFundDomain(){
    fill("white");
    beginShape();
    vertex(0,0);
    vertex(1/2*unit, sqrt(3)/2*unit);
    vertex(1*unit,0);
    vertex(1/2*unit, -sqrt(3)/2*unit);
    endShape(CLOSE);
    textSize(40);
    fill("blue");
    text("F",unit/2-10,20);
}

function drawHexagon(x,y){
    translate(x,y);
    drawFundDomain();
    rotate(2*PI/3);
    drawFundDomain();
    rotate(2*PI/3);
    drawFundDomain();
    rotate(-4*PI/3);
    translate(-x,-y);
}

function draw(){

}
