// let btn=document.querySelectorAll("Button");
// console.log(btn);

// function sayHello(){
//     alert("!hello");
// }
// btn.onClick=sayHello;

let btns=document.querySelectorAll("button");
for(btn of btns){
   btn.onclick=btt;
}
function btt(){
    alert("Hello")
}