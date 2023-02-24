// >>> Question 1: 
// Write a function called addEvenNums
// The function should allow you to iterate over an array of numbers that is passed into the argument
// If the numbers in the array are even, push them to an empty array 
// Sum ONLY the even numbers in your array
// Print the sum to the console
// Print your new array of even numbers. Are all the elements even?

//>>>Test Cases (function calls)
addEvenNums([2, 4, 6]); //expected output: 12
addEvenNums([1,2,3,4,5,6,7,10,11,21,23,21,22,90,100]); //expected output: 234
addEvenNums([15,6,7,10,11,21,23,21,22,90,100, 20, 21, 34, 32, 67]); //expected output: 314


// >>> Question 2
// Write a function called greetUser that prompts user for their first and last name
// Your function will take one parameter called timeOfDay
// Your function will pass in one argument (string) that determines the time of day (morning, afternoon, evening)
// If its morning, alert them with good morning (using their first and last name provided from the prompt)
// If its afternoon, alert them with good afternoon (using their first and last name provided from the prompt)
// If its evening, alert them with good evening (using their first and last name provided from the prompt)
// If no timeOfDay is not known (not morning, afternoon or evening), simply alert with 'Hello' (using their 
// first and last name provided from prompt)

//>>>Test Cases (function calls)
greetUser('morning');
greetUser('afternoon');
greetUser('evening');


// Define a function named timeOfDay.
// Inside the function, create a new Date object (see hint below if you would like)
// Create a variable and assign it a method that also gets the hours (this should output a number between 0-23). 
// (see hint below if you would like)

// DOCUMENTATION ON DATE OBJECT
// https://www.w3schools.com/jsref/jsref_gethours.asp


// Use conditional statements to check if the value of hours falls within certain ranges. be sure to return the string:
// If hours is between 0 and 12, return the string 'morning'.
// If hours is between 12 and 18, return the string 'afternoon'.
// If hours is between 18 and 24, return the string 'evening'.
// If hours is not within any of these ranges, return null.

// How could you use the returned value from the timeOfDay function with your greetUser function? 
// Could you call the timeOfDay function in the argument of the greetUser function?