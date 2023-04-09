// for(let i=1;i<=5;i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000*i);
// }


var nStr = "Geeks";
nStr = nStr.split("").reverse().toString().replace(/,/g,"");
console.log(nStr);