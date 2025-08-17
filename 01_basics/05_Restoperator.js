

// Ther are scenariors where we use the Rest operator in js 

//1.IN function parameters
//The rest operator allows us to pass an indefinite number of arguments to a function
//It collects all the arguments passed to the function into an array
//This is useful when we want to create a function that can accept any number of arguments
//In this example, ...numbers collects all the numbers passed into the function and puts them into an array named numbers
function add(...numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(add(1, 2, 3, 4, 5)); //15
console.log(add(10, 20)); // 30
console.log(add(100, 200, 300, 400, 500, 600)); //2100

//2.In array destructuring

const fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];
//The rest operator can be used to collect the remaining elements of an array into a new array
const [firstFruit, secondFruit, ...remainingFruits] = fruits;
console.log(firstFruit); // apple
console.log(secondFruit); // banana
console.log(remainingFruits); // ['orange', 'mango', 'grape']

//3. In Object destructuring
const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    country: 'USA',
    occupation: 'Engineer'
};

const { name, age, ...otherDetails } = person;
console.log(name); // John
console.log(age); // 30
console.log(otherDetails); // { city: 'New York', country: 'USA', occupation