// // 1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

// let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// console.log(ages);

// // 1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.  

// console.log(ages[ages.length -1] - ages[0]);

// // Do not use numbers to reference the last element, find it programmatically.
// // ages[7] – ages[0] is not allowed!
// // 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

// ages.push(37);

// console.log(ages);

// // 1c. Use a loop to iterate through the array and calculate the average age. 

// let arrayTotal = 0
// for (let i = 0; i < ages.length; i++){
//     arrayTotal += ages[i];
//     console.log(arrayTotal)
// }

// console.log(arrayTotal / ages.length);

// // 2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// // 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 

// let namesTotal= 0
// let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// for (let i = 0; i < names.length; i++){
    
//     namesTotal += names[i].length;
//     console.log(namesTotal)
// }

// console.log(namesTotal / names.length);


// // 2b. Use a loop to iterate through the array again and concatenate 
// //all the names together, separated by spaces. 

// let stringNames = ''
// for (let items of names){
//    stringNames += items + ' ';
   
// }

// console.log(stringNames)

// // 3.  How do you access the last element of any array?

// console.log(names[names.length -1]);

// // 4.  How do you access the first element of any array?

// console.log(names[0]);


// // 5.  Create a new array called nameLengths. Write a loop to iterate 
// // over the previously created names array and add the length of each name
// //  to the nameLengths array.

// // For example:

// // let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// // let nameLengths = [5, 3, 4];             // create a new array

// function getNameLengths(arr){
//     let nameLengths = []
    
//     for (let i = 0; i < arr.length; i++){
//         nameLengths.push(arr[i].length);
//     }
//     return nameLengths
//     }
    
//     console.log(getNameLengths(names))

// // 6.  Write a loop to iterate over the nameLengths array and 
// //calculate the sum of all the elements in the array. 

// let nameLengths = 0

// for (let i = 0; i < names.length; i++){
//     nameLengths += names[i].length;

// }

// console.log(nameLengths);

// // 7.  Write a function that takes two parameters, word and n, 
// // as arguments and returns the word concatenated to itself n number 
// // of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function
// //      to return ‘HelloHelloHello’).

// function concat(word, n){
//     let names = '';
//     for (let i = 0; i < n; i++){
//        names +=word
//     } return names
// }

// console.log(concat('bork', 3))

// // 8.  Write a function that takes two parameters, firstName and lastName, 
// // and returns a full name.  The full name should be the first and the last 
// // name separated by a space.

// const fullName = (firstName,lastName) => {
//     return `${firstName} ${lastName}`;
// }

// console.log(fullName('Margaret','Thatcher'));

// // 9.  Write a function that takes an array of numbers and returns true 
// // if the sum of all the numbers in the array is greater than 100.

// let myArray1 = [16, 62, 15, 6];
// let myArray2 = [10, 15, 20, 30, 50];

// function greatArray(arr){
//     let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
    
// }

// if (sum >=100){
//     return true;
// } else {
//     return false;
// }
// }

// console.log(greatArray(myArray1));

// // 10.  Write a function that takes an array of numbers and returns 
// //the average of all the elements in the array.

// function avgArray(arr){
//     let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
    
// }
// return sum / arr.length;
// }

// console.log(avgArray(myArray1));

// // 11.  Write a function that takes two arrays of numbers and 
// // returns true if the average of the elements in the first array is 
// // greater than the average of the elements in the second array.

// function compareArray(arr1,arr2){
//     let sum1 = 0;
//     let sum2 = 0;

// for (let i = 0; i < arr1.length; i++) {
//     sum1 += arr1[i];
// }

// for (let i = 0; i < arr2.length; i++) {
//     sum2 += arr2[i];
// }

// if ((sum1 / arr1.length) > (sum2 / arr2.length)){
//     return true;
// } else {
//     return false;
// }
// }


// console.log(compareArray(myArray1,myArray2));

// // 12.  Write a function called willBuyDrink that takes a 
// // boolean isHotOutside, and a number moneyInPocket, and 
// // returns true if it is hot outside and if moneyInPocket is greater than 10.50.

// isHotOutside = false

// function willBuyDrink(isHotOutside, moneyInPocket){
//     if (isHotOutside && moneyInPocket > 10.50){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(willBuyDrink(isHotOutside, 11))

// 13.  Create a function of your own that solves a problem. 

// In comments, write what the function does and why you created it.


/* in the casino game Craps, there is a type of bet called a place bet. These bets pay different
depending on the difficulty in hitting the number. For the 6 and 8, you must bet increments of $6,
and every $6 pays $7. This function takes the bet amount and tells you wether or not it's a 
'proper bet'(increments of 6) and returns the bet amount and payout. If it is not a proper bet, 
the function will return "No bet! Improper amount" which is true to live casinos.
*/


// function placeSixOrEight(bet){
//     // if bet is greater than 6 and in increments of 6
//     if (bet >=6 && bet % 6 === 0){
//         //return the bet and payout string
//         return `That's a bet! ${bet} pays ${(bet / 6) * 7}`;
//     } else {
//         // if the bet does not meed the conditions
//         return 'No bet! Improper amount!'
//     }
// }

// console.log(placeSixOrEight(1500));


const placeNums = [4,5,6,8,9,10];

function placeBet(bet, num){
    let payout = 0
    //if bet is at least 6, is in increments of 6 and the numb is 6 or 8
    if (bet >=6 && bet % 6 === 0 && (num === 6 || num === 8)) {
        //every $6 pays $7
        payout = (bet / 6) * 7;
        return `That's a bet! ${bet} on the ${num} pays ${payout}`;
    //if bet is at least 5, is in increments of 5, and num is 5 or 9
    } else if (bet >=5 && bet % 5 === 0 && (num === 5 || num === 9)) {
        //every $5 pays $7
        payout = (bet / 5) * 7;
        return `That's a bet! ${bet} on the ${num} pays ${payout}`;
    //if bet is at least 5, is in increments of 5, and num is 4 or 10
    } else if (bet >=5 && bet % 5 === 0 && (num === 4 || num === 10)) {
        // every $5 pays $9
        payout = (bet / 5) * 9
        return `That's a bet! ${bet} on the ${num} pays ${payout}`;
    // if the number chosen is not a place bet number
    } else if(!placeNums.includes(num)){
        return 'Invalid Number'
    //if the bet does not meet the conditions above
    } else {
        return 'No bet! Not a proper amount!';
    } 
        
    }


console.log(placeBet(100,40));
