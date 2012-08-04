var init = function()
{
	document.addEventListener("DOMContentLoaded",function()
	{
		const CANVAS_WIDTH 	=	800;
		const CANVAS_HEIGHT =	800;
		var inGame = false;

		//Create canvas element
		var canvasElement = document.getElementById("canvas");
		var canvas = canvasElement.getContext("2d");

		var fps = 30;
		// setInterval(function()
		// {
		//   update();
		//   draw();
		// }, 1000/fps);

		mainMenu();

		drawMap();
	},false);
	//Game.js
};