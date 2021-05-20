function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0, 'fixed');
    //cnv.style('cursor', 'none')
}

function draw() {
    background(0, 100, 200);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function polygon(x, y, radius, npoints, show = false) {
    let angle = TWO_PI / npoints;
    if (show) { fill(255, 218, 185) } else { fill(0, 0, 0, 0) }
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function min_index(a) {
    var lowest = 0;
    for (var i = 1; i < a.length; i++) {
        if (a[i] < a[lowest]) lowest = i;
    }
    return lowest;
}