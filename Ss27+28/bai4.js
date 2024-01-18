let arr = [1,2,3,4,5,6,7,8,9,10];
let eArr = [];
let oArr = [];
let eIndex=0,oIndex=0;
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        eArr[eIndex]=arr[i];
        eIndex++;
    }else{
        oArr[oIndex]=arr[i];
        oIndex++;
    }
}
console.log(eArr);
console.log(oArr);