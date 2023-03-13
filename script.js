function firstLetterName(name) {
    const firstLetter = name[0]; 
    alert(`The name ${name} starts with the letter ${firstLetter}`);
  }
  
  firstLetterName('Luis');
  
  function divisibleByTwo(number) {
    return number % 2 === 0;
  }
  
  console.log(divisibleByTwo(4)); 

  function largestNum(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  
  console.log(largestNum([1, 4, 2, 3, 91, 40, 215]));
  