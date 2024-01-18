let arr = [1,1,2,3,4,2,4,6,23,6,44,4,7,2,6,8,1,8,4,3];
let count=0;
for(let i=0;i<arr.length;i++){
    count++;
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++;
        }
    }
    if(count==1){
        console.log(arr[i]);
        break;
    }
    count=0;
}