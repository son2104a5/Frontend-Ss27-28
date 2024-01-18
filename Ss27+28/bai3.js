let arr = [1,2,3,4,5,6,7,8,9,11,12,14,15,17,18];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        arr.splice(i, 2);
    }
}
console.log(arr);