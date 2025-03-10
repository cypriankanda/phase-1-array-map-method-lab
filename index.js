// Original array of tutorials
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map(tutorial => {
    // Split the tutorial title into individual words
    const words = tutorial.split(' ');
    
    // Map through each word to capitalize the first letter
    const titleCasedWords = words.map(word => {
      // Take the first character and convert to uppercase, then add the rest of the word
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    // Join the words back together with spaces
    return titleCasedWords.join(' ');
  });
}

// Example usage
const titleCasedTutorials = titleCased();
console.log(titleCasedTutorials);