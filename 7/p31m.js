const unit = 100;

function setup(){
    createCanvas(19*unit, 10*unit);
    background("white");
    translate(5*unit, 5*unit);

    const lim = 10;
    for (let i = -lim; i <= lim; i++){
	for (let j = -lim; j <= lim; j++){
	    drawHexagon(3/2*(i+j)*unit,
			sqrt(3)/2*(i-j)*unit
		       );
	}
    }
}

function drawFundDomain(){
    fill("white");
    /*
    beginShape();
    vertex(0,0);
    vertex(1/2*unit, sqrt(3)/2*unit);
    vertex(1*unit,0);
    endShape(CLOSE);
    */
    textSize(40);
    fill("blue");
    //text("F",unit/2-10,40);
    strokeWeight(3);
    stroke("black");
    line(0.5*unit, 0, unit, 0);
    line(0.5*unit, 0,
	 0.5*cos(PI/3)*unit, 0.5*sin(PI/3)*unit
	);
    strokeWeight(5);
    stroke("blue");
    line(cos(PI/3)*unit, sin(PI/3)*unit,
	 cos(PI/3)*unit + 0.5*cos(-PI/3)*unit,
	 sin(PI/3)*unit + 0.5*sin(-PI/3)*unit,
	);

}

function drawHexagon(x,y){
    translate(x,y);
    drawFundDomain();
    scale(1,-1)
    drawFundDomain();
    scale(1,-1)
    
    rotate(2*PI/3);
    drawFundDomain();
    scale(1,-1)
    drawFundDomain();
    scale(1,-1)

    rotate(2*PI/3);
    drawFundDomain();
    scale(1,-1)
    drawFundDomain();
    scale(1,-1)

    rotate(-4*PI/3);
    translate(-x,-y);
}

function draw(){

}
