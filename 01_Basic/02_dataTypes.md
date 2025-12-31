# 📘 JavaScript Data Types — Amazing Revision Notes ✨

This document explains **JavaScript Data Types** in a **simple, detailed, and revision-friendly way**.  
Perfect for **beginners**, **interview prep**, and **quick revision**.

---

## 2️⃣ Categories of Data Types

JavaScript data types are divided into **two main categories**:

---

### 🔹 Primitive Data Types (7)

Primitive data types store **single values** and are **immutable**.

✅ **List of Primitive Data Types:**
- 🔢 Number  
- 🔤 String  
- 🔘 Boolean  
- ❓ Undefined  
- 🚫 Null  
- 🔢 BigInt  
- 🆔 Symbol  

---

### 🔹 Non-Primitive (Reference) Data Types

Reference data types store **multiple values** and are **mutable**.

✅ **List of Reference Data Types:**
- 📦 Object  
- 📚 Array  
- 🧠 Function  
- 📅 Date  
- 🗺️ Map  
- 🔁 Set  

---

## 3️⃣ Primitive Data Types

Primitive data types store **single values** and are compared **by value**.

---

### 🔹 1. Number 🔢

Represents numeric values such as **integers** and **decimals**.

```javascript
let marks = 85;
let price = 99.99;
let temperature = -10;


### 🔹 2. String 🔤

Used to represent textual data.

let firstName = "Pavan";
let city = 'Beed';
let message = `Hello ${firstName}`;


✔ Supports single, double & backticks
✔ Strings are immutable

###🔹 3. Boolean 🔘

Represents logical values.

let isLoggedIn = true;
let hasPermission = false;


✔ Mostly used in conditions & loops

###🔹 4. Undefined ❓

A variable that is declared but not assigned a value.

let result;
console.log(result); // undefined


✔ Automatically assigned by JavaScript

###🔹 5. Null 🚫

Represents an intentional absence of value.

let salary = null;


✔ Assigned manually
⚠ typeof null returns "object" (JavaScript bug)

###🔹 6. BigInt 🔢

Used to store very large integers beyond Number limits.

let bigNumber = 123456789012345678901234567890n;


✔ Ends with n
✔ Cannot be mixed directly with Number

###🔹 7. Symbol 🆔

Used to create unique identifiers.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false


✔ Always unique
✔ Used in advanced objects & libraries

## 4️⃣ Non-Primitive (Reference) Data Types

Reference types store multiple values and are compared by reference.

###🔹 1. Object 📦

Stores data in key-value pairs.

let user = {
  name: "Pavan",
  age: 22,
  city: "Beed"
};


✔ Access using dot (.) or bracket ([]) notation

###🔹 2. Array 📚

Used to store multiple values in a single variable.

let numbers = [10, 20, 30, 40];


✔ Zero-based index
✔ Dynamic size

###🔹 3. Function 🧠

Functions are treated as objects in JavaScript.

function greet() {
  console.log("Hello World");
}


✔ Can be assigned to variables
✔ Can be passed as arguments

###🔹 4. Date 📅

Used to work with date and time.

let today = new Date();


✔ Built-in JavaScript object

###🔹 5. Map 🗺️

Stores key-value pairs with unique keys.

let map = new Map();
map.set("name", "Pavan");


✔ Better performance than objects in many cases

###🔹 6. Set 🔁

Stores unique values only.

let set = new Set([1, 2, 3, 3]);


✔ Automatically removes duplicates

###5️⃣ typeof Operator 🔍

Used to check the data type of a variable.

typeof 10;           // "number"
typeof "Hello";      // "string"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof null;         // "object" ❗
typeof {};           // "object"
typeof [];           // "object"
typeof function(){}  // "function"


⚠ typeof null === "object" is a known JavaScript bug

###6️⃣ Primitive vs Reference (Very Important ⭐)
🔹 Primitive (By Value)
let a = 10;
let b = a;
b = 20;


✔ a remains unchanged

###🔹 Reference (By Reference)
let obj1 = { name: "Pavan" };
let obj2 = obj1;
obj2.name = "Rahul";

❌ obj1 is also modified

🧠 Quick Revision Summary

✔ Primitive → Stored by value
✔ Reference → Stored by reference
✔ null is intentional, undefined is automatic
✔ Arrays & objects are not primitive
✔ typeof null is "object" 

🚀 Final Note

Mastering JavaScript data types is the foundation for React, Node.js, and interviews.