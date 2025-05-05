function createCounter(start) {
    let count = start;
  
    return {
      increment() {
        count++;
      },
      decrement() {
        count--;
      },
      getValue() {
        return count;
      }
    };
  }
  const counter = createCounter(5);
  counter.increment();
  counter.increment(); 
  counter.decrement(); 
  console.log(counter.getValue()); 
    