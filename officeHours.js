let myArrayofNumbers = [1,5,10,12,17,1236,3127]
let goalArray = []

for (let item of myArrayofNumbers){
    goalArray.push(item *2)
    
}
console.log(goalArray)

function doubleArray(arr){
    let goalArray = []
    for (item of arr)
    goalArray.push(item*2)
    return goalArray
}

console.log(doubleArray(myArrayofNumbers));