scalar = 100;
function setup(){
    createCanvas(600,600);
    translate(300,300);
    scale(1,-1);
    background(255);
    stroke(0);
    beginShape();
    drawKoch({x:-3,y:0}, {x:3,y:0}, 6);
    endShape();
}

function drawKoch(p, q, level){
    console.log(p.y);
    if (level <= 0){
	vertex(scalar*p.x, scalar*p.y);
	vertex(scalar*q.x, scalar*q.y);
	return;
    }
    let p1 = {x:p.x + 1/3*(q.x-p.x),
	      y:p.y + 1/3*(q.y-p.y)
	     }
    let p2 = {x:p1.x + 1/3*(q.x-p.x)*cos(PI/3) - 1/3*(q.y-p.y)*sin(PI/3),
	      y:p1.y + 1/3*(q.x-p.x)*sin(PI/3) + 1/3*(q.y-p.y)*cos(PI/3),
	     }
    let p3 = {x:q.x + 1/3*(p.x-q.x),
	      y:q.y + 1/3*(p.y-q.y)
	     }
    drawKoch(p, p1, level-1);
    drawKoch(p1, p2, level-1);
    drawKoch(p2, p3, level-1);
    drawKoch(p3, q, level-1);
}

function draw(){
}
