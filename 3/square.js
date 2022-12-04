let num = 10;
let lattice = [];
let tile;
let base = [];
let scalar

function setup(){
    createCanvas(500,500);
    scalar = height * 1.0/ num;
    makeSqVector();
    lattice = makeSqLattice();
    console.log(lattice);
    drawTiling();
}

function makeSqVector(){
    base.push({x:0, y:1})
    base.push({x:1, y:0})
}

function makeSqLattice(){
    let mat = []
    for (let i = 0; i < num + 1; i++){
	let row = [];
	for (let j = 0; j < num + 1; j++){
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
    for (let vecArr of lattice){
	for (let vec of vecArr){
	    fill(color('hsba('+ floor(random(255)) +',100%,100%,0.5)'));
	    rect(vec.x, vec.y, scalar, scalar);
	}
    }
}

function draw(){

}
