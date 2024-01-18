let arr = [];
let a = +prompt("nhập a");
let b = +prompt("nhập b");
let index=0;
if(a<b){
    for(let i=a+1;i<b;i++){
        arr[index]=i;
        index++;
    }
}else{
    for(let i=b+1;i<a;i++){
        arr[index]=i;
        index++;
    }
}
console.log(arr);