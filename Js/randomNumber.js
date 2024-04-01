function rollDice(){
    let rand=Math.floor(Math.random() *6)+1;
    console.log(rand);
}
rollDice(); 

 
 //Functions with arguments 
 function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
 }
 printInfo("Shivam",22);
 printInfo("Raju",30);

 //Avegrage of 3 numbers
 function aveg(a,b,c){
    let total=(a+b+c)/3;
    console.log(total);
 }
 aveg(5,8,9);