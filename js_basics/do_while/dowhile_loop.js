const array = [1,2,3,4,5];
let sum = 0;
let i = 0;
do{
  sum+=array[i];
  i++;
}while(i<array.length);
console.log(sum);