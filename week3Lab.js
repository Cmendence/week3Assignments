//
// Copyright (c) 2023 Promineo Tech
// Author:  Promineo Tech Academic Team
// Subject:  Arrays & Functions Lab
// JavaScript Lab 3 - Arrays & Functions Lab Questions
//


// Question 1: alphabetString
console.log(' \n Question 1: alphabetString \n ');
let alphabetString = 'abcdefghijklmnopqrstuvwxyz'; 
//Convert the alphabetString to an array and print it to the console (see split method)

// YOUR CODE BELOW THIS LINE
letter = alphabetString

for (letter in alphabetString){
    console.log(letter);
}


let letters = alphabetString.split('');

console.log(letters)

// Question 2: alphabetArray
console.log(' \n Question 2: alphabetArray \n ');
let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Reorganize the alphabet array from z to a (see built-in array "reverse" method)
// Convert it to a string and print it to the console (see join method)

// YOUR CODE BELOW THIS LINE


alphabetArray = alphabetArray.reverse();
console.log(alphabetArray);

alphabetArray = alphabetArray.join(' ')



// Question 3: array1
console.log(' \n Question 3: array1 \n ');
let array1 = [1, 5, 6, 9, 10, 14];
//Using array1 above, solve the following questions
  

// YOUR CODE BELOW THIS LINE

    // a. Print the 3rd element in array1  
console.log(array1[2]);

    // b. Print the last element in array1
console.log(array1[array1.length -1]);

    // c. Add 16 and 3 to array1 (see built-in array "push" method)

array1.push(16, 3);

  //          and Print the updated array.
console.log(array1);

    // d. Print the 3rd element again.
console.log(array1[2]);

// e. Print the last element again. Did it change from earlier? 
    //Are you able to get the last element that was just added?
console.log(array1[array1.length -1]);



// Question 4: Todo List
console.log(' \n Question 4: Todo List \n ');
// In this task, you will do multiple tasks. Print results to the console after every change to the array(s).
// YOUR CODE BELOW THIS LINE

 // a. Create a variable called myTodoList that holds an empty array
 let myTodoList = []

 // b. Add three todo items (elements) to the array using a built-in array method
 myTodoList.push('Gym', 'Tan', 'Laundry');
 
 console.log(myTodoList);
 
  // c. Remove the second item (element) in the array
 
  todoListIndex =[]
  myTodoList.splice(1,1);
 
  console.log(myTodoList);
 
 // d. Create another array, yourTodoList, and add two todo items
 
 let yourTodoList = ['Shake', 'Bake'];
 
 // e. Create another array, ourTodoList
 
 let ourTodoList = ['Trash', 'Dishes', 'Vacuum'];
 
 // f. Combine myTodoList and yourTodoList into ourTodoList (see built-in array "concat" method or "spread"
 //    operator for an idea how to accomplish this task). Either method is fine.
 
 ourTodoList = [...ourTodoList,...yourTodoList, ...myTodoList];
 
 console.log(ourTodoList);

/*
 * Video 2:  FUNCTIONS
 */




// Question 5:  isEven
console.log(' \n Question 5: isEven \n ');
// Create a function called "isEven" 
    // This function takes in one parameter (x). x will be a number
    // This function will return true if x is even and false if x is odd
    // Numeric value is given as an argument to functions below
    //
    // ** Hint: use the % operator to determine if a number is even or odd **

//YOUR CODE BELOW THIS LINE


