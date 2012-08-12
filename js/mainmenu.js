function openMainMenu()
{
	if($("#wrapper").length === 0)
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
		});
	} else
	{
		$("#wrapper").fadeIn("normal");
	}
}
function closeMainMenu()
{
	$("#wrapper").fadeOut("normal");
}
$("#quit").on("click", function()
{
	gameEnd();
});