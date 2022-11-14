// Walker OOP Demo

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "red";
    this.speed = 5;
    this.radius = 10;
  }

  display() {
    stroke(this.color);
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  move() {
    let choice = random(100);

    if (choice < 25) {
      //up
      this.y -= this.speed;
    }
    else if (choice < 50) {
      //down
      this.y += this.speed;
    }
    else if (choice < 75) {
      //right
      this.x += this.speed;
    }
    else {
      //left
      this.x -= this.speed;
    }
  }
}

let micheal;
let katherine;
let me;

function setup() {
  createCanvas(windowWidth, windowHeight);
  micheal = new Walker(width/2, height/2);
  katherine = new Walker(200, 300);
  katherine.color = "blue";
  me = new Walker(1200, 750);
  me.color = "green";
}

function draw() {
  micheal.move();
  katherine.move();
  me.move();
  
  me.display();
  katherine.display();
  micheal.display();
}
