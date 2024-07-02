const arr = ["apple", "banana","cherry"];
let counter = " ";
i = 0;
do{
    counter+=arr[i].length+" ";
    i++;
}while(i<arr.length)
console.log(counter);