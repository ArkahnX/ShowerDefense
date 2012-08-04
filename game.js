<<<<<<< HEAD
//Game.js

const CANVAS_WIDTH =	800;
const CANVAS_HEIGHT = 600;

//Create canvas element
var canvasElement = $("<canvas width='" + CANVAS_WIDTH +
                      "' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('div#game');

// var fps = 30;
// setInterval(function()
// {
//   update();
//   draw();
// }, 1000/fps);

//Global variables
inGame = false;
=======

	//Game.js

	const CANVAS_WIDTH 	=	800;
	const CANVAS_HEIGHT =	800;
	var inGame = new Boolean();

	//Create canvas element
	var canvasElement = $("<canvas width='" + CANVAS_WIDTH +
	                      "' height='" + CANVAS_HEIGHT + "'></canvas>");
	var canvas = canvasElement.get(0).getContext("2d");
	canvasElement.appendTo('div#game');

	var fps = 30;
	setInterval(function()
	{
	  update();
	  draw();
	}, 1000/fps);

	//Global variables
	inGame = false;

>>>>>>> upstream/master
