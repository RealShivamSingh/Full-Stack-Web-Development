let arr=[7,8,9,4,5,6];

arr.forEach(function(pel){
    console.log(pel);
});



let arr2=[{
    name:"Shivam Singh",
    marks:95,
},{
    name:"Priya",
    marks:85,

},{
    name:"Shyam",
    marks:75,
}];

arr2.forEach((student) =>{
    console.log(student.marks);
    console.log(student.name);
});



let student=[{
    name:"Shivam Singh",
    marks:95,
},{
    name:"Priya",
    marks:85,

},{
    name:"Shyam",
    marks:75,
}];

let gpa=student.map((el) =>{
    return el.marks/10;

});
console.log(gpa);

//filter function
console.log("Filter Function");

let array=[7,8,1,2,46,9,5,2];
let ans=array.filter((el)=>{
    return el%2==0;
});
console.log(ans);