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

  let inputArray = [10, 21, 15, 21, 41];
  let outputArray = processArray(inputArray);
  console.log(outputArray); 

  function formatArrayStrings(Strings, Numbers) {
      const formattedStrings = [];
      for (let i = 0; i < Strings.length; i++) {
        const string = Strings[i];
        const number = Numbers[i];
        if (number % 2 === 0) {
          formattedStrings.push(string.toUpperCase());
        } else {
          formattedStrings.push(string.toLowerCase());
        }
      }
      return formattedStrings;
    }

    const originalStrings = ["That”,  “Super”, “And”, “Chair”, “Amanda"];
    const processedNumbers = [10, 21, 15, 21, 41]; 
    
    const formattedStrings = formatArrayStrings(originalStrings, processedNumbers);
    
    console.log("Original Strings:", originalStrings);
    console.log("Formatted Strings:", formattedStrings);

  