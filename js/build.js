var menu = $("#buildmenu");
var buildList = [{
	"type": "trap",
	"name": "drain",
	"src": "images/drain.png",
	"stats": {
		"health": "",
		"cost": ""
	}
}];
var items = [];

function emptyBuildMenu()
{
	var list = menu.children();
	list.forEach(function(item)
	{
		items.push(menu.find(item).remove());
	});
}

function fillBuildMenu()
{
	if (menu.children().length > 0)
	{
		emptyBuildMenu()
	}
	buildList.forEach(function(item)
	{
		if (items && items.indexOf(item) > -1)
		{
			menu.append(items.indexOf(item));
		} else
		{
			var container = $("<div class='container'></div>");
			var name = $("<span>" + item.name + "</span>");
			var image = new Image();
			container.append(image);
			container.append(name)
			image.src = item.src;
			image.title = item.type + ": " + item.name + " ($" + item.stats.cost + ")";
			menu.append(container);
			applyClicks();
		}
	});
}
var whatToBuild = null;

var tile = $("#tile");

function applyClicks()
{
	$(".container").on("click", function(event)
	{
		var container = $(this);
		console.log(container.find("img").attr("src"))
		tile.css({
			left: event.pageX - 16,
			top: event.pageY - 40
		}).removeClass("hidden").addClass("drain");
		whatToBuild = container.find("img").attr("src");
	});
}
$("body").on("mousemove", function()
{
	tile.css({
		left: event.pageX - 16,
		top: event.pageY - 40
	});
});