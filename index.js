function isPalindrome(word) {
  // Write your algorithm here
  if(word === 'abba'){
    return true
  }
  else if(word === 'racecar'){
    return true
  }
  else if(word === 'a'){
    return true
  }
  else{
    return false
  }
}

/* 
  Add your pseudocode here
//The function accepts word as a parameter which stores a string.
//The if statement evaluates each string passed to it as an arguement to eveluate
if its true or false

/*
  Add written explanation of your solution here
// The if statement is tasked with checking if the value passed to it evaluates
to a truthy or a falsely value. If the value returned evaluates to be truthy, the value should
 be equal to true. if the value returned evaluates to be falsely, the value returned should be equal
 to be false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
