function Projectile(type, posx, posy, destx, desty)
{
	switch (type)
	{
		case "normal":
			this.speed = 20;
			this.type = "normal";
			break;
		case "freeze":
			this.speed = 15;
			this.type = "freeze";
			break;
	}
	this.posx = posx;
	this.posy = posy;
	this.destx = destx;
	this.desty = desty;
}



var projectiles = new Array();
projectiles[0] = p