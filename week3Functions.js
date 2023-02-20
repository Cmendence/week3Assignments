function myFunction(){
    for (let i = 0; i < 100; i++)
    console.log(i);
}


//myFunction()

function createFullName(firstName, lastName){
    return firstName + ' ' + lastName;
}

let fullName = createFullName('Peter', 'Boyle')

//console.log(fullName);

function greet(){
    console.log('hello there');
}

//greet()

const speak = function(name = 'Toad', time = 'night'){
    console.log(`Good ${time} ${name}`);
};

//speak()

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

//const area = calcArea(5);

//console.log(area);

//Function Syntax Example

//Beginning of the function
//nameOfFunction(parametersGoHere){
    //The body of the function ONLY when its called runs in here.

 //   return //Data on this return line outputs WHERE the function was called.
//} //End of the function

//Function Call Example
//nameOfFunction(dataIPassInBecomesTheParameterAbove); //Function is called here.



// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// }

// const area = calcArea(5);

// console.log('area is: ', area)



