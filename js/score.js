var life = 20;
var money = 500;
var score = 0;
var wave = 0;
var currentMobs = 0;
var waveTime = 0;
var time = 0;
var mobsToSend = 10;

function mobKilled(type)
{
	//Gives an appropriate amount of money and score based on the type of mob killed
	money += Math.floor((Math.random()*(type*10))+(type*5));
	score += type*10
	currentMobs--;
	if (currentmobs <= 0)
	{
		wave++;
		startMob();
	}
}

function loseLife(amount)
{
	life -= amount;
	if (life <= 0)
	{
		//You lose the game.
		//TODO: Return to main menu	
	}
}

function startMob()
{
	mobsToSend = 10;
	setTimeout (mobToSend , 3000 );
}

function sendMob(type)
{
	mobsToSend--;
	createMob(type);
	if (mobsToSend > 0)
	{
		setTimeout (mobToSend , 1000 );
	}
		
}

