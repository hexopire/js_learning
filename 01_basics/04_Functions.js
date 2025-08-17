

function printer(name) {
    for(let i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
    
}
const printer2 = (name) => {
    let found = false;
    let res=''
    for(let i = 0; i < name.length; i++) {
        if(name[i] === '_') {
            found = true;
            continue;
        }
        if(found && name[i]>= 'a' && name[i] <= 'z') {
            res+= name[i].toUpperCase();
            found = false;
        } else {
            res+= name[i];
        }
    }
    return res
}

console.log(printer2("kasuladevi_vinay_narayana_hari_narasimhaya"));


//Note:- In JS if fucntion does not return anything, it returns undefined by default
//username="Vinay" is a default parameter
//If we pass a value to the function, it will override the default parameter
//If we do not pass a value, it will take the default parameter value
//If we pass undefined or null, it will not take the default parameter value
//We can use default parameters to handle such cases
//We can also use if condition to check if the parameter is undefined or null
//We can also use console.log to print the message instead of returning it
function Login(username="Vinay") {
    if(username===undefined || username === null) {
        // return "Please enter a valid username";
        console.log("Please enter a valid username");
    }
    else {
        return `Welcome ${username}`;
    }
}
console.log(Login()); // Please enter a valid username

// function add(a=10,b=20) {
//     return a+b;
// }
// console.log(add())
