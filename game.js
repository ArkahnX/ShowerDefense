(function()
{
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x)
	{
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element)
	{
		var currTime = new Date().getTime();
		var timeToCall = Math.max(0, 16 - (currTime - lastTime));
		var id = window.setTimeout(function()
		{
			callback(currTime + timeToCall);
		}, timeToCall);
		lastTime = currTime + timeToCall;
		return id;
	};

	if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id)
	{
		clearTimeout(id);
	};
}());

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
var inGame = false;

//Get canvas element
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


function animate()
{
	requestAnimationFrame(animate, canvas);
	draw();
}

function gameStart()
{
	closeMenu(animate)
	fillBuildMenu()
}
$(function(){
	gameStart()
});
gameStart()
mainMenu()
closeMenu()