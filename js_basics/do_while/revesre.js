const str = "hello";
let newstr = " ";
i=str.length-1;
do{
  newstr+= str[i];
  i--
}while(i>=0)
console.log(newstr);