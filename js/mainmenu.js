function mainMenu()
{
	var container = $("<div id='mainMenu'></div>");
	var list = $("<ul></ul>");
	var startGame = $("<li id='startGameButton'>Start Game</li>");
	var optionsDiv = $("<li id='optionsButton'>options</li>");
	list.append(startGame,optionsDiv);
	container.append(list);
	console.log(container)
	$("body").append(container);
}