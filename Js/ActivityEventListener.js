let btns=document.querySelector("button");
btns.addEventListener("click",function() {
    //console.log(getRandomColor);
    let h1=document.querySelector("h1");
    let randomColor=getRandomColor();
    h1.innerText=randomColor;

    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor; 

    console.log("Color Updated");
});

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`
    return color;

}