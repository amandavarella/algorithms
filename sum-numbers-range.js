function sumAll(arr) {
 
    //https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

    //sorting the two numbers
    let newArr = arr.sort((a, b)=> a - b);
    
    //getting the number of elements of the Array
    let numElem = arr[1] - arr[0] + 1;
    
    //creating an array with all the numbers on the interval
    newArr = Array.from(Array(numElem),(currentValue, index) => index + arr[0]);
    
    //summing all the Elements in the Array
    let result = newArr.reduce((acum, elem) => acum + elem, 0);
    
    return result;
}