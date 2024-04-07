console.log("Hi There");
setTimeout(() =>{
    console.log("Thakur Shivam Singh Here");
},4000);
console.log("Shivam Here");

//Set Interval function use for printing again and angain after the time limit
//Code
// console.log("Hey")
// setInterval(() =>{
//     console.log("Hi There")
// },2000);

//To stop this inverval fucntion we use cleariterval

let id=setInterval(() =>{
    console.log("Hey")
},2000);
//Now how to stop this interval
clearInterval(id);
