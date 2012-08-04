var init = function()
{
	//Game.js
	const CANVAS_WIDTH 	=	800;
	const CANVAS_HEIGHT =	800;
	var inGame = false;

	//Create canvas element
	var canvasElement = $("#canvas");
	var canvas = canvasElement.get(0).getContext("2d");

	var fps = 30;
	// setInterval(function()
	// {
	//   update();
	//   draw();
	// }, 1000/fps);

	//Global variables

	drawMap();
};