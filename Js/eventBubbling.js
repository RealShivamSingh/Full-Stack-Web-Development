let div=document.querySelector("div");
let ul=document.querySelector("ul");
let li=document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("Div was click")

});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was click")

});

for(lis of li){
    lis.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("Li was clicked");

    });
}