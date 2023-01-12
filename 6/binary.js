const unit = 100;

function setup(){
    createCanvas(8*unit, 8*unit);
    background("white");
    translate(4*unit,4*unit);
    generateSeq([], 7);
}

function generateSeq(seq, level){
    if (level <= 0){
	console.log(evaluate(seq,2));
	circle(2*evaluate(seq,2), 0, 1);
	return;
    }
    for (let d=0; d<2; d++){
	seq.push(d);
	generateSeq(seq, level-1);
	seq.pop();
    }
}

function evaluate(seq, base){
    let sum = 0
    for (let i in seq){
	sum = sum + seq[i]*pow(base,i);
    }
    return(sum);
}
