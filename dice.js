function diceroller()
{
var times = [];
times[0] = document.getElementById('comp1').value;
times[1] = document.getElementById('comp2').value;
if (special1.checked == 1){
}
else
{
	times[2] = document.getElementById('comp3').value;
}
var rolls = document.getElementById('rolls').value;
//for (var i=0;i<number.length;i++)
//{ 
//    times[i] =  comparison1
//}

while (times.length > 0) {
    var n = 0;
    var checkpoint = times[n];
    var amount = 0;
    while (rolls > 0) {
        var dice = Math.floor(Math.random() * 6) + 1;
        if (dice >= checkpoint) {
            amount = amount + 1
        }
        rolls = rolls - 1;
    }
    times.shift();
    rolls = amount;
    amount = 0;
   // console.log(rolls);
    document.getElementById("output").value = rolls;
}
}
