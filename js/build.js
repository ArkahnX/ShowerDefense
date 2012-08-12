var menu = $("#buildmenu");
var buildList = {
	"images/drain.png": {
		"type": "trap",
		"name": "drain",
		"src": "images/drain.png",
		"stats": {
			"health": "",
			"cost": "10"
		}
	},
	"images/scorpion.png": {
		"type": "structure",
		"name": "scorpion",
		"src": "images/scorpion.png",
		"stats": {
			"health": "100",
			"cost": "100"
		}
	}
};
var items = [];
var whatToBuild = "";
var target = $("#target");
var currentLocation = null;
var tile = $("#tile");

function emptyBuildMenu() {
	var list = menu.children();
	for (var i = 0; i < list.length; i++) {
		menu.find(list[i]).remove();
	}
}

function fillBuildMenu() {
	if (menu.children().length > 0) {
		emptyBuildMenu()
	}
	for (var attr in buildList) {
		var item = buildList[attr];
		var container = $("<div class='container'></div>");
		var name = $("<span>" + item.name + "</span>");
		var cost = $("<span class='cost'>$" + item.stats.cost + "</span>");
		var image = new Image();
		container.append(image);
		container.append(name);
		container.append(cost);
		image.src = item.src;
		image.title = item.type + ": " + item.name + " ($" + item.stats.cost + ")";
		menu.append(container);
		applyClicks();
	}
	var leftOffset = $('#canvas').position().left;
	var topOffset = $('#canvas').position().top;
	target.css({
		left: leftOffset - 3,
		top: topOffset - 3
	});
}

function applyClicks() {
	$(".container").off("click").on("click", function(event) {
		var container = $(this);
		if(!container.hasClass("expensive"))
		{
			tile.css({
				left: event.pageX - 16,
				top: event.pageY - 40
			}).removeClass("hidden").addClass("drain");
			whatToBuild = container.find("img").attr("src");
			console.log("remove")
			removeMoney(buildList[whatToBuild].stats.cost);
		}
	});
}
$("body").on("mousemove", function() {
	if (whatToBuild !== "") {
		tile.css({
			left: event.pageX - 16,
			top: event.pageY - 40
		});
	}
});

var modulus = function(num) {
	var mod = num % 32;
	return (num - mod) / 32;
};

var currentTarget = function(event) {
	var leftOffset = $('#canvas').position().left;
	var topOffset = $('#canvas').position().top;
	var trueX = event.pageX - leftOffset;
	var trueY = event.pageY - topOffset;
	return [modulus(trueX), modulus(trueY)];
};
$("#canvas").on("mousedown", function(event) {
	event.preventDefault();
	if (whatToBuild !== "" && canBuild()) {
		// currentLocation[0] is x value
		// currentLocation[1] is y value
		// refer to canvas.on(mouseMove) for how to implement graphically
		// todo: add layer to map for enemies and turrets, fix build icon in applyClicks
		//
		structureArray[currentLocation[1]][currentLocation[0]] = structures.indexOf(whatToBuild)
		tile.removeAttr("class").addClass("hidden")
		// reset whatToBuild to empty after building
		whatToBuild = "";
	}
	if (canBuild() === null) {
		//middle click delete
		if (event.which === 2) {
			structureArray[currentLocation[1]][currentLocation[0]] = null;
		}
	}
});

$("#canvas").on("contextmenu", function(event) {
	event.preventDefault();
});
var canBuild = function() {
	var currentTile = mapArray[currentLocation[1]][currentLocation[0]];
	if (structureArray[currentLocation[1]][currentLocation[0]] !== null) {
		return null;
	}
	for (var attr in buildList) {
		if (buildList[attr].src === whatToBuild) {
			if (buildList[attr].type === "trap") {
				if (currentTile === 1) {
					return true;
				} else {
					return false;
				}
			} else {
				if (currentTile === 0) {
					return true;
				} else {
					return false;
				}
			}
		}
	}
	return false;
};

$("#canvas").on("mousemove", function(event) {
	var leftOffset = $('#canvas').position().left;
	var topOffset = $('#canvas').position().top;
	currentLocation = currentTarget(event);
	target.css({
		left: (currentLocation[0] * 32) + leftOffset - 3,
		top: (currentLocation[1] * 32) + topOffset - 3
	});
	if (whatToBuild === "") {
		strokeColor = "black";
		if (canBuild() === null) {
			strokeColor = "blue";
		}
	} else {
		if (canBuild()) {
			strokeColor = "green";
		} else {
			strokeColor = "red";
		}
	}
});