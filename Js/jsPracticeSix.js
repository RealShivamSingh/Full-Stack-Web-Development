// 1st Problem
// Write ,a JavaScript function that returns array elements larger than a number
let arr=[8,9,4,2,6,7,9];
let num=5;
function gretestInArray(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
gretestInArray(arr,num);

//2nd Problem
// Write a JavaScript function to extract unique characters from a string.
//Example: str = “abcdabcdefgggh” ans = “abcdefgh”
let str = [abcdabcdefgggh];
function charFilter(str){
    for(let i=0;i<str.length;i++){
        let currStr=str[i];
        if(currStr==-1){
             ans+=currStr;
        }
        return ans;

    }
}
console.log(charFilter(str));
