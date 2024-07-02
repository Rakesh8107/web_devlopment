const arr = [10 , 6, 8, 9];
let max = arr[0];
let i = 0;
do{
    if(arr[i]>max){
        max = arr[i];
    }
        
}while(i<arr.length);
console.log(max);