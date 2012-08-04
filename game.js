//Game.js
		  
var CANVAS_WIDTH =	800;
var CANVAS_HEIGHT = 600;

//Create canvas element
var canvasElement = $("<canvas width='" + CANVAS_WIDTH + 
                      "' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('div#game');

var FPS = 30;
setInterval(function() {
  update();
  draw();
}, 1000/FPS);

//Global variables
inGame = false;

function update() 
{
	if (inGame)
	{
		
	}
}
function draw() {
	while (!inGame)
	{
		MainMenu();
	}
	DrawGame();
}

function MainMenu() 
{
	canvas.fillStyle = "#000"; // Set color to black
	canvas.font="40px Arial";
	canvas.fillText("Shower Defense", (CANVAS_WIDTH/2)-150, 50);	
	//TODO: Replace with drawing background images
	//TODO: Buttons for: starting game, options, credits
}

function DrawGame()
{
	
}