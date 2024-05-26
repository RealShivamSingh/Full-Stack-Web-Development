let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListener("Click",sayHello);
    btn.addEventListener("Click",sayName);
}
function sayHello(){
    alert("Hello");

}
function sayName(){
    alert("Shivam Singh");
}