


function isPalindrome(inputStr) {
    // Convert string to lowercase to make the check case-insensitive.
    let lowerCaseStr = inputStr.toLowerCase();
    
    //split the string
    let splitStr= lowerCaseStr.split('')
    // Reverse the string and use the join() to show as a string and not in array format.
    let reversedStr =splitStr.reverse().join('');
    // Check if the original string is equal to the reversed string
    if (lowerCaseStr === reversedStr) 
    {
        console.log(`${inputStr} is a palindrome.`);
    } else {
        console.log(`${inputStr} is not a palindrome.`);
    }
}
const inputStr= prompt('Kindly enter a word to check if its palindrome or not: \n')
isPalindrome(inputStr);   
 
