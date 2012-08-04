function mainMenu()
{
	var wrapper = $("<div id='wrapper'></div>");
	var container = $("<div id='mainMenu'></div>");
	var list = $("<ul></ul>");
	var startGame = $("<li id='startGameButton'><span>Start Game</span></li>");
	var optionsDiv = $("<li id='optionsButton'><span>Options</span></li>");
	list.append(startGame, optionsDiv);
	container.append(list);
	wrapper.append(container);
	$("body").append(wrapper);
	$("#startGameButton span").on("click", function()
	{
		gameStart();
	})
}

function closeMenu(callback)
{
	$("#wrapper").fadeOut("normal", callback);
}