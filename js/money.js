var money = 0;
function addMoney(ammount)
{
	money += parseInt(ammount,10);
	checkAffordable();
}
function removeMoney(ammount)
{
	money -= parseInt(ammount,10);
	checkAffordable();
}
function checkAffordable()
{
	$("#buildmenu").children().each(function() {
		$(this).removeClass().addClass("container");
		var cost = $(this).find(".cost").text().substring(1);
		if(parseInt(cost,10) > parseInt(money,10)) {
			$(this).addClass("expensive");
		}
	});
	$(".money").text(money);
}