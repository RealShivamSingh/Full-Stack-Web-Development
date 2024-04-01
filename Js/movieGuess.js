const myMovie="Shole";
let guess=prompt("Guess my fav movie in bollywood");
while((myMovie!=guess) && (guess!='quit')){
    guess=prompt("Try again bro you are worng");
}
if(myMovie==guess){
    alert("Congo yr you are right");
}