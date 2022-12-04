function setup(){
    createCanvas(800,800);
}

function draw(){
    let Ax = 0;
    let Ay = 0;
    let Bx = 0.5;
    let By = 1;
    let Cx = 1;
    let Cy = 0.2;
    scale(500);
    strokeWeight(1/1000);
    line(Ax,Ay, Cx,Cy);
    line(Cx,Cy, Bx,By);
    let n = 50;
    let Px = Ax + (Cx-Ax)/n;
    let Py = Ay + (Cy-Ay)/n;
    let Qx = Cx + (Bx-Cx)/n;
    let Qy = Cy + (By-Cy)/n;
    line(Px,Py, Qx,Qy);
    stroke("green");
    for (i = 2; i<n; i++){
	Px = Ax + i*(Cx-Ax)/n;
	Py = Ay + i*(Cy-Ay)/n;
	Qx = Cx + i*(Bx-Cx)/n;
	Qy = Cy + i*(By-Cy)/n;
	line(Px,Py, Qx,Qy);
    }
}
