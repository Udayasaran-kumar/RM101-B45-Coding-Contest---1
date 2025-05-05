let arr=[3,4];

function iterator(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            for(let j=arr[i];j>0;j--){
                console.log("#".repeat(j));
            }
        }else {
            for(let k=1;k<=arr[i];k++){
                console.log("*".repeat(k));
            }
        }
    }
}
iterator(arr);