let arr = [1,3,2,4,6,8,7,9,11,13,23,54,22];
let temp,i=0,index;
console.log("Mảng ban đầu:", arr);
do{
    index=Math.floor(Math.random() * arr.length) + 1;
    temp=arr[i];
    arr[i]=arr[index];
    arr[index]=temp;
    i++;
}while(i>arr.length);
console.log("Mảng sau khi xáo trộn:", arr);