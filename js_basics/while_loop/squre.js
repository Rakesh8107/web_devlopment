let arr = [1,2,3,4];
let newarr= " ";
let i=0;
while(i<arr.length){
    (newarr+= arr[i] * arr[i]+" ");
    i++;
}
console.log(newarr);