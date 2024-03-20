const input = require("readline-sync")
let m = input.questionInt("enter the number array size: ");

let n = input.questionInt("enter the number array size: ");
let b =[];
 let a=[];

let s=m+n
 let c =[];
let i = 0;
while(i<m)
{
    a[i]=input.questionInt("enter the number: ")
    i++;
}
let j=0;
while(j<n)
{
    b[j]=input.questionInt("enter the number: ")
    j++;
}
let f=0
while(f<s)
{
    c[f]=0
    f++;
}
let d=0;
while(d<m)
{
    c[d]=a[d]
    d++
}
let k=0;
while(d<s)
{
    c[d]=b[k]
    k=k+1;
    d++;
}
console.log(c);

