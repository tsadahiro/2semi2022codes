const unit = 100;
const base = 2

function setup(){
    createCanvas(6*unit, 6*unit);
    background("white")
    //translate(3*unit, 3*unit);
    generate([],9);
}

function generate(seq, level){
    if (level <= 0){
	evaluate(seq,base);
	return;
    }

    for (let d = 0; d <= 2; d++){
	seq.push(d);
	generate(seq, level-1);
	seq.pop();
    }
}

function evaluate(seq, base){
    let sum = {x:0,y:0}
    for (let i in seq){
	if (seq[i]==0){
	    sum = sum;
	}
	else if (seq[i]==1){
	    sum = {x: sum.x, y: sum.y+pow(2,i)}
	}
	else if (seq[i]==2){
	    sum = {x: sum.x+pow(2,i), y: sum.y}
	}
    }
    circle(2*sum.x+sum.y, +2*sum.y*sqrt(3)/2, 1);
}


