const unit = 150;

function setup(){
    createCanvas(6*unit,6*unit);
    background("white");
    stroke("gray");
    noFill();
    translate(3*unit, 3*unit);
    scale(1,-1);
    for (let x=-10; x < 10; x++){
	for (let y = -10; y < 10; y++){
	    drawFundDomain(2*x*unit*cos(PI/6)+y*unit*cos(PI/6), y*3/2*unit);
	}
    }
}

function drawTriangle(){
    drawSpiral({x:0,y:0},
	       {x:unit*cos(PI/6), y:unit*sin(PI/6)},
	       {x:unit*cos(PI/6), y:-unit*sin(PI/6)},
	       30
	      )
    textSize(20);
    text("Hello World",20,0);
    stroke("red");
    drawSpiral({x:0,y:0},
	       {x:unit*cos(PI/6), y:unit*sin(PI/6)},
	       {x:unit*cos(PI/6), y:-unit*sin(PI/6)},
	       1
	      )
    stroke("gray");
}

function drawSpiral(a,b,c,level){
    if (level <= 0){
	return;
    }

    triangle(a.x, a.y,
	     b.x, b.y,
	     c.x, c.y
	    )

    nA = {x : (9*a.x + b.x)/10, y : (9*a.y + b.y)/10}
    nB = {x : (9*b.x + c.x)/10, y : (9*b.y + c.y)/10}
    nC = {x : (9*c.x + a.x)/10, y : (9*c.y + a.y)/10}
    
    drawSpiral(nA, nB, nC, level - 1 );
}


function drawFundDomain(x, y){
    translate(x,y);
    for (let i = 0; i<3; i++){
	drawTriangle();
	rotate(PI/3);
	scale(1,-1);
	drawTriangle();
	scale(1,-1);
	rotate(-PI/3);
	rotate(2*PI/3);
    }
    translate(-x,-y);
}
