const unit = 100;

function setup(){
    createCanvas(19*unit, 10*unit);
    background("white");
    translate(5*unit, 5*unit);

    //六角形を並べる
    const lim = 10;
    for (let i = -lim; i <= lim; i++){
	for (let j = -lim; j <= lim; j++){
	    drawHexagon(3/2*(i+j)*unit,
			sqrt(3)/2*(i-j)*unit
		       );
	}
    }
}

//二等辺三角形と模様を書く
function drawFundDomain(){
    fill("white");
    beginShape();
    vertex(0,0);
    vertex(-1/2*unit,sqrt(3)/6*unit);
    vertex(1/2*unit,sqrt(3)/6*unit);
    vertex(0,0);
    endShape(CLOSE);
    textSize(30);
    fill("blue");
    text("F",unit/2-50,30);
}

//正三角形を書く
function drawFundDomain2(x,y){
    translate(x,y);
    drawFundDomain();
    scale(1,1);
    drawFundDomain();
    scale(1,1)
    
    rotate(2*PI/3);
    drawFundDomain();
    scale(1,1)
    drawFundDomain();
    scale(1,1)

    rotate(2*PI/3);
    drawFundDomain();
    scale(1,1)
    drawFundDomain();
    scale(1,1)
	
    //回転中心を正三角形の中心から正三角形の左下の頂点へ移動できないので、正六角形をかけない。
    //translate(x+1/2,y-sqrt(3)/6);
}

//六角形を書く
function drawHexagon(x,y){
    translate(x,y);
    drawFundDomain2();
    scale(1,-1)
    drawFundDomain2();
    scale(1,-1)
    
    rotate(2*PI/3);
    drawFundDomain2();
    scale(1,-1)
    drawFundDomain2();
    scale(1,-1)

    rotate(2*PI/3);
    drawFundDomain2();
    scale(1,-1)
    drawFundDomain2();
    scale(1,-1)

    rotate(-4*PI/3);
    translate(-x,-y);
}
