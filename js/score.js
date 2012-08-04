var life = 20;
var money = 500;
var score = 0;
var wave = 0;

function mobKilled(type)
{
	//Gives an appropriate amount of money and score based on the type of mob killed
	money += Math.floor((Math.random()*(type*10))+(type*5));
	score += type*10
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

