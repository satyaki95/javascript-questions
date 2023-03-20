//input = [ [ 1, ’a’], [ 2, ’b’], [ 3, ’c’] ]   output = [ ‘a’, ‘b’, ‘c’ ]
// let a = [ [ 1, 'a'], [ 2, 'b'], [ 3, 'c'] ];
// let b = [];
// for(let i=0;i<a.length;i++){
//     b.push(a[i][1]);
// }
// console.log(b);

let inputt = [
    {
        val:1,
        str:'a'
    },
    {
        val:2,
        str:'b'
    },
    {
        val:3,
        str:'c'
    },
]
let arre=[]
inputt.map((item)=>{
    arre.push(item.str);
})
console.log(arre);

//take out  the number in the string ex: string abc = “abjhb1234knkn” output: 1234.

let abc = "abjhb1234knkn";
let numarry=['1','2','3','4','5','6','7','8','8','9','0'];
let arr=abc.split('');
let arr2 = [];
let numm=arr.filter((item)=>{
    checknum(item);
})
function checknum(i){
    if(i=="1"||i=="2"||i=="3"||i=="4"||i=="5"||i=="6"||i=="7"||i=="8"||i=="9"||i=="0"){
                arr2.push(i);
    }
}
let str = arr2.toString();
console.log(str.replaceAll(',',''));
let numm2=arr.filter((item)=>{
    numarry.includes(item)
})

