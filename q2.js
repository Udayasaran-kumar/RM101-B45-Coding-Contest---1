let obj={
    "Alice": 56,
    "Bob": 34,
    "Charlie": 78,
    "Diana": 29
  };
 
  function checker(obj){
    let nobj={};
    for(let key in obj){
      if(obj[key]>=40){
          nobj[key]="Pass";
      }else{
          nobj[key]="Fail";
      }
    }
    return nobj;
  }
let res = checker(obj);
console.log(res);