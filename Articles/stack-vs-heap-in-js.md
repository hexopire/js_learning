# Memory Management in JavaScript — Stack vs Heap

JavaScript manages memory automatically, but **under the hood** it organizes memory into two main areas:

---

## 1. **Stack**
- Used for **primitive values** and **function call frames**.
- Works on **LIFO** (Last In, First Out) principle.
- Memory is **automatically allocated and freed** when functions return.
- Fast access but **limited size**.

**Examples of Stack Values:**
- Numbers, strings, booleans, `null`, `undefined`, `symbol`, `bigint`
- Function call context (scope)

```js
let num = 42;       // Stored directly in stack
let greeting = "Hi"; // Also in stack


2. Heap
Used for objects, arrays, functions (non-primitive values).

Memory is not freed automatically when the variable goes out of scope — only when GC detects it's unreachable.

Slower access than stack but can store large, complex data.

Examples of Heap Values:

Objects

Arrays

Functions (function objects)

let user = { name: "Alice" }; // user variable (stack) → points to object in heap


3. How Stack & Heap Work Together
When you store an object in a variable:

The variable itself (reference) is in the stack.

The actual object data lives in the heap.

Example:

let person = { name: "Bob" };

// person → (stack) stores a reference like "0x1a2b"
// "0x1a2b" points to the object in heap: { name: "Bob" }