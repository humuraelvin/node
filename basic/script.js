

// console.log("REVERSING A NUMBER");

function reversingNum(number){
  let funcDigit = 0;

  while(number > 0){
      funcDigit = (funcDigit * 10) + (number % 10);
      number = Math.floor(number / 10); 
  }

  return funcDigit;
}

var number = 4567;
var reversedNum = reversingNum(number);
// console.log(`its reverse is ${reversedNum}`);

// console.log("OR");

function reversingNumber(num){

    numString = num.toString();
    let reversedNumber = "";

    for(var i = numString.length - 1; i >= 0; i--){
        reversedNumber += numString[i];
    }

    return parseInt(reversedNumber);

}

let numToReverse = 987654321;

let finalReversedNum = reversingNumber(numToReverse);

//  console.log(finalReversedNum);

// console.log("TESTING STRING ...");

function testString(word){
    
    var reverseWord = "";
    for(let i = word.length - 1; i>=0; i--){
        reverseWord += word[i];
    }
    return reverseWord;
}

let wordToReverse = "captain";

let itsReverse = testString(wordToReverse);


if(wordToReverse === itsReverse){
    //  console.log("The word is a palindrome");
}
else{
    // console.log("The word is not a palindrome");
}

// console.log("GENERATING COMBINATIONS OF the STRING ...");

function generateCombinations(word){

    let result = [];
    for(let i = 0; i<word.length; i++ ){
        for (let j = i+1; j <= word.length; j++) {
            result.push(word.slice(i, j));
            
        }
    }
    return result;
    
}

let inputString = "junk";
let combinations = generateCombinations(inputString);

// console.log(combinations);

// console.log("SORTING IN ALPHABETICAL ORDER ...")

function arrangeStringInAlphabeticalOrder(word){

    return word.split('').sort().join('');

}

let theWord = "educationisthebest";

let arrangedWord = arrangeStringInAlphabeticalOrder(theWord);

// 

function capitalizeTheFirstLetter(wordOrSentence){
    let words = wordOrSentence.split(" ");
    
    for(let i = 0; i<words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");

}

let inputedString = "javascript is the most comfortable languages among all software development languages";

let capitalizedString  = capitalizeTheFirstLetter(inputedString);

// console.log(capitalizedString);

function checkingLongestWord(string){

    let words = string.split(" ");
    let maxLength = 0;
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
       
        if(words[i].length > maxLength){
            maxLength = words[i].length;

            longestWord = words[i];
        }
        
    }

    return longestWord;
}

var sampleSentence = "Web Development Toutorial is the most comprehensively way of learning by software developers";

var longest = checkingLongestWord(sampleSentence);

// console.log(longest);

function countNbrOfVowels(string){

    let stringInLowerCase = string.toLowerCase();

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsCount = 0;

    for (let i = 0; i < stringInLowerCase.length; i++) {
        if (vowels.includes(stringInLowerCase[i])) {
            vowelsCount ++;
        }
        
    }

    return vowelsCount;
}

let sampleStr = "education";
let nbrOfVowels = countNbrOfVowels(sampleStr);

// console.log(nbrOfVowels);

function retunSecondLarge(arr){
    let large = arr[0];
    let secondLarge = arr[1]
   

    for (let i = 0; i < arr.length; i++) {
        // if(arr[i] > large){
        //     large = arr[i];
        // }
        if (arr[i] > large) {
            secondLarge = large;
            large = arr[i];
        } 
        else if (arr[i] > secondLarge && arr[i] !== large) {
           secondLarge = arr[i];
        }
    }
    return secondLarge;
    
}
function returnSecondSmall(arr){
    
    let small = arr[0];
    let secondSmall = arr[1];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < small){
            small = arr[i];
        }
        

        else if (arr[i] < secondSmall && arr[i] !== small) {
            secondSmall = arr[i];
        }
    }
    return secondSmall;
    
}


let sampleArr = [1, 2, 3, 4, 5];

let SecondLargest = retunSecondLarge(sampleArr);

let SecondSmallest = returnSecondSmall(sampleArr);

// console.log(SecondLargest);
// console.log(SecondSmallest);


function computeAllPositiveFactors(posInt){

     positiveFactors = [];
     for (let i = 0; i <= posInt; i++) {
        if(posInt % i == 0){
            positiveFactors.push(i);
        }
        
     }
      return positiveFactors;
}

let Integer = 12;

let itsFactors = computeAllPositiveFactors(Integer);

// console.log(itsFactors);

