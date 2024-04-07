let arr=[4,5,6,7,8,9];
const arrAverage=(arr) =>{
    let total=0;
    for(let number of arr){
        total=+number;
    }
    return total/arr.length;
};
console.log(arrAverage(arr));

//2nd question
let num=4;
let isEven=(num) => num%2==0 ;