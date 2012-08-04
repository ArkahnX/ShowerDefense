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
		default:
			this.enemy = enemy;
			this.type = null;
			this.health = null;
	}
			
}

/* Testing
var mob1 = new Mob("wasp");
var mob2 = new Mob("spider");
var mob3 = new Mob("snake");
var mob4 = new Mob("scorpion");

alert("Mob 1 is a " + mob1.type + " type and has " + mob1.health + " health and is a " + mob1.enemy);
alert("Mob 2 is a " + mob2.type + " type and has " + mob2.health + " health and is a " + mob2.enemy);
alert("Mob 3 is a " + mob3.type + " type and has " + mob3.health + " health and is a " + mob3.enemy);
alert("Mob 4 is a " + mob4.type + " type and has " + mob4.health + " health and is a " + mob4.enemy);
*/