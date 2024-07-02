const arr = [4, 8, 15, 16, 23, 42];
let sum = 0;
let i = 0;
do{
   sum+=arr[i];
   avg=sum/arr.length;
   i++
}while(i<arr.length)
console.log(avg);