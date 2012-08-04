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
			var wasps = new Array();
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

function createMob(enemy,amount)
{
this.enemy = enemy;
this.amount = amount

	if(this.enemy==="wasp")
	{		
		var wasps = new Array();
		
		for(i=0; i<this.amount; i++)
		{
			wasps[i] = new Mob("wasp");
		}
		alert("There are " + wasps.length + " wasps spawned");
	}
	
	if(this.enemy==="cat")
	{
		var cats = new Array();
		
		for(i=0; i<this.amount; i++)
		{
			cats[i] = new Mob("wasp");
		}
		alert("There are " + cats.length + " cats spawned");
	}
	
	if(this.enemy==="flyingSquirrel")
	{
		var flyingSquirrels = new Array();
		
		for(i=0; i<this.amount; i++)
		{
			cats[i] = new Mob("flyingSquirrel");
		}
		alert("There are " + flyingSquirrels.length + " flying squirrels spawned");
	}
	
	if(this.enemy==="spider")
	{
		var spiders = new Array();
		
		for(i=0; i<this.amount; i++)
		{
			spiders[i] = new Mob("spider");
		}
		alert("There are " + spiders.length + " spiders spawned");
	}
	
	if(this.enemy==="snake")
	{
		var snakes = new Array();
		
		for(i=0; i<this.amount; i++)
		{
			cats[i] = new Mob("snake");
		}
		alert("There are " + snakes.length + " snakes spawned");
	}
	
	if(this.enemy==="scorpion")
	{
		var scorpions = new Array();
		
		for(i=0; i<this.amount; i++)
		{
			scorpions[i] = new Mob("scorpion");
		}
		alert("There are " + scorpions.length + " scorpions spawned");
	}
}

//Testing
var mob1 = createMob("wasp",7);
var mob2 = createMob("cat",7);
document.write("There are " + enemies.length + " enemies spawned");
