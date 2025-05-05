let arr=[
    "apple",
    { fruit: "banana" },
    "apple",
    { fruit: "orange" },
    "banana",
    "orange",
    { fruit: "banana" }
  ];  
  let narr=[];
  for(let i=0;i<arr.length;i++){
    if(typeof arr[i]==="string"){
        // console.log(data[i]);
        narr.push(arr[i]);
    }else{
       narr.push(arr[i].fruit);
    }
  } 
    // console.log(narr);
    let nobj={};
    for(let i=0;i<narr.length;i++){
      if(nobj[narr[i]]) nobj[narr[i]]++;
      else nobj[narr[i]]=1;
    }
      console.log(nobj);