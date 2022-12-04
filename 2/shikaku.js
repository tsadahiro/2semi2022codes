
function setup() {
    createCanvas(800, 800);
    unit = 50;
    fill("white")
    for (let i = 0; i < 20; i++){
	for (let j = 0; j < 20; j++){
	    if ((i+j)%3 == 0){
		fill("black")
	    }
	    else if ((i+j)%3 == 1){
		fill("gray")
	    }
	    else{
		fill("white")
	    }
	    rect(i*unit, unit*j, unit, unit);
	}
    }
}

function draw() {
}
