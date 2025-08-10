console.log(Number('123'))      //  123
console.log(Number('123abc'))   //  Nan
console.log(Number(' '))        //  0
console.log(Number(true))       //  1
console.log(Number(false))      //  0
console.log(Number(null))       //  0
console.log(Number(undefined))  //  NaN
console.log(Number('1.23'))     //  1.23
console.log(Number('1e3'))      //  1000
console.log(Number('1.5e3'))    //  1500
console.log(Number('1.5e-3'))   //  0.0015
console.log(Number('1.5e+3'))   //  1500
console.log(Number('Infinity')) //  Infinity
console.log(Number('NaN'))      //  NaN
console.log(Number('null'))     //  NaN
console.log(Number('undefined')) //  NaN
console.log(Number('true'))     //  NaN
console.log(Number('false'))    //  NaN
console.log(Number('[]'))       //  0
console.log(Number('{}'))       //  NaN
console.log(Number('1,2,3'))   //  NaN
console.log(Number('1.2.3'))   //  NaN
console.log(Number('1e3.5'))   //  NaN


console.log(String(123))
console.log(String(true))
console.log(String(false))
console.log(String(null))
console.log(String(undefined))
console.log(String([1, 2, 3])) // "1,2,3
console.log(String({a: 1, b: 2})) // "[object Object]"


console.log(Boolean(1))         // true
console.log(Boolean(0))         // false
console.log(Boolean('hello'))   // true
console.log(Boolean(''))        // false
console.log(Boolean(null))      // false
console.log(Boolean(undefined)) // false
console.log(Boolean([]))        // true
console.log(Boolean({}))        // true
console.log(Boolean(NaN))       // false

console.log(parseInt('123'))    //  123
console.log(parseInt('123abc')) //  123
console.log(parseInt('abc123')) //  NaN
console.log(parseFloat('123.45')) //  123.45
console.log(parseFloat('123.45abc')) //  123.45
console.log(parseFloat('abc123.45')) //  NaN

console.log(isNaN('hello'))     // true
console.log(isNaN(123))         // false
console.log(isNaN(NaN))         // true
console.log(isNaN(undefined))  // true
console.log(isNaN(null))       // false
console.log(isNaN('123'))       // false
console.log(isNaN('123abc'))   // true
console.log(isNaN(true))       // false
console.log(isNaN(false))      // false
console.log(isNaN([]))         // false
console.log(isNaN([1, 2, 3])) // true
console.log(isNaN({}))         // true
console.log(isNaN([1]))        // false
console.log(isNaN([1, 2]))     // true

