let t = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(15, 10, 30, 40);

  translate(width / 2, height / 2);

  let petalos = 12;
  let baseRadio = 120 + sin(t * 2) * 20; 

  for (let i = 0; i < petalos; i++) {
    push();
    rotate((360 / petalos) * i + t);

    let r = 200 + sin(t + i * 20) * 55;
    let g = 100 + sin(t * 1.5 + i * 10) * 80;
    let b = 255;

    fill(r, g, b, 150);
    stroke(255, 200);
    strokeWeight(2);

    beginShape();
    for (let a = 0; a < 360; a += 5) {
      let deform = sin(a * 3 + t * 4) * 20;
      let x = cos(a) * (baseRadio + deform);
      let y = sin(a) * (baseRadio + deform);
      vertex(x, y);
    }
    endShape(CLOSE);

    pop();
  }

  noStroke();
  fill(255, 200, 0, 230);
  ellipse(0, 0, 80 + sin(t * 3) * 10);

  t += 0.5;
}
