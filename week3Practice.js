// Questions 1
/*  Let's Shop 'Til We Drop!: Write a function named checkout that accepts 2 parameters named cardBalance and price. If the price is more than the cardBalance, return the message "Sorry, can't afford it."; otherwise, return the message
*    "Thanks for your purchase! Your new card balance is [new balance]."
*   For example, checkout(100, 50) should return "Thanks for your purchase! Your new card balance is 50."
*   and checkout(100, 200) should return "Sorry, can't afford it."
*/

// function checkout(price, cardBalance){
//     if (price > cardBalance){
//         return "Sorry, you can't afford it."
//     } else {
//         return "Thanks for your purchase! Your new card balance is " + (cardBalance - price) + "."
//     }

// }

// console.log(checkout(100,200))

// Question 2
/**
 * Let's Count Up!: Write a function named loopUntilX that takes one parameter x.
 * Within the function, write a loop that loops x times, starting at 0.
 *  Within the loop, print the message "Counting up: [current iteration number]!" 
 * to the console. Once the loop is done, return the message "Countdown complete! Blast off!"
 * For example, loopUntilX(5) should print:
 */

// function loopUntilX(x){
//     for (i = 0; i <= x; i++){
//         console.log(`Counting up: ${i}!`)
//     } return 'Countdown complete! Blast off!'
// }

// console.log(loopUntilX(8))


// Question 3
/** 
 * Can We Afford A Trip?: Write a function named affordTrip that accepts 2 parameters named budget and tripCost. If the tripCost is more than the budget, return the message "Sorry, we can't afford this trip."; otherwise, return the message "Yay! We can afford this trip and we still have [remaining budget] left."
For example, affordTrip(1000, 800) should return "Yay! We can afford this trip and we still have 200 left."
and affordTrip(1000, 1200) should return "Sorry, we can't afford this trip." */

// function affordTrip(budget,tripCost){
//     if (tripCost > budget){
//         return 'Sorry, we can\'t afford this trip';
//     } else {
//         return `Yay! We can afford this trip and we still have ${budget - tripCost} left.`
//     }
// }

// console.log(affordTrip(1000,145))