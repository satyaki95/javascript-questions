let arr = [2,9,3,0,8,3,3,2,9,1];

let n = 10;

for(let i=0;i<n;i++){
    let count = 0 ;
    for(let j = 0;j<n;j++){
        if(arr[j] == arr[i]){
            count++;
        }
    }
    if(count==1){
        console.log(arr[i]);
    }
}




