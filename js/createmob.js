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

function createMob(enemy,amount)
{
this.enemy = enemy;
this.amount = amount

	var wasps = new Array();
	if(this.enemy==="wasp")
	{		
		for(i=0; i<this.amount; i++)
		{
			wasps[i] = new Mob("wasp");
		}
		alert("There are " + wasps.length + " wasps spawned");
		return wasps;
	}
	
	var cats = new Array();
	if(this.enemy==="cat")
	{
		for(i=0; i<this.amount; i++)
		{
			cats[i] = new Mob("wasp");
		}
		alert("There are " + cats.length + " cats spawned");
		return cats;
	}
	
	var flyingSquirrels = new Array();
	if(this.enemy==="flyingSquirrel")
	{
		for(i=0; i<this.amount; i++)
		{
			cats[i] = new Mob("flyingSquirrel");
		}
		alert("There are " + flyingSquirrels.length + " flying squirrels spawned");
		return flyingSquirrels;
	}
	
	var spiders = new Array();
	if(this.enemy==="spider")
	{		
		for(i=0; i<this.amount; i++)
		{
			spiders[i] = new Mob("spider");
		}
		alert("There are " + spiders.length + " spiders spawned");
		return spiders;
	}
	
	var snakes = new Array();
	if(this.enemy==="snake")
	{		
		for(i=0; i<this.amount; i++)
		{
			cats[i] = new Mob("snake");
		}
		alert("There are " + snakes.length + " snakes spawned");
		return snakes;
	}
	
	var scorpions = new Array();
	if(this.enemy==="scorpion")
	{		
		for(i=0; i<this.amount; i++)
		{
			scorpions[i] = new Mob("scorpion");
		}
		alert("There are " + scorpions.length + " scorpions spawned");
		return scorpions;
	}
	
	var enemiesSpawned = wasps.length + flyingSquirrels.length + cats.length
						+ spiders.length + snakes.length + scorpions.length;
}

//Testing
var mob1 = createMob("wasp",7);
var mob2 = createMob("cat",7);

alert(mob1[0].type);

alert("There are " + parseInt(mob1.length+mob2.length,10) + " enemies spawned");