console.log(`1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.`);

// Creating an array called ages with the assigned values
let ages = [3,9,23,64,2,8,28,93];
//Printing array
console.log(ages);

console.log(`a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
- Do not use numbers to reference the last element, find it programmatically.
- ages[7] - ages[0] is not allowed!`)

//Printing the subtraction. Using ages.length-1 to grab the last value in the array. We use the -1 because the first value is at position 0 instead of 1
//ages[0] will pull the first value at position 0
console.log(ages[ages.length-1] - ages[0]);

console.log(`b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).`)

//Using the push command to add a new value at the end of the array
ages.push(100);
//Printing array
console.log(ages);
//Subtracting using the previous code which will now pull the added value in the length-1 position
console.log(ages[ages.length-1] - ages[0]);

console.log(`c. Use a loop to iterate through the array and calculate the average age.`)

//Creating function that will loop through the array and add each value. Function will return the sum divided by array length to provide the average
function average(array) {
    let sum = 0
    for (let i = 0; i <array.length; i++) {
    sum += array[i];
} return sum / array.length;
}
//Printing the average
console.log(average(ages));

console.log(`2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.`)

//Creating array called names with the assigned value
let names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];
//Printing array
console.log(names);

console.log(`a. Use a loop to iterate through the array and calculate the average number of letters per name.`)

//This loop will go through the array and sum up the lengths of each element
let sum = 0;
for (let i = 0; i < names.length; i++) {
    sum += names[i].length;
}
//Setting nameAverage variable to the result of the function divided by the number of elements in the names array
let nameAverage = sum / names.length;
//Printing average
console.log(nameAverage);

console.log(`b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`)

//Creating an empty string
let nameString = ''
//Loop will go through array and concatenate the elements with a space in between
for (let i = 0; i < names.length; i++) {
    nameString += names[i] + ' ';
}
//Printing the new string with the concatenated names
console.log(nameString);

console.log(`3. How do you access the last element of any array?`)

console.log("By using array[array.length-1]. names[names.length-1] is " + names[names.length-1]);

console.log(`4. How do you access the first element of any array?`)

console.log("By using array[0]. names[0] is " + names[0]);

console.log(`5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array`)

//Creating empty nameLengths array
let nameLengths = [];

//Loop will go through the names array and push the name lengths to the empty array
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
//Printing the list of name lengths
console.log(nameLengths);

console.log(`6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`)

//Function will loop through an array and sum up the values
const sumArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
//Printing the sum of the nameLengths array
console.log(sumArray(nameLengths));

console.log(`7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`)

//Loop starts with an empty string and each loop adds the word value until it hits the number value of loops
const repeat = (word,number) => {
    let string = ''
    for (let i = 0; i < number; i++) {
        string += word;
    }
    return string;
};
//Printing result
console.log(repeat('Hello',3));

console.log(`8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.`)

//Function will take two inputs and return them with a space in between
const createFullName = (a,b) => {return `${a} ${b}`};
//Entering my first and last name into the function
console.log('London','Doby');

console.log(`9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`)

//Function starts like the previous sumArray function but adds an if statement that will return true if the sum is greater than 100 and false otherwise
const arraySumCheck = (array) => {
    let sum = 0
    for (let i = 0; i <array.length; i++) {
    sum += array[i];
} if (sum > 100) {
    return true;
} else {
    return false;
}
}
//Testing function with the nameLengths and ages arrays
console.log(arraySumCheck(nameLengths));
console.log(arraySumCheck(ages));

console.log(`10. Write a function that takes an array of numbers and returns the average of all the elements in the array.`)

function average(array) {
    let sum = 0
    for (let i = 0; i <array.length; i++) {
    sum += array[i];
} return sum / array.length;
}
console.log(average(nameLengths));

console.log(`11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`)

//Function compares the results of running the arrays through the previously defined average function and returns true if array1 has the higher average
const averageComparison = (array1,array2) => {
    if (average(array1) > average(array2)) {
        return 'true';
    } else{
        return 'false';
    }
}

console.log(averageComparison(ages,nameLengths));
console.log(averageComparison(nameLengths,ages));

console.log(`12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`)

//Function has an if statement that will check if both the boolean is true and the number comparison is also true. Will return false in any other instance
const willBuyDrink = (isHotOutside,moneyInPocket) => {
    if (isHotOutside && (moneyInPocket > 10.50)) {
        return 'true';
    } else {
        return 'false';
    }
}

console.log(willBuyDrink(false,11.00));

console.log(`13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`)

let bills = [200, 50, 23, 188];

//Function will compare money in your account to an array containing upcoming bills. If bank value is larger than upcoming bills, the function
//will let you know that you can order. If not, it will warn that it wouldn't not be a fiscally responsible decision
const canIOrder = (moneyInBank,billTotal) => {
    if (moneyInBank > sumArray(billTotal)) {
        return "Yes, I can order";
    }
    return "No, I can't order. It wouldn't be fiscally responsible.";
}

console.log(canIOrder(500,bills));
console.log(canIOrder(200,bills));