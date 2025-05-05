let arr=["*", "**", "***"];

function iterator(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
    for(let i=arr.length-1;i>=0;i--){
        console.log(arr[i]);
    }
}
iterator(arr);