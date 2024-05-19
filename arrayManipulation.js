function processArray(arr) {

    const newArr = [];
  
    for (const num of arr) {
      if (num % 2 === 0) {
        // Square the even number
        newArr.push(num * num);
      } else {
        // Triple the odd number
        newArr.push(num * 3);
      }
    }
  
    return newArr;
  }
  