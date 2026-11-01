let particles = [];
let num = 15;
function setup() {  
createCanvas(380, 570);  
colorMode(HSB, 360, 100, 100, 100);    
for (let i = 0; i < num; i++) {    
particles.push({      
x: random(width),      
y: random(height),      
vx: random(-2, 2),      
vy: random(-2, 2),      
r: random(8, 30),      
h: random(180, 360)    
});  
}
}
function draw() {  
background(220, 70, 8, 12);    
let speed = map(mouseX, 0, width, 0.5, 2.5);  
let scale = map(mouseY, 0, height, 0.7, 1.5);
  for (let p of particles) {    
p.x += p.vx * speed;    
p.y += p.vy * speed;        
if (p.x < p.r/2 || p.x > width - p.r/2) {      
p.vx *= -1;    
}    
if (p.y < p.r/2 || p.y > height - p.r/2) {      
p.vy *= -1;    
}        
noStroke();    
fill(p.h, 85, 100, 75);    
ellipse(p.x, p.y, p.r * scale);  
}
}
function mousePressed() {  
particles = [];  
for (let i = 0; i < num; i++) {    
particles.push({      
x: random(width),      
y: random(height),      
vx: random(-2, 2),      
vy: random(-2, 2),      
r: random(8, 30),      
h: random(180, 360)    
});  
}
}