function isEven(x){
    if (x % 2 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(isEven(30));


// Sample test cases for the above isEven function (uncomment to test)
// console.log(isEven(2)); //should return true
// console.log(isEven(3)); //should return false
// console.log(isEven(4)); //should return true
// console.log(isEven(5)); //should return false





// Question 6: addingMachine
console.log(' \n Question 6: addingMachine \n ');
// Create a function called addingMachine
    // This function will take in one parameter (array)
    // This function will add up all the numbers from the array 
    //		and return the sum of all the numbers. 
    // An array of numbers is given as an argument to the function below
    //
    // ** Hint: use a for loop to iterate through the array 
    //		and add each element to a variable that holds 
    //		the sum of all the numbers **

// YOUR CODE BELOW THIS LINE


// const arr1 = [29.76, 41.85, 46.5, 87.11];

// const sum = arr1.reduce((total, amount) => total + amount); 


let arrSum = 0

const arr1 = [29.76, 41.85, 46.5, 87.88];
function addingMachine(array){
    let arrSum = 0
    for (i = 0; i < array.length; i++){
      arrSum += array[i];
    } return arrSum
} 

console.log(addingMachine(arr1))




// const sum = arr1.reduce((total, amount) => total + amount); 

// Sample test cases for the above addingMachine function (uncomment to test)
// console.log(addingMachine([1, 2, 3, 4, 5])); //should return 15
// console.log(addingMachine([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //should return 55
// console.log(addingMachine([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])); //should return 120




// Question 7: reverse
console.log(' \n Question 7: reverse \n ');
// Create a function called "reverse" 
    // Function takes in one parameter (x)
    // This function will return the opposite of whatever is passed in
    // If it's a boolean, return the opposite
    // If it's a number, return the reverse (i.e. 1234 becomes 4321)
    // If it's a string, return the reversed string (i.e. 'hello' becomes 'olleh'
    // If it's an array, return the reversed array with each element reversed 
    //		(i.e. ['hello', 'world'] becomes ['dlrow', 'olleh']) 
    //		** Hint: see Array.isArray() method **
    // If it's not a boolean, number, string, or array, return false
    //      ** Hint - use the typeof operator to determine the type 
    //                of the parameter **
    // The arguments (test cases) are given below

// YOUR CODE BELOW THIS LINE

function reverse(x){
    
    // If it's a boolean, return the opposite
    if (typeof x === 'boolean'){
       return !x
    // If it's a number, return the reverse (i.e. 1234 becomes 4321)   
    } else if (typeof x === 'number'){
        return x.toString().split('').reverse().join('')
        
    // If it's a string, return the reversed string 
    //(i.e. 'hello' becomes 'olleh'
    } else if (typeof x === 'string'){
        return x.split("").reverse().join("")

//split the string into an array
        x = x.split('');

       console.log(x);
//reverse the new array
       x = x.reverse();

       console.log(x);
//join each element of the array
       x = x.join('');

       return x;
       
    // If it's an array, return the reversed array with each element reversed 
    //	(i.e. ['hello', 'world'] becomes ['dlrow', 'olleh']) 
    } else if (Array.isArray(x)){
        x = x.reverse();
        return x;
    } else {
        return false;
    }

}


// Sample test cases for the above reverse function (uncomment to test)
// console.log(reverse(1234)); //should return 4321
// console.log(reverse('hello')); //should return 'olleh'
// console.log(reverse(true)); //should return false
// console.log(reverse([1, 2, 3, 4])); //should return [4, 3, 2, 1]




// Question 8: removeElements
console.log(' \n Question 8: removeElements \n ');
// Create a function called removeElements - the purpose of this 
//		function is to remove all elements from an array
    // This function will have one parameter (array)
    // In the body of the function, create a while loop. While the array is not empty, remove an element
    // Within the body of the loop, use the pop() method. This pop method should run until the array is empty
    // Return the empty array
    
// YOUR CODE BELOW THIS LINE
numArr = [1,2,3,4,5,6,7]

function removeElements(array){

    while (array.length > 0){
      array.pop()  
      console.log(array)
    }
    return array
}

console.log(removeElements(numArr));


// Sample test cases for the above removeElements function (uncomment to test)
// console.log(removeElements([1, 2, 3, 4, 5])); //should return [] (an empty array)




// Question 9: whichArrayIsLonger
console.log(' \n Question 9: whichArrayIsLonger \n ');
// Create a function called whichArrayIsLonger. The purpose of this function is to determine 
//which array has the most elements
    // This function takes in two parameters (array1, array2)
    // You can use conditional statements to determine which array has the most elements
    // This function will return the array that has the most elements
    // If the arrays are the same length, return false
    // Two arrays are given as arguments to the function below
    //
    // ** Hint: check out the array.length property to determine 
    //		the length of the array **

// YOUR CODE BELOW THIS LINE
bork1 = [1,2,3,4,5,6]
bork2 = [1,2,3,4,5]
function whichArrayIsLonger(array1,array2){

if (array1.length === array2.length){
    return false;
} else if (array1.length > array2.length){
    return array1;
} else {
    return array2;
}

}

console.log(whichArrayIsLonger(bork1,bork2));




// Sample test cases for the above whichArrayIsLonger function (uncomment to test)
// console.log(whichArrayIsLonger([1, 2, 3, 4, 5], [1, 2, 3, 4])); //should return [1, 2, 3, 4, 5]
// console.log(whichArrayIsLonger([1, 2, 3, 4], [1, 2, 3, 4, 5, 6])); //should return [1, 2, 3, 4, 5, 6]
// console.log(whichArrayIsLonger([1, 2, 3, 4], [1, 2, 3, 4])); //should return false (because they are the same length)



