
const propName="name"
const Student = {
    name: "Vinay",
    age: 25,
    isActive: true,
    courses: ["JavaScript", "Python", "Java"],
    address: {
        city: "Hyderabad",
        state: "Telangana", 
        country: "India"
    },
    getDetails: function () {
        return `${this.name}, Age: ${this.age}, Active: ${this.isActive}`;
    }
}
console.log(Student[propName]); // Accessing property
console.log(Student.getDetails);// calling the value of the getDetails so we get [Function: getDetails]
console.log(Student.getDetails()); // Calling method
console.log(Student.address.city); // Accessing property

//Mutability means the object's contents can be changed without creating a new object. Even if you declare an object with const, you can still modify its properties. The const keyword only prevents you from reassigning the variable to a completely different object.//

const students = [
    { name: "Vinay", age: 25, isActive: true },
    { name: "Anil", age: 22, isActive: false },
    { name: "Ravi", age: 23, isActive: true }
]
students.push({ name: "Sita", age: 24, isActive: true }); // Adding a new student
console.log(students[2])
console.log(Student.hasOwnProperty("name")); // Checking if the property exists


//to create an object without any inherited properties (not even from Object.prototype), you can pass null as the prototype. This creates a "pure" object.

const emptyObject = Object.create(null);
emptyObject.name='Vinay';
console.log(emptyObject); // Outputs: {}
console.log(emptyObject.toString); // Outputs: undefined, as it has no inherited properties

const course = {
    coursename: "JavaScript",
    pricr: 1016,
    courseInstructor: "Kasuladevi Vinay",
}


//Object Destructuring
const { courseInstructor :instructor,pricr:price} = course
console.log(`the the price for the course teaching instrcutor is ${price}`); // Outputs: Vinay

//JSON 
// {
//     "name": "Vinay",
//         "age": 25,
//     "Sex":"Male"
// }
