let posX = 200;
let posY = 200;

let vitesse = 8;
let direction = 1;

let d = 100;

let posObstacleX = 300;
let posObstacleY = 300;

let distanceX;
let distanceY;
let distance;

let timer;

let alive = true;




function setup() {
    createCanvas(640, 480);
    
}

function draw() {
    if( alive == true) {
       game(); 
    }
    
        
        
    
    
}

function chronometre() {
    timer = millis() / 10
    timer = Math.floor(timer) / 100
    textSize(32);
    text(timer, 400, 450);

}


function updatePositionEllipse() {

    if (keyIsDown(LEFT_ARROW)) {
        posX -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        posX += 5;
    }

    if (keyIsDown(UP_ARROW)) {
        posY -= 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
        posY += 5;
    }



}


function testOutOfScreen() {
    if (posX > 600) {
        posX = 600;
        strokeWeight(6);
        stroke('blue');
        line(637, 0, 637, 480);
    }

    if (posX < 40) {
        posX = 40;
        strokeWeight(6);
        stroke('blue');
        line(2, 2, 2, 480);
    }

    if (posY < 40) {
        posY = 40;
        strokeWeight(6);
        stroke('blue');
        line(2, 2, 637, 2);

    }

    if (posY > 440) {
        posY = 440;
        strokeWeight(6);
        stroke('blue');
        line(2, 478, 637, 478);
    }
}


function testDistancePlayer() {

    distanceX = Math.pow(posX - posObstacleX, 2);
    distanceY = Math.pow(posY - posObstacleY, 2);
    distance = Math.sqrt(distanceX + distanceY);

    if (distance < 47) {
        alive = false;
        fill('red');
        textSize(64);
        textFont('Calibri');
        fill('black');
        text('YOU DIED', 210, 240);
        textSize(32);
        text('Your score:', 225, 300);
        fill('red');
        text(timer, 380, 300);
      
        



    }
}




function game() {
    strokeWeight(2);
    stroke(0);
    background(122);

    chronometre();

    

    updatePositionEllipse();
    testOutOfScreen();
    fill('white');
    testDistancePlayer();

    ellipse(posX, posY, 75, 75);
    fill('red')

    posObstacleX += vitesse * direction;
    ellipse(posObstacleX, posObstacleY, 20, 20)
    if ((posObstacleX > width - d / 8) || (posObstacleX < d / 8)) {
        direction = -direction;
    }
}











