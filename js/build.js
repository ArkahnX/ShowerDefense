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

function emptyBuildMenu() {
	var list = menu.children();
	for(var i=0;i<list.length;i++) {
		items.push(menu.find(list[i]).remove());
	}
}

function fillBuildMenu() {
	if (menu.children().length > 0) {
		emptyBuildMenu()
	}
	buildList.forEach(function(item) {
		if (items && items.indexOf(item) > -1) {
			menu.append(items.indexOf(item));
		} else {
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
	});
}
var whatToBuild = "";

var target = $("#target");
var currentLocation = null;
var tile = $("#tile");

function applyClicks() {
	$(".container").on("click", function(event) {
		var container = $(this);
		console.log(container.find("img").attr("src"))
		tile.css({
			left: event.pageX - 16,
			top: event.pageY - 40
		}).removeClass("hidden").addClass("drain");
		whatToBuild = container.find("img").attr("src");
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
target.on("click", function(event) {
	if (whatToBuild !== "") {
		// currentLocation[0] is x value
		// currentLocation[1] is y value
		// refer to canvas.on(mouseMove) for how to implement graphically
		// todo: add layer to map for enemies and turrets, fix build icon in applyClicks
		//
		tile.removeAttr("class").addClass("hidden")
		// reset whatToBuild to empty after building
		whatToBuild = "";
	}
});
var canBuild = function() {
	var currentTile = mapArray[currentLocation[1]][currentLocation[0]];
	for(var i=0;i<buildList.length;i++) {
		if(buildList[i].src === whatToBuild) {
			if(buildList[i].type === "trap") {
				if(currentTile === 2) {
					return true;
				} else {
					return false;
				}
			} else {
				if(currentTile === 1) {
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
			left: (currentLocation[0]*32)+leftOffset-3,
			top: (currentLocation[1]*32)+topOffset-3
		})
	if (whatToBuild === "") {
		target.removeAttr("class").addClass("neutral");
	} else {
		console.log(canBuild())
		if(canBuild()) {
			target.removeAttr("class").addClass("good");
		} else {
			target.removeAttr("class").addClass("bad");
		}
	}
});