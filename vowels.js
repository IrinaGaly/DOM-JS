const string = "Hello, how are you?";

const vowels = [ "a", "i", "i", "o", "u", "y"];
  
 const getVowels = filteringString => {
  let filteredVowels = "";

   for (let i = 0; i < filteringString.length; i++) {
       const currentLetter = filteringString[i].toLowerCase();

       if (vowels.includes(currentLetter)) {
         filteredVowels += currentLetter;
       }
      }
      return filteredVowels;
 }

 console.log(getVowels(string));