function extractUniqueChars(sentence) {
    let uniqueChars = "";
    for (let i = 0; i < sentence.length; i++) {
        
        if (uniqueChars.indexOf(sentence[i]) === -1) {
            uniqueChars += sentence[i];
        }
        
    }
    return uniqueChars;
}

let line = "hello";

let uniqueCharacters = extractUniqueChars(line);

// console.log(uniqueCharacters);

function countTheNumberOfOcurrencesForEachChar(linesentence){

    let letterCount = {};
    for (let i = 0; i < linesentence.length; i++) {
        let letter = linesentence[i].toLowerCase();
        if (letter.match(/[a-z]/)) {
            if(letterCount[letter]){
                letterCount[letter]++;
            }else{
                letterCount[letter] = 1;
            }
        }
        
    }
    let result = '';
    for (let letter in letterCount) {
        result += `${letter} = ${letterCount[letter]}`;
    }
  
    return result;
}

let lineString = "The meeting is done";

let numberOfOccurencesForEachLetter = countTheNumberOfOcurrencesForEachChar(lineString);

// console.log(numberOfOccurencesForEachLetter);

function searchWithBinarySearch(anArray, targetIndex){
    
    let left = 0;
    let right = anArray.length-1;

    while (left<=right) {
        let mid = Math.floor((left + right)/2);

        if (anArray[mid] === targetIndex) {
            return anArray[mid];
        }
        else if(anArray[mid] < targetIndex){
             left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }

    return "Element not Found";

}

let theArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

let iamTargetinIndexOf = 100;

let result = searchWithBinarySearch(theArray, iamTargetinIndexOf);

// console.log(result);

function countTheNumberOfOccurrences(stri, chara) {
    let charCount = 0;
    for (let i = 0; i < stri.length; i++) {
        
        let char =  stri[i].toLowerCase();
        if(char === chara){
            charCount++;
        }
    }

    return charCount;
}

let lineSentence = "Rwanda Coding Academy";

let targetLetterForItsOccurences = "c";

let itsOccurences = countTheNumberOfOccurrences(lineSentence, targetLetterForItsOccurences);

// console.log(itsOccurences);

function findTheFirstNotRepeatedChar(strig){

   

    for (let i = 0; i< strig.length; i++) {
       

      if (strig.indexOf(strig[i]) === strig.lastIndexOf(strig[i])) {
          return strig[i];
      }
       
    }

    return null;
}

let sent = "abbacddcef";
let firstUinqueChar = findTheFirstNotRepeatedChar(sent);

// console.log(firstUinqueChar);


//BUBBLE SORTING ALGORITHM

function bubbleSortingAlgorithm(anArr) {
     for (let i = 0; i < anArr.length; i++) {
        for (let j = 0; j < anArr.length - i - 1; j++) {
            if (anArr[j]<anArr[j+1]) {
                let  temp = anArr[j];
                anArr[j] = anArr[j+1];
                anArr[j+1] = temp;
            }
            
        }
        
     }

     return anArr;
}

var sampleArray = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

var bubbleSortedArray = bubbleSortingAlgorithm(sampleArray);

// console.log(bubbleSortedArray);

function findTheLongestCountryName(countryNames){

    let longestCountryName = "";
     for (let i = 0; i < countryNames.length; i++) {
        
         if (countryNames[i].length > longestCountryName.length) {
             longestCountryName = countryNames[i];
         }
        
     }

     return longestCountryName;
}

let someStates = ["Germany", "Australia", "United States Of America"];

let longestName = findTheLongestCountryName(someStates);

// console.log(longestName);

function functionCallingAnotherFunction(callback) {
      callback();
}

function myFunction(){
    // console.log("The Function has been called by other Function");

}

// functionCallingAnotherFunction(myFunction);

function returningTheFunctionName(func) {
    return func.name;
}

function randomFucntionName(num){
   return num ** 2;
}


// INSERTION SORTING ALGORITHM

function sortByInsertionSortAlgorithm(aray){

    const length = aray.length;

    for (let i = 0; i < aray.length; i++) {
        const key = aray[i];

        let j = i - 1;

        while (j >= 0 && aray[j] > key) {
            aray[j+1] = aray[j];
            j--;
        }

        aray[j+1] = key;

        
    }

    return aray;

}

const sampleAray = [3, 6, 0, 1, 4, 7, 2, 5, 9, 8];

const insertionSortedArray = sortByInsertionSortAlgorithm(sampleAray);

console.log(insertionSortedArray);



// console.log(returningTheFunctionName(randomFucntionName));

//END OF CONSOLE QUESTIONS
// NOW HEAD TO JAVASCRIPT DOM
