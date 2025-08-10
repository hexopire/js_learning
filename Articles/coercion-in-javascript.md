# JavaScript Type Coercion — What, Why, and When

JavaScript is *dynamically typed*, which means variables don’t have fixed types.  
Sometimes, JavaScript will **automatically** convert a value from one type to another when needed.  
This is called **type coercion**.

---

## Types of Coercion

JavaScript coercion comes in **three main flavors**:

### 1. **To String**
When JS expects a string, it will try to convert other types into strings.

```js
String(123);       // "123" (Explicit)
123 + " apples";   // "123 apples" (Implicit)
[1, 2] + " apples"; // "1,2 apples"


2. To Number
When a numeric operation is required, JS converts values to numbers.

js
Copy
Edit
Number("42");   // 42 (Explicit)
"42" - 0;       // 42 (Implicit)
"23" > 2;       // true ("23" → 23)
true - 0;       // 1


3. To Boolean
When used in logical contexts (if, while, ||, &&), values are coerced to booleans.


Boolean([]);    // true
Boolean(0);     // false
Boolean("");    // false
Boolean("0");   // true


Explicit vs Implicit Coercion
Explicit coercion → You convert types on purpose using functions like Number(), String(), Boolean().

Implicit coercion → JavaScript does it for you during operations.

Example:

js
Copy
Edit
// Explicit
Number("42"); // 42

// Implicit
"42" - 0;     // 42

Use === to avoid accidental coercion in comparisons.

Be aware of truthy and falsy values in boolean contexts.