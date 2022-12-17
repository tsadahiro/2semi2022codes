let num = 10;
let lattice = [];
let tile;
let base = [];
let scalar
let slider;
let vSlider;

function setup(){
    createCanvas(500,500);
    scalar = height * 1.0/ num;
    slider = createSlider(0,2000,1000);
    vSlider = createSlider(0,1000,0);
    makeSqVector();
    lattice = makeSqLattice();
}

function makeSqVector(){
    let r = (slider.value()/1000-1)/sqrt(3);
    base = [];
    base.push({x:cos(PI/3)+r*cos(PI/6), y:sin(PI/3)+r*sin(PI/6)})
    base.push({x:1+r*cos(PI/6), y:0+r*sin(PI/6)})
}


function hexagon(x, y, radius, sgn) {
    console.log(sgn);
    beginShape();
    let r = slider.value()/1000;
    let s = vSlider.value()/1000;
    let v = {x:s*cos(2/3*PI), y:s*sin(2/3*PI)}
    for (let k = 0; k < 6; k++){
	let theta = k*PI/3+PI/6;
	if (k < 2 || k == 5){
	    w = {x:-sgn*v.x, y:-sgn*v.y};
	}else{
	    w = {x:sgn*v.x, y:sgn*v.y};
	}
	    
	if (k%3 == 0){
	    vertex(x+(r*cos(theta)+w.x)*radius, y+(r*sin(theta)+w.y)*radius);
	}else{
	    vertex(x+(cos(theta)+w.x)*radius, y+(sin(theta)+w.y)*radius);
	}
    }
    endShape(CLOSE);
}

function makeSqLattice(){
    let mat = []
    for (let i = -10; i < num + 20; i++){
	let row = [];
	for (let j = -10; j < num + 20; j++){
	    let v = {x: (i*scalar)*base[0].x + (j*scalar)*base[1].x,
		     y: (i*scalar)*base[0].y + (j*scalar)*base[1].y
		    }
	    row.push(v);
	}
	mat.push(row);
    }
    return(mat);
}

function drawTiling(){
    let sgn = 1;
    for (let vecArr of lattice){
	sgn = -sgn;
	for (let vec of vecArr){
	    sgn = -sgn;
	    fill(color("lightgray"));
	    hexagon(vec.x, vec.y, scalar/sqrt(3),sgn);
	}
    }
}

function draw(){
    background(color("white"));
    makeSqVector();
    lattice = makeSqLattice();
    drawTiling();
}
