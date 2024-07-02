const arr = ["hello", "", "world"];
let str = "";
let i=0;
do{
    str+= " "+ arr[i];
    i++
}while(i<arr.length)
console.log(str);