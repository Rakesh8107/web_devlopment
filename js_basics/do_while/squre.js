const arr = [1,2,3,4];
let newarr = " ";
let i = 0;
do{
    (newarr+= arr[i]*arr[i]+" ");
    i++;
}while(i<arr.length);
console.log(newarr);