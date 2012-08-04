function drawMap()
{
	//Main map array
	var mapArray = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

	var xpos = 0;
	var ypos = 0;
	for (var i = 0; i < mapArray.length; i++)
	{
		var canvas = document.getElementById("game");
        var context = canvas.getContext("2d");
        imageObj.onload = function() {
          context.drawImage(imageObj, xpos, ypos);
        };
        imageObj.src = mapTileImage(mapArray[i]);

		xpos += 32;
		if (xpos === 25)
		{
			ypos += 32;
			xpos = 0;
		}
	}
}

function mapTileImage(id)
{
	//Converts map array # value to image file
	if (id === 0)
	{
		return "images/tile1.png";
	}
}