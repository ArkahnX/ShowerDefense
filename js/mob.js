/**
 * mob.js
 *
 * Created August 08, 2012 by Devon McClure
 *
 * Function deals with creating a mob. 
 * The variable "type" refers to whether it's flying
 * or ground, which then determines which towers can hit it.
 *
 * Health is the enemy's health.
 * 
 *
 */

var enemies = new Array(); //Keep track of enemies in an array.
 
function Mob(enemy)
{	
	switch(enemy)
	{
		case "wasp":
			this.enemy = enemy;
			this.type = "flying";
			this.health = 20;
			break;
		case "spider":
			this.enemy = enemy;
			this.type = "ground";
			this.health = 35;
			break;
		case "snake":
			this.enemy = enemy;
			this.type = "ground";
			this.health = 20;
			break;
		case "scorpion":
			this.enemy = enemy;
			this.type = "ground";
			this.health = 20;
			break;
		case "cat":
			this.enemy = enemy;
			this.type = "ground";
			this.health = 30;
			break;
		case "flyingSquirrel":
			this.enemy = enemy;
			this.type = "flying";
			this.health = 40;
			break;
		default:
			this.enemy = enemy;
			this.type = null;
			this.health = null;
	}
			
}

// Testing
var enemies = ["flyingSquirrel", "cat", "spider", "scorpion", "snake", "wasp"];
var mob = new Array();
mob[0] = "banana";
alert(mob[0]);
for(i=0; i<enemies.length; i++)
{
	mob[i] = new Mob(enemies[i]);
	alert(mob[i].type);
}
