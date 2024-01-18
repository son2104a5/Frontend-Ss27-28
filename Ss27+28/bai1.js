let arr = [1,2,3,4,5,6,8,9,183,73,64,13,45];
let max=0, min=10;
for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log("Phần tử lớn nhất và nhỏ nhất trong mảng lần lượt là:", max, min)