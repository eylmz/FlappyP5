var finish = false;
var length = 3;

var bird;
var bg;
var pipet;
var pipeb;

var pipes = [];

function preload(){
	bird = loadImage("img/birdc.png");
	bg = loadImage("img/background.png");
	pipet = loadImage("img/pipet.png");
	pipeb = loadImage("img/pipeb.png");
}

function setup() {
	createCanvas(500, 800);
    frameRate(30);

	for(var i = 0; i < 3; i++) {
        var pipe = new Pipe();
        pipe.newSpace(i);
        pipes.push(pipe);
    }

	ball = new Ball();

}

function draw() {
	background(bg);

	for(var i = 0; i < pipes.length; i++) {
        pipes[i].shift();
        pipes[i].show();
    }

    if(pipes[0].x + 53 < 0){
        var pipe = new Pipe();
        pipe.newSpace(0);
        pipe.x = pipes[2].x + 400;

        for(var j = 0; j < 2; j++){
        	pipes[j] = pipes[j+1];
		}

        pipes[2] = pipe;

	}

	ball.control( pipes[0] );

    ball.show();
}

function keyPressed(){
	if(keyCode === UP_ARROW || keyCode === 32)
        ball.space();
}

